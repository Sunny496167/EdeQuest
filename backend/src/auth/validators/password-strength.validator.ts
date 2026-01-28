import * as zxcvbn from 'zxcvbn';
import { BadRequestException } from '@nestjs/common';
import { DEFAULT_PASSWORD_POLICY, PasswordPolicy, SPECIAL_CHARS, COMMON_PASSWORDS } from '../config/password-policy.config';

export interface PasswordStrengthResult {
    isValid: boolean;
    score: number; // 0-4
    feedback: string[];
    warnings: string[];
    suggestions: string[];
}

/**
 * Advanced password strength validator using zxcvbn and custom rules
 */
export class PasswordStrengthValidator {
    private policy: PasswordPolicy;

    constructor(policy: PasswordPolicy = DEFAULT_PASSWORD_POLICY) {
        this.policy = policy;
    }

    /**
     * Validates password against policy and returns detailed feedback
     */
    validate(password: string, userInputs: string[] = []): PasswordStrengthResult {
        const feedback: string[] = [];
        const warnings: string[] = [];
        const suggestions: string[] = [];
        let isValid = true;

        // Check length
        if (password.length < this.policy.minLength) {
            feedback.push(`Password must be at least ${this.policy.minLength} characters long`);
            isValid = false;
        }

        if (password.length > this.policy.maxLength) {
            feedback.push(`Password must not exceed ${this.policy.maxLength} characters`);
            isValid = false;
        }

        // Check uppercase requirement
        if (this.policy.requireUppercase && !/[A-Z]/.test(password)) {
            feedback.push('Password must contain at least one uppercase letter');
            isValid = false;
        }

        // Check lowercase requirement
        if (this.policy.requireLowercase && !/[a-z]/.test(password)) {
            feedback.push('Password must contain at least one lowercase letter');
            isValid = false;
        }

        // Check numbers requirement
        if (this.policy.requireNumbers && !/\d/.test(password)) {
            feedback.push('Password must contain at least one number');
            isValid = false;
        }

        // Check special characters requirement
        if (this.policy.requireSpecialChars) {
            const hasSpecialChar = SPECIAL_CHARS.split('').some(char => password.includes(char));
            if (!hasSpecialChar) {
                feedback.push(`Password must contain at least one special character (${SPECIAL_CHARS})`);
                isValid = false;
            }
        }

        // Check against common passwords
        if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
            feedback.push('This password is too common and easily guessable');
            isValid = false;
        }

        // Check for sequential characters (e.g., "123", "abc")
        if (this.hasSequentialCharacters(password)) {
            warnings.push('Avoid using sequential characters (e.g., 123, abc)');
        }

        // Check for repeated characters (e.g., "aaa", "111")
        if (this.hasRepeatedCharacters(password)) {
            warnings.push('Avoid using repeated characters (e.g., aaa, 111)');
        }

        // Use zxcvbn for entropy-based strength analysis
        const zxcvbnResult = (zxcvbn as any)(password, userInputs);
        const score = zxcvbnResult.score; // 0-4

        // Check minimum strength score
        if (score < this.policy.minStrengthScore) {
            feedback.push(`Password strength is too weak. Minimum required: ${this.getStrengthLabel(this.policy.minStrengthScore)}`);
            isValid = false;
        }

        // Add zxcvbn feedback
        if (zxcvbnResult.feedback) {
            if (zxcvbnResult.feedback.warning) {
                warnings.push(zxcvbnResult.feedback.warning);
            }
            if (zxcvbnResult.feedback.suggestions) {
                suggestions.push(...zxcvbnResult.feedback.suggestions);
            }
        }

        return {
            isValid,
            score,
            feedback,
            warnings,
            suggestions
        };
    }

    /**
     * Validates and throws exception if invalid
     */
    validateOrThrow(password: string, userInputs: string[] = []): void {
        const result = this.validate(password, userInputs);

        if (!result.isValid) {
            const allFeedback = [
                ...result.feedback,
                ...result.warnings,
                ...result.suggestions
            ];
            throw new BadRequestException({
                message: 'Password does not meet security requirements',
                errors: allFeedback,
                score: result.score
            });
        }
    }

    /**
     * Checks for sequential characters
     */
    private hasSequentialCharacters(password: string): boolean {
        const sequences = ['0123456789', 'abcdefghijklmnopqrstuvwxyz'];

        for (const seq of sequences) {
            for (let i = 0; i < seq.length - 2; i++) {
                const substring = seq.substring(i, i + 3);
                if (password.toLowerCase().includes(substring)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Checks for repeated characters
     */
    private hasRepeatedCharacters(password: string): boolean {
        return /(.)\1{2,}/.test(password); // 3 or more repeated characters
    }

    /**
     * Gets human-readable strength label
     */
    private getStrengthLabel(score: number): string {
        const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
        return labels[score] || 'Unknown';
    }

    /**
     * Gets password strength score without validation
     */
    getScore(password: string): number {
        const result = (zxcvbn as any)(password);
        return result.score;
    }
}

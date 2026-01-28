/**
 * Password Policy Configuration
 * Define rules for password requirements across the application
 */

export interface PasswordPolicy {
    minLength: number;
    maxLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecialChars: boolean;
    minStrengthScore: number; // 0-4 from zxcvbn
    preventReuse: number; // Number of previous passwords to check
    expiryDays?: number; // Optional: password expiration in days
}

/**
 * Default password policy for the application
 */
export const DEFAULT_PASSWORD_POLICY: PasswordPolicy = {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
    minStrengthScore: 2, // Fair strength minimum (0=weak, 1=weak, 2=fair, 3=good, 4=strong)
    preventReuse: 5, // Don't allow reuse of last 5 passwords
    expiryDays: undefined, // Optional: 90 days for high-security environments
};

/**
 * Special character set for validation
 */
export const SPECIAL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/**
 * Common weak passwords to reject (extend this list as needed)
 */
export const COMMON_PASSWORDS = [
    'password',
    'password123',
    '12345678',
    'qwerty',
    'abc123',
    'letmein',
    'welcome',
    'monkey',
    '1234567890',
    'password1',
];

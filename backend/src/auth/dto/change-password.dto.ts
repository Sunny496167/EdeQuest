import { IsString, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
    @ApiProperty({
        description: 'Current password for verification',
        example: 'OldPassword123!',
        minLength: 8
    })
    @IsString()
    currentPassword: string;

    @ApiProperty({
        description: 'New password (must meet security requirements: 8+ characters, uppercase, lowercase, number, special character, and not recently used)',
        example: 'NewSecurePassword123!',
        minLength: 8
    })
    @IsString()
    @MinLength(8, { message: 'New password must be at least 8 characters long' })
    newPassword: string;

    @ApiProperty({
        description: 'Confirmation of new password (must match newPassword)',
        example: 'NewSecurePassword123!'
    })
    @IsString()
    confirmPassword: string;
}

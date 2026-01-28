import { IsEmail, IsNotEmpty, IsString, IsOptional, MinLength, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'John Doe',
        description: 'Full name of the user'
    })
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @ApiProperty({
        example: 'user@example.com',
        description: 'Email address (must be unique)'
    })
    @IsEmail({}, { message: 'Please provide a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @ApiPropertyOptional({
        example: 'SecurePass123!',
        description: 'Password with at least 8 characters, including uppercase, lowercase, number, and special character (optional for OAuth users)'
    })
    @IsString({ message: 'Password must be a string' })
    @IsOptional() // Optional because Google Auth users won't have a password initially
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }
    )
    password?: string;
}

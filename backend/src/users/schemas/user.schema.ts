import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// The UserDocument type is an intersection of the User class and the Mongoose Document interface.
// This gives us access to Mongoose methods (like .save()) on our User objects.
export type UserDocument = User & Document;

/**
 * @Schema decorator marks this class as a Mongoose schema definition.
 * It maps this class to a MongoDB collection (by default, the plural, lowercased name of the class, e.g., 'users').
 * timestamps: true automatically adds createdAt and updatedAt fields.
 */
@Schema({ timestamps: true })
export class User {
    // @Prop defines a property in the document.
    // required: true means this field implies it must be present for the document to be valid.
    @Prop({ required: false })
    name: string;

    // unique: true creates a unique index on the email field, preventing duplicate emails.
    @Prop({ required: true, unique: true })
    email: string;

    // Password is optional because OAuth users might not have a local password.
    @Prop({ required: false })
    password?: string;

    // Stores the Google ID if the user logs in via Google.
    @Prop({ required: false })
    googleId?: string;

    // Optional: field to store profile picture URL
    @Prop({ required: false })
    picture?: string;

    @Prop({ type: [String], enum: ['user', 'admin'], default: ['user'] })
    roles: string[];

    @Prop({ default: false })
    isVerified: boolean;

    @Prop()
    verificationToken?: string;

    @Prop()
    resetPasswordToken?: string;

    @Prop()
    resetPasswordExpires?: Date;

    // Security: Failed login attempt tracking
    @Prop({ default: 0 })
    failedLoginAttempts: number;

    @Prop()
    accountLockedUntil?: Date;

    @Prop()
    lastLoginAt?: Date;

    @Prop()
    lastLoginIp?: string;

    @Prop()
    lastLoginUserAgent?: string;

    // Password security tracking
    @Prop({ type: Date })
    lastPasswordChange?: Date;

    @Prop({ type: Date })
    passwordExpiresAt?: Date;

    @Prop({ default: false })
    mustChangePassword: boolean;
}

// SchemaFactory.createForClass generates the Mongoose schema from the decorated class.
export const UserSchema = SchemaFactory.createForClass(User);

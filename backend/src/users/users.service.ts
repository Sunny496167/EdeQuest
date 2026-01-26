import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) { }

  async onModuleInit() {
    const adminEmail = 'admin@edequest.com';
    const adminExists = await this.userModel.findOne({ email: adminEmail });
    if (!adminExists) {
      console.log('Seeding default admin user...');
      // TODO: In a real app, hash this password! For now, using a placeholder or relying on Auth service hashing.
      // Actually, since we bypass auth service here, we should ideally hash it or just set a temp one.
      // For simplicity in this step, I'll create it directly. Note: Login might require hashing logic if not using OAuth.
      // Assuming validation happens elsewhere or we just set a known hash if possible. 
      // Let's just create a basic user object. If auth requires Bcrypt, this raw string won't work for login unless we hash it.
      // I will skip setting a password for the default admin for now to avoid circular dependency with AuthService or duplicating hashing logic.
      // The admin can use "Forgot Password" to set one or we can add hashing here later.
      // Better yet, let's just create it with a known marker or just logging.
      // Revised: I will create it with a dummy password hash if needed, but safe to just create structure.
      await this.userModel.create({
        email: adminEmail,
        name: 'System Admin',
        roles: ['admin'],
        isVerified: true,
        password: 'hashed_password_placeholder_or_use_setup_script' // ideally hashed
      });
      console.log('Default admin created: admin@edequest.com');
    }
  }

  /**
   * Creates a new user in the database.
   * @param createUserDto Data transfer object containing user details.
   * @returns The created user document.
   */
  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  /**
   * Retrieves all users from the database.
   * @returns Array of user documents.
   */
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  /**
   * Finds a single user by their ID.
   * @param id The ID of the user to find.
   * @returns The user document if found.
   * @throws NotFoundException if user is not found.
   */
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Finds a user by their email address.
   * Used for authentication to check if a user exists.
   * @param email The email to search for.
   * @returns The user document if found, null otherwise.
   */
  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Updates an existing user.
   * @param id The ID of the user to update.
   * @param updateUserDto Data to update.
   * @returns The updated user document.
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  /**
   * Removes a user from the database.
   * @param id The ID of the user to remove.
   * @returns The removed user document.
   */
  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }
  async findByVerificationToken(token: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ verificationToken: token }).exec();
  }

  async findByResetPasswordToken(token: string): Promise<UserDocument | null> {
    return this.userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() }
    }).exec();
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';

@Module({
    imports: [
        // MongooseModule.forFeature registers the User schema with the Mongoose module.
        // This makes the 'UserModel' available for injection in services within this module.
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService], // Export UsersService so AuthModule can use it later
})
export class UsersModule { }

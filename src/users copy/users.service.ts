import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserClass } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserClass.name)
    private userModel: Model<UserClass>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, course: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, course, {
      new: true,
    });
  }
}

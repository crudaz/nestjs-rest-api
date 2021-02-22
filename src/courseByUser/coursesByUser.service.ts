import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CourseByUser } from './interfaces/courseByUser.interface';
import { CourseByUserClass } from './schemas/courseByUser.schema';

@Injectable()
export class CoursesByUserService {
  constructor(
    @InjectModel(CourseByUserClass.name)
    private courseModel: Model<CourseByUserClass>,
  ) {}

  async findAll(): Promise<CourseByUser[]> {
    return await this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<CourseByUser> {
    return await this.courseModel.findOne({ _id: id });
  }

  async create(course: CourseByUser): Promise<CourseByUser> {
    const newCourse = new this.courseModel(course);
    return await newCourse.save();
  }

  async delete(id: string): Promise<CourseByUser> {
    return await this.courseModel.findByIdAndRemove(id);
  }

  async update(id: string, course: CourseByUser): Promise<CourseByUser> {
    return await this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
    });
  }
}

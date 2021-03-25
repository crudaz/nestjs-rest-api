import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CourseListByUser } from './interfaces/courseListByUser.interface';
import { CourseListByUserClass } from './schemas/courseListByUser.schema';

@Injectable()
export class CourseListByUserService {
  constructor(
    @InjectModel(CourseListByUserClass.name)
    private courseModel: Model<CourseListByUserClass>,
  ) {}

  async findAll(): Promise<CourseListByUser[]> {
    return await this.courseModel.find().exec();
  }

  async find(userId: string): Promise<CourseListByUser> {
    return await this.courseModel.findById(userId).exec();
  }

  async findOne(id: string): Promise<CourseListByUser> {
    return await this.courseModel.findOne({ _id: id });
  }

  async create(course: CourseListByUser): Promise<CourseListByUser> {
    const newCourse = new this.courseModel(course);
    return await newCourse.save();
  }

  async delete(id: string): Promise<CourseListByUser> {
    return await this.courseModel.findByIdAndRemove(id);
  }

  async update(id: string, course: CourseListByUser): Promise<CourseListByUser> {
    return await this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
    });
  }
}

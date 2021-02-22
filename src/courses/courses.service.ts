import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './interfaces/course.interface';
import { CourseClass } from './schemas/course.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(CourseClass.name)
    private courseModel: Model<CourseClass>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    return await this.courseModel.findOne({ _id: id });
  }

  async create(course: Course): Promise<Course> {
    const newCourse = new this.courseModel(course);
    return await newCourse.save();
  }

  async delete(id: string): Promise<Course> {
    return await this.courseModel.findByIdAndRemove(id);
  }

  async update(id: string, course: Course): Promise<Course> {
    return await this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
    });
  }
}

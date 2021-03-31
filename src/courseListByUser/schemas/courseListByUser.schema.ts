import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Course {
  @Prop()
  isExpanded: boolean;

  @Prop()
  category: string;

  @Prop()
  course_name: string;

  @Prop()
  course_subtitle: string;

  @Prop()
  imageUrl: string;

  @Prop()
  tags: string[];

  @Prop()
  chapters: Chapter[];

  @Prop()
  progress: number;
}

class Chapter {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  time: string;

  @Prop()
  percent: string;

  @Prop()
  endDate: string;
}

@Schema()
export class CourseListByUserClass extends Document {

  @Prop()
  userId: string;

  @Prop()
  course: Course;  
}

export const CourseListByUserSchema = SchemaFactory.createForClass(CourseListByUserClass);

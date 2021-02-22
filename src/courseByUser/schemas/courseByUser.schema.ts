import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class User {
  @Prop()
  _id: string;

  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  imageUrl: string;

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
}

@Schema()
export class CourseByUserClass extends Document {
  @Prop()
  _id: string;

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
  user: User[];
}

export const CourseByUserSchema = SchemaFactory.createForClass(CourseByUserClass);

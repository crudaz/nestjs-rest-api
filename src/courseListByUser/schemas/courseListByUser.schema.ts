import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CourseListByUserClass extends Document {

  @Prop()
  userId: string;

  @Prop()
  courseId: string;

  @Prop()
  progress: number;
}

export const CourseListByUserSchema = SchemaFactory.createForClass(CourseListByUserClass);

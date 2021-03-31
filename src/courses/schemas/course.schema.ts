import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CourseClass extends Document {
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
  chapters: ChaptersClass[];

  @Prop()
  tags: string[];
}

export class ChaptersClass {
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

export const CourseSchema = SchemaFactory.createForClass(CourseClass);

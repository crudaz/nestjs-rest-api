import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CategoryClass extends Document {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  icon: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryClass);

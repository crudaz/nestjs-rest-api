import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CategoryTypeClass extends Document {
  @Prop()
  name: string;
  
  @Prop()
  icon: string;
}

export const CategoryTypeSchema = SchemaFactory.createForClass(CategoryTypeClass);

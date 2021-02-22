import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserClass extends Document {
  @Prop()
  fullname: string;

  @Prop()
  email: string;
  
  @Prop()
  imageUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(UserClass);

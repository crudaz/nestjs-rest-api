import * as passportLocalMongoose from 'passport-local-mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserClass extends Document {
  @Prop()
  firstName: String;
  
  @Prop()
  lastName: String;

  @Prop()
  rol: String;

  @Prop()
  imageProfile: String;

  @Prop()
  username: String;

  @Prop()
  password: String;
}

export const UserSchema = SchemaFactory.createForClass(UserClass).plugin(passportLocalMongoose);


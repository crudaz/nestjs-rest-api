import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { CoursesByUserModule } from './courseByUser/coursesByUser.module';
import { CategoriesTypeModule } from './categoriesTypes/categories-type.module';

import config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    AuthModule,
    CategoriesModule, 
    CoursesModule,
    UsersModule,
    CoursesByUserModule,
    CategoriesTypeModule
  ],
})
export class AppModule {}

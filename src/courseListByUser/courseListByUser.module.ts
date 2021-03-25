import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseListByUserController } from './courseListByUser.controller';
import { CourseListByUserService } from './courseListByUser.service';
import { CourseListByUserClass, CourseListByUserSchema } from './schemas/courseListByUser.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourseListByUserClass.name, schema: CourseListByUserSchema },
    ]),
  ],
  controllers: [CourseListByUserController],
  providers: [CourseListByUserService],
})
export class CourseListByUserModule {}

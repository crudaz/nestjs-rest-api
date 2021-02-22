import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesByUserController } from './courses-by-user.controller';
import { CoursesByUserService } from './coursesByUser.service';
import { CourseByUserClass, CourseByUserSchema } from './schemas/courseByUser.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourseByUserClass.name, schema: CourseByUserSchema },
    ]),
  ],
  controllers: [CoursesByUserController],
  providers: [CoursesByUserService],
})
export class CoursesByUserModule {}

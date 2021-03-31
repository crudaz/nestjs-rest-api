import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { createCourseListByUserDto } from './dto/create-courseListByUser.dto';;
import { CourseListByUser } from './interfaces/courseListByUser.interface';
import { CourseListByUserService } from './courseListByUser.service';

@Controller('courselistbyuser')
export class CourseListByUserController {
  constructor(private readonly coursesService: CourseListByUserService) {}

  @Get()
  findAll(): Promise<CourseListByUser[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CourseListByUser> {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: createCourseListByUserDto): Promise<CourseListByUser> {
    return this.coursesService.create(createCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<CourseListByUser> {
    return this.coursesService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: createCourseListByUserDto,
  ): Promise<CourseListByUser> {
    return this.coursesService.update(id, updateCourseDto);
  }
}

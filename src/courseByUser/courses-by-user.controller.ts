import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateCourseByUserDto } from './dto/create-courseByUser.dto';
import { CourseByUser } from './interfaces/courseByUser.interface';
import { CoursesByUserService } from './coursesByUser.service';

@Controller('coursebyuser')
export class CoursesByUserController {
  constructor(private readonly coursesService: CoursesByUserService) {}

  @Get()
  findAll(): Promise<CourseByUser[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CourseByUser> {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseByUserDto): Promise<CourseByUser> {
    return this.coursesService.create(createCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<CourseByUser> {
    return this.coursesService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: CreateCourseByUserDto,
  ): Promise<CourseByUser> {
    return this.coursesService.update(id, updateCourseDto);
  }
}

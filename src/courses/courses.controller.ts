import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  Res,
  Request,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './interfaces/course.interface';
import { CoursesService } from './courses.service';

// Uploads
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from "uuid";
import path = require('path');
import { join } from 'path';

export const storage = {
  storage: diskStorage({
    destination: './uploads/courseimages',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })
}

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesService.create(createCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Course> {
    return this.coursesService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: CreateCourseDto,
  ): Promise<Course> {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@UploadedFile() file, @Request() req): Observable<Object> {
    const user: any = req.user;
    // return this.usersService.update(user.id, {imageProfile: file.filename}).pipe(
    //   tap((user: any) => console.log(user)),
    //   map((user: any) => ({imageProfile: user.profileImage}))
    // )
    return of({
      imagePath: file.filename
    })
  }

  @Get('course-image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
      return of(res.sendFile(join(process.cwd(), 'uploads/courseimages/' + imagename)));
  }
}

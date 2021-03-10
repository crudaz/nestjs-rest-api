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
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';
import { CategoriesService } from './categories.service';

// Uploads
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from "uuid";
import path = require('path');
import { join } from 'path';

export const storage = {
  storage: diskStorage({
    destination: './uploads/categoryimages',
    filename: (req, file, cb) => {
      const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })
}

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.update(id, updateCategoryDto);
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

  @Get('category-image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
      return of(res.sendFile(join(process.cwd(), 'uploads/categoryimages/' + imagename)));
  }
}

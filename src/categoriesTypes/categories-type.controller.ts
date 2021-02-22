import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateCategoryTypeDto } from './dto/create-category-type.dto';
import { CategoryType } from './interfaces/category-type.interface';
import { CategoriesTypeService } from './categories-type.service';

@Controller('categories-type')
export class CategoriesTypeController {
  constructor(private readonly categoriesService: CategoriesTypeService) {}

  @Get()
  findAll(): Promise<CategoryType[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CategoryType> {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryTypeDto): Promise<CategoryType> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<CategoryType> {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: CreateCategoryTypeDto,
  ): Promise<CategoryType> {
    return this.categoriesService.update(id, updateCategoryDto);
  }
}

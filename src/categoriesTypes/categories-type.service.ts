import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryType } from './interfaces/category-type.interface';
import { CategoryTypeClass } from './schemas/category-type.schema';

@Injectable()
export class CategoriesTypeService {
  constructor(
    @InjectModel(CategoryTypeClass.name)
    private categoryModel: Model<CategoryTypeClass>,
  ) {}

  async findAll(): Promise<CategoryType[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<CategoryType> {
    return await this.categoryModel.findOne({ _id: id });
  }

  async create(category: CategoryType): Promise<CategoryType> {
    const newCategory = new this.categoryModel(category);
    return await newCategory.save();
  }

  async delete(id: string): Promise<CategoryType> {
    return await this.categoryModel.findByIdAndRemove(id);
  }

  async update(id: string, category: CategoryType): Promise<CategoryType> {
    return await this.categoryModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }
}

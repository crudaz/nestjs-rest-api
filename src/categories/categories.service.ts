import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';
import { CategoryClass } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategoryClass.name)
    private categoryModel: Model<CategoryClass>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryModel.findOne({ _id: id });
  }

  async create(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    return await newCategory.save();
  }

  async delete(id: string): Promise<Category> {
    return await this.categoryModel.findByIdAndRemove(id);
  }

  async update(id: string, category: Category): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }
}

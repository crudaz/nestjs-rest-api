import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesTypeController } from './categories-type.controller';
import { CategoriesTypeService } from './categories-type.service';
import { CategoryTypeClass, CategoryTypeSchema } from './schemas/category-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryTypeClass.name, schema: CategoryTypeSchema },
    ]),
  ],
  controllers: [CategoriesTypeController],
  providers: [CategoriesTypeService],
})
export class CategoriesTypeModule {}

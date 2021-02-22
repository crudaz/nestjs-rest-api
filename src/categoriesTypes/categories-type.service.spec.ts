import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesTypeService } from './categories-type.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CategoryTypeClass, CategoryTypeSchema } from './schemas/category-type.schema';
import DbModule, {
  closeMongoConnection,
} from '../../test/utils/db-test-module';

describe('ProductService', () => {
  let service: CategoriesTypeService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DbModule({
          connectionName: (new Date().getTime() * Math.random()).toString(16),
        }),
        MongooseModule.forFeature([
          { name: CategoryTypeClass.name, schema: CategoryTypeSchema },
        ]),
      ],
      providers: [CategoriesTypeService],
    }).compile();

    service = module.get<CategoriesTypeService>(CategoriesTypeService);
    connection = await module.get(getConnectionToken());
  });

  afterEach(async () => {
    await connection.close();
    await closeMongoConnection();
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});

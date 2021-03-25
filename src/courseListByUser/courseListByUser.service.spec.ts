import { Test, TestingModule } from '@nestjs/testing';
import { CourseListByUserService } from './courseListByUser.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CourseListByUserClass, CourseListByUserSchema } from './schemas/courseListByUser.schema';
import DbModule, {
  closeMongoConnection,
} from '../../test/utils/db-test-module';

describe('CourseService', () => {
  let service: CourseListByUserService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DbModule({
          connectionName: (new Date().getTime() * Math.random()).toString(16),
        }),
        MongooseModule.forFeature([
          { name: CourseListByUserClass.name, schema: CourseListByUserSchema },
        ]),
      ],
      providers: [CourseListByUserService],
    }).compile();

    service = module.get<CourseListByUserService>(CourseListByUserService);
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

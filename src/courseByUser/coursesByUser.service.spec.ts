import { Test, TestingModule } from '@nestjs/testing';
import { CoursesByUserService } from './coursesByUser.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CourseByUserClass, CourseByUserSchema } from './schemas/courseByUser.schema';
import DbModule, {
  closeMongoConnection,
} from '../../test/utils/db-test-module';

describe('CourseService', () => {
  let service: CoursesByUserService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DbModule({
          connectionName: (new Date().getTime() * Math.random()).toString(16),
        }),
        MongooseModule.forFeature([
          { name: CourseByUserClass.name, schema: CourseByUserSchema },
        ]),
      ],
      providers: [CoursesByUserService],
    }).compile();

    service = module.get<CoursesByUserService>(CoursesByUserService);
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

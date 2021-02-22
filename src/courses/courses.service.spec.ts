import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CourseClass, CourseSchema } from './schemas/course.schema';
import DbModule, {
  closeMongoConnection,
} from '../../test/utils/db-test-module';

describe('CourseService', () => {
  let service: CoursesService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DbModule({
          connectionName: (new Date().getTime() * Math.random()).toString(16),
        }),
        MongooseModule.forFeature([
          { name: CourseClass.name, schema: CourseSchema },
        ]),
      ],
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
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

export class CreateCourseByUserDto {
  readonly isExpanded: boolean;
  readonly category: string;
  readonly course_name: string;
  readonly course_subtitle: string;
  readonly imageUrl: string;
  readonly tags: string[];
  readonly chapters: Chapter[];
  readonly user: User[];
}

interface User {
  readonly _id: string;
  readonly fullname: string;
  readonly email: string;
  readonly imageUrl: string;
  readonly progress: number;
}

interface Chapter {
  readonly id: number;
  readonly name: string;
  readonly time: string;
  readonly percent: string;
}
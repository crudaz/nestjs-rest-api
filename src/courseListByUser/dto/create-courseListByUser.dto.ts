interface Chapter {
  readonly id: number;
  readonly name: string;
  readonly time: string;
  readonly percent: string;
  readonly endDate: string;
}

interface Course {
  readonly isExpanded: boolean;
  readonly category: string;
  readonly course_name: string;
  readonly course_subtitle: string;
  readonly imageUrl: string;
  readonly tags: string[];
  readonly chapters: Chapter[];
  readonly progress: number;
}

export class createCourseListByUserDto {
  readonly userId: string;
  readonly course: Course;
}

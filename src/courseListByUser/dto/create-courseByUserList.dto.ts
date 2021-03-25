export class CreateCourseByUserListDto {
  readonly userId: string;
  readonly courseId: string;
  readonly progress: number;
}

// class Course {
//   readonly _id: string;
//   readonly progress: number;
// }


// export class CreateCourseByUserListDto {
//   readonly _id: string;
//   readonly fullname: string;
//   readonly email: string;
//   readonly imageUrl: string;
//   readonly courses: Course[];
// }

// class Course {
//   readonly isExpanded: boolean;
//   readonly category: string;
//   readonly course_name: string;
//   readonly course_subtitle: string;
//   readonly imageUrl: string;
//   readonly tags: string[];
//   readonly chapters: Chapter[];
//   readonly progress: number;
// }

// interface Chapter {
//   readonly id: number;
//   readonly name: string;
//   readonly time: string;
//   readonly percent: string;
// }

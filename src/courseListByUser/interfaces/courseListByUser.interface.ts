export interface CourseListByUser {
  userId: string;
  courseId: string;
  progress: number;
}

// export interface CourseListByUser {
//   _id: string;
//   fullname: string;
//   email: string;
//   imageUrl: string;
//   courses: Course[];
// }

// interface Course {
//   isExpanded: boolean;
//   category: string;
//   course_name: string;
//   course_subtitle: string;
//   imageUrl: string;
//   tags: string[];
//   chapters: Chapter[];
//   progress: number;
// }

// interface Chapter {
//   id: number;
//   name: string;
//   time: string;
//   percent: string;
// }

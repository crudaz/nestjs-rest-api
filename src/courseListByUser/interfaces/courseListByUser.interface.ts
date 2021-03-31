interface Chapter {
  id: number;
  name: string;
  time: string;
  percent: string;
  endDate: string;
}

interface Course {
  isExpanded: boolean;
  category: string;
  course_name: string;
  course_subtitle: string;
  imageUrl: string;
  tags: string[];
  chapters: Chapter[];
  progress: number;
}

export interface CourseListByUser {
  userId: string;
  course: Course;
}

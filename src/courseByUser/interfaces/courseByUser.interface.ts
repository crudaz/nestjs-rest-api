export interface CourseByUser {
  isExpanded: boolean;
  category: string;
  course_name: string;
  course_subtitle: string;
  imageUrl: string;
  tags: string[];
  chapters: Chapter[];
  user: User[];
}

interface User {
  _id: string;
  fullname: string;
  email: string;
  imageUrl: string;
  progress: number;
}

interface Chapter {
  id: number;
  name: string;
  time: string;
  percent: string;
}
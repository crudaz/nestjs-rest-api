export interface Course {
  isExpanded: boolean;
  category: string;
  course_name: string;
  course_subtitle: string;
  imageUrl: string;
  chapters: Chapters[];
  tags: string[];
}

interface Chapters {
  id: number;
  name: string;
  time: string;
  percent: string;
}

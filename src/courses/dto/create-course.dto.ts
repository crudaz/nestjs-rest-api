export class CreateCourseDto {
  readonly isExpanded: boolean;
  readonly category: string;
  readonly course_name: string;
  readonly course_subtitle: string;
  readonly imageUrl: string;
  readonly chapters: Chapters[];
  readonly tags: string[];
}

interface Chapters {
  readonly id: number;
  readonly name: string;
  readonly time: string;
  readonly percent: string;
  readonly endDate: string;
}

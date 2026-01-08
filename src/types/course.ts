export interface Instructor {
  _id: string
  name: string
  photo: string
  status: string
}

export interface CurriculumItem {
  _id: string
  title: string
  contents: string[]
}

export interface CourseOverview {
  description: string
  requirements: string[]
}

export interface Course {
  _id: string
  title: string
  subject: string
  category: string
  classLevel: string
  level: string
  language: string

  thumbnail: string
  price: number
  duration: number
  studentsEnrolled: number
  averageRating: number

  instructors: Instructor[]
  instructor: Instructor // primary instructor (featured)

  curriculum: CurriculumItem[]

  overview: CourseOverview
  whatYouWillLearn: string[]
  thisCourseIncludes: string[]

  tags: string[]
  reviews: any[]

  lastUpdate: string
  createdAt: string
  updatedAt: string
}

export interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  order: number;
  section: string;
  isPreview: boolean;
}

export interface Section {
  _id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}


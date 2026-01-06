import { z } from "zod";

export const InstructorSchema = z.object({
  name: z.string().min(3),
  photo: z.string().url().optional(),
  status: z.string().optional(),
});

export const CurriculumSectionSchema = z.object({
  title: z.string().min(3),
  contents: z.array(z.string().min(1)),
});

export const OverviewSchema = z.object({
  description: z.string().min(10),
  whatYouWillLearn: z.array(z.string()),
  requirements: z.array(z.string()),
  thisCourseIncludes: z.array(z.string()),
});

export const CourseZodSchema = z.object({
  title: z.string().min(3),
  subject: z.string().min(2),

  category: z.enum([
    "Academic",
    "Technology",
    "Business",
    "Arts",
    "Language",
  ]),

  language: z.enum(["English", "Bangla"]),

  classLevel: z.enum(["Class 11-12", "Versity"]),

  level: z.enum(["Beginner", "Intermediate", "Advanced"]),

  duration: z.number().positive(),

  price: z.number().nonnegative().optional(),

  thumbnail: z.string().url().optional(),

  tags: z.array(z.string()).optional(),

  instructor: InstructorSchema,

  instructors: z.array(InstructorSchema),

  overview: OverviewSchema,

  curriculum: z.array(CurriculumSectionSchema),

  // system-managed fields (optional on create)
  studentsEnrolled: z.number().optional(),
  averageRating: z.number().min(0).max(5).optional(),
});

export type CourseFormType = z.infer<typeof CourseZodSchema>;

import { z } from "zod";

export const LessonZodSchema = z.object({
  section: z.string().min(1, "Section is required"),

  title: z.string().min(3, "Lesson title must be at least 3 characters"),

  videoUrl: z
    .string()
    .url("Invalid video URL"),

  order: z.number().int().nonnegative(),

  isPreview: z.boolean(),
});

export type LessonFormType = z.infer<typeof LessonZodSchema>;

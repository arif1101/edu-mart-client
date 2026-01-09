/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CourseFormType, CourseZodSchema } from "@/schema/course.schema";
import { createCourse } from "@/lib/course";

export default function AddCoursePage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormType>({
    resolver: zodResolver(CourseZodSchema),
    defaultValues: {
      category: "Technology",
      language: "English",
      classLevel: "Versity",
      level: "Beginner",
      duration: 1,
      instructor: { name: "" },
      instructors: [{ name: "" }],
      overview: {
        description: "",
        whatYouWillLearn: [],
        requirements: [],
        thisCourseIncludes: [],
      },
      curriculum: [{ title: "", contents: [""] }],
    },
  });

  const instructorsArray = useFieldArray({
    control,
    name: "instructors",
  });

  const curriculumArray = useFieldArray({
    control,
    name: "curriculum",
  });

const onSubmit = async (data: CourseFormType) => {
  try {
    await createCourse(data);
    toast.success("Course created successfully");
  } catch (err: any) {
    toast.error(err.message || "Something went wrong");
  }
};


  const toStringArray = (v: unknown): string[] => {
    if (Array.isArray(v)) return v;
    if (typeof v === "string")
      return v
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    return [];
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-6 space-y-6"
    >
      <h1 className="text-2xl font-bold">Add Course</h1>

      {/* BASIC INFO */}
      <input
        {...register("title")}
        placeholder="Title"
        className="border p-2 w-full"
      />
      <p className="text-red-500">{errors.title?.message}</p>

      <input
        {...register("subject")}
        placeholder="Subject"
        className="border p-2 w-full"
      />

      {/* ENUMS */}
      <select {...register("category")} className="border p-2 w-full">
        {["Academic", "Technology", "Business", "Arts", "Language"].map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>

      <select {...register("language")} className="border p-2 w-full">
        <option value="English">English</option>
        <option value="Bangla">Bangla</option>
      </select>

      <select {...register("classLevel")} className="border p-2 w-full">
        <option value="Class 11-12">Class 11-12</option>
        <option value="Versity">Versity</option>
      </select>

      <select {...register("level")} className="border p-2 w-full">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      {/* NUMBERS */}
      <input
        type="number"
        {...register("duration", { valueAsNumber: true })}
        placeholder="Duration (hours)"
        className="border p-2 w-full"
      />
      <input
        type="number"
        {...register("price", { valueAsNumber: true })}
        placeholder="Price (optional)"
        className="border p-2 w-full"
      />

      {/* MEDIA */}
      <input
        {...register("thumbnail")}
        placeholder="Thumbnail URL"
        className="border p-2 w-full"
      />

      <input
        placeholder="Tags (comma separated)"
        className="border p-2 w-full"
        {...register("tags", {
          setValueAs: toStringArray,
        })}
      />

      {/* PRIMARY INSTRUCTOR */}
      <h2 className="font-semibold">Primary Instructor</h2>
      <input
        {...register("instructor.name")}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
        {...register("instructor.photo")}
        placeholder="Photo URL"
        className="border p-2 w-full"
      />
      <input
        {...register("instructor.status")}
        placeholder="Status"
        className="border p-2 w-full"
      />

      {/* MULTIPLE INSTRUCTORS */}
      <h2 className="font-semibold">Other Instructors</h2>

      {instructorsArray.fields.map((field, index) => (
        <div key={field.id} className="border p-4 space-y-2">
          <input
            {...register(`instructors.${index}.name`)}
            placeholder="Name"
            className="border p-2 w-full"
          />
          <input
            {...register(`instructors.${index}.photo`)}
            placeholder="Photo URL"
            className="border p-2 w-full"
          />
          <input
            {...register(`instructors.${index}.status`)}
            placeholder="Status"
            className="border p-2 w-full"
          />
          <button type="button" onClick={() => instructorsArray.remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => instructorsArray.append({ name: "" })}
      >
        + Add Instructor
      </button>

      {/* OVERVIEW */}
      <h2 className="font-semibold">Overview</h2>

      <textarea
        {...register("overview.description")}
        placeholder="Description"
        className="border p-2 w-full"
      />

      <textarea
        placeholder="What you will learn (comma separated)"
        className="border p-2 w-full"
        {...register("overview.whatYouWillLearn", {
          setValueAs: toStringArray,
        })}
      />

      <textarea
        placeholder="Requirements (comma separated)"
        className="border p-2 w-full"
        {...register("overview.requirements", {
          setValueAs: toStringArray,
        })}
      />

      <textarea
        placeholder="This course includes (comma separated)"
        className="border p-2 w-full"
        {...register("overview.thisCourseIncludes", {
          setValueAs: toStringArray,
        })}
      />

      {/* CURRICULUM */}
      <h2 className="font-semibold">Curriculum</h2>

      {curriculumArray.fields.map((field, index) => (
        <div key={field.id} className="border p-4 space-y-2">
          <input
            {...register(`curriculum.${index}.title`)}
            placeholder="Section title"
            className="border p-2 w-full"
          />

          <textarea
            placeholder="Contents (comma separated)"
            className="border p-2 w-full"
            {...register(`curriculum.${index}.contents`, {
              setValueAs: toStringArray,
            })}
          />

          <button type="button" onClick={() => curriculumArray.remove(index)}>
            Remove Section
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => curriculumArray.append({ title: "", contents: [""] })}
      >
        + Add Curriculum Section
      </button>

      <button type="submit" className="bg-black text-white px-4 py-2 w-full">
        Create Course
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function AddCoursePage() {
  const [form, setForm] = useState({
    title: "",
    subject: "",
    category: "Technology",
    language: "English",
    classLevel: "Versity",
    level: "Beginner",
    duration: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createCourse = async () => {
    const payload = {
      title: form.title,
      subject: form.subject,
      category: form.category,
      language: form.language,
      classLevel: form.classLevel,
      level: form.level,
      duration: Number(form.duration),
      price: form.price ? Number(form.price) : undefined,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Course creation failed");
        return;
      }

      toast.success("Course created successfully");

      // Optional: reset form
      setForm({
        title: "",
        subject: "",
        category: "Technology",
        language: "English",
        classLevel: "Versity",
        level: "Beginner",
        duration: "",
        price: "",
      });
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Add Course</h1>

      <input
        name="title"
        placeholder="Course Title"
        className="border p-2 w-full"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="subject"
        placeholder="Subject (e.g. JavaScript)"
        className="border p-2 w-full"
        value={form.subject}
        onChange={handleChange}
      />

      <select
        name="category"
        className="border p-2 w-full"
        value={form.category}
        onChange={handleChange}
      >
        <option value="Academic">Academic</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Arts">Arts</option>
        <option value="Language">Language</option>
      </select>

      <select
        name="language"
        className="border p-2 w-full"
        value={form.language}
        onChange={handleChange}
      >
        <option value="English">English</option>
        <option value="Bangla">Bangla</option>
      </select>

      <select
        name="classLevel"
        className="border p-2 w-full"
        value={form.classLevel}
        onChange={handleChange}
      >
        <option value="Class 11-12">Class 11-12</option>
        <option value="Versity">Versity</option>
      </select>

      <select
        name="level"
        className="border p-2 w-full"
        value={form.level}
        onChange={handleChange}
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <input
        name="duration"
        type="number"
        placeholder="Duration (hours)"
        className="border p-2 w-full"
        value={form.duration}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        placeholder="Price (optional)"
        className="border p-2 w-full"
        value={form.price}
        onChange={handleChange}
      />

      <button
        onClick={createCourse}
        className="bg-black text-white px-4 py-2 w-full"
      >
        Create Course
      </button>
    </div>
  );
}

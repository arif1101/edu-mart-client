/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function SectionsPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([]);

  const loadSections = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sections/course/${courseId}`
    );
    const data = await res.json();
    setSections(data.data || []);
  };

  useEffect(() => {
    loadSections();
  }, []);

  const addSection = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sections/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          course: courseId,
          title,
          order: sections.length + 1,
        }),
      }
    );

    if (!res.ok) return toast.error("Failed to add section");

    toast.success("Section added");
    setTitle("");
    loadSections();
  };

  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Sections</h2>

      <input
        placeholder="Section title"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="bg-black text-white p-2 w-full" onClick={addSection}>
        Add Section
      </button>

      {sections.map((section: any) => (
        <div key={section._id} className="border p-3">
          <p>{section.title}</p>

          <Link
            href={`/admin/sections/${section._id}/lessons`}
            className="text-blue-600"
          >
            Manage Lessons →
          </Link>
        </div>
      ))}
    </div>
  );
}

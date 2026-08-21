/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export default function SectionsPage() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState<any[]>([
    { _id: "sec-1", title: "Introduction & Setup" },
    { _id: "sec-2", title: "Core Concepts" },
  ]);

  const addSection = () => {
    if (!title.trim()) return;
    const newSec = { _id: `sec-${Date.now()}`, title };
    setSections([...sections, newSec]);
    toast.success("Section added (UI Mode)");
    setTitle("");
  };

  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Sections</h2>

      <input
        placeholder="Section title"
        className="border p-2 w-full rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="bg-black text-white p-2 w-full rounded hover:bg-gray-800 cursor-pointer" onClick={addSection}>
        Add Section
      </button>

      {sections.map((section: any) => (
        <div key={section._id} className="border p-3 rounded flex justify-between items-center bg-white">
          <p className="font-medium">{section.title}</p>

          <Link
            href={`/admin/sections/${section._id}/lessons`}
            className="text-blue-600 hover:underline text-sm"
          >
            Manage Lessons →
          </Link>
        </div>
      ))}
    </div>
  );
}

"use client";

const categories = ["Academic", "Technology", "Business"];

export default function CourseFilter() {

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-semibold mb-4">Category</h2>

      {categories.map(category => (
        <label key={category} className="flex gap-2 items-center">
          <input
            type="checkbox"
          />
          {category}
        </label>
      ))}
    </div>
  );
}

"use client";

const categories = ["Academic", "Technology", "Business"];
const languages = ["Bangla", "English"];

interface CourseFilterProps {
  selectedCategories: string[];
  selectedLanguages: string[];
  onCategoryChange: (category: string) => void;
  onLanguageChange: (language: string) => void;
}

export default function CourseFilter({
  selectedCategories,
  selectedLanguages,
  onCategoryChange,
  onLanguageChange,
}: CourseFilterProps) {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-semibold mb-4">Category</h2>

      {categories.map((category) => (
        <label key={category} className="flex gap-2 items-center mb-1">
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
          />
          {category}
        </label>
      ))}

      <h2 className="font-semibold mt-6 mb-4">Language</h2>

      {languages.map((language) => (
        <label key={language} className="flex gap-2 items-center mb-1">
          <input
            type="checkbox"
            checked={selectedLanguages.includes(language)}
            onChange={() => onLanguageChange(language)}
          />
          {language}
        </label>
      ))}
    </div>
  );
}

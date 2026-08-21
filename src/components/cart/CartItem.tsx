"use client";

import { Trash2, BookOpen, GraduationCap, FileText } from "lucide-react";

export default function CartItem({ item, onRemove }: any) {
  const title = item.title || item.course?.title || item.book?.title || "Educational Item";
  const author = item.instructor?.name || item.course?.instructor?.name || item.book?.author || "EduMart Educator";
  const image = item.thumbnail || item.course?.thumbnail || item.book?.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300";
  const price = item.price || item.course?.price || item.book?.hardPrice || 450;
  const itemType = item.type || (item.book ? "Book" : "Course");
  const itemId = item._id || item.course?._id || item.book?._id || item.id;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex gap-4 items-center shadow-xs hover:border-indigo-500/40 transition">
      {/* Real Item Thumbnail */}
      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden shrink-0 flex items-center justify-center p-1 border border-gray-100 dark:border-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xs"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-[10px] font-bold border border-indigo-200 dark:border-indigo-800">
            {itemType === "Course" ? <GraduationCap className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
            <span>{itemType}</span>
          </span>
        </div>

        <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white line-clamp-1">{title}</h3>
        <p className="text-[11px] text-gray-500 dark:text-gray-400">By {author}</p>
      </div>

      {/* Price + Remove */}
      <div className="text-right space-y-2 shrink-0">
        <p className="font-bold text-sm sm:text-base text-indigo-600 dark:text-cyan-400">৳{price}</p>
        <button
          onClick={() => onRemove(itemId)}
          className="text-red-500 hover:text-red-600 text-xs font-semibold flex items-center justify-end gap-1 transition cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}

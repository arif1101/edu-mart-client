/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";

export default function CartItem({ item, onRemove }: any) {
  return (
    <div className="bg-white dark:bg-gray-900 border rounded-2xl p-5 flex gap-4 items-start hover:shadow-md transition">
      {/* Thumbnail */}
      <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
        COURSE
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">By Instructor</p>
      </div>

      {/* Price + Remove */}
      <div className="text-right space-y-2">
        <p className="font-semibold text-lg">৳ {item.price}</p>
        <button
          onClick={() => onRemove(item.course._id)} // ✅ correct
          className="text-red-500 text-sm hover:underline flex items-center gap-1"
        >
          <Trash2 size={14} />
          Remove
        </button>
      </div>
    </div>
  );
}

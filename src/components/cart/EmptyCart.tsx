"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="py-20 text-center space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-xs">
      <div className="w-16 h-16 mx-auto bg-indigo-50 dark:bg-indigo-950/60 rounded-full flex items-center justify-center text-indigo-600 dark:text-cyan-400">
        <ShoppingBag className="w-7 h-7" />
      </div>

      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Your Cart is Currently Empty
      </h2>

      <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
        You haven’t added any courses or physical books yet. Explore our top courses and books to get started.
      </p>

      <div className="pt-2 flex justify-center gap-3">
        <Link href="/courses">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-xs">
            <span>Explore Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
        <Link href="/books">
          <button className="px-4 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-semibold transition cursor-pointer">
            Browse Books
          </button>
        </Link>
      </div>
    </div>
  );
}

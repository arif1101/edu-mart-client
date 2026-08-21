"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Download,
  X,
  CheckCircle,
} from "lucide-react";
import { mockBooks } from "@/data/mockData";
import { toast } from "sonner";

export default function AdminBooksClient() {
  const [books, setBooks] = useState(mockBooks);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPrice, setNewPrice] = useState(24.99);

  const filteredBooks = useMemo(() => {
    return books.filter((b) => {
      const q = searchQuery.toLowerCase().trim();
      return (
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
      );
    });
  }, [books, searchQuery]);

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAuthor.trim()) {
      toast.error("Please fill in book title and author");
      return;
    }

    const newB: any = {
      _id: `bk-${Date.now()}`,
      title: newTitle,
      author: newAuthor,
      price: newPrice,
      softPrice: newPrice,
      hardPrice: newPrice + 10,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
      category: "Programming",
      language: "English",
      copyType: "Softcopy",
      details: "Comprehensive practical guide for full-stack developers.",
      reviews: [],
      stock: 50,
      publishedDate: new Date().toISOString().split("T")[0],
    };

    setBooks([newB, ...books]);
    setNewTitle("");
    setNewAuthor("");
    setIsAddModalOpen(false);
    toast.success("E-Book added to catalog successfully!");
  };

  const handleDeleteBook = (id: string) => {
    setBooks((prev) => prev.filter((b) => b._id !== id));
    toast.success("Book deleted from catalog");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span>E-Book Catalog Management</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Manage electronic textbooks, pricing, demo previews, and PDF download permissions.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New E-Book</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search book title, author name, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">Book Info</th>
                <th className="p-4">Author</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Downloads</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredBooks.map((book) => (
                <tr key={book._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-10 h-12 rounded-md object-cover border border-gray-200 dark:border-gray-800 shrink-0"
                      />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white line-clamp-1">
                          {book.title}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          320 Pages • PDF Edition
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-semibold text-gray-700 dark:text-gray-300">
                    {book.author}
                  </td>

                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      {book.category}
                    </span>
                  </td>

                  <td className="p-4 font-extrabold text-gray-900 dark:text-white">
                    ${(book as any).price || (book as any).softPrice || (book as any).hardPrice || 24.99}
                  </td>

                  <td className="p-4 text-gray-600 dark:text-gray-400 font-semibold flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                    <span>840 downloads</span>
                  </td>

                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleDeleteBook(book._id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Book Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                Add New E-Book to Catalog
              </h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddBook} className="space-y-3">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Book Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Masterclass Node.js & Microservices"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Author Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Daniel Carter"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newPrice}
                  onChange={(e) => setNewPrice(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs font-bold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs"
                >
                  Add E-Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

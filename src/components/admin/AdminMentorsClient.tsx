"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Trash2,
  UserCheck,
  Star,
  Users,
  Briefcase,
  X,
} from "lucide-react";
import { mockMentors, Mentor } from "@/data/mentorsData";
import { toast } from "sonner";

export default function AdminMentorsClient() {
  const [mentors, setMentors] = useState<Mentor[]>(mockMentors);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("Web Development");

  const filteredMentors = useMemo(() => {
    return mentors.filter((m) => {
      const q = searchQuery.toLowerCase().trim();
      return (
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q)
      );
    });
  }, [mentors, searchQuery]);

  const handleAddMentor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) {
      toast.error("Please fill in mentor name and designation role");
      return;
    }

    const newM: Mentor = {
      id: `mentor-${Date.now()}`,
      name,
      role,
      company: company || "EduMart Faculty",
      category,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 15,
      totalStudents: 1200,
      totalCourses: 2,
      experienceYears: 6,
      location: "Dhaka, Bangladesh",
      bio: "Industry expert and mentor.",
      aboutText: "Guiding software engineers and designers to excel.",
      skills: ["React", "UI/UX", "Node.js"],
      socialLinks: { linkedin: "https://linkedin.com" },
      workExperience: [],
      reviews: [],
      taughtCourses: [],
    };

    setMentors([newM, ...mentors]);
    setName("");
    setRole("");
    setCompany("");
    setIsModalOpen(false);
    toast.success(`Mentor "${name}" added to directory!`);
  };

  const handleDeleteMentor = (id: string) => {
    setMentors((prev) => prev.filter((m) => m.id !== id));
    toast.success("Mentor removed from directory.");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span>Mentors & Faculty Directory Management</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Approve verified mentors, assign expertise categories, and manage faculty profiles.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Mentor</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search mentor name, company, or designation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      {/* Mentors Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">Mentor Profile</th>
                <th className="p-4">Designation & Company</th>
                <th className="p-4">Expertise Category</th>
                <th className="p-4">Rating & Students</th>
                <th className="p-4">Experience</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredMentors.map((mentor) => (
                <tr key={mentor.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-10 h-10 rounded-full object-cover border border-indigo-200 dark:border-indigo-800 shrink-0"
                      />
                      <div>
                        <Link href={`/mentors/${mentor.id}`} className="font-bold text-gray-900 dark:text-white hover:text-indigo-600 transition">
                          {mentor.name}
                        </Link>
                        <p className="text-[10px] text-gray-400">{mentor.location}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="space-y-0.5">
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{mentor.role}</p>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-gray-400" />
                        {mentor.company}
                      </p>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800">
                      {mentor.category}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="space-y-0.5 text-[11px]">
                      <div className="flex items-center gap-1 font-bold text-amber-500">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{mentor.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-gray-400 flex items-center gap-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span>{(mentor.totalStudents / 1000).toFixed(1)}k Students</span>
                      </p>
                    </div>
                  </td>

                  <td className="p-4 font-semibold text-gray-700 dark:text-gray-300">
                    {mentor.experienceYears}+ Yrs
                  </td>

                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleDeleteMentor(mentor.id)}
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

      {/* Add Mentor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Add New Mentor Profile</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddMentor} className="space-y-3">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Mentor Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Michael Rodriguez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Role / Designation</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lead AI Researcher"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. OpenAI & Stanford AI Lab"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Expertise Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 font-semibold"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs font-bold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs"
                >
                  Add Mentor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

import { AdminSidebar } from "@/components/admin/admin-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Search,
  Bell,
  Plus,
  ExternalLink,
  ShieldCheck,
  User,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const metadata = {
  title: "Admin Control Desk | EduMart",
  description: "Enterprise management suite for EduMart courses, books, mentors, users, and platform analytics.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />

      <SidebarInset className="bg-gray-50 dark:bg-gray-950 flex flex-col min-h-screen">
        {/* Top Header Navigation Bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 md:px-6 shadow-xs">
          {/* Left Trigger & Search */}
          <div className="flex items-center gap-3">
            <SidebarTrigger className="cursor-pointer" />
            <Separator orientation="vertical" className="h-4" />

            <div className="hidden sm:flex items-center relative max-w-xs">
              <Search className="w-4 h-4 absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, users, orders..."
                className="w-64 pl-9 pr-3 py-1.5 text-xs rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Right Actions & Profile */}
          <div className="flex items-center gap-3">
            {/* View Live Marketplace Link */}
            <Link
              href="/"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold transition"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
              <span>View Site</span>
            </Link>

            {/* Quick Create Dropdown Menu */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Quick Create</span>
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48 p-2 space-y-1 dark:bg-gray-900 border-gray-800">
                <Link
                  href="/admin/add-course"
                  className="block px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 rounded-md transition"
                >
                  + Add New Course
                </Link>
                <Link
                  href="/admin/add-blog"
                  className="block px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 rounded-md transition"
                >
                  + Add New Blog
                </Link>
                <Link
                  href="/admin/books"
                  className="block px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 rounded-md transition"
                >
                  + Manage E-Books
                </Link>
              </PopoverContent>
            </Popover>

            {/* Notification Bell */}
            <button className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-600 rounded-full" />
            </button>

            {/* Admin Badge */}
            <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-800">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-xs font-bold text-gray-900 dark:text-white leading-none">
                  Admin Control Desk
                </span>
                <span className="text-[10px] text-emerald-500 font-semibold mt-0.5">
                  ● Superuser Online
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 md:p-6 flex-1 w-full max-w-[1600px] mx-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

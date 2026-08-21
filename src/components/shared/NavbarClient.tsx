"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Search,
  ShoppingCart,
  GraduationCap,
  Menu,
  ChevronDown,
  Grid,
  Bell,
  Phone,
  Sparkles,
} from "lucide-react";
import ProfileSidebar from "./ProfileSidebar";
import { mockCart } from "@/data/mockData";

interface NavbarClientProps {
  user?: {
    name: string;
    email: string;
    role?: string;
    avatar?: string;
  };
}

const mainNavigation = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/exam", label: "AI Exam", badge: "AI" },
  { href: "/books", label: "Books" },
  { href: "/mentors", label: "Mentors" },
  { href: "/blogs", label: "Blogs" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
];

const categoryList = [
  "Web Development",
  "React & Next.js",
  "UI/UX Design",
  "Data Science & AI",
  "Business & Marketing",
  "Academic & Languages",
];

export default function NavbarClient({ user }: NavbarClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const cartItemCount = mockCart?.items?.length || 0;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md transition-all shadow-xs">
        
        {/* ROW 1: Top Utility & Main Action Bar */}
        <div className="max-w-[1280px] mx-auto flex h-16 items-center justify-between px-4 md:px-8 gap-4">
          
          {/* Brand Logo & Mobile Drawer */}
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="md:hidden size-9"
                  variant="ghost"
                  size="icon"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 p-4 md:hidden space-y-4 dark:bg-gray-900 border-gray-800">
                <div className="font-semibold text-xs text-gray-400 uppercase tracking-wider">Navigation</div>
                <nav className="flex flex-col space-y-1">
                  {mainNavigation.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                          isActive
                            ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-cyan-400 font-semibold"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] bg-cyan-500 text-white rounded font-bold">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
                  <Link href="/admin">
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Admin Panel
                    </Button>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent tracking-tight leading-none">
                  EduMart
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wide">LEARNING MARKETPLACE</span>
              </div>
            </Link>
          </div>

          {/* Central Large Search Bar with Filter */}
          <div className="hidden md:flex items-center flex-1 max-w-lg relative">
            <div className="relative w-full flex items-center">
              <Search className="w-4 h-4 absolute left-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-24 py-2 text-sm rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition shadow-inner"
              />
              <button className="absolute right-1.5 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-semibold transition cursor-pointer">
                Search
              </button>
            </div>
          </div>

          {/* Right Action Icons & User Account */}
          <div className="flex items-center gap-3">
            {/* AI Exam Button Shortcut */}
            <Link href="/exam" className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>AI Exam</span>
            </Link>

            {/* Notification Bell */}
            <button className="hidden sm:flex p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer">
              <Bell className="w-5 h-5" />
            </button>

            {/* Shopping Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-cyan-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white dark:ring-gray-950">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Admin Link */}
            <Link href="/admin" className="hidden lg:inline-block">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 transition">
                Admin Panel
              </span>
            </Link>

            {/* User Account / Sign In */}
            {user ? (
              <div
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-md border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-cyan-500/50 bg-gray-50 dark:bg-gray-900 cursor-pointer transition shadow-xs"
              >
                <div className="w-7 h-7 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {user.name?.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[90px] truncate">
                  {user.name}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="text-xs font-semibold rounded-md">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="text-xs font-semibold rounded-md bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ROW 2: Main Navigation Links & Categories */}
        <div className="border-t border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-950/50">
          <div className="max-w-[1280px] mx-auto flex h-11 items-center justify-between px-4 md:px-8 text-sm overflow-x-auto no-scrollbar gap-6">
            
            {/* Categories Dropdown Button */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition cursor-pointer shrink-0">
                  <Grid className="w-3.5 h-3.5" />
                  <span>All Categories</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-56 p-2 space-y-1 dark:bg-gray-900 border-gray-800">
                {categoryList.map((cat) => (
                  <Link
                    key={cat}
                    href={`/courses?category=${encodeURIComponent(cat)}`}
                    className="block px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 rounded-md transition"
                  >
                    {cat}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>

            {/* Horizontal Navigation List */}
            <nav className="flex items-center gap-7 whitespace-nowrap overflow-x-auto no-scrollbar flex-1">
              {mainNavigation.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-xs font-semibold transition-colors py-2 flex items-center gap-1.5 ${
                      isActive
                        ? "text-indigo-600 dark:text-cyan-400 font-bold"
                        : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.2 text-[9px] bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-full font-bold">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Helpline Contact */}
            <div className="hidden xl:flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0">
              <Phone className="w-3.5 h-3.5 text-cyan-500" />
              <span>Helpline: <strong className="text-gray-700 dark:text-gray-200">+880 1700-000000</strong></span>
            </div>

          </div>
        </div>

      </header>

      <ProfileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        user={user}
      />
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  GraduationCap,
  PlusCircle,
  BookOpen,
  Users,
  UserCheck,
  FileText,
  DollarSign,
  Settings,
} from "lucide-react";

const navigationGroups = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    title: "Learning Content",
    items: [
      { title: "All Courses", url: "/admin/courses", icon: GraduationCap },
      { title: "Add New Course", url: "/admin/add-course", icon: PlusCircle },
      { title: "E-Books Catalog", url: "/admin/books", icon: BookOpen },
    ],
  },
  {
    title: "People & Staff",
    items: [
      { title: "Users & Roles", url: "/admin/users", icon: Users },
      { title: "Mentors Directory", url: "/admin/mentors", icon: UserCheck },
    ],
  },
  {
    title: "Editorial",
    items: [
      { title: "Articles & Blogs", url: "/admin/blogs", icon: FileText },
      { title: "Create Blog Post", url: "/admin/add-blog", icon: PlusCircle },
    ],
  },
  {
    title: "Financials",
    items: [
      { title: "Orders & Revenue", url: "/admin/orders", icon: DollarSign },
    ],
  },
  {
    title: "System",
    items: [
      { title: "Platform Settings", url: "/admin/settings", icon: Settings },
    ],
  },
];

export function AdminSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-gray-200 dark:border-gray-800 p-4">
        <Link href="/admin" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent tracking-tight leading-none">
              EduMart
            </span>
            <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">ADMIN DESK</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="py-2">
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-[10px] uppercase font-bold tracking-wider text-gray-400 px-3">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link
                          href={item.url}
                          className={`flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg transition ${
                            isActive
                              ? "bg-indigo-600 text-white font-bold shadow-xs"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-indigo-600 dark:text-cyan-400"}`} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

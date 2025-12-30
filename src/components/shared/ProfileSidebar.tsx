"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingCart,
  User,
  BookOpen,
  Book,
  FileText,
  AlertCircle,
  Calendar,
  ListOrdered,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  user?: {
    name: string;
    email: string;
    role?: string;
  };
}

export default function ProfileSidebar({
  isOpen,
  onClose,
  onLogout,
  user,
}: SidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Cart", href: "/cart", icon: ShoppingCart },
    { label: "My Profile", href: "/user-profile", icon: User },
    { label: "Enrolled Courses", href: "/courses/enrolled", icon: BookOpen },
    { label: "Purchased Books", href: "/books/purchased", icon: Book },
    { label: "Saved Resources", href: "/resources/saved", icon: FileText },
    { label: "Participated Exams", href: "/exams/participated", icon: AlertCircle },
    { label: "Calendar", href: "/calendar", icon: Calendar },
    { label: "Order History", href: "/orders", icon: ListOrdered },
    { label: "Admin Panel", href: "/admin", icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-black z-50 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-semibold">Profile</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="p-4 space-y-6">
          {user && (
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          )}

          <nav className="space-y-2">
            {navigation.map((item) => {
              if (item.href === "/admin" && user?.role !== "ADMIN") return null;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                    pathname === item.href
                      ? "bg-gray-200 dark:bg-gray-800"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="w-full bg-red-500 text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </div>
      </aside>
    </>
  );
}

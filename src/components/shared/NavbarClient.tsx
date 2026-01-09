"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LogoutButton from "../page/LogoutButton";
import ProfileSidebar from "./ProfileSidebar";

interface NavbarClientProps {
  user?: {
    name: string;
    email: string;
    role?: string;
  };
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About us" },
];

export default function NavbarClient({ user }: NavbarClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    // handled inside LogoutButton or server action
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900">
        <div className="container mx-auto flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  ☰
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-40 md:hidden">
                <NavigationMenu>
                  <NavigationMenuList className="flex-col">
                    {navigationLinks.map((link) => (
                      <NavigationMenuItem key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-3 py-2 text-sm"
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            <Link href="/" className="text-2xl font-bold text-sky-500">
              EduTech
            </Link>
          </div>

          {/* Center */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} className="text-sm font-medium">
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right */}
          <div className="flex items-center gap-4">
            {user && (
              <div
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 border px-2 py-1 rounded-md cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                  {user.name?.charAt(0)}
                </div>
                <span className="text-sm font-semibold">{user.name}</span>
              </div>
            )}

            {user ? (
              <LogoutButton />
            ) : (
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <ProfileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLogout={handleLogout}
        user={user}
      />
    </>
  );
}

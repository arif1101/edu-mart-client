import { logoutAction } from "@/app/_action/logoutAction";
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
import Link from "next/link";
import LogoutButton from "../page/LogoutButton";
import { getAuthUser } from "@/app/_action/auth";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/books", label: "Books" },
  { href: "/exams", label: "Exams" },
  { href: "/forum", label: "Forum" },
  { href: "/resources", label: "Resources" },
  { href: "/blogs", label: "Blogs" },
];

export default async function  Navbar() {

  const user = await getAuthUser()

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white dark:bg-gray-900 h-20">
      <div className="mx-auto flex h-16 items-center justify-between gap-4">
        {/* ---------- Left Side ---------- */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="size-8 md:hidden border ml-2"
                variant="ghost"
                size="icon"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6H20" />
                  <path d="M4 12H20" />
                  <path d="M4 18H20" />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="border w-40 p-1 md:hidden">
              <NavigationMenu className="max-w-none">
                <NavigationMenuList className="flex-col items-start">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <Link
                        href={link.href}
                        className="block w-full py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-sky-500">
            EduTech
          </Link>
        </div>

        {/* ---------- Middle (Desktop Menu) ---------- */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-6">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-sky-600 transition-colors"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ---------- Right Side ---------- */}
        <div className="flex items-center gap-4">
          {/* Static Profile Preview */}
          <div className="flex items-center gap-2 border py-1 px-2 rounded-md bg-slate-200 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold">
              M
            </div>
            <span className="font-semibold text-gray-700">User Name</span>
          </div>

          {/* Auth Buttons (Static) */}
          <Link href="/login">
            <Button className="text-sm font-semibold px-5">Login</Button>
            <LogoutButton/>
          </Link>
        </div>
      </div>
    </header>
  );
}

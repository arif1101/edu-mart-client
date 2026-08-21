"use client";

import {
  Book,
  CheckCircle,
  Facebook,
  Linkedin,
  Twitter,
  Users,
  Youtube,
  GraduationCap,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900">
      {/* CTA Section */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-16">
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 border border-indigo-700/40 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between shadow-xl">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Unlock Your Potential
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 leading-snug text-white">
              Start Investing in Your Skills <br className="hidden md:block" />
              with EduMart Today
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
            {[
              { icon: Users, label: "Community" },
              { icon: LinkIcon, label: "Referrals" },
              { icon: Book, label: "Assignments" },
              { icon: CheckCircle, label: "Certificates" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-indigo-950/80 border border-indigo-800/40 rounded-xl px-5 py-4 flex flex-col items-center text-center hover:border-cyan-500/40 transition"
              >
                <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="font-semibold text-xs text-gray-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                EduMart
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              EduMart is a modern learning marketplace designed to help students master real-world skills through expert-led courses, assignments, and verified certificates.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:from-indigo-700 hover:to-cyan-600 transition shadow-md shadow-indigo-500/20 cursor-pointer">
              Contact Us →
            </button>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Dhaka, Bangladesh</li>
              <li>+880 1XXXXXXXXX</li>
              <li>support@edumart.com</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition">Web Development</li>
              <li className="hover:text-white cursor-pointer transition">Data Science</li>
              <li className="hover:text-white cursor-pointer transition">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer transition">Business & Marketing</li>
              <li className="hover:text-white cursor-pointer transition">Academic & Languages</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Explore Courses</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link href="/user-profile" className="hover:text-white transition">My Account</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs gap-4 text-gray-500">
          <p>© 2026 EduMart. All rights reserved.</p>

          <div className="flex gap-4 text-gray-400">
            <Facebook className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
            <Twitter className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
            <Youtube className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
            <Linkedin className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}

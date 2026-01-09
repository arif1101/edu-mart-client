"use client";

import {
  Book,
  CheckCircle,
  Facebook,
  Linkedin,
  Twitter,
  Users,
  Youtube,
  Link as LinkIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="container mx-auto px-4 pt-16">
        <div className="bg-sky-500 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide">
              No More Waiting
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-snug">
              Start Investing in Your Career <br className="hidden md:block" />
              with CustomLMS
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            {[
              { icon: Users, label: "Community" },
              { icon: LinkIcon, label: "Referrals" },
              { icon: Book, label: "Assignments" },
              { icon: CheckCircle, label: "Certificates" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-blue-900 rounded-lg px-6 py-6 flex flex-col items-center text-center"
              >
                <Icon />
                <p className="mt-2 font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-3xl font-bold text-sky-500">EduTech</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              EduTech is a modern learning management platform designed to help
              students build real-world skills through expert-led courses,
              assignments, and certifications.
            </p>
            <button className="inline-flex items-center gap-2 bg-sky-500 px-5 py-2 rounded-full font-semibold hover:bg-sky-600 transition">
              Contact Us →
            </button>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-sky-500 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Dhaka, Bangladesh</li>
              <li>+880 1XXXXXXXXX</li>
              <li>support@edutech.com</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold text-sky-500 mb-4">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>UI/UX Design</li>
              <li>Business Management</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-sky-500 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Events</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
        <p className="text-gray-400 text-center md:text-left">
          © 2024 EduTech. All rights reserved.
        </p>

        <div className="flex gap-4 text-gray-400">
          <Facebook className="hover:text-white cursor-pointer" />
          <Twitter className="hover:text-white cursor-pointer" />
          <Youtube className="hover:text-white cursor-pointer" />
          <Linkedin className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Course } from "@/types/course";
import { Book } from "@/types/book";

export const mockUser = {
  id: "user-1",
  _id: "user-1",
  name: "John Doe",
  email: "john@example.com",
  role: "STUDENT",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  bio: "Passionate learner exploring web development and design.",
};

export const mockCourses: Course[] = [
  {
    _id: "course-1",
    title: "Complete Web Development Bootcamp",
    subject: "Web Development",
    category: "Technology",
    classLevel: "Versity",
    level: "Beginner to Advanced",
    language: "English",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    price: 49.99,
    duration: 30,
    studentsEnrolled: 124,
    averageRating: 4.8,
    instructor: {
      _id: "inst-1",
      name: "Jane Smith",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      status: "Active",
    },
    instructors: [
      {
        _id: "inst-1",
        name: "Jane Smith",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        status: "Active",
      },
    ],
    curriculum: [
      {
        _id: "curr-1",
        title: "Introduction & Setup",
        contents: ["Course Overview", "Setting up VS Code"],
      },
      {
        _id: "curr-2",
        title: "HTML & CSS Fundamentals",
        contents: ["HTML5 Elements", "CSS Grid & Flexbox"],
      },
    ],
    overview: {
      description: "Master HTML, CSS, JavaScript, React, and Node.js from scratch.",
      requirements: ["Basic computer knowledge"],
      whatYouWillLearn: ["Build full-stack web applications", "Master React and Node.js"],
      thisCourseIncludes: ["30 hours video", "Certificate of completion"],
    },
    tags: ["Web", "React", "JavaScript"],
    reviews: [],
    lastUpdate: "2026-02-01",
    createdAt: "2026-01-01",
    updatedAt: "2026-02-01",
  },
  {
    _id: "course-2",
    title: "Advanced React & Next.js Masterclass",
    subject: "React",
    category: "Technology",
    classLevel: "Versity",
    level: "Intermediate",
    language: "English",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    price: 59.99,
    duration: 25,
    studentsEnrolled: 89,
    averageRating: 4.9,
    instructor: {
      _id: "inst-2",
      name: "Alex Johnson",
      photo: "",
      status: "Active",
    },
    instructors: [],
    curriculum: [],
    overview: {
      description: "Build production-ready full-stack React applications with Next.js 15.",
      requirements: ["JavaScript basics"],
      whatYouWillLearn: ["Next.js App Router", "Server Components"],
      thisCourseIncludes: ["25 hours video"],
    },
    tags: ["Next.js", "React"],
    reviews: [],
    lastUpdate: "2026-02-10",
    createdAt: "2026-01-10",
    updatedAt: "2026-02-10",
  },
];

export const mockBooks: Book[] = [
  {
    _id: "book-1",
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    category: "Technology",
    language: "English",
    details: "Comprehensive guide to JavaScript language features.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    reviews: [],
    copyType: "Hardcopy",
    hardPrice: 29.99,
    softPrice: 19.99,
    stock: 50,
    publishedDate: "2025-01-01",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
  },
];

export const mockCart = {
  items: [
    {
      id: "cart-item-1",
      course: mockCourses[0],
      price: mockCourses[0].price,
    },
  ],
  totalAmount: 49.99,
};

export const mockEnrollments: any[] = [
  {
    _id: "enrollment-1",
    courses: [mockCourses[0]],
    amount: 49.99,
    createdAt: "2026-01-15",
  },
];

export const mockReviews = [
  {
    _id: "review-1",
    user: { name: "Alice Cooper", avatar: "" },
    rating: 5,
    message: "Great course! Everything was clearly explained.",
    createdAt: "2026-02-01",
  },
];

export const mockAdminDashboard = {
  totalUsers: 1250,
  totalCourses: 48,
  totalEnrollments: 3400,
  totalRevenue: 24500.0,
};

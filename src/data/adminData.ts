export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Student" | "Instructor" | "Admin";
  avatar?: string;
  enrolledCoursesCount: number;
  joinedDate: string;
  status: "Active" | "Suspended" | "Pending";
}

export interface AdminOrder {
  id: string;
  orderNumber: string;
  studentName: string;
  studentEmail: string;
  itemTitle: string;
  itemType: "Course" | "Book";
  amount: number;
  paymentMethod: "bKash" | "Nagad" | "Credit Card" | "PayPal";
  date: string;
  status: "Completed" | "Pending" | "Refunded";
}

export interface SystemSettings {
  siteName: string;
  supportEmail: string;
  helplinePhone: string;
  currencySymbol: string;
  enableBkashPayment: boolean;
  enableStripePayment: boolean;
  enableStudentCertificates: boolean;
  maintenanceMode: boolean;
}

export const mockAdminUsers: AdminUser[] = [
  {
    id: "usr-1",
    name: "Mahmud Hasan",
    email: "mahmud@example.com",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    enrolledCoursesCount: 4,
    joinedDate: "2026-01-15",
    status: "Active",
  },
  {
    id: "usr-2",
    name: "Tanvir Hossain",
    email: "tanvir@edumart.com",
    role: "Instructor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    enrolledCoursesCount: 0,
    joinedDate: "2025-11-01",
    status: "Active",
  },
  {
    id: "usr-3",
    name: "Jessica Chen",
    email: "jessica@example.com",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    enrolledCoursesCount: 2,
    joinedDate: "2026-03-20",
    status: "Active",
  },
  {
    id: "usr-4",
    name: "Alex Rivera",
    email: "alex@example.com",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    enrolledCoursesCount: 5,
    joinedDate: "2026-02-10",
    status: "Active",
  },
  {
    id: "usr-5",
    name: "Admin Superuser",
    email: "admin@edumart.com",
    role: "Admin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    enrolledCoursesCount: 0,
    joinedDate: "2025-08-01",
    status: "Active",
  },
  {
    id: "usr-6",
    name: "Rahim Chowdhury",
    email: "rahim@example.com",
    role: "Student",
    enrolledCoursesCount: 1,
    joinedDate: "2026-05-12",
    status: "Suspended",
  },
];

export const mockAdminOrders: AdminOrder[] = [
  {
    id: "ord-101",
    orderNumber: "ORD-2026-8812",
    studentName: "Mahmud Hasan",
    studentEmail: "mahmud@example.com",
    itemTitle: "Complete Web Development Bootcamp 2026",
    itemType: "Course",
    amount: 89.99,
    paymentMethod: "bKash",
    date: "2026-08-20 14:32",
    status: "Completed",
  },
  {
    id: "ord-102",
    orderNumber: "ORD-2026-8813",
    studentName: "Jessica Chen",
    studentEmail: "jessica@example.com",
    itemTitle: "Advanced React & Next.js Masterclass",
    itemType: "Course",
    amount: 94.99,
    paymentMethod: "Credit Card",
    date: "2026-08-20 11:15",
    status: "Completed",
  },
  {
    id: "ord-103",
    orderNumber: "ORD-2026-8814",
    studentName: "Alex Rivera",
    studentEmail: "alex@example.com",
    itemTitle: "JavaScript Data Structures & Algorithms",
    itemType: "Book",
    amount: 24.99,
    paymentMethod: "bKash",
    date: "2026-08-19 18:45",
    status: "Completed",
  },
  {
    id: "ord-104",
    orderNumber: "ORD-2026-8815",
    studentName: "Kavita Patel",
    studentEmail: "kavita@example.com",
    itemTitle: "Mastering UI/UX & Mobile App Design",
    itemType: "Course",
    amount: 79.99,
    paymentMethod: "PayPal",
    date: "2026-08-19 09:20",
    status: "Pending",
  },
  {
    id: "ord-105",
    orderNumber: "ORD-2026-8816",
    studentName: "Liam Johnson",
    studentEmail: "liam@example.com",
    itemTitle: "Full-Stack React & Next.js Handbook",
    itemType: "Book",
    amount: 29.99,
    paymentMethod: "Nagad",
    date: "2026-08-18 16:10",
    status: "Completed",
  },
];

export const mockSystemSettings: SystemSettings = {
  siteName: "EduMart Marketplace",
  supportEmail: "support@edumart.com",
  helplinePhone: "+880 1700-000000",
  currencySymbol: "$",
  enableBkashPayment: true,
  enableStripePayment: true,
  enableStudentCertificates: true,
  maintenanceMode: false,
};

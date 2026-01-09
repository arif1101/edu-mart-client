# EduTech - Online Learning Platform

[![Client Deployment](https://img.shields.io/badge/Client-Live-blue)](https://edu-mart-client.vercel.app/)  
[![Server Deployment](https://img.shields.io/badge/Server-Live-green)](https://edu-tech-server-two.vercel.app/)  

EduTech is a modern online learning platform built with **Next.js 14** (App Router) for the client and **Node.js/Express** for the server. Users can browse courses, enroll, read blogs, and admins can manage content through a dedicated dashboard. Authentication is handled securely with **JWT tokens and cookies**.  

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Admin Credentials](#admin-credentials)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features

### User Features
- Browse courses by category, subject, and language
- Enroll in courses securely
- Access course content: lessons, videos, and descriptions
- Read and comment on blogs
- View enrolled courses and track progress

### Admin Features
- Dashboard to manage courses, sections, and blogs
- Add, edit, or delete courses and blogs
- Manage users and course enrollments
- Role-based access control

### Authentication & Security
- JWT authentication with secure cookies
- Password hashing and user role verification
- Protected routes for users and admin

---

## Demo

- **Client Live:** [EduTech Client](https://edu-mart-client.vercel.app/)  
- **Server Live:** [EduTech Server](https://edu-tech-server-two.vercel.app/)  

---

## Technologies

**Frontend (Client):**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Axios / React Query
- Vercel Deployment

**Backend (Server):**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose ORM
- JWT Authentication

**Libraries & Tools:**
- ESLint & Prettier
- Sonner (Notifications)
- React Hook Form
- Framer Motion (Animations)

---

## Admin Credentials

- **Email:** admin@gmail.com  
- **Password:** 11111111 / 22222222

---

## Installation

### Clone the Repositories

```bash
# Clone client
git clone https://github.com/arif1101/edu-mart-client.git

# Clone server
git clone https://github.com/arif1101/EduTech-sever.git
Setup Server
bash
Copy code
cd EduTech-sever
npm install
cp .env.example .env
# Update .env with your MongoDB URI and JWT_SECRET
npm run dev
Setup Client
bash
Copy code
cd edu-mart-client
npm install
cp .env.local.example .env.local
# Update .env.local with API base URL
npm run dev
Project Structure
Client (edu-mart-client/src)
pgsql
Copy code
src/
├── app/
│   ├── _action/
│   ├── auth/
│   ├── (commonRoute)/
│   ├── admin/
│   │   ├── add-blog/
│   │   ├── add-course/
│   │   ├── course/
│   │   ├── edit-course/
│   │   ├── sections/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── payment/
│   ├── unauthorized/
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── admin/
│   ├── cart/
│   ├── page/
│   │   ├── blog/
│   │   ├── book/
│   │   ├── course/
│   │   ├── dashboard/
│   │   ├── enrolledCourse/
│   │   ├── home/
│   │   ├── login/
│   │   ├── signup/
│   │   └── user/
│   ├── payment/
│   ├── shared/
│   ├── ui/
│   └── SafeImage.tsx
├── data/
└── hooks/
Key Notes:

/app → Next.js App Router pages

/components → Reusable components for UI, admin, pages, and shared

/hooks → Custom React hooks

/data → Dummy data or static resources

Usage
Start the backend server and connect to MongoDB.

Start the frontend with Next.js:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Login as admin to access dashboard features.

Future Enhancements
Payment integration for courses

Course ratings and reviews

Real-time notifications and chat

AI-based course recommendations

License
This project is open-source under the MIT License.

Contact
GitHub Client: edu-mart-client

GitHub Server: EduTech-server

Live Client: https://edu-mart-client.vercel.app/

Live Server: https://edu-tech-server-two.vercel.app/

yaml
Copy code

---

If you want, I can also make a **version with visual screenshots and badges for each feature**, so your GitHub repo looks **extremely professional and attractive**, which is perfect for portfolio presentation.  

Do you want me to do that?
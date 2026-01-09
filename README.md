# EduTech - Online Learning Platform

[![Client Deployment](https://img.shields.io/badge/Client-Live-blue)](https://edu-mart-client.vercel.app/)  
[![Server Deployment](https://img.shields.io/badge/Server-Live-green)](https://edu-tech-server-two.vercel.app/)  

EduTech is a modern online learning platform built with **Next.js** for the client and **Node.js/Express** for the server. It allows users to browse courses, enroll in them, read blogs, and provides an admin dashboard for managing courses, users, and content. Authentication is handled securely with **JWT tokens and cookies**.  

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Admin Credentials](#admin-credentials)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

---

## Features

### User Features
- Browse and search courses by category, subject, and language
- Enroll in courses with secure authentication
- Access course content including videos, lessons, and descriptions
- Read and comment on blogs
- View enrolled courses and progress

### Admin Features
- Dashboard to manage users, courses, and blogs
- Add, update, and delete courses
- Manage course enrollments
- View site analytics and reports
- Role-based access control

### Authentication & Security
- JWT authentication with secure cookie storage
- Password hashing and user role verification
- Protected routes for authenticated users and admin

---

## Demo

- **Client Live:** [EduTech Client](https://edu-mart-client.vercel.app/)  
- **Server Live:** [EduTech Server](https://edu-tech-server-two.vercel.app/)  

---

## Technologies

**Frontend (Client):**
- Next.js 14
- React
- Tailwind CSS
- Axios / React Query
- Vercel Deployment

**Backend (Server):**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose ORM
- JWT Authentication
- Deployment on Render / Vercel

**Tools & Libraries:**
- ESLint & Prettier
- Sonner (Notifications)
- React Hook Form (Forms)
- Framer Motion (Animations)

---

## Admin Credentials

Use the following credentials to access the admin dashboard:

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
# Edit .env with your MongoDB URI and JWT_SECRET
npm run dev
Setup Client
bash
Copy code
cd edu-mart-client
npm install
cp .env.local.example .env.local
# Edit .env.local with API base URL
npm run dev
Project Structure
Client (edu-mart-client)
php
Copy code
├── app/                 # Next.js app pages
├── components/          # Reusable components
├── hooks/               # Custom React hooks
├── types/               # TypeScript interfaces
├── utils/               # Utilities (fetchers, helpers)
├── public/              # Static assets
└── styles/              # Tailwind and global styles
Server (EduTech-sever)
csharp
Copy code
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── middleware/      # Authentication & error handling
│   └── utils/           # Helpers (catchAsync, error handlers)
└── index.js              # Server entry point
Usage
Start the backend server and ensure MongoDB is connected.

Start the client with Next.js development server.

Visit http://localhost:3000 to browse courses, read blogs, or login as admin.

Admin users can access the dashboard via /admin.

Future Enhancements
Add payment integration for course enrollment

Implement course ratings and reviews

Real-time notifications and messaging

AI-based course recommendations

License
This project is open-source and available under the MIT License.

Contact
GitHub Client: edu-mart-client

GitHub Server: EduTech-server

Live Client: https://edu-mart-client.vercel.app/

Live Server: https://edu-tech-server-two.vercel.app/

yaml
Copy code

---

If you want, I can also make a **more visually appealing README** with **badges for features, screenshots, and tech stack icons** so it looks like a professional GitHub project page. This often helps recruiters or users immediately understand the project.  

Do you want me to do that?
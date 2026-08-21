export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface MentorReview {
  id: string;
  studentName: string;
  studentAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface TaughtCourse {
  id: string;
  title: string;
  category: string;
  rating: number;
  price: number;
  students: number;
  image: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  image: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  totalStudents: number;
  totalCourses: number;
  experienceYears: number;
  location: string;
  bio: string;
  aboutText: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
    facebook?: string;
  };
  workExperience: WorkExperience[];
  reviews: MentorReview[];
  taughtCourses: TaughtCourse[];
}

export const mentorCategories = [
  "All Categories",
  "Web Development",
  "UI/UX Design",
  "Data Science & AI",
  "Mobile App Development",
  "Cybersecurity",
  "Cloud & DevOps",
] as const;

export const mockMentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "Sophia Williams",
    role: "Principal UI/UX Designer",
    company: "Figma & Google",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 342,
    totalStudents: 14200,
    totalCourses: 6,
    experienceYears: 10,
    location: "San Francisco, CA",
    bio: "Passionate Lead Product Designer specializing in Design Systems, User Research, and Micro-interactions.",
    aboutText:
      "With over a decade of experience designing scalable design systems and intuitive mobile interfaces for tech giants like Figma and Google, I empower students to master human-centered design principles. My methodology combines hands-on Figma workshops, interactive prototyping, and real-world portfolio critiques.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "UI Motion", "Design Ops"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://sophiawilliams.design",
    },
    workExperience: [
      {
        id: "we-1",
        company: "Figma",
        role: "Principal Staff Product Designer",
        period: "2021 - Present",
        description: "Leading design token architecture and developer handoff integrations for Figma Enterprise.",
      },
      {
        id: "we-2",
        company: "Google",
        role: "Senior Interaction Designer",
        period: "2017 - 2021",
        description: "Designed core Material Design 3 component libraries across web and Android ecosystems.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Alex Rivera",
        studentAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-08-10",
        comment: "Sophia's design system breakdown transformed how our engineering team builds UI components!",
      },
      {
        id: "rev-2",
        studentName: "Tariq Hasan",
        studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-07-28",
        comment: "Detailed, structured, and super inspiring mentor. Helped me land my first UX Lead job.",
      },
    ],
    taughtCourses: [
      {
        id: "course-1",
        title: "Complete Web Development Bootcamp 2026",
        category: "Web Development",
        rating: 4.8,
        price: 89.99,
        students: 12450,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      },
      {
        id: "course-3",
        title: "Mastering UI/UX & Mobile App Design",
        category: "UI/UX Design",
        rating: 4.9,
        price: 79.99,
        students: 8920,
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-2",
    name: "Daniel Carter",
    role: "Senior Full Stack Architect",
    company: "Meta & Vercel",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop",
    rating: 4.95,
    reviewCount: 512,
    totalStudents: 22800,
    totalCourses: 8,
    experienceYears: 12,
    location: "Austin, TX",
    bio: "Full Stack Engineer specialized in Next.js Server Components, GraphQL, TypeScript, and Micro-frontends.",
    aboutText:
      "I build high-performance web systems handling millions of daily requests. My courses focus on deep architectural patterns, full-stack React 19 / Next.js 15, state management, and real-time backend API design using Node.js and PostgreSQL.",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "TailwindCSS"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    workExperience: [
      {
        id: "we-1",
        company: "Vercel",
        role: "Staff Infrastructure Engineer",
        period: "2022 - Present",
        description: "Optimizing Next.js App Router edge streaming performance and serverless caching.",
      },
      {
        id: "we-2",
        company: "Meta",
        role: "Senior Software Engineer",
        period: "2017 - 2022",
        description: "Architected internal React component frameworks used across Instagram web and Messenger.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Jessica Chen",
        studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-08-15",
        comment: "Daniel's explanation of Next.js Server Actions and caching mechanics is unmatched!",
      },
    ],
    taughtCourses: [
      {
        id: "course-1",
        title: "Complete Web Development Bootcamp 2026",
        category: "Web Development",
        rating: 4.8,
        price: 89.99,
        students: 12450,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      },
      {
        id: "course-2",
        title: "Advanced React & Next.js Masterclass",
        category: "Web Development",
        rating: 4.9,
        price: 94.99,
        students: 10350,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-3",
    name: "Dr. Michael Rodriguez",
    role: "Lead AI Researcher & Data Scientist",
    company: "OpenAI & Stanford AI Lab",
    category: "Data Science & AI",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=400&fit=crop",
    rating: 4.92,
    reviewCount: 418,
    totalStudents: 18400,
    totalCourses: 5,
    experienceYears: 14,
    location: "Palo Alto, CA",
    bio: "Machine Learning PhD, LLM Fine-Tuning Expert, and AI Ethics Advocate.",
    aboutText:
      "Dr. Rodriguez has authored 20+ published AI papers and worked directly on cutting-edge Large Language Models (LLMs) and computer vision frameworks. He breaks down complex math into practical Python & PyTorch projects.",
    skills: ["Python", "PyTorch", "TensorFlow", "LLMs", "LangChain", "Deep Learning", "Data Mining"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      website: "https://michaelrodriguez.ai",
    },
    workExperience: [
      {
        id: "we-1",
        company: "OpenAI",
        role: "Senior Research Scientist",
        period: "2023 - Present",
        description: "Fine-tuning multimodal transformer architectures and reinforcement learning from human feedback.",
      },
      {
        id: "we-2",
        company: "Stanford AI Lab",
        role: "Adjunct Professor & Researcher",
        period: "2015 - 2023",
        description: "Taught CS231n Computer Vision and supervised graduate research projects.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "David Miller",
        studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-08-01",
        comment: "Brilliant mentor! He simplifies complex transformer math into intuitive visual concepts.",
      },
    ],
    taughtCourses: [
      {
        id: "course-4",
        title: "Python Data Science & Machine Learning",
        category: "Data Science & AI",
        rating: 4.9,
        price: 99.99,
        students: 7800,
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-4",
    name: "Aisha Khan",
    role: "Senior iOS & React Native Developer",
    company: "Apple & Spotify",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop",
    rating: 4.88,
    reviewCount: 280,
    totalStudents: 11500,
    totalCourses: 4,
    experienceYears: 8,
    location: "London, UK",
    bio: "Mobile Engineer specializing in Swift, SwiftUI, React Native, and App Store Optimization.",
    aboutText:
      "Aisha has shipped apps used by over 50 million music listeners. She teaches students how to build sleek, native mobile applications for iOS and Android with smooth animations and offline data sync.",
    skills: ["Swift", "SwiftUI", "React Native", "Expo", "iOS", "Kotlin", "Mobile UX"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    workExperience: [
      {
        id: "we-1",
        company: "Spotify",
        role: "Senior Mobile Engineer",
        period: "2021 - Present",
        description: "Built key audio playback micro-interactions and SwiftUI interface components.",
      },
      {
        id: "we-2",
        company: "Apple",
        role: "iOS Engineer",
        period: "2018 - 2021",
        description: "Worked on core iOS System Services and Accessibility APIs.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Kavita Patel",
        studentAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-07-20",
        comment: "Aisha's SwiftUI course helped me launch my startup app directly onto the App Store!",
      },
    ],
    taughtCourses: [
      {
        id: "course-5",
        title: "iOS 18 & SwiftUI Mobile Development",
        category: "Mobile App Development",
        rating: 4.8,
        price: 84.99,
        students: 6100,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-5",
    name: "Marcus Vance",
    role: "Principal Cloud Architect & DevOps Lead",
    company: "AWS & HashiCorp",
    category: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop",
    rating: 4.91,
    reviewCount: 310,
    totalStudents: 13900,
    totalCourses: 5,
    experienceYears: 11,
    location: "Seattle, WA",
    bio: "AWS Hero, Kubernetes Administrator (CKA), and Infrastructure-as-Code Specialist.",
    aboutText:
      "Marcus specializes in automated CI/CD pipelines, Kubernetes cluster orchestration, Terraform infrastructure deployment, and zero-downtime microservice architecture.",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Linux", "DevSecOps"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    workExperience: [
      {
        id: "we-1",
        company: "AWS",
        role: "Principal Solutions Architect",
        period: "2020 - Present",
        description: "Guiding Fortune 500 enterprises in cloud migration and serverless container deployments.",
      },
      {
        id: "we-2",
        company: "HashiCorp",
        role: "Senior DevOps Engineer",
        period: "2016 - 2020",
        description: "Contributed to Terraform AWS providers and Vault security orchestration.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Liam Johnson",
        studentAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-08-05",
        comment: "Marcus makes Kubernetes cluster setup simple and easy to understand!",
      },
    ],
    taughtCourses: [
      {
        id: "course-6",
        title: "Docker, Kubernetes & AWS Cloud DevOps",
        category: "Cloud & DevOps",
        rating: 4.9,
        price: 89.99,
        students: 7500,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-6",
    name: "Elena Rostova",
    role: "Ethical Hacker & Cybersecurity Specialist",
    company: "CrowdStrike & Cloudflare",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=400&fit=crop",
    rating: 4.94,
    reviewCount: 389,
    totalStudents: 16100,
    totalCourses: 4,
    experienceYears: 9,
    location: "Berlin, Germany",
    bio: "Certified Ethical Hacker (CEH), Penetration Tester, and Application Security Engineer.",
    aboutText:
      "Elena has protected high-profile banking and web platforms against zero-day exploits. She trains developers on OWASP Top 10 vulnerabilities, web app penetration testing, and secure coding practices.",
    skills: ["Penetration Testing", "OWASP", "Ethical Hacking", "Network Security", "Cryptography", "Python"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    workExperience: [
      {
        id: "we-1",
        company: "CrowdStrike",
        role: "Senior Security Researcher",
        period: "2021 - Present",
        description: "Conducting threat intelligence analysis and automated exploit detection systems.",
      },
      {
        id: "we-2",
        company: "Cloudflare",
        role: "Application Security Analyst",
        period: "2018 - 2021",
        description: "Managed WAF rules and DDoS defense mechanisms across edge points of presence.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Oliver Smith",
        studentAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-07-14",
        comment: "The practical hacking labs in Elena's course gave me hands-on cybersecurity confidence.",
      },
    ],
    taughtCourses: [
      {
        id: "course-7",
        title: "Ethical Hacking & Web Security 2026",
        category: "Cybersecurity",
        rating: 4.9,
        price: 94.99,
        students: 8600,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-7",
    name: "Tanvir Hossain",
    role: "Senior React & TypeScript Educator",
    company: "EduMart & Brain Station 23",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop",
    rating: 4.96,
    reviewCount: 490,
    totalStudents: 19800,
    totalCourses: 7,
    experienceYears: 9,
    location: "Dhaka, Bangladesh",
    bio: "Lead Tech Instructor guiding thousands of developers across Bangladesh and South Asia.",
    aboutText:
      "Tanvir is a renowned software engineer and mentor who has taught over 19,000 students web development from beginner concepts to advanced enterprise frontend architectures.",
    skills: ["React", "Next.js", "Redux Toolkit", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      facebook: "https://facebook.com",
    },
    workExperience: [
      {
        id: "we-1",
        company: "EduMart Tech Academy",
        role: "Head of Web Curriculum",
        period: "2020 - Present",
        description: "Designing project-based full stack JavaScript and React courses for 20,000+ students.",
      },
      {
        id: "we-2",
        company: "Brain Station 23",
        role: "Senior Frontend Engineer",
        period: "2017 - 2020",
        description: "Built scalable enterprise banking portals using React, Redux, and TypeScript.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Mahmud Hasan",
        studentAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-08-18",
        comment: "Tanvir sir explains difficult concepts in the simplest way possible. Highly recommended!",
      },
    ],
    taughtCourses: [
      {
        id: "course-1",
        title: "Complete Web Development Bootcamp 2026",
        category: "Web Development",
        rating: 4.8,
        price: 89.99,
        students: 12450,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "mentor-8",
    name: "Emily Watson",
    role: "Senior UX Researcher & Product Strategist",
    company: "Airbnb & Stripe",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=400&fit=crop",
    rating: 4.87,
    reviewCount: 215,
    totalStudents: 9800,
    totalCourses: 3,
    experienceYears: 7,
    location: "New York, NY",
    bio: "UX Researcher passionate about quantitative user testing, journey mapping, and conversion optimization.",
    aboutText:
      "Emily specializes in decoding user behavior and converting qualitative feedback into product wireframes and high-converting checkout flows at Stripe and Airbnb.",
    skills: ["UX Research", "Usability Testing", "Wireframing", "Customer Journeys", "Figma", "Mixpanel"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://emilywatson.design",
    },
    workExperience: [
      {
        id: "we-1",
        company: "Stripe",
        role: "Staff User Experience Researcher",
        period: "2022 - Present",
        description: "Conducting global merchant usability studies for friction-free payment checkouts.",
      },
      {
        id: "we-2",
        company: "Airbnb",
        role: "Senior UX Researcher",
        period: "2019 - 2022",
        description: "Led host-guest communication research to reduce booking cancellation drop-offs.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Chloe Bennett",
        studentAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
        rating: 5,
        date: "2026-08-02",
        comment: "Emily's UX research framework completely changed how our product team conducts user interviews!",
      },
    ],
    taughtCourses: [
      {
        id: "course-3",
        title: "Mastering UI/UX & Mobile App Design",
        category: "UI/UX Design",
        rating: 4.9,
        price: 79.99,
        students: 8920,
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      },
    ],
  },
];

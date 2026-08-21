export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
  keyTakeaways?: string[];
  image: string;
  category: "EdTech" | "Full-Stack Dev" | "UI/UX Design" | "AI Tools" | "Career Growth";
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
  author: BlogAuthor;
  tags: string[];
}

export const blogCategories = [
  "All",
  "EdTech",
  "Full-Stack Dev",
  "UI/UX Design",
  "AI Tools",
  "Career Growth",
] as const;

export const mockBlogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "future-of-ai-in-modern-web-development-2026",
    title: "The Future of AI in Modern Web Development (2026 Edition)",
    excerpt: "Discover how AI-driven coding assistants, automated design tokens, and serverless LLM streaming are transforming full-stack engineering.",
    content: [
      "Artificial Intelligence is no longer just a buzzword in web development—it has fundamentally shifted how software architects design, build, and deploy production applications.",
      "From intelligent code autocompletion and dynamic design token generation to autonomous agent debugging, modern web developers are shipping complex applications at 5x speed compared to a few years ago.",
      "In this article, we explore the core technologies driving this revolution: Next.js Server Actions with edge streaming, vector database embeddings for personalized user experiences, and automated zero-downtime deployment pipelines."
    ],
    quote: {
      text: "AI will not replace web developers, but developers who harness AI will replace those who do not.",
      author: "Daniel Carter, Senior Full Stack Architect"
    },
    keyTakeaways: [
      "Leverage edge AI streaming for sub-100ms response latencies.",
      "Integrate vector embeddings for semantic search in Next.js applications.",
      "Automate repetitive UI layout code with AI component generation tools."
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop",
    category: "AI Tools",
    date: "August 18, 2026",
    readTime: "6 min read",
    views: 3420,
    featured: true,
    author: {
      name: "Daniel Carter",
      role: "Senior Full Stack Architect @ Vercel & Meta",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      bio: "Full Stack Engineer specializing in Next.js Server Components, GraphQL, TypeScript, and micro-frontend performance."
    },
    tags: ["AI", "Next.js", "React 19", "Web Architecture", "TypeScript"]
  },
  {
    id: "blog-2",
    slug: "mastering-design-systems-in-figma-and-tailwind",
    title: "Mastering Scaleable Design Systems in Figma & Tailwind CSS",
    excerpt: "Learn how to build a unified design system that bridges the gap between designers in Figma and front-end developers using Tailwind CSS.",
    content: [
      "One of the biggest bottlenecks in software development is the friction between product design and engineering implementation.",
      "A robust Design System solves this by standardizing typography scales, color palettes, spacing variables, and accessible interactive state rules across both design tools and codebase CSS utilities.",
      "By mapping Figma variables directly to Tailwind CSS configuration tokens, teams achieve pixel-perfect consistency and eliminate arbitrary CSS values."
    ],
    quote: {
      text: "Consistency is not about rigidity; it is about freeing your team to focus on solving real user problems.",
      author: "Sophia Williams, Principal UX Lead"
    },
    keyTakeaways: [
      "Define semantic color tokens (primary, surface, state-hover) early.",
      "Use Figma component properties to mirror React component props.",
      "Sync design tokens automatically using automated CI build scripts."
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=600&fit=crop",
    category: "UI/UX Design",
    date: "August 12, 2026",
    readTime: "8 min read",
    views: 2850,
    featured: false,
    author: {
      name: "Sophia Williams",
      role: "Principal UI/UX Designer @ Figma",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=200&h=200&fit=crop",
      bio: "Lead Product Designer specializing in Design Systems, User Research, and Micro-interactions."
    },
    tags: ["Figma", "UI/UX", "TailwindCSS", "Design Systems", "Product Design"]
  },
  {
    id: "blog-3",
    slug: "how-to-land-a-senior-frontend-role-in-2026",
    title: "How to Land a Senior Frontend Engineer Role in 2026",
    excerpt: "A practical career guide detailing technical interview strategies, open-source portfolio tips, and system design masterclasses.",
    content: [
      "The bar for Senior Frontend Engineering roles has risen significantly. Companies expect candidate candidates to possess deep expertise in Web Vitals optimization, state synchronization, browser rendering pipelines, and security architecture.",
      "To stand out, developers must demonstrate business impact, ownership of complex codebases, and clear technical leadership during system design interviews.",
      "In this guide, we break down actionable steps to build an impressive portfolio and ace system design discussions."
    ],
    keyTakeaways: [
      "Master web performance metrics (INP, LCP, CLS) and profiling tools.",
      "Build real-world full-stack SaaS applications rather than generic todo lists.",
      "Practice frontend system design: caching, state normalization, offline capabilities."
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
    category: "Career Growth",
    date: "August 05, 2026",
    readTime: "7 min read",
    views: 4120,
    featured: false,
    author: {
      name: "Tanvir Hossain",
      role: "Lead Tech Instructor @ EduMart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      bio: "Senior educator guiding thousands of developers to secure high-paying remote and enterprise engineering jobs."
    },
    tags: ["Career", "Interview Prep", "Frontend", "React", "System Design"]
  },
  {
    id: "blog-4",
    slug: "building-realtime-collaborative-apps-with-websockets",
    title: "Building Real-Time Collaborative Apps with WebSockets & React",
    excerpt: "Explore how to build multiplayer collaborative canvas tools and live text editors using WebSockets, CRDTs, and React state.",
    content: [
      "Real-time multiplayer features—like live cursor tracking, shared document editing, and active user presence indicators—have become standard in modern web software.",
      "Implementing these features requires a solid understanding of WebSocket server connections, Conflict-Free Replicated Data Types (CRDTs), and optimistic UI updates.",
      "We build a step-by-step multiplayer workspace using Node.js, Socket.io, and React 19 hooks."
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    category: "Full-Stack Dev",
    date: "July 28, 2026",
    readTime: "9 min read",
    views: 1980,
    featured: false,
    author: {
      name: "Daniel Carter",
      role: "Senior Full Stack Architect @ Vercel & Meta",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      bio: "Full Stack Engineer specializing in Next.js Server Components, GraphQL, TypeScript, and micro-frontend performance."
    },
    tags: ["WebSockets", "React", "Node.js", "Multiplayer", "Real-time"]
  },
  {
    id: "blog-5",
    slug: "the-shift-towards-personalized-edtech-learning-paths",
    title: "The Shift Towards Personalized EdTech Learning Paths",
    excerpt: "How adaptive algorithms and micro-learning modules help students complete courses at 3x higher rates.",
    content: [
      "Traditional one-size-fits-all video courses often suffer from high student drop-off rates due to static pacing and lack of immediate diagnostic feedback.",
      "Next-generation EdTech platforms leverage adaptive learning paths, dynamic quiz adjustments, and micro-video lectures to keep learners engaged.",
      "Discover how EduMart integrates diagnostic assessments and personalized skill paths to maximize student retention and course completion rates."
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    category: "EdTech",
    date: "July 19, 2026",
    readTime: "5 min read",
    views: 2410,
    featured: false,
    author: {
      name: "Dr. Michael Rodriguez",
      role: "Lead AI Researcher @ OpenAI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      bio: "Machine Learning PhD, LLM Fine-Tuning Expert, and AI Ethics Advocate."
    },
    tags: ["EdTech", "E-Learning", "Adaptive Learning", "Pedagogy", "Education"]
  },
  {
    id: "blog-6",
    slug: "top-10-cybersecurity-best-practices-for-web-developers",
    title: "Top 10 Cybersecurity Best Practices for Web Developers",
    excerpt: "Protect your web apps against XSS, CSRF, SQL Injection, and JWT authorization bypasses with battle-tested security rules.",
    content: [
      "Security can never be an afterthought in web application development. A single unvalidated input or misconfigured Content Security Policy (CSP) can expose sensitive user data.",
      "In this comprehensive breakdown, we review the top 10 OWASP web vulnerabilities and demonstrate exact code implementations to patch them effectively.",
      "Learn how to configure HTTP-only cookies, sanitize rich text input, and implement rate-limiting on sensitive auth API routes."
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    category: "Full-Stack Dev",
    date: "July 10, 2026",
    readTime: "10 min read",
    views: 3890,
    featured: false,
    author: {
      name: "Elena Rostova",
      role: "Ethical Hacker @ CrowdStrike",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      bio: "Certified Ethical Hacker (CEH) and Application Security Engineer protecting cloud infrastructure."
    },
    tags: ["Security", "OWASP", "Web Security", "DevSecOps", "Node.js"]
  },
  {
    id: "blog-7",
    slug: "designing-accessible-web-apps-a11y-guide",
    title: "Designing Accessible Web Apps: A Complete WCAG 2.2 Guide",
    excerpt: "Ensure your web applications are accessible to everyone by implementing semantic HTML, ARIA attributes, and keyboard navigation.",
    content: [
      "Web accessibility (a11y) is an essential aspect of modern front-end engineering. Creating inclusive digital experiences ensures users with visual, auditory, or motor impairments can navigate seamlessly.",
      "We dive into WCAG 2.2 guidelines, focus ring indicators, screen reader landmark roles, and color contrast compliance.",
      "Learn how to audit your web applications using automated lighthouse accessibility suites and voiceover tools."
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=600&fit=crop",
    category: "UI/UX Design",
    date: "June 25, 2026",
    readTime: "6 min read",
    views: 1760,
    featured: false,
    author: {
      name: "Emily Watson",
      role: "Senior UX Researcher @ Stripe",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "UX Researcher passionate about quantitative user testing, accessibility, and checkout flow conversion."
    },
    tags: ["Accessibility", "WCAG", "UI/UX", "a11y", "HTML5"]
  },
  {
    id: "blog-8",
    slug: "mobile-first-responsive-design-in-2026",
    title: "Mobile-First Responsive Layouts with Container Queries",
    excerpt: "Move beyond screen viewport media queries. Use CSS container queries and modern grid subgrids for component-driven layouts.",
    content: [
      "Traditional viewport media queries (`@media (min-width: 768px)`) often fail when building reusable UI components destined for cards, sidebars, or modal overlays.",
      "CSS Container Queries (`@container`) allow individual components to adapt based on their parent container's width rather than the screen size.",
      "We demonstrate practical container query patterns for modern React card components."
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    category: "Full-Stack Dev",
    date: "June 14, 2026",
    readTime: "5 min read",
    views: 2190,
    featured: false,
    author: {
      name: "Aisha Khan",
      role: "Senior Mobile Engineer @ Spotify",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
      bio: "Mobile Engineer specializing in Swift, React Native, and responsive mobile web interfaces."
    },
    tags: ["CSS", "Container Queries", "Responsive", "Frontend", "UI Design"]
  }
];

export function getBlogBySlug(slugOrId: string): BlogPost | undefined {
  return mockBlogPosts.find(
    (b) => b.slug === slugOrId || b.id === slugOrId
  );
}

export function getRelatedBlogs(currentSlug: string, category: string, limit = 3): BlogPost[] {
  return mockBlogPosts
    .filter((b) => b.slug !== currentSlug && (category === "All" || b.category === category))
    .slice(0, limit);
}

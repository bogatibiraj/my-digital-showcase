export const profile = {
  name: "Biraj Bogati",
  title: "Backend & Full-Stack Developer",
  tagline:
    "I build scalable, high-performance web applications with Node.js, NestJS, React and TypeScript.",
  location: "Kathmandu, Nepal",
  email: "virajbogati11@gmail.com",
  phone: "+977-9863477408",
  github: "https://github.com/Birajbgt",
  linkedin: "https://linkedin.com/in/birajbogati/",
  website: "https://birajbogati.com.np",
  summary:
    "Software Developer with a Bachelor's degree in Computing and practical experience building scalable, responsive, and high-performance web applications. Proficient in modern frameworks including Next.js, TanStack Start, React, TypeScript, NestJS, Node.js, and TanStack Query. Currently pursuing an MBA to complement technical expertise with business acumen.",
};

export const skills: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React.js", "Next.js", "TanStack Start", "TanStack Router", "TailwindCSS", "SASS", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Mongoose", "Prisma", "TypeORM", "GraphQL"] },
  { category: "Data & State", items: ["TanStack Query", "Apollo Client", "Zustand", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Linux", "Docker", "Vercel", "Netlify", "Minio / S3"] },
];

export const experience = [
  {
    role: "Backend Developer",
    company: "GoldenTechnosoft",
    period: "Nov 2024 — Present",
    projects: [
      {
        name: "Supertrek",
        bullets: [
          "Built a scalable travel booking webapp with NestJS, TypeScript and GraphQL.",
          "Engineered a complete booking engine with PNR management, ticketing and pricing via Sabre GDS (XML/SOAP & REST).",
          "Designed PostgreSQL schemas and migrations using TypeORM across users, bookings and commissions.",
          "Used RabbitMQ and Redis for async tasks: notifications, processing and third-party API calls.",
          "Built a CMS for blogs, trips, FAQs and banners with Minio (S3-compatible) object storage.",
        ],
      },
      {
        name: "Go Travel Partner",
        bullets: [
          "Developed a scalable backend for flight booking and agency management using NestJS and GraphQL.",
          "Integrated Sabre GDS for booking, PNR and ticketing flows.",
          "Implemented async pipelines with RabbitMQ and caching with Redis.",
        ],
      },
      {
        name: "MazzakoTrip",
        bullets: [
          "Built a feature-rich travel-tech API with Node.js, Express and TypeScript using a Router → Service → Model architecture.",
          "Modeled complex MongoDB collections with Mongoose for bookings, agencies and financial records.",
          "Integrated Sabre GDS via REST and XML for live flight data and PNR management.",
          "Implemented JWT auth combining RBAC and ABAC for granular permissions.",
          "Built realtime chat & notifications with Socket.IO + Redis, and job queues with RabbitMQ.",
          "Used Zod for schema validation and auto-generated OpenAPI docs.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "E-commerce Recommendation System",
    description:
      "AI-powered recommendation engine with a full data pipeline, deep learning model (TensorFlow/Keras) and a Flask web app for real-time personalized suggestions.",
    stack: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
    link: "https://github.com/Birajbgt/Thesis_Ecommerce-Recommendation-System-AI",
  },
  {
    name: "Personal Portfolio",
    description:
      "A modern, responsive multi-page portfolio built with React.js and Vite using reusable UI components.",
    stack: ["React", "Vite", "Tailwind"],
    link: "https://github.com/Birajbgt/Portfolio",
  },
  {
    name: "Secure File Storage",
    description:
      "Desktop file storage app using Fernet encryption with PBKDF2/HMAC-SHA256 key derivation, SQLite metadata and a Tkinter UI.",
    stack: ["Python", "Tkinter", "SQLite", "Cryptography"],
    link: "https://github.com/Birajbgt/securing-file-using-python",
  },
  {
    name: "Resume Recommendation System",
    description:
      "Django + scikit-learn system that ranks resumes against job descriptions using NLP (spaCy) and PyMuPDF for PDF extraction.",
    stack: ["Django", "Python", "scikit-learn", "spaCy"],
    link: "https://github.com/aryan-79/e-commerce.git",
  },
  {
    name: "Chatify",
    description:
      "Full-stack realtime messaging app with React frontend and Node.js + WebSocket backend, JWT auth and persistent storage.",
    stack: ["React", "Node.js", "WebSocket", "JWT"],
    link: "https://websocket-chat-frontend-dun.vercel.app/",
  },
];

export const education = [
  { period: "2025 — 2027", title: "Master's Degree (MBA)", place: "Quest International College" },
  { period: "2022 — 2025", title: "BSc (Hons) Computing", place: "Softwarica College of IT and E-Commerce", note: "Merit" },
  { period: "2019 — 2021", title: "Class 12 (SLC)", place: "Nepal Mega College", note: "GPA 3.3/4" },
  { period: "2019", title: "Class 10 (SEE)", place: "Heritage English Boarding School", note: "GPA 3.34/4" },
];

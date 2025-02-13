export interface Video {
  id: number;
  title: string;
  url: string;
}

export interface Module {
  id: number;
  title: string;
  videos: Video[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  modules: Module[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Master React with advanced patterns and techniques.",
    image: "/course1.jpg",
    details: "This course covers advanced React patterns including hooks, context, and more.",
    modules: [
      {
        id: 1,
        title: "Introduction to Patterns",
        videos: [
          { id: 1, title: "Video 1", url: "/videos/video1.mp4" },
          { id: 2, title: "Video 2", url: "/videos/video2.mp4" },
        ],
      },
      {
        id: 2,
        title: "Advanced Hooks",
        videos: [
          { id: 3, title: "Video 3", url: "/videos/video3.mp4" },
          { id: 4, title: "Video 4", url: "/videos/video4.mp4" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Full-Stack Development with Next.js",
    description: "Build scalable full-stack applications with Next.js.",
    image: "/course2.jpg",
    details: "Learn to build full-stack applications using Next.js, Node.js, and MongoDB.",
    modules: [],
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    description: "Learn TypeScript from scratch and enhance your JavaScript skills.",
    image: "/course3.jpg",
    details: "This course introduces TypeScript, a powerful tool for building robust applications.",
    modules: [],
  },
  {
    id: 4,
    title: "Modern CSS for Developers",
    description: "Explore modern CSS techniques and tools.",
    image: "/course4.jpg",
    details: "Learn about Flexbox, Grid, and responsive design to create stunning web pages.",
    modules: [],
  },
  {
    id: 5,
    title: "Node.js and Express.js Fundamentals",
    description: "Build server-side applications with Node.js and Express.js.",
    image: "/course5.jpg",
    details: "Understand the basics of Node.js and Express.js to create efficient back-end services.",
    modules: [],
  },
  {
    id: 6,
    title: "GraphQL with Apollo",
    description: "Master GraphQL and Apollo for modern API development.",
    image: "/course6.jpg",
    details: "Learn how to build and consume GraphQL APIs using Apollo Client and Server.",
    modules: [],
  },
  {
    id: 7,
    title: "Building RESTful APIs with Django",
    description: "Create RESTful APIs using Django and Django REST Framework.",
    image: "/course7.jpg",
    details: "This course covers the essentials of building APIs with Django and DRF.",
    modules: [],
  },
  {
    id: 8,
    title: "Vue.js for Beginners",
    description: "Get started with Vue.js and build interactive web applications.",
    image: "/course8.jpg",
    details: "Learn the basics of Vue.js, including components, directives, and state management.",
    modules: [],
  },
  {
    id: 9,
    title: "Angular: From Zero to Hero",
    description: "Become proficient in Angular and build dynamic web applications.",
    image: "/course9.jpg",
    details: "This course covers Angular fundamentals, including modules, components, and services.",
    modules: [],
  },
  {
    id: 10,
    title: "Python for Data Science",
    description: "Harness the power of Python for data analysis and visualization.",
    image: "/course10.jpg",
    details: "Learn Python libraries like NumPy, Pandas, and Matplotlib for data science projects.",
    modules: [],
  },
]; 
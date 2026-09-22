export const profile = {
  name: "Mahamud Gazi",
  shortName: "MG",
  title: "Full-Stack Developer",
  stackLine: "Python | Django | Django REST Framework | React | JavaScript",
  tagline:
    "I build scalable web applications and REST APIs using Python, Django, Django REST Framework, React, and modern web technologies.",
  phone: "+8801834-653397",
  phoneHref: "tel:+8801834653397",
  email: "mahamudgazi.bd@gmail.com",
  location: "Uttara, Dhaka, Bangladesh",
  github: "https://github.com/MahamudGazi",
  linkedin: "https://www.linkedin.com/in/mahamudgazi/",
  resumeUrl: "/Mahamud-Gazi-Resume.pdf",
  resumeAvailable: true,
  openTo: [
    "Junior Full-Stack Developer",
    "Django Developer",
    "Software Engineering Intern",
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const overview = [
  { label: "Full-Stack", value: "Python + Django + React" },
  { label: "REST APIs", value: "Django REST Framework" },
  { label: "Databases", value: "MySQL + PostgreSQL" },
  { label: "Focus", value: "Scalable Web Applications" },
];

export const whatIDo = [
  {
    icon: "layers",
    title: "Full-Stack Development",
    text: "Building complete applications with frontend and backend integration.",
  },
  {
    icon: "server",
    title: "Backend Development",
    text: "Developing scalable backend systems using Django.",
  },
  {
    icon: "plug",
    title: "REST API Development",
    text: "Creating RESTful APIs using Django REST Framework.",
  },
  {
    icon: "atom",
    title: "React Development",
    text: "Building responsive and interactive frontend applications.",
  },
  {
    icon: "database",
    title: "Database Design",
    text: "Working with relational databases including MySQL and PostgreSQL.",
  },
  {
    icon: "smartphone",
    title: "Responsive Web Design",
    text: "Creating user-friendly interfaces for desktop, tablet, and mobile devices.",
  },
];

export const skillGroups = [
  { title: "Languages", icon: "code", items: ["Python", "JavaScript", "HTML5", "CSS3"] },
  { title: "Frontend", icon: "atom", items: ["React", "Tailwind CSS", "Vite"] },
  {
    title: "Backend",
    icon: "server",
    items: ["Django", "Django REST Framework", "REST API"],
  },
  { title: "Databases", icon: "database", items: ["MySQL", "PostgreSQL"] },
  { title: "Tools", icon: "wrench", items: ["Git", "GitHub", "Postman", "VS Code"] },
  {
    title: "Core Concepts",
    icon: "shield",
    items: [
      "CRUD Operations",
      "RESTful API Design",
      "JWT Authentication",
      "Role-Based Access Control",
      "Database Design",
      "Responsive Web Design",
    ],
  },
];

export const projectCategories = [
  "All",
  "Full-Stack",
  "Hospital Managment Systems",
  "E-Commerce",
  "Education",
];

export const projects = [
  {
    id: "watchstore",
    name: "WatchStore",
    subtitle: "Full-Stack E-Commerce Platform",
    categories: ["Full-Stack", "E-Commerce"],
    summary:
      "A full-stack e-commerce platform designed for browsing and purchasing products.",
    description:
      "Built a full-stack e-commerce platform with product, category, brand, cart, wishlist, coupon, and order management. Developed RESTful APIs and integrated them with a responsive React frontend. Implemented authentication, user profiles, and an admin dashboard for store operations.",
    tech: ["Django", "Django REST Framework", "React", "Tailwind CSS", "MySQL", "&", "PostgreSQL"],
    features: [
      "Product Management",
      "Category Management",
      "Brand Management",
      "Shopping Cart",
      "Wishlist",
      "Coupon System",
      "Order Management",
      "RESTful APIs",
      "Authentication",
      "User Profiles",
      "Admin Dashboard",
      "Responsive React Frontend",
    ],
    image: "/images/lws.jpg",
    imageAlt: "E-commerce admin dashboard interface mockup for the WatchStore project",
    github: "https://github.com/MahamudGazi/WatchStores",
    demo: null,
    featured: true,
    accent: "from-brand to-cyan",
  },
  {
    id: "lms",
    name: "Learning Management System",
    subtitle: "Full-Stack Multi-Role Platform",
    categories: ["Full-Stack", "Education"],
    summary:
      "A complete Learning Management System designed with multi-role support for Admin, Teacher, and Student users.",
    description:
      "Developed a complete Learning Management System with multi-role support for Admin, Teacher, and Student users. Built features for Courses, Lessons, Enrollments, Assignments, Quizzes, Certificates, Discussions, Payments, and Reviews. Implemented JWT authentication, Role-Based Access Control, and RESTful APIs using Django REST Framework.",
    tech: ["Django", "Django REST Framework", "React", "Tailwind CSS", "MySQL", "JWT"],
    features: [
      "Courses",
      "Lessons",
      "Enrollments",
      "Assignments",
      "Quizzes",
      "Certificates",
      "Discussions",
      "Payments",
      "Reviews",
      "JWT Authentication",
      "Role-Based Access Control",
      "RESTful APIs",
    ],
    roles: ["Admin", "Teacher", "Student"],
    image: "/images/lms.jpg",
    imageAlt: "Learning management system dashboard mockup with courses and lessons",
    github: "https://github.com/MahamudGazi/hospital-management-fullstack",
    demo: null,
    featured: true,
    accent: "from-cyan to-violet",
  },
  {
    id: "hospital",
    name: "Hospital Management System",
    subtitle: "REST API Platform",
    categories: ["Hospital Managment Systems"],
    summary: "A RESTful API-based Hospital Management System.",
    description:
      "Developed RESTful APIs for Doctors, Patients, Departments, Appointments, Prescriptions, Medicines, and Billing. Implemented JWT authentication and Role-Based Access Control for Admin, Doctor, Patient, and Receptionist users.",
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT Authentication"],
    features: [
      "Doctor Management",
      "Patient Management",
      "Department Management",
      "Appointment Management",
      "Prescription Management",
      "Medicine Management",
      "Billing System",
      "JWT Authentication",
      "Role-Based Access Control",
      "CRUD Operations",
      "API Validation",
    ],
    roles: ["Admin", "Doctor", "Patient", "Receptionist"],
    image: "/images/hms.jpg",
    imageAlt: "Hospital management REST API documentation and schedule interface mockup",
    github: "https://github.com/MahamudGazi/hospital_management_project",
    demo: "https://hospital-management-fullstack-8uyj.vercel.app/",
    accent: "from-violet to-brand",
  },
];

export const processSteps = [
  { step: "01", title: "Planning", text: "Understanding requirements and application structure." },
  { step: "02", title: "Database Design", text: "Designing relational database models." },
  {
    step: "03",
    title: "Backend Development",
    text: "Building APIs using Django and Django REST Framework.",
  },
  {
    step: "04",
    title: "Frontend Development",
    text: "Building responsive interfaces using React.",
  },
  {
    step: "05",
    title: "API Integration",
    text: "Connecting frontend applications with backend APIs.",
  },
  {
    step: "06",
    title: "Testing & Improvement",
    text: "Testing functionality and improving application quality.",
  },
];

export const experience = [
  {
    role: "Intern",
    org: "Unique Power Pvt. Ltd.",
    period: "June 2024 – September 2024",
    category: "Technical / Industrial Internship",
    points: [
      "Gained hands-on experience with industrial equipment.",
      "Assisted with maintenance activities.",
      "Assisted with troubleshooting.",
      "Developed practical technical skills.",
      "Developed problem-solving skills.",
      "Developed teamwork skills.",
    ],
    note: "A technical internship — not software development — that built problem solving, teamwork, troubleshooting, and technical discipline.",
  },
];

export const education = [
  {
    degree: "B.Sc. in Mechanical Engineering",
    school: "Anwer Khan Modern University (AKMU)",
    period: "2025 – Present",
    result: null,
  },
  {
    degree: "Diploma in Engineering — Shipbuilding",
    school: "Institute of Marine Technology (IMTB)",
    period: "2020 – 2025",
    result: "CGPA 3.70 / 4.00",
  },
];

export const softSkills = [
  { icon: "puzzle", label: "Problem Solving" },
  { icon: "message", label: "Communication" },
  { icon: "users", label: "Teamwork" },
  { icon: "compass", label: "Leadership" },
  { icon: "shuffle", label: "Adaptability" },
  { icon: "book", label: "Continuous Learning" },
];

export const journey = [
  "Engineering Background",
  "Problem Solving & Technical Experience",
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "Full-Stack Development",
];

export const currentFocus = [
  "Building scalable Django applications",
  "Developing RESTful APIs",
  "Improving backend architecture",
  "Building React applications",
  "Database design",
  "Authentication & authorization",
  "Role-based systems",
  "Clean and maintainable code",
  "Responsive web applications",
];

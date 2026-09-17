// Career start: Jan 2019 (first full-time role)
const CAREER_START = new Date("2019-01-01");
const _now = new Date();
const _totalMonths =
  (_now.getFullYear() - CAREER_START.getFullYear()) * 12 +
  (_now.getMonth() - CAREER_START.getMonth());
const _years = Math.floor(_totalMonths / 12);
const _months = _totalMonths % 12;
export const yearsOfExperience = `${_years}.${_months}+`;

export const profile = {
  name: "Nikhil Anande",
  role: "Senior Full Stack Developer",
  headline: "Building production SaaS, resilient APIs, and practical AI automation.",
  summary:
    `Senior Full Stack Developer with ${yearsOfExperience} years of professional experience building SaaS platforms, enterprise applications, REST APIs, HRMS/Payroll/LMS systems, and business automation solutions.`,
  extendedSummary:
    "I work across architecture, database and API design, business logic, integrations, debugging, deployment, and production delivery. My core stack is PHP/Laravel, Node.js, React.js, SQL, AWS, Docker, and CI/CD, with hands-on LLM, OCR, speech-to-text, and workflow automation experience.",
  email: "nikhilanande58@gmail.com",
  phone: "+91 97248 33864",
  phoneHref: "+919724833864",
  github: "https://github.com/nikhil3112",
  linkedin: "https://www.linkedin.com/in/nikhil-anande-552197101/",
  avatar: "https://avatars.githubusercontent.com/u/55823957",
  resumeFile: "Nikhil_Anande_Resume_September_2026.pdf",
  fullTimeCareerStart: 2019,
  snapshot: [
    "Own architecture, database, API, and business-logic decisions",
    "Build SaaS and enterprise workflows across backend and frontend",
    "Integrate cloud, Microsoft, payment, OCR, and LLM services",
    "Review, validate, deploy, and support production delivery",
  ],
};

export const highlights = [
  { value: yearsOfExperience, label: "Years in professional development" },
  { value: "6", label: "Featured production case studies" },
  { value: "Full-stack", label: "Architecture through deployment" },
  { value: "AI + SaaS", label: "Current engineering focus" },
];

export const focusAreas = [
  "Backend API Development",
  "SaaS Product Development",
  "AI Workflow Automation",
  "Database Design & Query Optimization",
  "Third-Party API Integrations",
  "Payment Gateway Integrations",
];

export const skills = [
  {
    title: "Backend & Full Stack",
    icon: "code",
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "CodeIgniter",
      "Angular",
    ],
  },
  {
    title: "Data, APIs & Security",
    icon: "database",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "REST APIs",
      "Database Design",
      "Query & Index Optimization",
      "JWT",
      "OAuth2",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "DigitalOcean",
      "Hostinger VPS",
    ],
  },
  {
    title: "AI & Automation",
    icon: "sparkles",
    items: [
      "OpenAI / GPT",
      "Gemini",
      "Claude",
      "GitHub Copilot",
      "Tesseract OCR",
      "Speech-to-Text",
      "LLM Integration",
      "Document Processing",
      "Workflow Automation",
      "AI-Assisted Engineering",
    ],
  },
  {
    title: "Integrations & Payments",
    icon: "link",
    items: [
      "Microsoft Graph",
      "Microsoft Planner",
      "Google APIs",
      "Zoom",
      "Dropbox",
      "Stripe",
      "Razorpay",
      "PayPal",
      "Paddle",
    ],
  },
  {
    title: "Engineering Tools & UI",
    icon: "layers",
    items: [
      "Git / GitHub",
      "Postman",
      "Swagger",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
];

export const experiences = [
  {
    company: "Webetron Technology Pvt Ltd",
    role: "Senior Full Stack Developer",
    period: "Apr 2023 - Present",
    location: "Pune, Maharashtra (Remote)",
    accent: "from-violet-500 to-fuchsia-500",
    points: [
      "Design and deliver HRMS, Payroll, LMS, SaaS, and business automation modules using Laravel/PHP, Node.js, React.js, MySQL, and PostgreSQL.",
      "Own application architecture, database and REST API design, business logic, integration decisions, debugging, validation, deployment, and production delivery for assigned solutions.",
      "Build JWT-authenticated APIs and integrate Microsoft Graph, Google, Zoom, and other third-party services.",
      "Support delivery using AWS, Docker, GitHub Actions, and CI/CD.",
      "Implement OpenAI/Gemini-enabled document processing, OCR invoice workflows, speech-to-text task creation, and workflow automation.",
      "Use AI-assisted development for codebase analysis, scaffolding, debugging, refactoring, tests, documentation, and API integration while personally reviewing production code.",
    ],
  },
  {
    company: "Softnice India Pvt Ltd",
    role: "Senior Software Developer",
    period: "Apr 2021 - Mar 2023",
    location: "Vadodara, Gujarat",
    accent: "from-sky-500 to-cyan-500",
    points: [
      "Developed backend functionality for Enlist India, a job portal, using Node.js.",
      "Developed backend modules for business applications using Laravel and MySQL.",
      "Implemented role-based access control, advanced search, reporting, and dashboard functionality.",
      "Optimized database queries, joins, and indexes, and maintained backend business logic for production Laravel applications.",
    ],
  },
  {
    company: "Weblogysphere Technology Pvt Ltd",
    role: "Software Developer",
    period: "Sep 2020 - Apr 2021",
    location: "Vadodara, Gujarat",
    accent: "from-emerald-500 to-teal-500",
    points: [
      "Developed API-driven applications using Laravel and Node.js with modular backend architecture.",
      "Integrated Google, Microsoft, and Dropbox services.",
    ],
  },
  {
    company: "WebbyButter Technology Pvt Ltd",
    role: "Full Stack Developer",
    period: "Jan 2019 - Aug 2020",
    location: "Vadodara, Gujarat",
    accent: "from-amber-500 to-orange-500",
    points: [
      "Project: QRFlyer | Worked on QRFlyer application development using Laravel for the backend and Angular for the frontend.",
      "Project: Logistics Projects | Developed Angular application functionality and integrated RESTful APIs for logistics applications.",
      "Built enterprise applications using Laravel and Angular.",
      "Implemented JWT/OAuth2 authentication and financial/operational API modules.",
    ],
  },
];

export const projects = [
  {
    id: "identra-pro",
    title: "Identra Pro",
    subtitle: "Identity & Smart Attendance SaaS Platform",
    category: "SaaS Platform",
    filterCategory: "saas",
    metric: "Multi-tenant architecture • Automated smart attendance & subscription billing",
    accent: "from-violet-500 to-fuchsia-500",
    description:
      "A multi-tenant platform for identity management, smart attendance, ID cards, subscriptions, agent operations, tenant portals, and payments.",
    tech: ["Laravel", "Node.js", "React.js", "MySQL", "REST APIs"],
    highlights: [
      "Multi-tenant SaaS architecture",
      "Identity, attendance, and ID-card workflows",
      "Subscription plans and pricing management",
      "Agent wallet and tenant portal experiences",
      "Administrative dashboards and payment workflows",
    ],
    engineering: [
      "Designed product workflows across tenants, agents, and administrators.",
      "Built REST API-driven frontend and backend modules.",
      "Implemented role-aware access and business rules for SaaS operations.",
    ],
  },
  {
    id: "factory-task-recorder",
    title: "AI Factory Task Recorder",
    subtitle: "Speech-to-Text Workflow Automation",
    category: "AI Automation",
    filterCategory: "ai",
    metric: "Zero-touch data entry • Hands-free voice-to-task via MS Planner & Teams",
    accent: "from-cyan-500 to-blue-500",
    description:
      "A Hinglish voice-to-task workflow that converts spoken input into structured work items, reminders, and KPI tracking across Microsoft tools.",
    tech: [
      "Node.js",
      "OpenAI",
      "Microsoft Planner API",
      "Power Automate",
      "SharePoint",
      "Teams Adaptive Cards",
    ],
    highlights: [
      "Hinglish speech-to-text input",
      "Structured task creation from natural speech",
      "Planner assignments and reminders",
      "Teams Adaptive Card interactions",
      "KPI and task-progress tracking",
    ],
    engineering: [
      "Created the workflow from voice capture through task creation.",
      "Integrated OpenAI with Microsoft Planner, SharePoint, Teams, and Power Automate.",
      "Structured unformatted speech into reliable task data and follow-up actions.",
    ],
  },
  {
    id: "invoice-dashboard",
    title: "OCR-Based AI Purchase & Invoice Dashboard",
    subtitle: "Document Intelligence & Operations",
    category: "AI + OCR",
    filterCategory: "ai",
    metric: "Automated OCR + LLM workflow • Anomaly flagging with AWS S3 storage",
    accent: "from-orange-500 to-rose-500",
    description:
      "An OCR and LLM-assisted invoice workflow that extracts structured purchasing data and surfaces anomalies from scanned documents.",
    tech: [
      "Laravel",
      "Node.js",
      "React.js",
      "Tesseract OCR",
      "OpenAI / GPT",
      "MySQL",
      "AWS S3",
    ],
    highlights: [
      "Scanned invoice ingestion and storage",
      "Vendor, line-item, and total extraction",
      "OCR plus LLM-assisted document interpretation",
      "Anomaly identification for invoice review",
      "Operational dashboard for processed documents",
    ],
    engineering: [
      "Built a document-processing flow across Laravel, Node.js, React.js, OCR, and LLM services.",
      "Mapped semi-structured invoice content into application-ready data.",
      "Used AWS S3 and MySQL for document and extracted-data workflows.",
    ],
  },
  {
    id: "hrms-lms",
    title: "HRMS & Payroll + Enterprise LMS",
    subtitle: "Enterprise Workforce Platforms",
    category: "Enterprise Systems",
    filterCategory: "enterprise",
    metric: "Comprehensive workforce platform • Automated payroll & modular LMS",
    accent: "from-emerald-500 to-teal-500",
    description:
      "Enterprise modules for payroll, attendance, employee lifecycle management, learning, assessments, progress tracking, and administrative analytics.",
    tech: [
      "Laravel",
      "Node.js",
      "React.js",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "AWS",
    ],
    highlights: [
      "Payroll and attendance modules",
      "Employee lifecycle workflows",
      "Course and content management",
      "Progress tracking and assessments",
      "Administrative reporting and analytics",
    ],
    engineering: [
      "Designed modular backend and API workflows for enterprise operations.",
      "Implemented role-based access across HR, employee, learner, and administrator experiences.",
      "Supported deployment and production delivery across cloud-hosted environments.",
    ],
  },
  {
    id: "enlist-india",
    title: "Enlist India",
    subtitle: "Job Portal & Candidate Matching Platform",
    category: "Job Portal Platform",
    filterCategory: "saas",
    metric: "High-throughput candidate search • Optimized MySQL query indexing & RBAC",
    accent: "from-blue-500 to-indigo-500",
    description:
      "A high-performance recruitment portal and candidate matching platform built with scalable Node.js backend services, advanced query filtering, recruiter pipelines, and role-based permissions.",
    tech: ["Node.js", "Express.js", "Laravel", "MySQL", "REST APIs", "RBAC"],
    highlights: [
      "Candidate job search and application lifecycle",
      "Advanced multi-criteria search and filter queries",
      "Role-based access control for recruiters and candidates",
      "Administrative dashboards and hiring metric reports",
      "High-throughput query indexing and database optimization",
    ],
    engineering: [
      "Engineered core backend APIs and services using Node.js and Express.",
      "Designed relational schemas and optimized complex MySQL joins and indexes for rapid search.",
      "Implemented role-based authorization layers and candidate application pipelines.",
    ],
  },
  {
    id: "qrflyer",
    title: "QRFlyer",
    subtitle: "Dynamic QR Code & Marketing Flyer Platform",
    category: "Marketing Automation",
    filterCategory: "enterprise",
    metric: "Dynamic QR flyer engine • Real-time scan tracking & marketing analytics",
    accent: "from-amber-500 to-rose-500",
    description:
      "A full-stack marketing application for generating, customizing, and managing dynamic trackable QR codes and promotional flyers with campaign analytics and high-speed export.",
    tech: ["Laravel", "Angular", "PHP", "MySQL", "RESTful APIs", "JWT"],
    highlights: [
      "Dynamic QR code generation and instant flyer customization",
      "Interactive Angular frontend for intuitive flyer layout design",
      "Modular Laravel RESTful API backend architecture",
      "Secure JWT and OAuth2 authentication and user management",
      "Campaign engagement tracking, scan analytics, and asset export",
    ],
    engineering: [
      "Developed full-stack architecture connecting Laravel backend with Angular client.",
      "Designed RESTful APIs for flyer templates, asset generation, and authentication.",
      "Implemented dynamic QR generation logic and database models for user campaigns.",
    ],
  },
];

export const education = {
  degree: "B.E. Electronics & Communication",
  institution: "ITM Vadodara University",
  period: "2013 - 2017",
  earlierCareer: [
    "PHP Trainee - TOP Technologies | Nov 2017 - Jul 2018",
    "Web Developer Intern - TaxSmart Technologies Pvt Ltd | Sep 2018 - Dec 2018",
  ],
};

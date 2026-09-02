import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 }
};

export default function App() {
  const [dark, setDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Enterprise HRMS & Payroll System",
      description: "Enterprise-grade HRMS platform managing employee lifecycle, payroll automation, compliance, and accounting workflows for large organizations.",
      tech: ["Laravel", "React", "MySQL", "REST APIs", "AWS"],
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "Automated payroll processing with PF, ESIC, TDS compliance",
        "Loan & advance management with EMI deduction system",
        "Employee Self-Service (ESS) portal with real-time access",
        "Attendance, leave & shift management with reporting dashboards"
      ],
      responsibilities: [
        "Architected scalable HRMS system with optimized database schema",
        "Developed payroll engine handling statutory calculations and edge cases",
        "Built secure REST APIs with role-based authentication",
        "Optimized large dataset queries improving performance",
        "Implemented modular architecture for maintainability and scalability"
      ],
      impact: [
        "Reduced manual payroll processing effort by 70%",
        "Improved salary accuracy and compliance",
        "Enabled centralized HR operations across departments"
      ]
    },
    {
      title: "Learning Management System (LMS)",
      description: "Scalable LMS platform for corporate training, progress tracking, and certification workflows.",
      tech: ["Laravel", "MySQL", "AJAX", "REST APIs"],
      gradient: "from-blue-500 to-cyan-500",
      highlights: [
        "Dynamic course & content management system",
        "Assessment engine with certification workflows",
        "Real-time user progress tracking",
        "Admin analytics dashboard for reporting"
      ],
      responsibilities: [
        "Developed backend modules for courses, lessons, and assessments",
        "Designed progress tracking and completion logic",
        "Built REST APIs for frontend integration",
        "Implemented role-based access control system",
        "Optimized queries for faster report generation"
      ],
      impact: [
        "Improved employee training visibility",
        "Reduced manual tracking efforts",
        "Centralized learning management system"
      ]
    },
    {
      title: "Job & Recruitment Portal",
      description: "End-to-end recruitment platform for managing job postings, candidate workflows, and hiring processes.",
      tech: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
      gradient: "from-green-500 to-emerald-500",
      highlights: [
        "Role-based access for admin, employers, and candidates",
        "Candidate application tracking system",
        "Resume upload & structured data handling",
        "Dashboard for employers and admins"
      ],
      responsibilities: [
        "Designed recruitment workflow and application lifecycle",
        "Developed secure file upload and resume storage system",
        "Built admin and employer dashboards",
        "Optimized search queries for candidate filtering",
        "Implemented scalable backend APIs"
      ],
      impact: [
        "Reduced hiring cycle time",
        "Improved candidate tracking efficiency",
        "Streamlined recruitment operations"
      ]
    },
    {
      title: "Invoice to Excel Automation (OCR + ERP)",
      description: "OCR-based automation system converting invoices into structured ERP-ready Excel formats.",
      tech: ["PHP", "Tesseract OCR", "PhpSpreadsheet", "React Native", "Imagick"],
      gradient: "from-orange-500 to-red-500",
      highlights: [
        "OCR-based invoice parsing from PDF and images",
        "Line-item extraction (HSN, Qty, GST, Amount)",
        "Automated Excel generation using ERP templates",
        "Mobile app for invoice scanning and upload"
      ],
      responsibilities: [
        "Built OCR pipeline using Tesseract for text extraction",
        "Developed intelligent parsing logic for structured data",
        "Automated Excel generation using PhpSpreadsheet",
        "Integrated mobile app with backend APIs",
        "Improved OCR accuracy with preprocessing techniques"
      ],
      impact: [
        "Reduced manual data entry by 80%",
        "Improved processing speed and accuracy",
        "Enabled seamless ERP integration"
      ]
    },
    {
      title: "Super Market Management System",
      description: "Full-stack e-commerce system for managing products, inventory, orders, and online payments.",
      tech: ["Laravel", "Node.js", "React", "MySQL", "Stripe"],
      gradient: "from-indigo-500 to-purple-500",
      highlights: [
        "Product & category management system",
        "User authentication and cart flow",
        "Order management dashboard",
        "Stripe payment gateway integration"
      ],
      responsibilities: [
        "Developed REST APIs for products, orders, and users",
        "Implemented secure authentication system",
        "Integrated Stripe for payment processing",
        "Built admin dashboard for inventory and order tracking",
        "Optimized API performance and response time"
      ],
      impact: [
        "Enabled online ordering for retail business",
        "Improved order tracking and management",
        "Built scalable e-commerce foundation"
      ]
    },
    {
      title: "Sales Dashboard & Invoice Automation",
      description: "Role-based sales dashboard with automation for SRP tracking, order workflows, and invoice generation.",
      tech: ["Node.js", "React", "SSMS", "WhatsApp API", "REST APIs"],
      gradient: "from-yellow-500 to-orange-500",
      highlights: [
        "SRP completion tracking integrated with SSMS",
        "LOT-based photo upload and mapping system",
        "WhatsApp integration for real-time sharing",
        "Sales Order workflow with approval system",
        "Automated Invoice & e-Way Bill generation"
      ],
      responsibilities: [
        "Designed end-to-end workflow from SRP to invoice generation",
        "Developed React dashboard for role-based access",
        "Built Node.js APIs for automation and integrations",
        "Integrated external APIs for invoice and e-way bill generation",
        "Implemented notification and status tracking system"
      ],
      impact: [
        "Reduced manual coordination across teams",
        "Automated billing and invoicing workflows",
        "Improved operational efficiency and tracking",
        "Enabled real-time visibility of sales processes"
      ]
    }
  ];

  const experiences = [
    {
      company: "Webetron Technology Pvt Ltd",
      role: "Sr. Full Stack Developer",
      period: "2023 - Present",
      location: "Pune, Maharashtra (Remote)",
      color: "from-purple-500 to-pink-500",
      points: [
        "Designed and implemented OpenAI-powered automation solutions across Laravel, CodeIgniter, Node.js, and React ecosystems, enabling intelligent workflows and dynamic content generation.",
        "Built scalable enterprise-grade applications including HRMS, Payroll, and LMS systems with modular architecture and role-based access control.",
        "Developed high-performance REST APIs and microservice-based architecture to support large-scale SaaS applications.",
        "Implemented React + Node.js dashboards for real-time monitoring, reporting, and automation workflows.",
        "Integrated third-party APIs including Microsoft Graph, Google APIs, and Zoom for seamless enterprise connectivity.",
        "Optimized complex SQL queries and database design, improving performance and reducing response time.",
        "Worked on cloud deployments (AWS EC2, Azure) and CI/CD pipelines for smooth production releases.",
        "Implemented secure authentication systems using JWT, OAuth, and API token strategies.",
        "Collaborated with cross-functional teams to deliver scalable and maintainable solutions.",
        "Led feature development and contributed to system architecture decisions."
      ]
    },
    {
      company: "Softnice India Pvt Ltd",
      role: "Sr. Laravel Developer",
      period: "2021 - 2023",
      location: "Vadodara, Gujarat",
      color: "from-blue-500 to-cyan-500",
      points: [
        "Designed and developed a full-featured Job Portal system using Laravel with scalable architecture.",
        "Implemented complete recruitment workflow including job posting, candidate management, and admin dashboards.",
        "Built dynamic and responsive UI using HTML5, CSS3, JavaScript, and AJAX.",
        "Developed REST APIs for seamless frontend-backend communication.",
        "Optimized MySQL database structure and queries, improving performance by reducing load time.",
        "Implemented role-based authentication and secure data handling.",
        "Worked on file upload systems including resume parsing and storage.",
        "Improved system performance and reduced query execution time significantly.",
        "Maintained and enhanced existing applications with bug fixes and feature updates."
      ]
    },
    {
      company: "WeblogySphere Technology Pvt Ltd",
      role: "Laravel Developer",
      period: "Sep 2020 - Apr 2021",
      location: "Vadodara, Gujarat",
      color: "from-green-500 to-emerald-500",
      points: [
        "Developed web applications using Laravel framework with clean MVC architecture.",
        "Integrated third-party APIs including Google, Microsoft, and Dropbox services.",
        "Built responsive frontend interfaces using HTML5, CSS3, and JavaScript.",
        "Worked on REST API development and backend logic implementation.",
        "Collaborated with team members to deliver client-based solutions.",
        "Handled bug fixing, debugging, and performance improvements."
      ]
    },
    {
      company: "Webbybutter Technology Pvt Ltd",
      role: "Laravel Developer",
      period: "Jan 2019 – Aug 2020",
      location: "Vadodara, Gujarat",
      color: "from-orange-500 to-red-500",
      points: [
        "Developed Angular-based frontend interfaces integrated with Laravel backend APIs.",
        "Implemented authentication using Laravel Passport and JWT.",
        "Worked on financial and operational modules with complex business logic.",
        "Designed REST APIs and backend services for enterprise use cases.",
        "Built responsive UI using HTML5, CSS3, and JavaScript.",
        "Maintained and optimized legacy codebases for better performance.",
        "Collaborated with senior developers to improve architecture and workflows."
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(sectionId);
    }
  };

  const getProjectIcon = (title) => {
    if (title.includes("HRMS")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10 0v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6m10 0H7"/>
        </svg>
      );
    }

    if (title.includes("Learning")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l-8 4 8 4 8-4-8-4zm0 6v6m-8-6v6m16-6v6"/>
        </svg>
      );
    }

    if (title.includes("Recruitment")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11a4 4 0 11-8 0 4 4 0 018 0zm2 8a6 6 0 10-12 0h12z"/>
        </svg>
      );
    }

    if (title.includes("Invoice")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M7 4h10v16l-5-3-5 3V4z"/>
        </svg>
      );
    }

    if (title.includes("Super Market")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13h10"/>
        </svg>
      );
    }

    if (title.includes("Sales")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3v18m0 0l-4-4m4 4l4-4"/>
        </svg>
      );
    }

    return null;
  };

  return (
    <div className={`min-h-screen font-sans relative overflow-hidden ${dark ? 'bg-black' : 'bg-white'}`}>
      
      {/* GLASS PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0">

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/10 backdrop-blur-md rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

      </div>

      {/* CURSOR SPOTLIGHT */}
      {/*<div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background: `radial-gradient(
            600px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255,255,255,0.08),
            transparent 80%
          )`
        }}
      />*/}

      {/* PREMIUM AURORA BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Blob 1 */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-blob top-[-100px] left-[-100px]" />

        {/* Blob 2 */}
        <div className="absolute w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 top-[40%] right-[-100px]" />

        {/* Blob 3 */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-[-100px] left-[30%]" />

        {/* Soft overlay */}
        <div className="absolute inset-0 backdrop-blur-[120px]" />

      </div>

      {/* Theme Toggle */}
      <button
          onClick={() => setDark(!dark)}
          className={`fixed top-6 right-6 z-50 flex items-center w-16 h-9 px-1 rounded-full border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
            dark
              ? 'bg-white/10 border-white/20'
              : 'bg-black/10 border-black/20'
          }`}
        >

          {/* Sliding Circle */}
          <div
            className={`flex items-center justify-center w-7 h-7 rounded-full shadow-md transform transition-all duration-300 ${
              dark
                ? 'translate-x-7 bg-yellow-400'
                : 'translate-x-0 bg-gray-800'
            }`}
          >
            {dark ? (
              /* Sun Icon */
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4V2m0 20v-2m8-8h2M2 12H4m12.95 6.95l1.414 1.414M4.636 4.636L6.05 6.05m12.728-1.414L17.364 6.05M6.05 17.95l-1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3c0 .34.02.67.05 1A7 7 0 0021 12.79z" />
              </svg>
            )}
          </div>

        </button>

      {/* Hero Section */}
  
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-20 left-1/4" />
          <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full bottom-20 right-1/4" />
        </div>

        <div className="max-w-6xl mx-auto text-center z-10">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.08 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-60" />
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/55823957"
                alt="Nikhil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-5xl md:text-7xl font-black mb-4 ${
              dark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Nikhil Anande
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Sr. Full Stack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
              dark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            8+ years building scalable SaaS platforms, HRMS systems, and API-driven applications using Laravel, Node, React, and Cloud technologies.
          </motion.p>

          {/*  SOCIAL UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-5 mb-10 flex-wrap"
          >

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nikhil-anande-552197101/"
              target="_blank"
              rel="noreferrer"
              className={`group relative p-4 rounded-2xl border backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                dark
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white border-gray-200'
              }`}
            >
              <svg
                className="w-6 h-6 text-[#0A66C2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 
                2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                5-5V5c0-2.761-2.239-5-5-5zM7.12 
                20.452H3.56V9h3.56v11.452zM5.34 
                7.433a2.067 2.067 0 110-4.134 
                2.067 2.067 0 010 4.134zM20.452 
                20.452h-3.56v-5.605c0-1.337-.026-3.057-1.863-3.057-1.865 
                0-2.15 1.455-2.15 2.962v5.7h-3.56V9h3.418v1.561h.048c.476-.9 
                1.637-1.85 3.368-1.85 3.602 0 4.268 2.37 
                4.268 5.455v6.286z"/>
              </svg>

              <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition ${
                dark ? 'text-white/70' : 'text-gray-600'
              }`}>
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nikhil3112"
              target="_blank"
              rel="noreferrer"
              className={`group relative p-4 rounded-2xl border backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                dark
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white border-gray-200'
              }`}
            >
              <svg
                className={`w-6 h-6 ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 
                12c0 5.09 3.29 9.41 7.86 
                10.94.57.1.78-.25.78-.55 
                0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 
                1.17.08 1.78 1.2 1.78 1.2 
                1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.68 
                0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.45.11-3.02 
                0 0 .98-.31 3.2 1.17.93-.26 1.93-.39 2.92-.39 
                1 0 2 .13 2.92.39 2.22-1.48 
                3.2-1.17 3.2-1.17.63 1.57.23 
                2.73.11 3.02.75.8 1.2 1.82 
                1.2 3.07 0 4.41-2.69 5.38-5.25 
                5.67.41.36.77 1.1.77 2.22 
                0 1.6-.01 2.89-.01 3.28 
                0 .3.2.66.79.55A10.51 
                10.51 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
              </svg>

              <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition ${
                dark ? 'text-white/70' : 'text-gray-600'
              }`}>
                GitHub
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:nikhilanande58@gmail.com"
              className={`group relative p-4 rounded-2xl border backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                dark
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white border-gray-200'
              }`}
            >
              <svg
                className="w-6 h-6 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.065L.8 6.4A2 2 0 012.4 
                6h19.2a2 2 0 011.6.4L12 
                13.065zM23.2 8.8v9.2a2 2 0 01-2 
                2H2.8a2 2 0 01-2-2V8.8l11.2 
                6.665L23.2 8.8z"/>
              </svg>

              <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition ${
                dark ? 'text-white/70' : 'text-gray-600'
              }`}>
                Email
              </span>
            </a>

          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

            {/* Email */}
            <a
              href="mailto:nikhilanande58@gmail.com"
              className={`group flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                dark
                  ? 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
              } shadow-lg hover:scale-105`}
            >

              {/* Email Icon */}
              <svg
                className={`w-5 h-5 ${
                  dark ? 'text-pink-400' : 'text-pink-500'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.065L.8 6.4A2 2 0 012.4 6h19.2a2 2 0 011.6.4L12 13.065zM23.2 8.8v9.2a2 2 0 01-2 2H2.8a2 2 0 01-2-2V8.8l11.2 6.665L23.2 8.8z"/>
              </svg>

              <span className="text-sm font-medium tracking-wide">
                nikhilanande58@gmail.com
              </span>

            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919724833864"
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                dark
                  ? 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
              } shadow-lg hover:scale-105`}
            >

              {/* WhatsApp Icon */}
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.4 0 .06 5.34.06 12c0 2.12.56 4.18 1.62 6L0 24l6.2-1.62A11.9 11.9 0 0012.06 24c6.66 0 12-5.34 12-12 0-3.2-1.24-6.2-3.54-8.52zM12.06 21.82c-1.88 0-3.72-.5-5.32-1.44l-.38-.22-3.68.96.98-3.58-.24-.38a9.78 9.78 0 01-1.52-5.16c0-5.44 4.44-9.88 9.9-9.88 2.64 0 5.12 1.02 6.98 2.9a9.82 9.82 0 012.9 6.98c0 5.46-4.44 9.9-9.88 9.9zm5.44-7.44c-.3-.16-1.78-.88-2.06-.98-.28-.1-.48-.16-.68.16s-.78.98-.96 1.18c-.18.2-.36.22-.66.06-.3-.16-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.62.14-.14.3-.36.44-.54.14-.18.18-.3.28-.5.1-.2.04-.38-.02-.54-.06-.16-.68-1.64-.94-2.26-.26-.62-.52-.54-.68-.54h-.58c-.2 0-.52.08-.8.38s-1.04 1.02-1.04 2.5c0 1.48 1.06 2.92 1.2 3.12.14.2 2.08 3.18 5.04 4.46.7.3 1.24.48 1.66.62.7.22 1.34.18 1.84.1.56-.08 1.78-.72 2.04-1.42.26-.7.26-1.3.18-1.42-.08-.12-.28-.2-.58-.36z"/>
              </svg>

              <span className="text-sm font-medium tracking-wide">
                +91 97248 33864
              </span>

            </a>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
            ↓
          </div>

        </div>
      </motion.section>

      {/* Navigation */}
      <nav className={`sticky top-0 z-40 backdrop-blur-xl ${
          dark ? 'bg-gray-900/70' : 'bg-white/70'
        }`}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">

            <div className={`flex gap-2 p-2 rounded-2xl ${
              dark ? 'bg-white/10 border border-white/10' : 'bg-gray-100 border border-gray-200'
            }`}>

              {['home', 'about', 'experience', 'projects'].map((item) => (
                
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-5 py-2 rounded-xl text-sm md:text-base font-semibold capitalize transition-all duration-300 ${
                    
                    activeTab === item
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                      : dark
                      ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900'
                  }`}
                >

                  {item}

                  {/* subtle hover glow */}
                  {activeTab === item && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-md -z-10" />
                  )}

                </button>

              ))}

            </div>

          </div>
        </nav>

      <div className="relative z-10">
        {/* About Section */}
        <motion.section
          id="about"
          className="py-20 px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-5xl font-black text-center mb-16 ${
                dark ? 'text-white' : 'text-gray-900'
              }`}
            >
              About Me
            </motion.h2>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-8 md:p-12 rounded-3xl border backdrop-blur-xl ${
                dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
              } shadow-xl`}
            >

              {/* Top Section */}
              <div className="grid md:grid-cols-2 gap-10 mb-10">

                {/* Left - Description */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h3 className={`text-2xl font-bold mb-4 ${
                    dark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Professional Summary
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    dark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Senior Full Stack Developer with 8+ years of experience building 
                    scalable enterprise applications. Specialized in Laravel, Node.js, React, 
                    and API-driven systems with strong expertise in system architecture, 
                    performance optimization, and secure integrations.
                    <br /><br />
                    Experienced in developing HRMS, Payroll, LMS, Recruitment systems, 
                    and automation platforms including OCR-based ERP integrations and 
                    OpenAI-powered workflows.
                  </p>
                </motion.div>

                {/* Right - Highlights */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {[
                    "8+ Years Experience in Full Stack Development",
                    "Expert in Laravel, Node.js, React Ecosystem",
                    "Strong in REST APIs & Microservices",
                    "Worked on AI Automation & OCR Systems",
                    "Cloud Deployment (AWS / Azure)",
                    "Performance Optimization & Scalability"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >

                      {/* SVG Check Icon */}
                      <div className="p-1 rounded-full bg-purple-500/20">
                        <svg
                          className="w-4 h-4 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className={`text-sm ${
                        dark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item}
                      </span>

                    </motion.div>
                  ))}
                </motion.div>

              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >

                {[
                  {
                    label: "Experience",
                    value: "8+ Years",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                      </svg>
                    )
                  },
                  {
                    label: "Projects",
                    value: "20+ Completed",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18"/>
                      </svg>
                    )
                  },
                  {
                    label: "Technologies",
                    value: "10+ Stack",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                      </svg>
                    )
                  },
                  {
                    label: "APIs Built",
                    value: "50+",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5-6h3"/>
                      </svg>
                    )
                  }
                ].map((stat, i) => (

                  <motion.div
                    key={i}

                    // 🔥 Entry animation
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}

                    // 🔥 Hover animation
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}

                    className={`relative p-5 rounded-2xl text-center border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
                      dark
                        ? 'bg-white/5 border-white/10 hover:bg-white/10'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 hover:opacity-100 transition duration-500" />

                    {/* Icon */}
                    <div className="flex justify-center mb-2 text-purple-400">
                      {stat.icon}
                    </div>

                    {/* Value */}
                    <div className="text-xl font-bold text-purple-500">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className={`text-xs ${
                      dark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>

                  </motion.div>

                ))}

              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}>
                  Core Technologies
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    { name: "PHP", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
                    { name: "Laravel", color: "bg-red-500/10 text-red-400 border-red-500/20" },
                    { name: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
                    { name: "React.js", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
                    { name: "MySQL", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
                    { name: "AWS EC2", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
                    { name: "REST APIs", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                    { name: "Azure (VM & SQL Server)", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                    { name: "API Integration", color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20" }
                  ].map((tech, i) => (

                    <motion.span
                      key={i}

                      // 🔥 Entry animation
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}

                      // 🔥 Hover animation
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}

                      className={`px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-xl cursor-default transition-all duration-300 hover:shadow-xl ${tech.color}`}
                    >
                      {tech.name}
                    </motion.span>

                  ))}

                </div>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-5 ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Expertise
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    "HRMS & Payroll Systems",
                    "Salary Processing (PF, ESIC, TDS)",
                    "Loan & EMI Management Systems",
                    "REST API Development & Integration",
                    "Microservices Architecture",
                    "SaaS Application Development",
                    "Authentication (JWT / OAuth)",
                    "Database Design & Optimization",
                    "Query Optimization (Large Data)",
                    "Cloud Deployment (AWS / Azure)",
                    "OCR & Document Processing",
                    "ERP & Accounting Integrations",
                    "WhatsApp API & Notification Systems",
                    "Role-Based Access Control (RBAC)",
                    "System Automation & Workflow Design"
                  ].map((skill, i) => (

                    <motion.span
                      key={i}

                      // 🔥 Animation magic
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}

                      // 🔥 Hover animation
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}

                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default ${
                        dark
                          ? 'bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20'
                          : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>
              </motion.div>

            </motion.div>

          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="py-20 px-6"
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-5xl font-black text-center mb-16 ${
                dark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Experience
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (

                <motion.div
                  key={idx}

                  // ENTRY ANIMATION
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}

                  // HOVER ANIMATION
                  whileHover={{ scale: 1.03, y: -5 }}

                  className={`group relative p-8 rounded-3xl backdrop-blur-xl border shadow-2xl ${
                    dark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                  }`}
                  style={{
                    boxShadow: dark
                      ? '0 25px 50px rgba(168, 85, 247, 0.2)'
                      : '0 25px 50px rgba(0,0,0,0.1)',
                  }}
                >

                  {/* Gradient Hover Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.color}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">

                    {/* ICON ANIMATION */}
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} shadow-xl`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12h6M9 16h6M9 8h6M5 6h14M5 18h14" />
                      </svg>
                    </motion.div>

                    <div className="flex-1">

                      <h3 className={`text-2xl font-bold mb-2 ${
                        dark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.company}
                      </h3>

                      <p className={`text-lg mb-2 ${
                        dark ? 'text-purple-300' : 'text-purple-600'
                      }`}>
                        {exp.role}
                      </p>

                      <p className={`text-sm mb-4 ${
                        dark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {exp.period} • {exp.location}
                      </p>

                      <ul className={`space-y-2 ${
                        dark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.points.map((point, i) => (

                          <motion.li
                            key={i}

                            // STAGGER ANIMATION
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}

                            className="flex items-start gap-2"
                          >
                            <span className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`} />
                            <span>{point}</span>
                          </motion.li>

                        ))}
                      </ul>

                    </div>
                  </div>
                </motion.div>

              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-20 px-6"
          id="projects"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-5xl font-black text-center mb-16 ${
              dark ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                
                <motion.div
                  key={idx}
                  onClick={() => setSelectedProject(project)}
                  
                  // Animation yaha add kiya hai
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}

                  className={`group relative p-6 rounded-3xl backdrop-blur-xl border cursor-pointer ${
                    dark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                  }`}
                  style={{
                    boxShadow: dark 
                      ? '0 25px 50px rgba(0,0,0,0.3)' 
                      : '0 25px 50px rgba(0,0,0,0.1)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className={`mb-4 p-3 rounded-2xl bg-gradient-to-br ${project.gradient} inline-block text-2xl`}>
                    {getProjectIcon(project.title)}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    dark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    dark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-lg font-medium ${
                          dark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                </motion.div>

              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            
            {/* Heading Animation */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl font-black text-center mb-16 ${
                dark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Education
            </motion.h2>

            {/* Card Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`group relative p-8 md:p-12 rounded-3xl backdrop-blur-2xl border shadow-2xl ${
                dark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}
              style={{
                boxShadow: dark
                  ? '0 25px 60px rgba(168, 85, 247, 0.2)'
                  : '0 25px 50px rgba(0,0,0,0.1)'
              }}
            >
              
              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition duration-500" />

              <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                
                {/* Icon Animation */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-3v3m12-3v3"
                    />
                  </svg>
                </motion.div>

                <div className="flex-1">
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    dark ? 'text-white' : 'text-gray-900'
                  }`}>
                    ITM Vadodara University
                  </h3>

                  <p className={`text-lg mb-2 ${
                    dark ? 'text-green-300' : 'text-green-600'
                  }`}>
                    B.E Electronics & Communication
                  </p>

                  <p className={`text-sm mb-4 ${
                    dark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    2017 - 2021
                  </p>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer
          className={`relative py-12 px-6 border-t ${
            dark ? 'border-white/10 bg-black/30' : 'border-gray-200 bg-white/70'
          } backdrop-blur-xl`}
        >
          <div className="max-w-6xl mx-auto text-center">

            {/* Name + Glow */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-xl font-bold mb-2 ${
                dark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Nikhil Anande
            </motion.h3>

            {/* Dynamic Year */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-sm ${
                dark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              © {new Date().getFullYear()} All rights reserved.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xs mt-2 ${
                dark ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
            </motion.p>

            {/* Divider Line */}
            <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 opacity-50" />

          </div>
        </footer>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.8, y: 80, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scroll rounded-3xl border border-white/20 bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl shadow-[0_30px_80px_rgba(168,85,247,0.3)]"
            >

              {/* Header */}
              <div className="sticky top-0 z-10 flex justify-between items-start p-6 rounded-t-3xl bg-gradient-to-r from-purple-500 to-pink-500">
                
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-black text-white pr-4"
                >
                  {selectedProject.title}
                </motion.h2>

                {/* SVG Close Icon */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:rotate-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-10">

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {selectedProject.description}
                </motion.p>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    
                    {/* Code Icon */}
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>

                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`px-4 py-2 rounded-xl bg-gradient-to-r ${selectedProject.gradient} text-white font-semibold shadow-lg`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    
                    {/* Check Icon */}
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>

                    Key Features
                  </h3>

                  <ul className="space-y-3">
                    {selectedProject.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <svg className="w-4 h-4 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    
                    {/* Briefcase Icon */}
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6h6m2 0a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2m2 0V4h6v2" />
                    </svg>

                    My Responsibilities
                  </h3>

                  <ul className="space-y-3">
                    {selectedProject.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <svg className="w-4 h-4 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    
                    {/* Rocket Icon */}
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7M5 19h14" />
                    </svg>

                    Business Impact
                  </h3>

                  <ul className="space-y-3">
                    {selectedProject.impact.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <svg className="w-4 h-4 text-pink-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 12s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* FLOAT PARTICLES */
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-30px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.5; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* APPLE HOVER */
        .card-hover::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            300px circle at var(--x) var(--y),
            rgba(255,255,255,0.15),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .card-hover:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [dark, setDark] = useState(true);

  const skillBox =
    "px-3 py-1 rounded-md text-sm font-medium inline-block mr-2 mb-2 shadow";

  const projects = [
    {
      title: "Enterprise HRMS & Payroll System",
      description:
        "Enterprise-grade HRMS platform handling employee lifecycle, attendance, payroll processing, loan & advance management, and accounting workflows.",
      tech: ["Laravel", "React", "MySQL", "REST APIs", "AWS"],
      highlights: [
        "Automated salary processing (PF, ESIC, TDS)",
        "Loan & advance with EMI deduction",
        "Employee Self-Service (ESS) portal",
      ],
    },
    {
      title: "Learning Management System (LMS)",
      description:
        "Scalable LMS platform for corporate training with course management, assessments, progress tracking, and certification workflows.",
      tech: ["Laravel", "MySQL", "AJAX", "REST APIs"],
      highlights: [
        "Course & content management",
        "Assessment & certification system",
        "Admin analytics dashboard",
      ],
    },
    {
      title: "Job & Recruitment Portal",
      description:
        "Recruitment management system enabling job posting, candidate applications, resume uploads, and hiring workflows.",
      tech: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Role-based access control",
        "Candidate application tracking",
        "Employer & admin dashboards",
      ],
    },
    {
      title: "Invoice to Excel Automation (OCR + ERP)",
      description:
        "Automation system that extracts line-item data from purchase invoice PDFs or images and converts them into ERP-ready Excel files for Logic ERP import.",
      tech: [
        "PHP",
        "Tesseract OCR",
        "PhpSpreadsheet",
        "React Native",
        "GD / Imagick"
      ],
      highlights: [
        "Invoice PDF & image parsing using OCR",
        "Line-item extraction (HSN, Qty, GST, Amount)",
        "Auto-generated Excel in ERP import format",
        "Mobile app for scanning & uploading invoices"
      ],
    },
    {
      title: "Super Market Management System",
      description:
        "Full-stack supermarket management platform with product, order, customer, and payment workflows.",
      tech: ["Laravel", "Node.js", "React", "MySQL", "Stripe"],
      highlights: [
        "Product & category management",
        "Customer authentication & cart flow",
        "Order management for admin",
        "Stripe payment integration"
      ],
    }

  ];


  return (
    <div
      className={
        (dark ? "bg-[#0f0f0f] text-white" : "bg-white text-black") +
        " min-h-screen font-sans px-6 py-10 transition-all"
      }
    >
      {/* THEME BUTTON */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-5 right-5 p-2 rounded-full border shadow hover:bg-gray-200 hover:text-gray-900 transition hover:scale-110 shadow"
      >
        {dark ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* HEADER */}
      <header className="max-w-5xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold">Nikhil Anande</h1>
            <p className="text-xl mt-2 opacity-80">Sr. Full Stack Developer</p>
          </div>

          <div className="text-right text-sm leading-tight">
            <p>Email: nikhilanande58@gmail.com</p>
            <p>Phone: +91 97248 33864</p>

            {/* SOCIAL ICONS IN CIRCLES */}
            <div className="flex justify-end space-x-4 text-2xl mt-3">
              <a
                href="https://www.linkedin.com/in/nikhil-anande-552197101/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border hover:scale-110 transition shadow"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/nikhil3112"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border hover:scale-110 transition shadow"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:nikhilanande58@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border hover:scale-110 transition shadow"
              >
                <FaEnvelope />
              </a>

              {/*<a
                href="/resume.pdf"
                className="w-10 h-10 flex items-center justify-center rounded-full border hover:scale-110 transition shadow"
              >
                <FaFileAlt />
              </a>*/}
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT ME */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide">About Me</h2>
        <hr className="border-gray-600 mb-10" />

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* PROFILE IMAGE CIRCLE */}
          <div className="w-48 aspect-square rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/55823957"
              alt="Nikhil Anande"
              className="w-full h-full object-cover"
            />
          </div>


          <p className="text-left opacity-90 leading-relaxed text-sm">
            Senior Full Stack Developer with 7+ years of experience building
            enterprise-grade web applications. I specialize in HRMS, Payroll,
            SaaS platforms, and API-driven systems using PHP (Laravel), Node.js,
            React, and cloud technologies.
          
            <br /><br />
            I focus on scalable backend architecture, secure integrations,
            and performance-optimized applications that solve real business problems.

            <br /><br />
            I have worked with many technologies such as:
            <br />

            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>PHP</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>Laravel</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>REST APIs</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>MySQL</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>PostgreSQL</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>AWS</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>Node.js</span>
            <span className={skillBox + (dark ? " bg-white text-black" : " bg-black text-white")}>React.js</span>

            <br /><br />
            Currently working on cloud apps, automations, Elasticsearch, and AI-based
            modules.
          </p>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-3 tracking-wide">Key Expertise</h2>
        <hr className="border-gray-600 mb-10" />
      
        <div className="flex flex-wrap justify-center">
          {[
            "HRMS & Payroll Automation",
            "Salary Processing & EMI Deductions",
            "Capital & Expense Accounting",
            "REST APIs & System Integrations",
            "SaaS & Enterprise Applications",
            "Cloud & Performance Optimization"
          ].map(item => (
            <span
              key={item}
              className={
                skillBox + (dark ? " bg-white text-black" : " bg-black text-white")
              }
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-3 tracking-wide">Education</h2>
        <hr className="border-gray-600 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-lg font-bold">ITM Vadodara University</h3>
            <p className="opacity-80">B.E Electronics & Communication (2017 - 2021)</p>
          </div>

          <ul className="list-disc ml-6 text-sm opacity-80 leading-relaxed">
            <li>Studied core engineering subjects with hands-on project experience.</li>
            <li>Worked on IoT, automation, and web projects.</li>
            <li>Participated in coding and tech events.</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto mt-20 text-center mb-20">
        <h2 className="text-2xl font-semibold mb-3 tracking-wide">Experience</h2>
        <hr className="border-gray-600 mb-10" />

        <div className="space-y-14 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Webetron Technology Pvt Ltd</h3>
              <p className="italic opacity-70">Sr. Full Stack Developer — 2023 - Present | Pune, Maharashtra, India</p>
            </div>
            <ul className="list-disc ml-6 text-sm opacity-80 leading-relaxed">
              <li>Developed and maintained enterprise-grade HRMS and SaaS applications using Laravel and React.</li>
              <li>Implemented OpenAI-powered automation workflows for business process optimization.</li>
              <li>Integrated Microsoft Graph, Google APIs, and Zoom APIs for communication and scheduling features.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Softnice India Pvt Ltd</h3>
              <p className="italic opacity-70">Sr. Laravel Developer — 2021 - 2023 | Vadodara, Gujarat, India</p>
            </div>
            <ul className="list-disc ml-6 text-sm opacity-80 leading-relaxed">
              <li>Built job portal & enterprise systems.</li>
              <li>Optimized queries — 40% faster.</li>
              <li>Developed secure REST APIs.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">WeblogySphere Technology Pvt Ltd</h3>
              <p className="italic opacity-70">PHP Developer (Laravel) — Sep 2020 - Apr 2021 | Vadodara, Gujarat, India</p>
            </div>
            <ul className="list-disc ml-6 text-sm opacity-80 leading-relaxed">
              <li>Developed digital solutions specializing in Laravel and front-end technologies.</li>
              <li>Integrated Google, Microsoft & Dropbox APIs.</li>
              <li>Worked with Laravel, HTML5, CSS3, and JavaScript.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Webbybutter Technology Pvt Ltd</h3>
              <p className="italic opacity-70">PHP Developer (Laravel) — Jan 2019 - Aug 2020 | Vadodara, Gujarat, India</p>
            </div>
            <ul className="list-disc ml-6 text-sm opacity-80 leading-relaxed">
              <li>Built Angular-based interfaces with Laravel APIs (Passport & JWT).</li>
              <li>Developed responsive UI using HTML5, CSS3, and JavaScript.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-3 tracking-wide">Projects</h2>
        <hr className="border-gray-600 mb-10" />
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projects.map((project, index) => (
            <div
              key={index}
              className={
                "p-6 rounded-xl border shadow transition hover:scale-[1.02] " +
                (dark ? "border-gray-700 bg-[#151515]" : "border-gray-300 bg-white")
              }
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      
              <p className="text-sm opacity-80 mb-4 leading-relaxed">
                {project.description}
              </p>
      
              <ul className="list-disc ml-5 text-sm opacity-80 mb-4">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
      
              <div className="mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={
                      skillBox +
                      (dark ? " bg-white text-black" : " bg-black text-white")
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

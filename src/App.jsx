import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  education,
  experiences,
  focusAreas,
  highlights,
  profile,
  projects,
  skills,
} from "./portfolioData";
import "./portfolio.css";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function getInitialTheme() {
  if (typeof window === "undefined") return true;
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
}

function Icon({ name, className = "h-5 w-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    "arrow-right": <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    "arrow-up-right": <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    "chevron-down": <path d="m6 9 6 6 6-6" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    cloud: <path d="M17.5 19H7a5 5 0 1 1 1.3-9.82A6 6 0 0 1 20 11.5 3.5 3.5 0 0 1 17.5 19Z" />,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M5 21h14" /></>,
    graduation: <><path d="m2 10 10-5 10 5-10 5L2 10Z" /><path d="M6 12.5V17c3.5 2.5 8.5 2.5 12 0v-4.5" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" /><path d="M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.15-1.15" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />,
    sparkles: <><path d="m12 3-1.3 3.7L7 8l3.7 1.3L12 13l1.3-3.7L17 8l-3.7-1.3L12 3Z" /><path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.8 2.2L16 16l2.2.8L19 19l.8-2.2L22 16l-2.2-.8L19 13Z" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
  };

  if (name === "github") {
    return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7A11.3 11.3 0 0 0 8.43 22.73c.57.1.78-.25.78-.55v-2.16c-3.18.7-3.85-1.35-3.85-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17A10.8 10.8 0 0 1 12 6c.96 0 1.92.13 2.82.38 2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.23 5.65.41.35.77 1.06.77 2.15v3.08c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" /></svg>;
  }

  if (name === "linkedin") {
    return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43A2.06 2.06 0 1 1 5.32 3.3a2.06 2.06 0 0 1 0 4.13ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z" /></svg>;
  }

  return <svg {...props}>{paths[name] ?? null}</svg>;
}

function SectionHeading({ eyebrow, title, description, dark, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-violet-500">{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}

function SocialLink({ href, label, icon, dark }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
        dark
          ? "border-white/10 bg-white/[0.06] text-slate-300 hover:border-violet-400/50 hover:bg-white/10 hover:text-white"
          : "border-slate-200 bg-white text-slate-600 shadow-sm hover:border-violet-300 hover:text-slate-950"
      }`}
    >
      <Icon name={icon} />
    </a>
  );
}

function SkillCard({ skill, dark, index, reduceMotion }) {
  return (
    <motion.article
      variants={revealVariant}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
      className={`rounded-3xl border p-6 transition hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.045] hover:border-violet-400/30 hover:bg-white/[0.07]"
          : "border-slate-200 bg-white shadow-sm hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5"
      }`}
    >
      <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${dark ? "bg-violet-500/[0.15] text-violet-300" : "bg-violet-50 text-violet-600"}`}>
        <Icon name={skill.icon} />
      </div>
      <h3 className={`text-lg font-bold ${dark ? "text-white" : "text-slate-950"}`}>{skill.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span key={item} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${dark ? "border-white/10 bg-black/20 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`}>
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function App() {
  const [dark, setDark] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const modalCloseRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`;
    const description = "Senior Full Stack Developer specializing in Laravel, Node.js, React.js, SaaS platforms, REST APIs, cloud delivery, and AI workflow automation.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let schema = document.getElementById("portfolio-person-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "portfolio-person-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: ["Laravel", "Node.js", "React.js", "SaaS", "REST APIs", "AI workflow automation"],
    });
  }, []);

  useEffect(() => {
    const ids = ["home", ...NAV_ITEMS.map((item) => item.id)];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -58% 0px", threshold: [0.05, 0.2, 0.45] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldLock = mobileOpen || Boolean(selectedProject);
    const previousOverflow = document.body.style.overflow;
    if (shouldLock) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen, selectedProject]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (selectedProject) window.requestAnimationFrame(() => modalCloseRef.current?.focus());
  }, [selectedProject]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const pageTone = dark ? "bg-[#07090f] text-white" : "bg-slate-50 text-slate-950";
  const navTone = dark ? "border-white/10 bg-[#07090f]/80" : "border-slate-200/80 bg-white/[0.85]";

  return (
    <div className={`min-h-screen overflow-x-hidden font-sans antialiased ${pageTone}`}>
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-violet-600 px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0">
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="portfolio-grid absolute inset-0 opacity-[0.55]" />
        <div className="portfolio-noise absolute inset-0 opacity-[0.025]" />
        <div className="portfolio-orb absolute -left-24 -top-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="portfolio-orb portfolio-orb-delay absolute -right-40 top-[28%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.15] blur-[120px]" />
        <div className="portfolio-orb portfolio-orb-delay-long absolute bottom-[-14rem] left-[28%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/[0.15] blur-[130px]" />
      </div>

      <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl ${navTone}`}>
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <button type="button" onClick={() => scrollToSection("home")} className="group flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500" aria-label="Go to home section">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-violet-500/20 transition group-hover:rotate-3 group-hover:scale-105">NA</span>
            <span className="hidden text-left sm:block">
              <span className={`block text-sm font-black ${dark ? "text-white" : "text-slate-950"}`}>Nikhil Anande</span>
              <span className={`block text-[11px] ${dark ? "text-slate-400" : "text-slate-500"}`}>Full Stack • SaaS • AI</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    active
                      ? dark ? "bg-white/10 text-white" : "bg-slate-100 text-slate-950"
                      : dark ? "text-slate-400 hover:bg-white/[0.06] hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/10 bg-white/[0.06] text-amber-300 hover:bg-white/10" : "border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-100"}`}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            >
              <Icon name={dark ? "sun" : "moon"} />
            </button>
            <a href={profile.resumeFile} download className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:inline-flex">
              <Icon name="download" className="h-4 w-4" /> Resume
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 lg:hidden ${dark ? "border-white/10 bg-white/[0.06] text-white" : "border-slate-200 bg-white text-slate-800"}`}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className={`border-t px-5 py-4 lg:hidden ${dark ? "border-white/10 bg-[#0a0d15]" : "border-slate-200 bg-white"}`}
            >
              <div className="mx-auto grid max-w-7xl gap-2">
                {NAV_ITEMS.map((item) => (
                  <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${activeSection === item.id ? "bg-violet-600 text-white" : dark ? "text-slate-300 hover:bg-white/[0.06]" : "text-slate-700 hover:bg-slate-100"}`}>
                    {item.label}
                  </button>
                ))}
                <a href={profile.resumeFile} download className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-bold text-white">
                  <Icon name="download" className="h-4 w-4" /> Download resume
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="main-content" className="relative z-10">
        <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.16fr_0.84fr]">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${dark ? "border-violet-400/25 bg-violet-500/10 text-violet-200" : "border-violet-200 bg-violet-50 text-violet-700"}`}>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" /> Senior Full Stack Developer
              </div>
              <h1 className={`max-w-5xl text-4xl font-black leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl ${dark ? "text-white" : "text-slate-950"}`}>
                Building production <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">SaaS, APIs & AI workflows</span>.
              </h1>
              <p className={`mt-7 max-w-3xl text-lg leading-8 sm:text-xl ${dark ? "text-slate-300" : "text-slate-600"}`}>
                {profile.summary} I take ownership from architecture and data design through integrations, deployment, and production delivery.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => scrollToSection("projects")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
                  View selected work <Icon name="arrow-right" className="h-4 w-4" />
                </button>
                <a href={`mailto:${profile.email}`} className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/[0.15] bg-white/[0.055] text-white hover:bg-white/10" : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-violet-200 hover:shadow-lg"}`}>
                  <Icon name="mail" className="h-4 w-4" /> Contact me
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <SocialLink href={profile.github} label="Open GitHub profile" icon="github" dark={dark} />
                <SocialLink href={profile.linkedin} label="Open LinkedIn profile" icon="linkedin" dark={dark} />
                <SocialLink href={`mailto:${profile.email}`} label="Send Nikhil an email" icon="mail" dark={dark} />
                <span className={`ml-2 hidden text-sm sm:inline ${dark ? "text-slate-500" : "text-slate-500"}`}>Laravel • Node.js • React.js • AWS • AI</span>
              </div>
            </motion.div>

            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, x: 36, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-xl"
              aria-label="Engineering profile snapshot"
            >
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-violet-500/25 via-fuchsia-500/10 to-cyan-500/20 blur-2xl" />
              <div className={`relative overflow-hidden rounded-[2rem] border p-5 shadow-2xl backdrop-blur-2xl sm:p-7 ${dark ? "border-white/10 bg-[#0d111c]/[0.82] shadow-black/40" : "border-white bg-white/90 shadow-slate-300/50"}`}>
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 blur opacity-70" />
                    <img src={profile.avatar} alt="Nikhil Anande" width="88" height="88" className="relative h-20 w-20 rounded-2xl object-cover ring-2 ring-white/[0.15] sm:h-24 sm:w-24" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-violet-300" : "text-violet-600"}`}>Engineering profile</p>
                    <h2 className={`mt-1 truncate text-2xl font-black ${dark ? "text-white" : "text-slate-950"}`}>{profile.name}</h2>
                    <p className={`mt-1 text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>Architecture • APIs • Automation</p>
                  </div>
                </div>
                <div className={`my-6 h-px ${dark ? "bg-white/10" : "bg-slate-200"}`} />
                <div className="space-y-3">
                  {[
                    "Own architecture, database, API, and business-logic decisions",
                    "Build SaaS and enterprise workflows across backend and frontend",
                    "Integrate cloud, Microsoft, payment, OCR, and LLM services",
                    "Review, validate, deploy, and support production delivery",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/[0.15] text-emerald-400"><Icon name="check" className="h-3.5 w-3.5" /></span>
                      <p className={`text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className={`mt-6 grid grid-cols-2 gap-3 rounded-2xl border p-4 ${dark ? "border-white/10 bg-black/20" : "border-slate-200 bg-slate-50"}`}>
                  <div><p className="text-2xl font-black text-violet-500">7.6+</p><p className={`mt-1 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>professional years</p></div>
                  <div><p className="text-2xl font-black text-cyan-500">2019</p><p className={`mt-1 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>full-time career start</p></div>
                </div>
              </div>
            </motion.aside>
          </div>
          <button type="button" onClick={() => scrollToSection("about")} className={`absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition md:flex ${dark ? "text-slate-500 hover:text-white" : "text-slate-500 hover:text-slate-950"}`} aria-label="Scroll to about section">
            Explore portfolio <Icon name="chevron-down" className="h-4 w-4" />
          </button>
        </section>

        <section className="px-5 pb-10 sm:px-6 lg:px-8" aria-label="Professional highlights">
          <div className={`mx-auto grid max-w-7xl overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-4 ${dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-sm"}`}>
            {highlights.map((item, index) => (
              <div key={item.label} className={`p-6 ${index > 0 ? dark ? "border-t border-white/10 sm:border-l sm:border-t-0" : "border-t border-slate-200 sm:border-l sm:border-t-0" : ""}`}>
                <p className="text-2xl font-black text-violet-500 sm:text-3xl">{item.value}</p>
                <p className={`mt-2 text-sm leading-6 ${dark ? "text-slate-400" : "text-slate-600"}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-7xl" variants={revealVariant} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
            <SectionHeading
              eyebrow="About"
              title="Full product ownership, not just feature delivery."
              description="I work across backend, frontend, data, integrations, cloud delivery, and production support—especially where business workflows are complex and reliability matters."
              dark={dark}
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className={`rounded-[2rem] border p-7 sm:p-9 ${dark ? "border-white/10 bg-white/[0.045]" : "border-slate-200 bg-white shadow-sm"}`}>
                <p className={`text-lg leading-8 sm:text-xl ${dark ? "text-slate-200" : "text-slate-700"}`}>{profile.extendedSummary}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {focusAreas.map((area) => (
                    <div key={area} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${dark ? "border-white/10 bg-black/20 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/[0.15] text-violet-500"><Icon name="check" className="h-4 w-4" /></span>
                      <span className="text-sm font-semibold">{area}</span>
                    </div>
                  ))}
                </div>
              </article>

              <aside className={`rounded-[2rem] border p-7 sm:p-9 ${dark ? "border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/[0.06]" : "border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50"}`}>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-500">Delivery scope</p>
                <div className="mt-6 space-y-5">
                  {[
                    ["01", "Architecture & data", "Application structure, database design, REST APIs, authentication, and role-based access."],
                    ["02", "Product engineering", "Backend business logic, React interfaces, dashboards, workflows, and reporting."],
                    ["03", "Integrations & automation", "Microsoft, Google, payment services, OCR, LLMs, and workflow platforms."],
                    ["04", "Production delivery", "Debugging, validation, deployment, CI/CD, and personally reviewed production code."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="text-sm font-black text-violet-500">{number}</span>
                      <div>
                        <h3 className={`font-bold ${dark ? "text-white" : "text-slate-950"}`}>{title}</h3>
                        <p className={`mt-1 text-sm leading-6 ${dark ? "text-slate-400" : "text-slate-600"}`}>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={revealVariant} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SectionHeading
                eyebrow="Experience"
                title="Building and supporting production systems since 2019."
                description="A progression from Laravel development to end-to-end ownership of SaaS, enterprise platforms, integrations, automation, and cloud delivery."
                dark={dark}
              />
            </motion.div>

            <div className="relative">
              <div className={`absolute bottom-0 left-[1.15rem] top-2 hidden w-px sm:block ${dark ? "bg-white/10" : "bg-slate-200"}`} aria-hidden="true" />
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <motion.article
                    key={`${experience.company}-${experience.period}`}
                    variants={revealVariant}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                    className="relative sm:pl-14"
                  >
                    <div className={`absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg sm:flex ${experience.accent}`}>
                      <Icon name="briefcase" className="h-4 w-4" />
                    </div>
                    <div className={`group relative overflow-hidden rounded-[2rem] border p-6 transition hover:-translate-y-1 sm:p-8 ${dark ? "border-white/10 bg-white/[0.045] hover:border-white/20" : "border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/70"}`}>
                      <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${experience.accent}`} />
                      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                        <div>
                          <p className="text-sm font-bold text-violet-500">{experience.role}</p>
                          <h3 className={`mt-1 text-2xl font-black ${dark ? "text-white" : "text-slate-950"}`}>{experience.company}</h3>
                        </div>
                        <div className={`space-y-2 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
                          <p className="flex items-center gap-2 md:justify-end"><Icon name="calendar" className="h-4 w-4" />{experience.period}</p>
                          <p className="flex items-center gap-2 md:justify-end"><Icon name="location" className="h-4 w-4" />{experience.location}</p>
                        </div>
                      </div>
                      <ul className="mt-6 grid gap-3">
                        {experience.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/[0.15] text-violet-500"><Icon name="check" className="h-3 w-3" /></span>
                            <span className={`text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={revealVariant} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SectionHeading
                eyebrow="Selected projects"
                title="Case studies built around real operational workflows."
                description="The strongest projects from my resume, presented as concise engineering case studies rather than a generic project gallery."
                dark={dark}
                align="center"
              />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  variants={revealVariant}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
                  className={`group relative overflow-hidden rounded-[2rem] border transition hover:-translate-y-1 ${dark ? "border-white/10 bg-white/[0.045] hover:border-white/20" : "border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:shadow-slate-200/70"}`}
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${dark ? "border-white/10 bg-white/[0.06] text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`}>{project.category}</span>
                        <h3 className={`mt-5 text-2xl font-black ${dark ? "text-white" : "text-slate-950"}`}>{project.title}</h3>
                        <p className="mt-1 text-sm font-bold text-violet-500">{project.subtitle}</p>
                      </div>
                      <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition group-hover:rotate-3 group-hover:scale-105 ${project.accent}`}>
                        <Icon name={project.category.includes("AI") ? "sparkles" : "layers"} />
                      </div>
                    </div>
                    <p className={`mt-5 text-sm leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((technology) => (
                        <span key={technology} className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${dark ? "bg-black/25 text-slate-300" : "bg-slate-100 text-slate-600"}`}>{technology}</span>
                      ))}
                      {project.tech.length > 5 ? <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${dark ? "bg-black/25 text-slate-400" : "bg-slate-100 text-slate-500"}`}>+{project.tech.length - 5}</span> : null}
                    </div>
                    <button type="button" onClick={() => setSelectedProject(project)} className={`mt-7 inline-flex items-center gap-2 text-sm font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "text-white hover:text-violet-300" : "text-slate-950 hover:text-violet-600"}`}>
                      View case study <Icon name="arrow-up-right" className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={revealVariant} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SectionHeading
                eyebrow="Technical skills"
                title="A full-stack toolkit organized by engineering responsibility."
                description="This grouping makes the portfolio easier to scan than a long, undifferentiated list of technology badges."
                dark={dark}
                align="center"
              />
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => <SkillCard key={skill.title} skill={skill} dark={dark} index={index} reduceMotion={reduceMotion} />)}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-6 lg:px-8" aria-labelledby="education-title">
          <motion.div variants={revealVariant} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-7xl">
            <div className={`grid gap-8 rounded-[2rem] border p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center ${dark ? "border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.025]" : "border-slate-200 bg-white shadow-sm"}`}>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/[0.15]"><Icon name="graduation" className="h-8 w-8" /></div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-500">Education</p>
                <h2 id="education-title" className={`mt-2 text-2xl font-black ${dark ? "text-white" : "text-slate-950"}`}>{education.degree}</h2>
                <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-600"}`}>{education.institution} • {education.period}</p>
              </div>
              <div className={`space-y-2 text-sm lg:text-right ${dark ? "text-slate-400" : "text-slate-500"}`}>
                {education.earlierCareer.map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 pb-24 pt-16 sm:px-6 lg:px-8">
          <motion.div variants={revealVariant} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 p-[1px] shadow-2xl shadow-violet-600/20">
              <div className={`relative overflow-hidden rounded-[calc(2.25rem-1px)] p-8 sm:p-12 ${dark ? "bg-[#0b0e17]" : "bg-white"}`}>
                <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-36 left-[30%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-500">Contact</p>
                    <h2 className={`mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>Let’s discuss a SaaS platform, API product, or automation workflow.</h2>
                    <p className={`mt-5 max-w-2xl text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>The fastest way to reach me is by email. You can also connect through LinkedIn or review my GitHub profile.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 font-bold text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
                      <span className="flex min-w-0 items-center gap-3"><Icon name="mail" className="h-5 w-5 shrink-0" /><span className="truncate text-sm">{profile.email}</span></span>
                      <Icon name="arrow-up-right" className="h-4 w-4 shrink-0" />
                    </a>
                    <div className="grid grid-cols-[1fr_auto] gap-3">
                      <a href={`tel:${profile.phoneHref}`} className={`inline-flex min-w-0 items-center gap-3 rounded-2xl border px-5 py-4 font-bold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/10 bg-white/[0.06] text-white hover:bg-white/10" : "border-slate-200 bg-slate-50 text-slate-900 hover:bg-white"}`}>
                        <Icon name="phone" className="h-5 w-5 shrink-0 text-cyan-500" /><span className="truncate text-sm">{profile.phone}</span>
                      </a>
                      <button type="button" onClick={copyEmail} className={`inline-flex h-full min-w-[3rem] items-center justify-center rounded-2xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white" : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white hover:text-slate-950"}`} aria-label="Copy email address" title={copied ? "Email copied" : "Copy email"}>
                        {copied ? <Icon name="check" /> : <Icon name="copy" />}
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/10 bg-white/[0.06] text-white hover:bg-white/10" : "border-slate-200 bg-slate-50 text-slate-900 hover:bg-white"}`}><Icon name="linkedin" className="h-4 w-4 text-[#0A66C2]" /> LinkedIn</a>
                      <a href={profile.github} target="_blank" rel="noreferrer" className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/10 bg-white/[0.06] text-white hover:bg-white/10" : "border-slate-200 bg-slate-50 text-slate-900 hover:bg-white"}`}><Icon name="github" className="h-4 w-4" /> GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className={`relative z-10 border-t px-5 py-8 sm:px-6 lg:px-8 ${dark ? "border-white/10" : "border-slate-200"}`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className={`font-black ${dark ? "text-white" : "text-slate-950"}`}>{profile.name}</p>
            <p className={`mt-1 text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>Senior Full Stack Developer • SaaS • APIs • AI Automation</p>
          </div>
          <p className={`text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 180, damping: 23 }}
              className={`portfolio-scrollbar relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border shadow-2xl ${dark ? "border-white/[0.15] bg-[#0d111c] text-white shadow-black/50" : "border-slate-200 bg-white text-slate-950 shadow-slate-900/25"}`}
            >
              <div className={`sticky top-0 z-10 h-1.5 w-full bg-gradient-to-r ${selectedProject.accent}`} />
              <div className={`sticky top-1.5 z-10 flex items-start justify-between gap-5 border-b px-6 py-5 backdrop-blur-2xl sm:px-8 ${dark ? "border-white/10 bg-[#0d111c]/[0.92]" : "border-slate-200 bg-white/[0.92]"}`}>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-500">{selectedProject.category}</p>
                  <h2 id="project-modal-title" className="mt-1 text-2xl font-black sm:text-3xl">{selectedProject.title}</h2>
                  <p className={`mt-1 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>{selectedProject.subtitle}</p>
                </div>
                <button ref={modalCloseRef} type="button" onClick={() => setSelectedProject(null)} className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${dark ? "border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white" : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`} aria-label="Close project case study">
                  <Icon name="close" />
                </button>
              </div>

              <div className="space-y-9 p-6 sm:p-8">
                <p className={`text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{selectedProject.description}</p>
                <section aria-labelledby="project-stack-title">
                  <h3 id="project-stack-title" className="text-lg font-black">Technology stack</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tech.map((technology) => (
                      <span key={technology} className={`rounded-xl border px-3 py-2 text-sm font-bold ${dark ? "border-violet-400/20 bg-violet-500/10 text-violet-200" : "border-violet-200 bg-violet-50 text-violet-700"}`}>{technology}</span>
                    ))}
                  </div>
                </section>

                <div className="grid gap-7 md:grid-cols-2">
                  <section aria-labelledby="project-scope-title">
                    <h3 id="project-scope-title" className="text-lg font-black">What it covers</h3>
                    <ul className="mt-4 space-y-3">
                      {selectedProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/[0.15] text-emerald-400"><Icon name="check" className="h-3.5 w-3.5" /></span>
                          <span className={`text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section aria-labelledby="project-engineering-title">
                    <h3 id="project-engineering-title" className="text-lg font-black">Engineering contribution</h3>
                    <ul className="mt-4 space-y-3">
                      {selectedProject.engineering.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/[0.15] text-cyan-400"><Icon name="code" className="h-3.5 w-3.5" /></span>
                          <span className={`text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className={`rounded-2xl border p-5 text-sm leading-6 ${dark ? "border-white/10 bg-white/[0.045] text-slate-400" : "border-slate-200 bg-slate-50 text-slate-600"}`}>
                  Public repository and live-demo links are intentionally not shown because they were not included in the supplied resume. Add them only where you have permission to share the work.
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

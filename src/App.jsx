import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "./assets/nishi.jpg";
import {
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  BarChart3,
  LineChart,
  FolderKanban,
  UserCircle2,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const navItems = ["Home", "About", "Work", "Contact"];

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const stats = [
  { label: "Featured Projects", value: "2", icon: FolderKanban },
  { label: "Internship Role", value: "1", icon: Briefcase },
  { label: "Skill Areas", value: "7+", icon: LineChart },
  { label: "Methods", value: "5+", icon: BarChart3 },
];

const education = [
  {
    title: "University",
    subtitle: "B.Sc in Computer Science and Engineering",
    meta: "United International University",
  },
];

const achievements = [
  {
    title: "1st Runners Up",
    subtitle: "UIU CSE Project Show 2022",
    meta: "Recognized for project presentation and execution in a competitive university project showcase.",
  },
];

const experiences = [
  {
    role: "Foreign Communication Executive (Internship)",
    company: "Softvence Agency",
    period: "Internship",
    points: [
      "Handled client inquiries and maintained professional communication.",
      "Coordinated with the internal team to ensure smooth communication and task delivery.",
      "Supported communication flow between clients and internal stakeholders.",
    ],
  },
];

const coreSkills = [
  "Project Planning",
  "Scheduling",
  "Risk Management",
  "Documentation",
  "Time Management",
  "Cost Analysis",
  "Client Communication",
  "Project Coordination",
];

const softSkills = [
  "Professional Communication",
  "Interpersonal Skills",
  "Problem Solving",
  "Analytical Thinking",
  "Adaptability",
  "Quick Learning",
  "Team Collaboration",
  "Target-Oriented Mindset",
];

const tools = [
  "Jira",
  "Trello",
  "ClickUp",
  "Figma",
  "Framer",
  "Git",
  "MySQL",
  "MongoDB",
];

const projects = [
  {
    title: "Social Media Platform Development",
    category: "Web Application",
    description:
      "Built a social media platform using PHP, MySQL, and Bootstrap with user registration, post interaction, friend requests, messaging, and responsive design.",
    highlights: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "School Management System Using Arduino",
    category: "Hardware-Integrated System",
    description:
      "Developed a school management system using Arduino, RFID, biometric sensors, LCD display, and buzzer alerts for attendance tracking and access control.",
    highlights: ["Arduino", "RFID", "Biometric Sensors"],
  },
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-950/20 whitespace-normal text-left leading-5";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium border border-white/12 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 whitespace-normal text-left leading-5";
const inputClass =
  "w-full h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-emerald-300/40 focus:bg-white/[0.07]";
const textareaClass =
  "w-full min-h-[180px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-emerald-300/40 focus:bg-white/[0.07]";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300/80 sm:text-xs">{eyebrow}</p>
      <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <Card className={`border border-white/8 bg-white/[0.045] backdrop-blur-xl shadow-2xl shadow-black/20 ${className}`}>
      <CardContent className="p-5 sm:p-6">{children}</CardContent>
    </Card>
  );
}

function AnimatedGrid() {
  const cells = useMemo(() => new Array(18).fill(0), []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.96),rgba(2,6,23,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] opacity-45" />
      {cells.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-24 w-24 rounded-full bg-emerald-400/5 blur-3xl sm:h-28 sm:w-28"
          initial={{ opacity: 0.15, scale: 0.8 }}
          animate={{
            opacity: [0.08, 0.16, 0.08],
            scale: [0.85, 1.1, 0.9],
            x: [0, (i % 3) * 10 - 8, 0],
            y: [0, (i % 5) * 8 - 6, 0],
          }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "easeInOut" }}
          style={{
            left: `${(i % 6) * 18}%`,
            top: `${Math.floor(i / 6) * 26}%`,
          }}
        />
      ))}
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-10 md:space-y-14">
      <section className="grid items-center gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:gap-12">
        <motion.div initial="hidden" animate="show" className="space-y-6">
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-emerald-200 sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Portfolio of Kaniz Fatema
          </motion.div>

          <motion.div custom={1} variants={fadeUp} className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Building strong communication, technical understanding, and practical digital solutions.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:text-lg">
              I combine professional communication, technical understanding, and structured execution to contribute across business analysis, project coordination, client communication, and digital product work.
            </p>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} className="flex flex-wrap items-stretch gap-3">
            <Button onClick={() => setPage("Work")} className={primaryButton}>
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
            <Button onClick={() => setPage("Contact")} className={secondaryButton}>
              <span>Contact</span>
            </Button>
          </motion.div>

          <motion.div custom={3} variants={fadeUp} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.label} className="rounded-[1.75rem]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.label}</p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-blue-400/20 blur-2xl sm:-inset-6" />
          <GlassCard className="relative overflow-hidden rounded-[2rem] border-white/10 bg-slate-900/70 p-0">
            <div className="grid min-h-[480px] gap-0 lg:min-h-[560px]">
              <div className="relative flex items-center justify-center border-b border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 sm:p-8">
                <div className="absolute left-5 top-5 flex gap-2 sm:left-6 sm:top-6">
                  <span className="h-3 w-3 rounded-full bg-rose-300/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
                </div>
                <div className="relative flex h-56 w-56 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-emerald-950/30 sm:h-72 sm:w-72">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.18),transparent_25%)]" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-white/15 bg-slate-950/60 text-center">
                    <div className="space-y-3 px-5 sm:px-6">
                      <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300">
                        <img
                          src={profileImg}
                          alt="Kaniz Fatema"
                          className="h-full w-full object-cover rounded-[1.0rem]"
/>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-white">Kaniz Fatema</p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Focused on</p>
                  <p className="mt-2 text-lg font-semibold leading-8 text-white sm:text-xl">
                    Business analysis, project coordination, and technical execution
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Approach</p>
                  <p className="mt-2 text-lg font-semibold leading-8 text-white sm:text-xl">
                    Clear communication with practical execution and collaborative delivery
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Strategic Thinking",
            desc: "Understanding project goals, user needs, and practical requirements with clarity.",
            icon: BarChart3,
          },
          {
            title: "Process Clarity",
            desc: "Supporting structured workflows, communication, and delivery alignment across teams.",
            icon: Award,
          },
          {
            title: "Insight Delivery",
            desc: "Presenting technical and project information in a polished and understandable way.",
            icon: LineChart,
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <GlassCard className="h-full rounded-[1.75rem]">
                <div className="space-y-4">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="leading-7 text-slate-300">{item.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </section>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-10">
      <SectionTitle
        eyebrow="About"
        title="Experience, education, and strengths presented with clarity"
        description="This page highlights academic background, internship experience, technical strengths, tools, achievements, and soft skills in a clean and professional format."
      />

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <GlassCard className="rounded-[2rem]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-lg font-medium text-white">{item.title}</p>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Academic Milestone
                    </span>
                  </div>
                  <p className="mt-3 text-slate-200">{item.subtitle}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.meta}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard className="rounded-[2rem]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <div className="space-y-5">
              {experiences.map((item, i) => (
                <motion.div
                  key={item.role}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                      <p className="text-slate-300">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="rounded-[2rem]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-300">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Achievement</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-lg font-medium text-white">{item.title}</p>
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
                      Recognition
                    </span>
                  </div>
                  <p className="mt-3 text-slate-200">{item.subtitle}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.meta}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard className="rounded-[2rem]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-300">
                <UserCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Professional Photo</h3>
            </div>
            <div className="flex min-h-[320px] items-center justify-center rounded-[1.75rem] border border-dashed border-white/15 bg-white/5 p-6 text-center">
              <div className="space-y-4">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/70 text-emerald-300">
                  <img
                    src={profileImg}
                    alt="Kaniz Fatema"
                    className="h-full w-full object-cover rounded-[1.5rem]"
                    />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Kaniz Fatema</p>
                  <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Core Skills", items: coreSkills, icon: Award, tone: "text-emerald-300" },
          { title: "Soft Skills", items: softSkills, icon: HeartHandshake, tone: "text-cyan-300" },
          { title: "Tools", items: tools, icon: Wrench, tone: "text-blue-300" },
        ].map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div key={group.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <GlassCard className="h-full rounded-[1.75rem]">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-2xl border border-white/10 bg-white/5 p-3 ${group.tone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </section>
    </motion.div>
  );
}

function WorkPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-10">
      <SectionTitle
        eyebrow="Work"
        title="Selected projects and practical work"
        description="This section highlights practical academic and technical projects with clear technologies and feature-focused summaries."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div key={project.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <GlassCard className="group h-full rounded-[2rem] transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-transform duration-500 group-hover:rotate-6 group-hover:text-emerald-300">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
                <p className="leading-7 text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}

function ContactPage() {
  const contactItems = [
    { icon: Mail, label: "Email", value: "kf67723@gmail.com" },
    { icon: Phone, label: "Phone", value: "+8801704532636" },
    { icon: MapPin, label: "Location", value: "Prembagan, Dakhinkhan, Uttara, Dhaka" },
    { icon: ExternalLink, label: "LinkedIn", value: "linkedin.com/in/kaniz-fatema999" },
  ];

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-10">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s connect and discuss meaningful work"
        description="A polished contact page with essential fields for professional communication and direct profile details."
      />

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <GlassCard className="rounded-[2rem]">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="break-all text-base text-white sm:break-normal">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-[1.5rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 p-5">
              <p className="text-sm leading-7 text-slate-200">
                Open to business analyst roles involving communication, project coordination, client handling, and technology-driven business support.
              </p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="rounded-[2rem]">
          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm text-slate-300">Name</label>
                <Input placeholder="Your full name" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-slate-300">Email</label>
                <Input type="email" placeholder="you@example.com" className={inputClass} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-slate-300">Subject</label>
              <Input placeholder="Project discussion / Opportunity / Collaboration" className={inputClass} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-slate-300">Message</label>
              <Textarea placeholder="Write your message here..." className={textareaClass} />
            </div>
            <Button className={primaryButton}>
              <span>Send Message</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
          </form>
        </GlassCard>
      </section>
    </motion.div>
  );
}

export default function PortfolioWebsite() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <AnimatedGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          className="sticky top-4 z-30 mb-8"
        >
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/65 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <button onClick={() => setPage("Home")} className="min-w-0 text-left">
                <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300/80 sm:text-sm">Personal Portfolio</p>
                <div>
                  <p className="truncate text-lg font-semibold text-white sm:text-2xl">Kaniz Fatema</p>
                  <p className="text-xs text-slate-400 sm:text-sm">Business Analyst • Communication & Project-Focused Professional</p>
                </div>
              </button>

              <nav className="hidden items-center gap-2 lg:flex">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setPage(item)}
                    className={`rounded-2xl px-4 py-2 text-sm transition-all duration-300 ${
                      page === item
                        ? "bg-white text-slate-950"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a href="/Kaniz Fatema .pdf" >
                <Button className={`${primaryButton} hidden lg:inline-flex`}>
                  <span>Download Resume</span>
                </Button>
                </a>
                <button
                  onClick={() => setMenuOpen((s) => !s)}
                  className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 text-white lg:hidden"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setPage(item);
                          setMenuOpen(false);
                        }}
                        className={`rounded-2xl px-4 py-3 text-left text-sm transition-all duration-300 ${
                          page === item ? "bg-white text-slate-950" : "bg-white/5 text-slate-200"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                    <Button className={`${primaryButton} mt-2 w-full`}>
                      <span>Download Resume</span>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        <AnimatePresence mode="wait">
          <motion.main key={page}>
            {page === "Home" && <HomePage setPage={setPage} />}
            {page === "About" && <AboutPage />}
            {page === "Work" && <WorkPage />}
            {page === "Contact" && <ContactPage />}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiMail } from "react-icons/fi";
import ChatbotDrawer from "./components/ChatbotDrawer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";
import SkillsGrid from "./components/SkillsGrid";
import {
  buildingItems,
  certifications,
  contactLinks,
  education,
  experience,
  projects,
  resumeLinks,
} from "./data/portfolio";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />

        <Section
          id="about"
          eyebrow="About"
          title="Cloud-first engineering with a backend systems spine."
          description="A focused software engineering portfolio for AWS infrastructure, scalable web systems, backend services, and ML-powered product experiments."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="glass-card p-6">
              <p className="text-base leading-8 text-[#A3A3A3]">
                Shubham is an MS Computer Science student at Syracuse University building practical systems across cloud architecture, backend development, and machine learning applications. His work centers on secure AWS deployments, resilient service patterns, graph-based recommendation systems, and production-style automation.
              </p>
              <p className="mt-4 text-base leading-8 text-[#A3A3A3]">
                He is interested in cloud systems, scalable architectures, ML-powered applications, and backend platforms that are reliable enough to run beyond the demo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="quiet-card relative col-span-full aspect-[16/10] overflow-hidden lg:col-span-1">
                <img
                  src="/assets/website-photo.jpeg"
                  alt="Shubham outdoors in the snow"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-[#050505]/80" />
                <p className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em] text-[#A3A3A3]">
                  Cloud / Backend Engineer
                </p>
              </div>
              {["MS Computer Science at Syracuse University", "AWS-Certified Cloud Engineer", "Backend and ML project focus"].map((item) => (
                <div key={item} className="quiet-card p-4">
                  <p className="text-sm font-medium leading-6 text-[#FAFAFA]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="certifications"
          eyebrow="Certifications"
          title="AWS certifications backing the cloud focus."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((certification, index) => (
              <motion.a
                key={certification.title}
                href={certification.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card block p-6"
              >
                <div className="mb-5 flex h-36 items-center justify-center rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] p-4">
                  <img
                    src={certification.image}
                    alt={`${certification.title} badge`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#737373]">AWS</p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-[#FAFAFA]">{certification.title}</h3>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Technical work across cloud, backend, and ML systems."
        >
          <div className="quiet-card divide-y divide-[#1F1F1F]">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="grid gap-4 p-6 md:grid-cols-[0.85fr_1.35fr]"
              >
                <div>
                  <h3 className="text-sm font-semibold text-[#FAFAFA]">{item.organization}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#737373]">{item.duration}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FAFAFA]">{item.role}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#A3A3A3]">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="building" eyebrow="Currently Building" title="Active work in the pipeline.">
          <div className="grid gap-4 md:grid-cols-3">
            {buildingItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="quiet-card p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-[#2A2A2A] bg-[#171717] px-2.5 py-1 text-xs text-[#D4D4D4]">
                    {item.status}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#F5F5F5] ring-4 ring-[#1F1F1F]" />
                </div>
                <h3 className="text-base font-semibold leading-6 text-[#FAFAFA]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#737373]">{item.description}</p>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#161616]">
                  <div className="h-full rounded-full bg-[#F5F5F5]" style={{ width: `${item.progress}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected Work"
          title="Recent systems shaped like real cloud products."
          description="Each project emphasizes practical architecture, deployment thinking, and clean engineering tradeoffs."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="A practical stack for cloud engineering work.">
          <SkillsGrid />
        </Section>

        <Section id="resume" eyebrow="Resume" title="Resume and cloud challenge links.">
          <div className="glass-card flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#FAFAFA]">Engineering resume</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#A3A3A3]">
                Download the latest resume or view the Cloud Resume Challenge implementation path.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={resumeLinks.download} className="primary-button" target="_blank" rel="noreferrer">
                Download Resume <FiDownload />
              </a>
              <a href={resumeLinks.cloudResume} className="secondary-button" target="_blank" rel="noreferrer">
                View Cloud Resume Challenge <FiExternalLink />
              </a>
            </div>
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Graduate computer science foundation.">
          <div className="grid gap-4">
            {education.map((item) => (
              <div key={item.institution} className="glass-card grid gap-6 p-7 md:grid-cols-[0.75fr_1.25fr]">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-24 w-40 items-center justify-center rounded-md border border-[#1F1F1F] bg-white px-3 py-1">
                    <img
                      src={item.image}
                      alt={`${item.institution} logo`}
                      className="max-h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-[#FAFAFA]">{item.institution}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#FAFAFA]">{item.program}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#A3A3A3]">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Build, ship, and talk systems.">
          <div className="grid gap-5 md:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} className="quiet-card group flex items-center justify-between p-6 transition hover:-translate-y-1 hover:border-[#3A3A3A] hover:bg-[#161616]" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#262626] bg-[#0D0D0D] text-[#A3A3A3]">
                      <Icon />
                    </span>
                    <span className="font-medium text-[#FAFAFA]">{link.label}</span>
                  </span>
                  <FiMail className="text-[#525252] transition group-hover:text-[#CFCFCF]" />
                </a>
              );
            })}
          </div>
        </Section>
      </main>
      <footer className="border-t border-[#262626] px-5 py-8 text-center text-sm text-[#737373]">
        @ 2026 Shubham Joshi | Built with React, Vite, Tailwind CSS, and Framer Motion.
      </footer>
      <ChatbotDrawer open={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  );
}

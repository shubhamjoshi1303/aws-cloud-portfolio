import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group glass-card project-card flex min-h-[258px] flex-col p-5"
    >
      <div className="relative mb-4 flex items-start justify-between gap-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#262626] bg-[#0D0D0D] text-[#A3A3A3]">
          {Icon && <Icon />}
        </span>
        <span className="status-badge">{project.status}</span>
      </div>
      <h3 className="relative text-lg font-semibold leading-7 text-[#FAFAFA]">{project.title}</h3>
      <div className="relative mt-3 rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] p-2.5">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-xs font-medium text-[#737373]">{project.signal}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5F5F5]" />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.topology.map((step, stepIndex) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="rounded-md border border-[#1F1F1F] bg-[#0D0D0D] px-2 py-1 text-[0.68rem] text-[#A3A3A3]">
                {step}
              </span>
              {stepIndex < project.topology.length - 1 && <span className="h-px w-3 bg-[#262626]" />}
            </span>
          ))}
        </div>
      </div>
      <p className="relative mt-4 flex-1 text-sm leading-6 text-[#A3A3A3]">{project.description}</p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
      <div className="relative mt-5 flex gap-3">
        <a className="small-action" href="https://github.com/" target="_blank" rel="noreferrer">
          <FiGithub /> GitHub
        </a>
        <a className="small-action" href="#home">
          <FiExternalLink /> Demo
        </a>
      </div>
    </motion.article>
  );
}

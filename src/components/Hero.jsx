import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiDownload, FiMessageCircle } from "react-icons/fi";
import { pipelineSteps, resumeLinks, rotatingTitles, stats } from "../data/portfolio";

export default function Hero({ onOpenChat }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % rotatingTitles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 pb-14 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-[#FAFAFA] sm:text-5xl lg:text-[3.85rem]">
            Shubham builds production-grade cloud software.
          </h1>
          <div className="mt-5 h-11 overflow-hidden text-xl font-medium text-[#CFCFCF] sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingTitles[titleIndex]}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="block"
              >
                {rotatingTitles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#A3A3A3]">
            Software engineer focused on AWS architectures, backend systems, scalable delivery patterns, and machine learning applications that turn data into useful products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={scrollToProjects} className="primary-button">
              View Projects <FiArrowRight />
            </button>
            <a href={resumeLinks.download} className="secondary-button" target="_blank" rel="noreferrer">
              Download Resume <FiDownload />
            </a>
            <button onClick={onOpenChat} className="secondary-button">
              Ask My AI <FiMessageCircle />
            </button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="quiet-card p-3.5">
                <p className="text-xl font-semibold text-[#FAFAFA]">{stat.value}</p>
                <p className="mt-1 text-[0.66rem] uppercase leading-4 tracking-[0.18em] text-[#737373]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[33rem]"
        >
          <div className="mb-5">
            <p className="text-sm font-medium text-[#FAFAFA]">Production Deployment Pipeline</p>
            <p className="mt-1 text-xs text-[#737373]">Portfolio deployed through a secure AWS delivery architecture</p>
          </div>
          <div className="grid gap-2">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const alignClass = index % 2 === 0 ? "justify-self-start" : "justify-self-end";

              return (
                <div key={step.title} className="grid">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.07 }}
                    className={`grid w-full max-w-[25rem] grid-cols-[2.25rem_1fr] items-center gap-3 rounded-lg border border-[#262626] bg-[#0D0D0D] px-3 py-2.5 ${alignClass}`}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#262626] bg-[#111111] text-[#A3A3A3]">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-[#FAFAFA]">{step.title}</span>
                      <span className="mt-0.5 block text-xs text-[#737373]">{step.detail}</span>
                    </span>
                  </motion.div>
                  {index < pipelineSteps.length - 1 ? (
                    <motion.svg
                      aria-hidden="true"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.72 }}
                      transition={{ delay: 0.38 + index * 0.07 }}
                      className="pointer-events-none my-1 h-8 w-5 justify-self-center text-[#A3A3A3]"
                      viewBox="0 0 20 32"
                      fill="none"
                    >
                      <path
                        d="M10 3V27"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path d="M4 21L10 27L16 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  ) : null}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

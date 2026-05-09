import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#262626] bg-[#050505]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavigate("#home")}
          className="group flex items-center gap-3"
          aria-label="Go to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#2A2A2A] bg-[#111111] text-sm font-semibold text-[#FAFAFA]">
            S
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold text-[#FAFAFA]">Shubham</span>
            <span className="block text-xs text-[#737373]">Cloud Engineer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleNavigate(link.href)} className="nav-link">
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="icon-button lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#262626] bg-[#050505] lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-5 py-4 sm:px-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigate(link.href)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-[#CFCFCF] hover:bg-[#1A1A1A]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

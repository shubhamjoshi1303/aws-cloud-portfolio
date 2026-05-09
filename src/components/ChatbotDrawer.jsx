import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";

const prompts = [
  "Tell me about Shubham's AWS projects",
  "What cloud technologies does he use?",
  "Explain the recommender system project",
];

export default function ChatbotDrawer({ open, onOpen, onClose }) {
  return (
    <>
      <button onClick={onOpen} className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#F5F5F5] text-[#050505] shadow-premium transition hover:scale-[1.03] hover:bg-[#E5E5E5]" aria-label="Open AI chatbot">
        <FiMessageCircle size={23} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="fixed inset-0 z-50 bg-[#050505]"
              aria-label="Close chat overlay"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col border-l border-[#262626] bg-[#050505] p-5 shadow-premium"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#FAFAFA]">Ask Shubham's AI</h2>
                  <p className="text-sm text-[#737373]">Portfolio assistant placeholder</p>
                </div>
                <button className="icon-button" onClick={onClose} aria-label="Close AI chatbot">
                  <FiX />
                </button>
              </div>
              <div className="flex-1 rounded-lg border border-[#262626] bg-[#0D0D0D] p-4">
                <div className="rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] p-4 text-sm leading-6 text-[#CFCFCF]">
                  Hi, I can soon answer questions about Shubham's projects, AWS work, architecture decisions, and resume.
                </div>
                <div className="mt-5 grid gap-2">
                  {prompts.map((prompt) => (
                    <button key={prompt} className="rounded-lg border border-[#262626] bg-[#0D0D0D] px-3 py-3 text-left text-sm text-[#A3A3A3] transition hover:border-[#3A3A3A] hover:bg-[#1A1A1A] hover:text-[#FAFAFA]">
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#262626] bg-[#0D0D0D] p-2">
                <input className="min-w-0 flex-1 bg-transparent px-2 text-sm text-[#FAFAFA] outline-none placeholder:text-[#525252]" placeholder="RAG backend coming soon" disabled />
                <button className="icon-button" aria-label="Send message" disabled>
                  <FiSend />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

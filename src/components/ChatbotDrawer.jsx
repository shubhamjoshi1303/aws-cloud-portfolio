import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";

const prompts = [
  "Tell me about Shubham's AWS projects",
  "What cloud technologies does he use?",
  "Explain the recommender system project",
];

console.log("RAG API base URL:", import.meta.env.VITE_RAG_API_URL);

export default function ChatbotDrawer({ open, onOpen, onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I can answer questions about Shubham's projects, AWS work, architecture decisions, and resume.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async (message) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    const chatUrl = `${import.meta.env.VITE_RAG_API_URL}/chat`;

    setError("");
    setInput("");
    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", content: trimmedMessage },
    ]);
    setIsLoading(true);

    try {
      console.log("RAG chat request URL:", chatUrl);

      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedMessage }),
      });

      console.log("RAG chat HTTP status:", response.status);

      const responseText = await response.text();
      console.log("RAG chat response text:", responseText);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      const data = JSON.parse(responseText);

      if (!data || typeof data.answer !== "string") {
        throw new Error("The API returned an invalid response.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "assistant", content: data.answer },
      ]);
    } catch (requestError) {
      const errorMessage =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting the API.";

      console.error("RAG chat caught error:", errorMessage);

      setError(errorMessage);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "I couldn't reach the portfolio AI service. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    void sendMessage(input);
  };

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
                  <p className="text-sm text-[#737373]">Portfolio assistant</p>
                </div>
                <button className="icon-button" onClick={onClose} aria-label="Close AI chatbot">
                  <FiX />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto rounded-lg border border-[#262626] bg-[#0D0D0D] p-4">
                <div className="grid gap-3">
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={`rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] p-4 text-sm leading-6 ${
                        message.role === "user"
                          ? "ml-8 text-[#FAFAFA]"
                          : "mr-8 text-[#CFCFCF]"
                      }`}
                    >
                      {message.content}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="mr-8 rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] p-4 text-sm leading-6 text-[#737373]">
                      Thinking...
                    </div>
                  )}
                </div>
                <div className="mt-5 grid gap-2">
                  {prompts.map((prompt) => (
                    <button
                      key={prompt}
                      className="rounded-lg border border-[#262626] bg-[#0D0D0D] px-3 py-3 text-left text-sm text-[#A3A3A3] transition hover:border-[#3A3A3A] hover:bg-[#1A1A1A] hover:text-[#FAFAFA]"
                      disabled={isLoading}
                      onClick={() => sendMessage(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                {error && <p className="mt-3 text-xs text-[#737373]">{error}</p>}
              </div>
              <form
                className="mt-4 flex items-center gap-2 rounded-lg border border-[#262626] bg-[#0D0D0D] p-2"
                onSubmit={handleSubmit}
              >
                <input
                  className="min-w-0 flex-1 bg-transparent px-2 text-sm text-[#FAFAFA] outline-none placeholder:text-[#525252]"
                  placeholder="Ask about projects, AWS, or experience"
                  value={input}
                  disabled={isLoading}
                  onChange={(event) => setInput(event.target.value)}
                />
                <button
                  className="icon-button disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                  disabled={isLoading || !input.trim()}
                  type="submit"
                >
                  <FiSend />
                </button>
              </form>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

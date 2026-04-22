import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoaderCircle, Search, Sparkles, X } from "lucide-react";

// const PROMPT_SUGGESTIONS = [
//   {
//     label: "PwC experience",
//     prompt: "Tell me about Mufaddal's experience at PwC India",
//     icon: BriefcaseBusiness,
//   },
//   {
//     label: "Tech stack",
//     prompt: "What is Mufaddal's strongest skill set?",
//     icon: Code2,
//   },
//   {
//     label: "Projects",
//     prompt: "Which project should I look at first and why?",
//     icon: Sparkles,
//   },
//   {
//     label: "Blogs",
//     prompt: "What blog posts has Mufaddal published?",
//     icon: BookOpenText,
//   },
//   {
//     label: "Contact",
//     prompt: "How can I contact Mufaddal?",
//     icon: Mail,
//   },
// ];

export default function HeroSearchPalette() {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const latestQuestion = [...messages]
    .filter((message) => message.role === "user")
    .at(-1);
  const latestAnswer = [...messages]
    .filter((message) => message.role === "assistant")
    .at(-1);
  // const recentQuestions = [...messages]
  //   .filter((message) => message.role === "user")
  //   .slice(-3)
  //   .reverse();

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const timerId = window.setTimeout(() => inputRef.current?.focus(), 70);
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timerId);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closePalette = () => {
    setIsOpen(false);
    setInput("");
  };

  const submitPrompt = async (promptText) => {
    const nextPrompt = (promptText ?? input).trim();
    if (!nextPrompt || loading) return;

    const history = messages.map(({ role, content }) => ({ role, content }));
    const userMessage = { role: "user", content: nextPrompt };

    setInput("");
    setError(null);
    setMessages((previousMessages) => [...previousMessages, userMessage]);
    setLoading(true);

    try {
      const { askGroq } = await import("../../lib/askGroq");
      const reply = await askGroq(nextPrompt, history);
      setMessages((previousMessages) => [
        ...previousMessages,
        { role: "assistant", content: reply },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting Groq.",
      );
    } finally {
      setLoading(false);
    }
  };

  // const clearSession = () => {
  //   setMessages([]);
  //   setInput("");
  //   setError(null);
  // };

  return (
    <div className="mx-auto mt-2 w-full max-w-md">
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        onClick={() => setIsOpen(true)}
        className="group flex w-full items-center gap-4 rounded-[1.75rem] border border-default/25 bg-surface/70 px-5 py-4 text-left shadow-[0_20px_60px_rgb(var(--overlay)/0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-surface/80"
      >
        <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/15">
          <Search className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-secondary/75">
            Search with AI
          </p>
          <p className="mt-1 truncate text-base text-primary">
            Ask about projects, skills or anything
          </p>
        </div>
        <div className="hidden items-center gap-1 rounded-2xl border border-default/20 bg-page/70 px-3 py-2 text-xs font-medium text-secondary shadow-sm md:flex">
          <span>Ctrl</span>
          <span className="text-primary">K</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePalette}
              className="fixed inset-0 z-[70] bg-overlay/35 backdrop-blur-md"
            />

            <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6">
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[85vh] w-[min(92vw,820px)] overflow-hidden rounded-[2rem] border border-default/25 bg-surface/82 shadow-[0_32px_120px_rgb(var(--overlay)/0.42)] backdrop-blur-2xl"
              >
                <div className="border-b border-default/15 px-5 py-5 md:px-7">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center text-accent">
                      <Search className="size-5" />
                    </div>
                    <label className="min-w-0 flex-1">
                      <span className="sr-only">Ask portfolio AI</span>
                      <input
                        ref={inputRef}
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            submitPrompt();
                          }
                        }}
                        placeholder="Search Here"
                        className="w-full appearance-none border-0 bg-transparent text-lg text-primary shadow-none outline-none placeholder:text-secondary/70 focus:border-0 focus:outline-none focus:ring-0 md:text-[1.35rem]"
                        style={{
                          background: "transparent",
                          boxShadow: "none",
                          WebkitAppearance: "none",
                        }}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={closePalette}
                      className="flex size-11 items-center justify-center text-secondary transition-colors duration-200 hover:text-primary"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="border-b border-default/15 md:border-b-0 md:border-r">
                    <div className="mt-2 min-h-[420px] max-h-[calc(85vh-110px)] overflow-y-auto px-5 pb-6 md:px-7">
                      {!latestAnswer && !loading && !error && (
                        <div className="rounded-[1.7rem] border border-default/15 bg-page/45 p-6">
                          <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                            <Sparkles className="size-6" />
                          </div>
                          <h3 className="mt-4 text-2xl font-semibold text-primary">
                            Search the portfolio with AI
                          </h3>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary">
                            Ask direct questions about Mufaddal&apos;s
                            experience, projects, certifications, availability,
                            stack, or contact details. This uses the same
                            portfolio AI context as the original chat widget,
                            but inside the command palette modal.
                          </p>
                        </div>
                      )}

                      {loading && (
                        <div className="rounded-[1.7rem] border border-default/15 bg-page/45 p-6">
                          <div className="inline-flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-primary shadow-sm">
                            <LoaderCircle className="size-5 animate-spin text-accent" />
                            <span>Portfolio AI is thinking...</span>
                          </div>
                        </div>
                      )}

                      {error && (
                        <div className="rounded-[1.7rem] border border-danger/25 bg-danger/10 p-6">
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-danger">
                            Error
                          </p>
                          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-primary">
                            {error}
                          </p>
                        </div>
                      )}

                      {latestAnswer && (
                        <div className="flex max-h-[60vh] flex-col overflow-hidden rounded-[1.7rem] border border-default/15 bg-page/45 p-6">
                          {latestQuestion && (
                            <div className="rounded-[1.25rem] border border-default/15 bg-surface/75 px-4 py-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary/70">
                                Question
                              </p>
                              <p className="mt-2 text-sm text-primary">
                                {latestQuestion.content}
                              </p>
                            </div>
                          )}

                          <div className="mt-5 min-h-0 flex-1">
                            <div className="mt-3 max-h-[42vh] overflow-y-auto whitespace-pre-wrap pr-2 text-sm leading-7 text-primary">
                              {latestAnswer.content}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

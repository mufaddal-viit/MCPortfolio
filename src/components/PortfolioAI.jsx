import { useEffect, useRef, useState } from "react";

const PORTFOLIO_CONTEXT = `
You are an AI assistant embedded in Mufaddal Calcuttawala's portfolio website.
Answer questions only from the portfolio facts below.
If the answer is not covered, say you do not have that information and suggest contacting Mufaddal by email or LinkedIn.
Keep answers concise, friendly, and specific.
Do not invent facts.

=== PROFILE ===
Name: Mufaddal Calcuttawala
Location: Dubai, UAE
Role: Full Stack Developer
Focus: Crafting high-performance, AI-powered SaaS web applications.
Experience summary: 4+ years building responsive, scalable, secure web applications.
Availability: Open to frontend and full-stack roles.

=== ABOUT ===
Mufaddal specializes in Typescript, React.js, Node.js, Express, Nest.js, and MongoDB.
He has professional experience building dynamic web applications, reusable UI components, and backend APIs.
He also works with CI/CD pipelines, GitHub Actions, AWS deployment workflows, and cloud infrastructure.

=== SKILLS ===
Frontend: HTML, CSS, JavaScript, Typescript, ReactJS, Redux, TailwindCSS, React Router
Backend: Node.js, Express.js, Nest.js, PHP, REST APIs
Databases: MongoDB, MySQL, PostgreSQL
Cloud and DevOps: AWS EC2, AWS S3, AWS Lambda, Docker, GitHub Actions
Other: Authentication, authorization, RBAC, microservices, SSR, component optimization

=== EXPERIENCE ===
1. PwC India (March 2022 - June 2025)
- Built responsive SPAs with React, Redux, React Router, and Hooks.
- Developed REST APIs with Node.js, Express, and MongoDB.
- Worked on AWS deployments with EC2, S3, and Lambda.
- Used Docker and collaborated across design, QA, and DevOps.
- Also worked with Python automation and legacy PHP systems.

2. Azaya Marketting, Dubai, UAE (July 2025 - July 2026)
- Architected and built a multi-tenant SaaS CRM with RBAC.
- Used a multi-tier microservices architecture.
- Built backend systems with Nest.js, Prisma, and PostgreSQL.
- Designed systems capable of handling 15K+ daily requests.
- Managed AWS infrastructure for 10K+ daily transactions across 5 Windows EC2 instances and RDS PostgreSQL.
- Achieved 99.9% uptime.
- Improved performance by 40% through SSR and component optimization.

=== PROJECTS ===
1. Food Ordering App
- Link: https://cafe-menu-ya1n.onrender.com/cafe-central
- Category: Food ordering web app

2. Recipe Finder
- Link: https://mufaddal-viit.github.io/FoodApp/
- Category: Recipe search web app

3. Car Rental Management
- Link: https://github.com/mufaddal-viit/Car-Autorent
- Category: Car rental management application

4. Ecommerse Website
- Link: https://mufaddal-viit.github.io/eBazaar
- Category: Ecommerce website

5. Ball Race game
- Link: https://ball-race.netlify.app/
- Category: Browser game

=== CERTIFICATIONS ===
- AWS Certified Developer
- AWS Cloud Practitioner

=== BLOG POSTS ===
- Implementing React Query (published on LinkedIn)
- Why Hooks Became the Best Way to Reuse Logic in React (published on LinkedIn)
- CI/CD for Frontend Apps with GitHub Actions and AWS (not yet published)
- The Reak Defination of Scalable and Reliable Application (not yet published)

=== CONTACT ===
Email: calcutta53.mufaddal@gmail.com
Phone: +971556024553
LinkedIn: https://www.linkedin.com/in/mufaddal-calcuttawala
GitHub: https://github.com/mufaddal-viit
Website: https://mufaddal-portfolio.netlify.app/
`.trim();

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY?.trim();
const GROQ_MODEL =
  import.meta.env.VITE_GROQ_MODEL?.trim() || "llama-3.3-70b-versatile";

const SUGGESTIONS = [
  "What kind of work does Mufaddal specialize in?",
  "Tell me about Mufaddal's experience at PwC India",
  "Which project should I look at first?",
  "Is Mufaddal open to new opportunities?",
];

async function askGroq(history) {
  if (!GROQ_API_KEY) {
    throw new Error(
      "Portfolio AI is not configured yet. Reach Mufaddal at calcutta53.mufaddal@gmail.com or on LinkedIn.",
    );
  }

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "system", content: PORTFOLIO_CONTEXT }, ...history],
        max_tokens: 512,
        temperature: 0.6,
      }),
    },
  );

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new Error(
      errorPayload?.error?.message || `Error ${response.status}`,
    );
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error("AI Returned an empty response.");
  }

  return reply;
}

export default function PortfolioAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const timerId = window.setTimeout(() => inputRef.current?.focus(), 80);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    return () => window.clearTimeout(timerId);
  }, [isOpen, messages]);

  const send = async (text) => {
    const messageText = (text ?? input).trim();
    if (!messageText || loading) return;

    const nextMessages = [...messages, { role: "user", content: messageText }];

    setInput("");
    setError(null);
    setMessages(nextMessages);
    setLoading(true);

    try {
      const reply = await askGroq(nextMessages);
      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap");

        .pai-root * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .pai-trigger {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 20px 12px 16px;
          border: 1px solid #2a2a2a;
          border-radius: 999px;
          background: #0f0f0f;
          color: #f5e6c8;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: background 0.18s, border-color 0.18s, transform 0.12s;
        }

        .pai-trigger:hover {
          border-color: #c9a84c;
          background: #1a1a1a;
          transform: translateY(-1px);
        }

        .pai-trigger:active {
          transform: scale(0.97);
        }

        .pai-trigger-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c9a84c;
          animation: pai-pulse 2.2s ease-in-out infinite;
        }

        @keyframes pai-pulse {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0.35;
          }
        }

        .pai-panel {
          position: fixed;
          right: 28px;
          bottom: 88px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          width: 380px;
          max-height: 560px;
          overflow: hidden;
          border: 1px solid #222;
          border-radius: 16px;
          background: #0d0d0d;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.04);
          font-family: "DM Sans", sans-serif;
          transform-origin: bottom right;
          animation: pai-open 0.22s cubic-bezier(0.34, 1.45, 0.64, 1);
        }

        @keyframes pai-open {
          from {
            opacity: 0;
            transform: scale(0.88) translateY(12px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .pai-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          padding: 14px 16px 13px;
          border-bottom: 1px solid #1e1e1e;
          background: #0d0d0d;
        }

        .pai-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pai-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(201, 168, 76, 0.27);
          border-radius: 8px;
          background: #1a1505;
          color: #c9a84c;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          font-weight: 500;
        }

        .pai-header-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .pai-header-name {
          color: #f0e9d9;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .pai-header-sub {
          color: #666;
          font-size: 11px;
          letter-spacing: 0.02em;
        }

        .pai-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 6px;
          background: none;
          color: #555;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          transition: color 0.15s, background 0.15s;
        }

        .pai-close:hover {
          background: #1e1e1e;
          color: #ccc;
        }

        .pai-messages {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          padding: 16px;
          scroll-behavior: smooth;
        }

        .pai-messages::-webkit-scrollbar {
          width: 4px;
        }

        .pai-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .pai-messages::-webkit-scrollbar-thumb {
          border-radius: 99px;
          background: #2a2a2a;
        }

        .pai-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          height: 100%;
          padding: 8px 0 4px;
        }

        .pai-empty-icon {
          color: #c9a84c;
          opacity: 0.7;
          font-family: "IBM Plex Mono", monospace;
          font-size: 22px;
        }

        .pai-empty-label {
          color: #555;
          text-align: center;
          text-transform: uppercase;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
        }

        .pai-suggestions {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        .pai-suggestion {
          padding: 9px 12px;
          border: 1px solid #222;
          border-radius: 8px;
          background: #111;
          color: #888;
          cursor: pointer;
          font-family: "DM Sans", sans-serif;
          font-size: 12.5px;
          text-align: left;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }

        .pai-suggestion:hover {
          border-color: rgba(201, 168, 76, 0.33);
          background: #130f02;
          color: #d4b96a;
        }

        .pai-bubble {
          max-width: 86%;
          padding: 10px 13px;
          border-radius: 12px;
          font-size: 13.5px;
          line-height: 1.6;
          animation: pai-fadein 0.18s ease;
          white-space: pre-wrap;
        }

        @keyframes pai-fadein {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pai-bubble.user {
          align-self: flex-end;
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-bottom-right-radius: 4px;
          background: #1a1505;
          color: #f0e9d9;
        }

        .pai-bubble.assistant {
          align-self: flex-start;
          border: 1px solid #222;
          border-bottom-left-radius: 4px;
          background: #141414;
          color: #c8c0b4;
        }

        .pai-typing {
          display: flex;
          align-items: center;
          align-self: flex-start;
          gap: 4px;
          padding: 10px 14px;
          border: 1px solid #222;
          border-radius: 12px;
          border-bottom-left-radius: 4px;
          background: #141414;
        }

        .pai-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c9a84c;
          opacity: 0.6;
          animation: pai-bounce 1.2s ease-in-out infinite;
        }

        .pai-dot:nth-child(2) {
          animation-delay: 0.18s;
        }

        .pai-dot:nth-child(3) {
          animation-delay: 0.36s;
        }

        @keyframes pai-bounce {
          0%, 80%, 100% {
            opacity: 0.35;
            transform: translateY(0);
          }

          40% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }

        .pai-error {
          align-self: stretch;
          padding: 9px 12px;
          border: 1px solid #7c2020;
          border-radius: 8px;
          background: #1a0a0a;
          color: #e07070;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12.5px;
        }

        .pai-input-row {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 8px;
          padding: 12px 12px 14px;
          border-top: 1px solid #1a1a1a;
          background: #0d0d0d;
        }

        .pai-input {
          flex: 1;
          min-height: 38px;
          max-height: 110px;
          padding: 9px 12px;
          border: 1px solid #222;
          border-radius: 8px;
          outline: none;
          resize: none;
          background: #111;
          color: #f0e9d9;
          font-family: "DM Sans", sans-serif;
          font-size: 13.5px;
          transition: border-color 0.15s;
        }

        .pai-input::placeholder {
          color: #444;
        }

        .pai-input:focus {
          border-color: rgba(201, 168, 76, 0.33);
        }

        .pai-send {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: none;
          border-radius: 8px;
          background: #c9a84c;
          cursor: pointer;
          transition: background 0.15s, opacity 0.15s;
        }

        .pai-send:hover:not(:disabled) {
          background: #dbbf5e;
        }

        .pai-send:disabled {
          cursor: not-allowed;
          opacity: 0.35;
        }

        .pai-send svg {
          width: 15px;
          height: 15px;
          fill: #0d0d0d;
        }

        .pai-footer {
          padding: 0 12px 10px;
          background: #0d0d0d;
          color: #333;
          font-family: "IBM Plex Mono", monospace;
          font-size: 10.5px;
          letter-spacing: 0.04em;
          text-align: center;
        }

        @media (max-width: 440px) {
          .pai-panel {
            right: 12px;
            bottom: 80px;
            width: calc(100vw - 24px);
          }

          .pai-trigger {
            right: 12px;
            bottom: 16px;
          }
        }
      `}</style>

      <div className="pai-root">
        {!isOpen && (
          <button
            type="button"
            className="pai-trigger"
            onClick={() => setIsOpen(true)}
          >
            <span className="pai-trigger-dot" />
            Ask AI About Mufaddal
          </button>
        )}

        {isOpen && (
          <div className="pai-panel">
            <div className="pai-header">
              <div className="pai-header-left">
                <div className="pai-avatar">MC</div>
                <div className="pai-header-text">
                  <span className="pai-header-name">Mufaddal Calcuttawala</span>
                  <span className="pai-header-sub">AI Powered Portfolio</span>
                </div>
              </div>
              <button
                type="button"
                className="pai-close"
                aria-label="Close portfolio AI"
                onClick={() => setIsOpen(false)}
              >
                x
              </button>
            </div>

            <div className="pai-messages">
              {messages.length === 0 && (
                <div className="pai-empty">
                  <div className="pai-empty-icon">{"// ask"}</div>
                  <div className="pai-empty-label">
                    What would you like to know?
                  </div>
                  <div className="pai-suggestions">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        className="pai-suggestion"
                        onClick={() => send(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`pai-bubble ${message.role}`}
                >
                  {message.content}
                </div>
              ))}

              {loading && (
                <div className="pai-typing" aria-label="Assistant is typing">
                  <div className="pai-dot" />
                  <div className="pai-dot" />
                  <div className="pai-dot" />
                </div>
              )}

              {error && <div className="pai-error">! {error}</div>}

              <div ref={bottomRef} />
            </div>

            <div className="pai-input-row">
              <textarea
                ref={inputRef}
                className="pai-input"
                placeholder="Ask about projects, skills, or experience..."
                value={input}
                rows={1}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send();
                  }
                }}
              />
              <button
                type="button"
                className="pai-send"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                onClick={() => send()}
              >
                <svg viewBox="0 0 16 16">
                  <path d="M2 8L14 2L10 8L14 14L2 8Z" />
                </svg>
              </button>
            </div>

            <div className="pai-footer">
              {GROQ_API_KEY
                ? `${GROQ_MODEL} via Groq`
                : "Live AI disabled until Groq is configured"}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

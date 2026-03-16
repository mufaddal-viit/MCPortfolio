import { PORTFOLIO_CONTEXT } from "./PORTFOLIO_CONTEXT";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY?.trim();
const GROQ_MODEL =
  import.meta.env.VITE_GROQ_MODEL?.trim() || "llama-3.3-70b-versatile";

export async function askGroq(userMessage, history = []) {
  if (!GROQ_API_KEY) {
    throw new Error(
      "Portfolio AI is not configured yet. Reach Mufaddal at calcutta53.mufaddal@gmail.com or on LinkedIn.",
    );
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: PORTFOLIO_CONTEXT },
        ...history,
        { role: "user", content: userMessage },
      ],
      max_tokens: 512,
      temperature: 0.6,
    }),
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new Error(
      errorPayload?.error?.message || `Groq error ${response.status}`,
    );
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    throw new Error("Groq returned an empty response.");
  }

  return reply;
}

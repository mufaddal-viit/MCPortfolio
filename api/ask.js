import { PORTFOLIO_CONTEXT } from "../src/lib/PORTFOLIO_CONTEXT.js";

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

const MAX_PROMPT_LENGTH = 1500;
const MAX_HISTORY_MESSAGES = 12;
const MAX_HISTORY_CONTENT_LENGTH = 2000;

// Lightweight in-memory rate limiter (per warm serverless instance).
// Good enough to blunt casual abuse; pair with platform-level limits for more.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const rateBuckets = new Map();

function getClientId(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(clientId) {
  const now = Date.now();
  const bucket = rateBuckets.get(clientId) || [];
  const recent = bucket.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateBuckets.set(clientId, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

// Only keep well-formed user/assistant turns; drop anything that could be
// used to spoof a system role or inject oversized payloads.
function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter(
      (msg) =>
        msg &&
        (msg.role === "user" || msg.role === "assistant") &&
        typeof msg.content === "string" &&
        msg.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((msg) => ({
      role: msg.role,
      content: msg.content.slice(0, MAX_HISTORY_CONTENT_LENGTH),
    }));
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const clientId = getClientId(req);
    if (isRateLimited(clientId)) {
      return res
        .status(429)
        .json({ error: "Too many requests. Please slow down and try again shortly." });
    }

    const { prompt, history = [] } = req.body ?? {};

    if (typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt.length === 0) {
      return res.status(400).json({ error: "Prompt cannot be empty" });
    }
    if (trimmedPrompt.length > MAX_PROMPT_LENGTH) {
      return res
        .status(400)
        .json({ error: `Prompt is too long (max ${MAX_PROMPT_LENGTH} characters).` });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(503).json({
        error:
          "Portfolio AI is not configured. Reach Mufaddal at calcutta53.mufaddal@gmail.com or on LinkedIn.",
      });
    }

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: PORTFOLIO_CONTEXT },
            ...sanitizeHistory(history),
            { role: "user", content: trimmedPrompt },
          ],
          max_tokens: 512,
          temperature: 0.6,
        }),
      },
    );

    if (!groqRes.ok) {
      // Log the detailed upstream error server-side, but never forward raw
      // provider messages to the client (they can leak internal details).
      const payload = await groqRes.json().catch(() => ({}));
      console.error("[api/ask] Groq error:", groqRes.status, payload?.error?.message);
      return res
        .status(502)
        .json({ error: "The AI service is temporarily unavailable. Please try again." });
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res.status(502).json({ error: "Groq returned an empty response." });
    }

    return res.json({ reply });
  } catch (err) {
    console.error("[api/ask] unhandled error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

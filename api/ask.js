import { PORTFOLIO_CONTEXT } from "../src/lib/PORTFOLIO_CONTEXT.js";

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt, history = [] } = req.body ?? {};

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing prompt" });
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
            ...history,
            { role: "user", content: prompt },
          ],
          max_tokens: 512,
          temperature: 0.6,
        }),
      },
    );

    if (!groqRes.ok) {
      const payload = await groqRes.json().catch(() => ({}));
      const message =
        payload?.error?.message || `Groq error ${groqRes.status}`;
      return res.status(groqRes.status).json({ error: message });
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res.status(500).json({ error: "Groq returned an empty response." });
    }

    return res.json({ reply });
  } catch (err) {
    console.error("[api/ask] unhandled error:", err);
    return res
      .status(500)
      .json({ error: err?.message || "Internal server error" });
  }
}

export async function askGroq(userMessage, history = []) {
  let res;
  try {
    res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userMessage, history }),
    });
  } catch {
    throw new Error(
      "Could not reach the portfolio AI. Check your connection and try again.",
    );
  }

  let data = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON response — likely running npm run dev instead of vercel dev
    throw new Error(
      res.status === 404
        ? "API route not found. Run `vercel dev` instead of `npm run dev` to use the AI locally."
        : `Unexpected response from server (status ${res.status}).`,
    );
  }

  if (!res.ok) {
    throw new Error(
      data.error ||
        "Portfolio AI is not configured yet. Reach Mufaddal at calcutta53.mufaddal@gmail.com or on LinkedIn.",
    );
  }

  return data.reply;
}

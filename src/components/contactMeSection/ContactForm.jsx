import { useEffect, useRef, useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MAX_NAME_LENGTH = 80;
const MAX_MESSAGE_LENGTH = 1000;
const SUCCESS_RESET_MS = 5000;

const inputClasses =
  "h-12 rounded-xl border border-default/15 bg-input-bg px-4 text-base text-input-fg transition-colors placeholder:text-secondary/60 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/40";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [isSending, setIsSending] = useState(false);

  const form = useRef();
  const isSent = status.type === "success";

  // Auto-dismiss the success state so the visitor can send another message.
  useEffect(() => {
    if (status.type !== "success") return;
    const timer = setTimeout(
      () => setStatus({ type: "idle", text: "" }),
      SUCCESS_RESET_MS,
    );
    return () => clearTimeout(timer);
  }, [status.type]);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (isSending || isSent) return;

    // Honeypot: real users never fill a hidden field; bots usually do.
    if (form.current?.elements?.company?.value) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in every field before sending." });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        text: "Email service is not configured yet. Please reach out via email or LinkedIn.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", text: "" });

    try {
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setName("");
      setEmail("");
      setMessage("");
      setStatus({ type: "success", text: "Message sent successfully — I'll be in touch soon." });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("EmailJS send failed:", error?.text || error);
      }
      setStatus({
        type: "error",
        text: "Something went wrong sending your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      {status.text ? (
        <p
          role="status"
          aria-live="polite"
          className={`mb-4 text-center text-sm font-medium ${
            status.type === "success" ? "text-success" : "text-danger"
          }`}
        >
          {status.text}
        </p>
      ) : null}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4" noValidate>
        {/* Honeypot — visually hidden, ignored by humans, tempting to bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute h-0 w-0 overflow-hidden opacity-0"
        />

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          autoComplete="name"
          required
          maxLength={MAX_NAME_LENGTH}
          className={inputClasses}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          autoComplete="email"
          required
          className={inputClasses}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          name="message"
          rows="8"
          placeholder="Message"
          required
          maxLength={MAX_MESSAGE_LENGTH}
          className={`${inputClasses} h-auto resize-y py-3`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <span className="-mt-2 text-right text-xs text-secondary/60">
          {message.length}/{MAX_MESSAGE_LENGTH}
        </span>

        <button
          type="submit"
          disabled={isSending || isSent}
          className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-accent text-lg font-bold text-tooltip-fg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
            isSent
              ? "cursor-not-allowed bg-success"
              : isSending
                ? "cursor-wait bg-muted"
                : "bg-accent hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/25"
          }`}
        >
          {isSending ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Sending…
            </>
          ) : isSent ? (
            "Sent ✓"
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

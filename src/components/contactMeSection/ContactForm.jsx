import { useRef, useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert(
        "Email service is not configured. Add VITE_EMAILJS_* values in your .env file.",
      );
      return;
    }

    if (isSending || isSent) return;

    setIsSending(true);

    try {
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setEmail("");
      setName("");
      setMessage("");
      setSuccess("Message Sent Successfully");
      setIsSent(true);
      setIsSending(false);
    } catch (error) {
      console.log("FAILED...", error?.text || error);
      alert("Failed to send message. Try again.");
      setIsSending(false);
    }
  };

  return (
    <div>
      {success && <p className="mb-4 text-center text-accent">{success}</p>}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-input-bg px-3 text-lg text-input-fg placeholder:text-secondary/70"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-input-bg px-3 text-lg text-input-fg placeholder:text-secondary/70"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-input-bg p-3 text-lg text-input-fg placeholder:text-secondary/70"
          value={message}
          onChange={handleMessage}
        />

        <button
          type="submit"
          disabled={isSending || isSent}
          className={`h-12 w-full rounded-lg border border-accent text-xl font-bold text-tooltip-fg transition-all duration-500 ${
            isSent
              ? "cursor-not-allowed bg-success"
              : isSending
                ? "cursor-wait bg-muted"
                : "bg-accent hover:bg-accent-strong"
          }`}
        >
          {isSent ? "SENT" : isSending ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

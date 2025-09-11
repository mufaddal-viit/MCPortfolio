import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSending, setIsSending] = useState(false); // 🆕
  const [isSent, setIsSent] = useState(false); // 🆕

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Prevent multiple clicks
    if (isSending || isSent) return;

    setIsSending(true);

    emailjs
      .sendForm("service_d5oi96k", "template_7ppk0aj", form.current, {
        publicKey: "CWAR7RiVBR9-GHxNF",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully ✅");
          setIsSent(true); // Email sent
          setIsSending(false); // Stop loading
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Try again.");
          setIsSending(false); // Reset on failure
        }
      );
  };

  return (
    <div>
      {success && <p className="text-cyan text-center mb-4">{success}</p>}
      {/* <Tooltip text="Hover me" tooltip="This is a tooltip!" /> */}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-newcolor px-2 text-brown text-lg"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-newcolor px-2 text-brown text-lg"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-newcolor p-2 text-brown text-lg"
          value={message}
          onChange={handleMessage}
        />

        {/* ✅ Updated Button */}
        <button
          type="submit"
          disabled={isSending || isSent}
          className={`w-full rounded-lg border border-lightCyan text-white h-12 font-bold text-xl transition-all duration-500
            ${
              isSent
                ? "bg-green-600 cursor-not-allowed"
                : isSending
                ? "bg-grey cursor-wait"
                : "hover:bg-darkCyan bg-cyan"
            }`}
        >
          {isSent ? "SENT ✅" : isSending ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

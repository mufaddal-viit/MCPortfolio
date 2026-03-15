import { Github, Linkedin } from "lucide-react";

export default function NavbarSocial({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`.trim()}>
      <a
        href="https://www.linkedin.com/in/mufaddal-calcuttawala"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-secondary transition-colors duration-300 hover:text-accent"
      >
        <Linkedin size={20} />
      </a>

      <a
        href="https://github.com/mufaddal-viit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-secondary transition-colors duration-300 hover:text-accent"
      >
        <Github size={20} />
      </a>
    </div>
  );
}

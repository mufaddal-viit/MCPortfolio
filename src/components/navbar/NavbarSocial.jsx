import { Github, Linkedin } from "lucide-react";

export default function NavbarSocial({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`.trim()}>
        <a
          href="https://www.linkedin.com/in/mufaddal-calcuttawala"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/70 hover:text-cyan transition-colors duration-300"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="https://github.com/mufaddal-viit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white/70 hover:text-cyan transition-colors duration-300"
        >
          <Github size={20} />
        </a>
      </div>
  );
}

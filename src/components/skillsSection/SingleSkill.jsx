// SingleSkill.jsx
const colorClassMap = {
  html: {
    text: "text-html",
    bgLight: "bg-html/10",
    bgHover: "group-hover:bg-html/20",
    borderHover: "group-hover:border-html/60",
  },
  css: {
    text: "text-css",
    bgLight: "bg-css/10",
    bgHover: "group-hover:bg-css/20",
    borderHover: "group-hover:border-css/60",
  },
  javascript: {
    text: "text-javascript",
    bgLight: "bg-javascript/10",
    bgHover: "group-hover:bg-javascript/20",
    borderHover: "group-hover:border-javascript/60",
  },
  typescript: {
    text: "text-typescript",
    bgLight: "bg-typescript/10",
    bgHover: "group-hover:bg-typescript/20",
    borderHover: "group-hover:border-typescript/60",
  },
  react: {
    text: "text-react",
    bgLight: "bg-react/10",
    bgHover: "group-hover:bg-react/20",
    borderHover: "group-hover:border-react/60",
  },
  redux: {
    text: "text-redux",
    bgLight: "bg-redux/10",
    bgHover: "group-hover:bg-redux/20",
    borderHover: "group-hover:border-redux/60",
  },
  tailwind: {
    text: "text-tailwind",
    bgLight: "bg-tailwind/10",
    bgHover: "group-hover:bg-tailwind/20",
    borderHover: "group-hover:border-tailwind/60",
  },
  nodejs: {
    text: "text-nodejs",
    bgLight: "bg-nodejs/10",
    bgHover: "group-hover:bg-nodejs/20",
    borderHover: "group-hover:border-nodejs/60",
  },
  express: {
    text: "text-express",
    bgLight: "bg-express/10",
    bgHover: "group-hover:bg-express/20",
    borderHover: "group-hover:border-express/60",
  },
  github: {
    text: "text-github",
    bgLight: "bg-github/10",
    bgHover: "group-hover:bg-github/20",
    borderHover: "group-hover:border-github/60",
  },
  mysql: {
    text: "text-mysql",
    bgLight: "bg-mysql/10",
    bgHover: "group-hover:bg-mysql/20",
    borderHover: "group-hover:border-mysql/60",
  },
  mongodb: {
    text: "text-mongodb",
    bgLight: "bg-mongodb/10",
    bgHover: "group-hover:bg-mongodb/20",
    borderHover: "group-hover:border-mongodb/60",
  },
};

const fallbackColors = {
  text: "text-accent-2",
  bgLight: "bg-accent-2/10",
  bgHover: "group-hover:bg-accent-2/20",
  borderHover: "group-hover:border-accent-2/60",
};

import { memo } from "react";

const SingleSkill = ({ imgSvg, text, color }) => {
  const colors = colorClassMap[color] || fallbackColors;

  return (
    <div className="group flex w-full max-w-[150px] flex-col items-center">
      {/* Icon container with background & border */}
      <div
        className={`
          relative flex items-center justify-center
          h-20 w-20 sm:h-24 sm:w-24
          ${colors.bgLight} ${colors.bgHover}
          rounded-2xl border border-default/40 ${colors.borderHover}
          shadow-soft transition-all duration-300 ease-out
          group-hover:-translate-y-1.5 group-hover:shadow-card
        `}
      >
        <div
          className={`
            ${colors.text} text-5xl sm:text-6xl
            transition-transform duration-300 ease-out
            group-hover:scale-110
          `}
        >
          {imgSvg}
        </div>
      </div>

      {/* Skill name */}
      <p className="mt-4 text-center text-sm font-semibold tracking-wide text-secondary transition-colors duration-300 group-hover:text-primary sm:text-base">
        {text}
      </p>
    </div>
  );
};

export default memo(SingleSkill);

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
  text: "text-orange-500",
  bgLight: "bg-orange/10",
  bgHover: "group-hover:bg-orange/20",
  borderHover: "group-hover:border-orange/60",
};

const SingleSkill = ({ imgSvg, text, color }) => {
  // Get color prefix (e.g. "html" → "html")
  const colors = colorClassMap[color] || fallbackColors;

  return (
    <div
      className={`
        group relative
        flex flex-col items-center
        transition-all duration-400 ease-out
        hover:animate-bounce hover:scale-[1.04]
        focus-within:-translate-y-2 focus-within:scale-[1.04]
        focus:outline-none cursor-pointer
      `}
    >
      {/* Icon container with background & border */}
      <div
        className={`
          relative flex items-center justify-center
          w-20 h-20 sm:w-24 sm:h-24
          ${colors.bgLight} ${colors.bgHover}
          rounded-full
          border-4 border-orange/60 ${colors.borderHover}
          shadow-sm group-hover:shadow-md
          backdrop-blur-[2px]
          transition-all duration-400 ease-out
          group-hover:rotate-3
        `}
      >
        <div
          className={`
            ${colors.text} text-5xl sm:text-6xl
            group-hover:scale-110 group-hover:rotate-6
            transition-transform duration-500 ease-out
          `}
        >
          {imgSvg}
        </div>
      </div>

      {/* Skill name */}
      <p
        className={`
          mt-4 text-base sm:text-lg font-semibold text-center
          text-white/90 group-hover:text-white
          tracking-wide
          transition-colors duration-300
        `}
      >
        {text}
      </p>
    </div>
  );
};

export default SingleSkill;

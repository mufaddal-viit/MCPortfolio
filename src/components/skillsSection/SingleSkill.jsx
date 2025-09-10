const colorClassMap = {
  html: "text-html",
  css: "text-css",
  javascript: "text-javascript",
  react: "text-react",
  redux: "text-redux",
  tailwind: "text-tailwind",
  nodejs: "text-nodejs",
  express: "text-express",
  github: "text-github",
  mysql: "text-mysql",
  mongodb: "text-mongodb",
};
const SingleSkill = ({ imgSvg, text, color }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className={`bg-white ${colorClassMap[color]} h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange`}
        >
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;

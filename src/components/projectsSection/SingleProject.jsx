import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="text-accent-2 font-extrabold md:text-5xl sm:text-3xl">
          {name}
        </h2>
        {/* <h2
          className={`text-xl font-thin text-secondary font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2> */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 flex cursor-pointer items-center gap-2 text-2xl text-accent transition-all duration-500 hover:text-accent-2 sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="relative h-[210px] w-[210px] transform overflow-hidden rounded-xl border border-default/60 transition-all duration-500 hover:scale-110">
        <img
          src={image}
          alt={`${name} preview`}
          loading="lazy"
          decoding="async"
          width="210"
          height="210"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SingleProject;

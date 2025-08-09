// eslint-disable-next-line react/prop-types
const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl m-2 text-orange">{number}</p>
      <p className="font-bold text-xl text-cyan uppercase -mt-1">{text}</p>
    </div>
  );
};

export default ExperienceInfo;

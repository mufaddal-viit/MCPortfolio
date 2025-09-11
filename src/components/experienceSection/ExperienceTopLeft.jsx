import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-9 w-[300px]">
      <p className="text-lightCyan font-bold uppercase text-2xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="PWC" text="India" />
      </div>
      <p className="text-center ">
        With 5 years of experience building dynamic and user-friendly complete
        web applications.
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;

const ExperienceTopRight = () => {
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-black p-4 rounded-xl shadow-xl">
      <p className="text-lg text-center text-lightGrey">
        During my tenure at <span className="font-bold text-white">PWC, </span>
        I created dynamic and responsive UI, leveraging best practices to create
        scalable and maintainable solutions. <br />I worked on building SPAs
        using{" "}
        <span className="font-bold text-white">
          React, Redux, React-router and hooks{" "}
        </span>
        utilizing component based architecture.{" "}
      </p>
      <p className="text-lg text-center text-lightGrey">
        Also developed REST APIs using{" "}
        <span className="font-bold text-white">
          Node js Express and Mongodb
        </span>{" "}
        with authentications implemented.
      </p>
    </div>
  );
};

export default ExperienceTopRight;

const SectioHeading = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2 className={`mb-10 text-6xl font-bold text-accent ${titleClassName}`}>
        {title}
      </h2>

      {description ? (
        <p className={`max-w-3xl text-lg text-secondary ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectioHeading;

const SectionLayout = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      className={`mx-auto mt-[100px] max-w-[1200px] px-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;

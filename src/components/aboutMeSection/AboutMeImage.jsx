const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          loading="lazy"
          decoding="async"
          width="300"
          height="500"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="absolute bottom-[-30px] left-[-30px] -z-10 h-[500px] w-[250px] rounded-bl-[120px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[120px] bg-accent-2"></div>
    </div>
  );
};

export default AboutMeImage;

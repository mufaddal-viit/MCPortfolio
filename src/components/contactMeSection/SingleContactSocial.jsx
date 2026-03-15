const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-2 text-2xl text-accent-2">
      <a
        href={link}
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;

export default function CertificateImage({ src, name }) {
  return (
    <div className="group mt-5 overflow-hidden rounded-card border border-default/15 bg-surface-2/40 shadow-soft transition-all duration-300 hover:border-accent/50 hover:shadow-card-hover">
      <img
        src={src}
        alt={`${name} certificate`}
        loading="lazy"
        decoding="async"
        className="w-full transition-transform duration-300 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default function CertificateImage({ urlz, name }) {
  return (
    <div>
      <img
        src={urlz}
        alt={name + " certificate"}
        loading="lazy"
        decoding="async"
        className="mt-5 rounded-lg hover:scale-110 transition-all duration-700 hover:border-2 "
      />
    </div>
  );
}

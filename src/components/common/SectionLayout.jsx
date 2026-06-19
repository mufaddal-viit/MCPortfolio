import { cn } from "@/lib/utils";

const SectionLayout = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto mt-section max-w-content scroll-mt-28 px-4 sm:px-6",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SectionLayout;

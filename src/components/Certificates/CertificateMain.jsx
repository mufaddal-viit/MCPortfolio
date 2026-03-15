import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import CertificateText from "./CertificateText";
import CertificateImage from "./CertificateImage";

export default function CertificateMain() {
  return (
    <div id="certificate" className="max-w-6xl mx-auto px-4 py-20 mt-10">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="mb-12 text-center text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
          Certificates
        </h2>

        <div className="mb-20 flex flex-col gap-16 rounded-2xl bg-surface p-8 md:p-12 lg:flex-row lg:gap-24">
          {/* Certificate 1 */}
          <div className="flex flex-col items-center text-center flex-1">
            <CertificateText certName="AWS Certified Developer" />
            <CertificateImage
              urlz="/images/aws_developer.png"
              name="Certified Developer"
            />
          </div>

          {/* Certificate 2 */}
          <div className="flex flex-col items-center text-center flex-1">
            <CertificateText certName="AWS Cloud Practitioner" />
            <CertificateImage
              urlz="/images/aws_cloudprac.png"
              name="Cloud Practitioner"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

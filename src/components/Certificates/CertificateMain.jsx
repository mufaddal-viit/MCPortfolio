import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import CertificateText from "./CertificateText";
import CertificateImage from "./CertificateImage";

export default function CertificateMain() {
  return (
    <div id="certificate" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-cyan mb-12 text-center font-bold">
          Certificates
        </h2>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24 bg-brown p-8 md:p-12 rounded-2xl mb-20">
          {/* Certificate 1 */}
          <div className="flex flex-col items-center text-center flex-1">
            <CertificateText certName="AWS Certified Developer" />
            <CertificateImage
              urlz="images/aws_developer.png"
              name="Certified Developer"
            />
          </div>

          {/* Certificate 2 */}
          <div className="flex flex-col items-center text-center flex-1">
            <CertificateText certName="AWS Cloud Practitioner" />
            <CertificateImage
              urlz="images/aws_cloudprac.png"
              name="Cloud Practitioner"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

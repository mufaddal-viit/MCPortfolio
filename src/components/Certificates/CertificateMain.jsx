import CertificateName from "./CertificateName";
import CertificateImage from "./CertificateImage";
import SectionLayout from "../common/SectionLayout";
import SectioHeading from "../common/SectioHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

export default function CertificateMain() {
  return (
    <SectionLayout id="certificate">
      <SectionHeadingMotion>
        <SectioHeading title="Certificates" />
      </SectionHeadingMotion>

      <SectionBodyMotion>
        <div className="mb-20 flex flex-col gap-16 rounded-2xl bg-surface p-8 md:p-12 lg:flex-row lg:gap-24">
          {/* Certificate 1 */}
          <div className="flex flex-col items-center text-center flex-1">
            <CertificateName certName="AWS Certified Developer" />
            <CertificateImage
              urlz="/images/aws_developer.png"
              name="Certified Developer"
            />
          </div>

          {/* Certificate 2 */}
          <div className="flex flex-col items-center text-center flex-1">
            <CertificateName certName="AWS Cloud Practitioner" />
            <CertificateImage
              urlz="/images/aws_cloudprac.png"
              name="Cloud Practitioner"
            />
          </div>
        </div>
      </SectionBodyMotion>
    </SectionLayout>
  );
}

import CertificateName from "./CertificateName";
import CertificateImage from "./CertificateImage";
import SectionLayout from "../common/SectionLayout";
import SectionHeading from "../common/SectionHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

export default function CertificateMain() {
  return (
    <SectionLayout id="certificate">
      <SectionHeadingMotion>
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          description="Industry-recognized certifications validating my cloud and engineering expertise."
        />
      </SectionHeadingMotion>

      <SectionBodyMotion>
        <div className="mb-20 grid grid-cols-1 gap-8 rounded-card border border-default/15 bg-surface p-6 shadow-card md:p-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center text-center">
            <CertificateName certName="AWS Certified Developer" />
            <CertificateImage
              src="/images/aws_developer.png"
              name="AWS Certified Developer"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <CertificateName certName="AWS Cloud Practitioner" />
            <CertificateImage
              src="/images/aws_cloudprac.png"
              name="AWS Cloud Practitioner"
            />
          </div>
        </div>
      </SectionBodyMotion>
    </SectionLayout>
  );
}

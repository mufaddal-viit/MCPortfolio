import SingleProject from "./SingleProject";
import projectsData from "./projectsData";
import SectionLayout from "../common/SectionLayout";
import SectioHeading from "../common/SectioHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const ProjectsMain = () => {
  return (
    <SectionLayout id="projects">
      <SectionHeadingMotion viewport={{ amount: 0.7 }}>
        <SectioHeading
          title="Projects"
          description={
            <>
              I have worked on web development projects, ranging from
              responsive websites <br />
              to full-stack applications and complex front-end interfaces.
            </>
          }
        />
      </SectionHeadingMotion>
      <SectionBodyMotion className="mt-12 flex flex-col gap-20">
        {projectsData.map((project) => {
          return (
            <SingleProject
              key={project.name}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default ProjectsMain;

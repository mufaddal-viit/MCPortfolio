import SingleProject from "./SingleProject";
import projectsData from "./projectsData";
import SectionLayout from "../common/SectionLayout";
import SectionHeading from "../common/SectionHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const ProjectsMain = () => {
  return (
    <SectionLayout id="projects">
      <SectionHeadingMotion viewport={{ amount: 0.7 }}>
        <SectionHeading
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
      <SectionBodyMotion className="mt-12 flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <SingleProject
            key={project.name || `project-${index}`}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
            about={project.about}
          />
        ))}
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default ProjectsMain;

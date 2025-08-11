import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import CertificateMain from "./components/Certificates/certificateMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
// import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      {/* <SubHeroMain /> */}
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      {/* <ProjectsMain /> */}
      <ContactMeMain />
      <CertificateMain />
      <FooterMain />
    </main>
  );
}

export default App;

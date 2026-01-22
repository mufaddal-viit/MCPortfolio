import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
// import CertificateMain from "./components/Certificates/CertificateMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import ThemeToggle from "./components/ui/ThemeToggle";
// import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import CertificateMain from "./components/Certificates/CertificateMain";
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
      <ProjectsMain />
      <CertificateMain />
      <ContactMeMain />
      <FooterMain />
      <ThemeToggle />
    </main>
  );
}

export default App;

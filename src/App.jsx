import { useState } from "react";
import Header from "./components/header/header";
import WelcomeSection from "./components/sections/welcome/welcomeSection";
import WorkSection from "./components/sections/work/workSection";
import ProjectSection from "./components/sections/project/projectSection";
import ContactSection from "./components/sections/contact/contactSection";
import ContainerFullHD from "./components/container/containerFullHD";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <WelcomeSection />
      <ContainerFullHD>
        <WorkSection />
        <ProjectSection />
        <ContactSection />
      </ContainerFullHD>
    </>
  );
}

export default App;
import { useState } from "react";
import Header from "./components/header/header";
import WelcomeSection from "./components/sections/welcome/welcomeSection";
import WorkSection from "./components/sections/work/workSection";
import ProjectSection from "./components/sections/project/projectSection";
import ContactSection from "./components/sections/contact/contactSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header className={`fixed top-0 left-0 right-0 z-50`} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <WelcomeSection />
      <WorkSection/>
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default App;
import { useRef, useState } from "react";
import Header from "./components/header/header";
import ThemeProvider from './context/themeContext/themeProvider.jsx';
import WelcomeSection from "./components/sections/welcome/welcomeSection";
import WorkSection from "./components/sections/work/workSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRef = useRef(null);






  return (
    <>
      <ThemeProvider>
        <Header className={`fixed top-0 left-0 right-0 z-50`} menuOpen={menuOpen} setMenuOpen={setMenuOpen} sectionRef={sectionRef}/>
        <WelcomeSection />
        <WorkSection sectionRef={sectionRef} />
      </ThemeProvider>
    </>
  );
}

export default App;
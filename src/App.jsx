import { useEffect, useRef, useState } from "react";
import Header from "./components/header/header";
import ThemeProvider from './context/themeContext/themeProvider.jsx';
import WelcomeSection from "./components/sections/welcome/welcomeSection";
import WorkSection from "./components/sections/work/workSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerBg, setHeaderBg] = useState("transparent");
  const [textColor, setColorText] = useState("white");
  const sectionRef = useRef(null);



  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!menuOpen) {
          setHeaderBg(entry.isIntersecting ? "white" : "transparent");
          setColorText(entry.isIntersecting ? "black" : "white");
        }
      },
      { threshold: menuOpen ? 0.6 : 0.9 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [menuOpen]);

  useEffect(() => {
    setColorText("white");
    setHeaderBg("transparent");
    if (menuOpen) {
      setHeaderBg("white");
      setColorText("black");
    }
  }, [menuOpen]);


  return (
    <>
      <ThemeProvider>
        <Header className={`fixed top-0 left-0 right-0 z-50 text-${textColor} bg-${headerBg}`} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <WelcomeSection />
        <WorkSection sectionRef={sectionRef} />
      </ThemeProvider>
    </>
  );
}

export default App;
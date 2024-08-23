import { useEffect, useRef, useState } from "react";
import Header from "./components/header/header";

function App() {
  const [headerBg, setHeaderBg] = useState("transparent");
  const [textColor, setColorText] = useState("white");
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["de Aplicaciones", "Web", "de API's"];


  useEffect(() => {
    if (sectionRef.current) {
      const timeout = setTimeout(() => {
        setText((prev) => roles[index].substring(0, prev.length + (isDeleting ? -1 : 1)));

        if (!isDeleting && text === roles[index]) {
          setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => prevIndex < roles.length - 1 ? prevIndex + 1 : 0);
        }

        clearTimeout(timeout);
      }, isDeleting ? 100 : 200); // Controla la velocidad de escritura y borrado

      return () => clearTimeout(timeout);
    }
  }, [text, isDeleting, index]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderBg(entry.isIntersecting ? "white" : "transparent");
        setColorText(entry.isIntersecting ? "black" : "white");
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <>
      <Header className={`fixed top-0 left-0 right-0 z-50 text-${textColor} bg-${headerBg}`} />
      <div className="relative h-screen bg-center bg-cover text-white" style={{ backgroundImage: "url('/images/background.jpg')", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="flex flex-col gap-5 items-center justify-center text-white m-10 text-center">
            <p className="text-lg sm:text-3xl">Hola! 👋🏻</p>
            <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Soy Daniel Leon Herrero</p>
            <p className="text-xl md:text-4xl">Un Desarrollador {text}<span className="animate-blink">|</span></p>
          </section>
        </div>
      </div>
      <div ref={sectionRef} className="relative h-screen bg-white text-black">
        <section className="flex flex-col gap-5 items-center justify-center text-black m-10 text-center">
          <p className="text-lg sm:text-3xl">Nueva Sección</p>
          <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Contenido de la nueva sección</p>
        </section>
      </div>
    </>
  );
}

export default App;
import { useRef } from "react";
import SectionContext from "./sectionContext";

const SectionProvider = ({ children }) => {
    const welcomeSection = useRef(null);
    const workSection = useRef(null);
    const projectSection = useRef(null);
    const contactSection = useRef(null);

    const handleScroll = (section) => {
        section.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <SectionContext.Provider value={{ workSection, welcomeSection, projectSection, contactSection, handleScroll }}>
            {children}
        </SectionContext.Provider>
    );
}

export default SectionProvider;
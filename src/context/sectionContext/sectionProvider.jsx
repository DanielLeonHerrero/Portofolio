import { useRef } from "react";
import SectionContext from "./sectionContext";

const SectionProvider = ({ children }) => {
    const welcomeSection = useRef(null);
    const workSection = useRef(null);
    const projectSection = useRef(null);
    const contactSection = useRef(null);

    return (
        <SectionContext.Provider value={{ workSection, welcomeSection, projectSection, contactSection }}>
            {children}
        </SectionContext.Provider>
    );
}

export default SectionProvider;
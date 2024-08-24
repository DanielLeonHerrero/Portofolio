import { useState } from "react";
import ThemeContext from "./themeContext";
import { useEffect } from "react";

const ThemeProvider = ({ children }) => {
    // const [theme, setTheme] = useState(
    //     window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    //   );
        const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark');
        }else {
            document.body.classList.add('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
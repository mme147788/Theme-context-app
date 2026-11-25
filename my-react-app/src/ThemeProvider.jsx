import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [currentTheme, setCurrentTheme] = useState("light")

    function toggleCurrentTheme() {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{ currentTheme, toggleCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeContext, ThemeProvider };
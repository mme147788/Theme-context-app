import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import '../styleSheet.css';



export default function Header() {
    const { toggleCurrentTheme, currentTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${currentTheme === "light" ? "lightHF" : "darkHF"}`}>
        <h3>My Theme App</h3>
        <button className={currentTheme === "light" ? "light" :"dark"}onClick={toggleCurrentTheme}>Change mode</button>
    </header>
  )
}

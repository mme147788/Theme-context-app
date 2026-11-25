import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import '../styleSheet.css';

export default function Footer() {

     const { currentTheme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${currentTheme === "light" ? "lightHF" : "darkHF"}`}>
      <span>Theme: {currentTheme}</span>
    </footer>
  )
}

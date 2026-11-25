import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import '../styleSheet.css';

export default function Content() {

     const { currentTheme } = useContext(ThemeContext);
  return (
    <div className={currentTheme==="light" ? "light" : "dark"}>

      <div className={`card ${currentTheme === "light" ? "lightCard" : "darkCard"}`}>
        <h4>Card 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aperiam ab aliquid adipisci necessitatibus minus? Molestias temporibus consequuntur cum repellendus.</p>
      </div>
      
       <div className={`card ${currentTheme === "light" ? "lightCard" : "darkCard"}`}>
        <h4>Card 2</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aperiam ab aliquid adipisci necessitatibus minus? Molestias temporibus consequuntur cum repellendus.</p>
      </div>

       <div className={`card ${currentTheme === "light" ? "lightCard" : "darkCard"}`}>
        <h4>Card 3</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aperiam ab aliquid adipisci necessitatibus minus? Molestias temporibus consequuntur cum repellendus.</p>
      </div>
    </div>
  )
}

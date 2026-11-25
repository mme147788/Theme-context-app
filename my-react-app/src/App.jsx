import './styleSheet.css';
import { ThemeProvider } from "./ThemeProvider.jsx"
import Header from "./components/Header.jsx"
import Content from "./components/Content.jsx"
import Footer from "./components/Footer.jsx"



function App() {

  return (
    <ThemeProvider>
      <Header/>
      <Content/>
      <Footer/>
    </ThemeProvider>
   
  )
}

export default App

import './App.css'
import Hero from './Hero'
import About from './About'
import Project from "./Projects"
import Contact from './Contact'
import Certificate from './Certificate'
import Footer from './Footer'
import { LogoMarquee } from './components/LogoMarquee';

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Project/>
      <LogoMarquee />
      <Certificate/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

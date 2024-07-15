import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skill.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}

export default App;

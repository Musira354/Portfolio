import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className='font-sans text-gray-900'>
      <Navbar
        onScrollToHome={() =>
          homeRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToAbout={() =>
          aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToProjects={() =>
          projectsRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToContact={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <section ref={homeRef}>
        <Home
          onScrollToProjects={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;

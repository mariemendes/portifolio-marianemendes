import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portifolio from './components/Portifolio/Portifolio';
import Contact from './components/Contact/Contact';

function App() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const skills = useRef(null);
  const resume = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (ref) => {
    scroller.scrollTo(ref.current.id, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="AppBody">
          <div ref={home} id="home" className="section">
            <Home />
          </div>
          <div ref={aboutMe} id="aboutme" className="section">
            <AboutMe />
          </div>
          <div ref={skills} id="skills" className="section">
            <Skills />
          </div>
          <div ref={resume} id="resume" className="section">
            <Resume />
          </div>
          <div ref={portfolio} id="portifolio" className="section">
            <Portifolio />
          </div>
          <div ref={contact} id="contact" className="section">
            <Contact />
          </div>
          <Footer />
        </main>
        <ScrollToSection
          scrollToSection={scrollToSection}
          refs={{
            home,
            aboutMe,
            skills,
            resume,
            portfolio,
            contact,
          }}
        />
      </div>
    </Router>
  );
}

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    console.log(sectionId);
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, [location]);
}

export default App;

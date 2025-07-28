import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import TopHeader from './components/TopHeader/TopHeader';
import Home from './components/Home/Home';
import GitHubMessage from './components/GitHubMessage/GitHubMessage';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Portifolio from './components/Portifolio/Portifolio';

function AppContent() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 991;
  const isHomeOrContact = location.pathname === '/' || location.pathname === '/contact';

  // Lógica correta:
  const shouldShowProfile = isMobile ? isHomeOrContact : true;

  return (
    <div className="App">
      <header>
        <TopHeader />
      </header>
      <main className="containerMain">
        {shouldShowProfile && (
          <div className="leftContainerMain">
            <Profile />
          </div>
        )}
        <div className="rightContainerMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Portifolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <GitHubMessage />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;

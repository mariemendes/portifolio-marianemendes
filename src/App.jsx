import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import TopHeader from './components/TopHeader/TopHeader';

// Components
import Home from './components/Home/Home';
import GitHubMessage from './components/GitHubMessage/GitHubMessage';
import Experience from './components/Experience/Experience';
// import Skills from './components/Skills/Skills';
// import Resume from './components/Resume/Resume';
// import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <TopHeader />
        </header>
        <main className="containerMain">
          <div className="leftContainerMain">
            <Profile />
          </div>
          <div className="rightContainerMain">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              {/* 
              <Route path="/projects" element={<Portfolio />} />
              */}
            </Routes>
            <GitHubMessage />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

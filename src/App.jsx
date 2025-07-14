import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
// import Home from './components/Home/Home';
// import AboutMe from './components/AboutMe/AboutMe';
// import Skills from './components/Skills/Skills';
// import Resume from './components/Resume/Resume';
// import Portifolio from './components/Portifolio/Portifolio';
// import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import TopHeader from './components/TopHeader/TopHeader';
import Home from './components/Home/Home';

function App() {
  // const home = useRef(null);
  // const aboutMe = useRef(null);
  // const skills = useRef(null);
  // const resume = useRef(null);
  // const portfolio = useRef(null);
  // const contact = useRef(null);

  // const scrollToSection = (ref) => {
  //   scroller.scrollTo(ref.current.id, {
  //     duration: 500,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // };

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
            <div id="home" className="section">
              <Home />
            </div>
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

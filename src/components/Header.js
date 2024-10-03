import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import MarianeIMG from '../assets/IMG_MarianeMendes.jpg';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth < 992);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.picture}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <span className={styles.span}>
            <img src={MarianeIMG} alt="Mariane IMG" />
          </span>
        </Link>
      </div>
      {!isDesktop && (
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
      )}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`}>
        <Link
          className={`${styles.link} ${
            location.pathname === '/' ? styles.activeLink : ''
          }`}
          to="/"
          aria-label="Home"
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${
            location.pathname === '/aboutme' ? styles.activeLink : ''
          }`}
          to="/aboutme"
          aria-label="About Me"
        >
          About Me
        </Link>
        <Link
          className={`${styles.link} ${
            location.pathname === '/resume' ? styles.activeLink : ''
          }`}
          to="/resume"
          aria-label="Resume"
        >
          Resume
        </Link>
        <Link
          className={`${styles.link} ${
            location.pathname === '/skills' ? styles.activeLink : ''
          }`}
          to="/skills"
          aria-label="skills"
        >
          Skills
        </Link>
        <Link
          className={`${styles.link} ${
            location.pathname === '/portifolio' ? styles.activeLink : ''
          }`}
          to="/portifolio"
          aria-label="Portfolio"
        >
          Portifolio
        </Link>
        <Link
          className={`${styles.link} ${
            location.pathname === '/contact' ? styles.activeLink : ''
          }`}
          to="/contact"
          aria-label="Contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};
export default Header;

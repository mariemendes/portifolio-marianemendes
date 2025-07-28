import React, { useState, useRef, useEffect } from 'react';
import { HamburguerIcon, CloseIcon } from '../../../../assets/Icons/Icons';
import { Link, useLocation } from 'react-router-dom';
import styles from './HamburguerNav.module.css';
import sections from '../../../Geral/sections';
import ProfileHambNav from '../../../Profile/ProfileHambNav';

const HamburguerNav = ({ className }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Fecha ao clicar fora do menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.hamburgerNav}>
      <button className={`${styles.btnFirst} btn-first`} onClick={toggleMenu}>
        <HamburguerIcon height={20} width={20} />
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`}>
        <nav
          ref={menuRef}
          className={`${styles.navMenuHamburguer} ${isOpen ? styles.open : ''}`}
        >
          <button className={styles.closeBtn} onClick={closeMenu}>
            <CloseIcon width={20} height={20} />
          </button>
          <div>
            <ProfileHambNav />
          </div>
          <ul className={`${className} ${styles.listNav}`}>
            {sections.map(({ label, to, aria }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`${styles.link} ${
                    location.pathname === to ? styles.activeLink : ''
                  }`}
                  aria-label={aria}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburguerNav;

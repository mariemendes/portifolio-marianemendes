import React from 'react';
import styles from './Nav.module.css';
import { Link, useLocation } from 'react-router-dom';
import sections from '../Geral/sections';

const Nav = ({ className }) => {
  const location = useLocation();

  return (
    <nav className={`${styles.containerNav}`}>
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
  );
};

export default Nav;

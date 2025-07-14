import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div className={styles.footer}>
      <p>Copyright © {year} Mariane Mendes. All Rights Reserved.
      
        Developed entirely by me, with design inspired by {' '}
        <Link
          to="https://www.emanuelesgroi.com/"
          aria-label="https://www.emanuelesgroi.com/"
        >
           Emanuele Sgroi 
        </Link> and GitHub.
      </p>
    </div>
  );
};

export default Footer;

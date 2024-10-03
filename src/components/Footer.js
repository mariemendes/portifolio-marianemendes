import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div className={styles.footer}>
      <p>Copyright © {year} Mariane Mendes. All Rights Reserved.</p>
      <p>
        Layolt Insp by{' '}
        <Link
          to="https://themeforest.net/item/simone-personal-portfolio-react-template/42757507?_ga=2.15891954.519575382.1685057144-1491915250.1646249839&_gac=1.150919364.1685057144.Cj0KCQjwjryjBhD0ARIsAMLvnF-bb0wcQyi5FZBveruoo2AIDTPGsWskAb6YiDDWBWVQ-TCkre0ds1oaAvxFEALw_wcB"
          aria-label="harnishdesign"
        >
          harnishdesign
        </Link>
      </p>
    </div>
  );
};

export default Footer;

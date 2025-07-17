import React from 'react';
import styles from './Welcome.module.css';
import Button from '../Geral/Button';
import Technologies from '../Skills/Technologies'
import Paragraph from '../Geral/Paragraph';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className={`${styles.welcomeMain}`}>
      <div className={`${styles.welcomeWrapper}`}>
        <div>
           <div className={`${styles.breadcrumb}`}>
              <Paragraph>Mariane-Mendes <span className={`${styles.extension}`}>/</span> <span className={`${styles.readme}`}> README</span><span className={`${styles.extension}`}>.md</span></Paragraph>
           </div>
            <div className={`${styles.personalName}`}>
              <h1>Hello!</h1>
           </div>
            <div className={`${styles.personalInfos}`}>
              <Paragraph>....</Paragraph>
           </div>
            <div className={`${styles.buttonContact}`}>
              <Link to="/contact" rel="noopener noreferrer">
                    <Button>Get in Touch</Button>
              </Link>
           </div>
        </div>
        <div className={`${styles.middleContainer}`}>
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

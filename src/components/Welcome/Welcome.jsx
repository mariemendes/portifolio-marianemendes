import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';
import Button from '../Geral/Button';

const Welcome = () => {
  return (
    <div className={`${styles.welcomeMain}`}>
      <div className={`${styles.welcomeWrapper}`}>
        <div>
           <div className={`${styles.breadcrumb}`}>
              <p>Mariane-Mendes/README.md</p>
           </div>
            <div className={`${styles.personalName}`}>
              <h1>Hello!</h1>
           </div>
            <div className={`${styles.personalInfos}`}>
              <p>....</p>
           </div>
            <div className={`${styles.buttonContact}`}>
              <Button>Get in Touch</Button>
           </div>
        </div>
        <div className={`${styles.bottomContainer}`}>

        </div>
      </div>
    </div>
  );
};

export default Welcome;

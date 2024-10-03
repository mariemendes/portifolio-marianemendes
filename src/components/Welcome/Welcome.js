import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Geral/Button';
import Title from '../Geral/Title';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={`${styles.welcomeMain} containerDiv`}>
      <div className={`${styles.welcomeTitles} containerDiv`}>
        <h2>Welcome</h2>
        <h1>
          I'm <Title>Mariane Mendes</Title>
        </h1>
        <p>Based in Burnaby, BC/Canada</p>
        <Button>
          <Link to="/contact" aria-label="hire_me">
            Hire me !
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Welcome;

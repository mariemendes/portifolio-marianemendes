import React from 'react';
import styles from './Portifolio.module.css';
import Projects from './Projects';
import Stores from './Stores';

const Portifolio = () => {
  return (
    <div className={`${styles.projectsWrapper} containerWrapperRight`}>
      <Projects />
      <Stores />
    </div>
  );
};

export default Portifolio;

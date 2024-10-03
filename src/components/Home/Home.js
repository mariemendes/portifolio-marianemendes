import React from 'react';
import styles from './Home.module.css';
import Welcome from '../Welcome/Welcome';

const Home = () => {
  return (
    <div className={`${styles.home} containerDiv containerPages`}>
      <Welcome />
    </div>
  );
};

export default Home;

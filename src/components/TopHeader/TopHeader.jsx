import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../Geral/Button';
// import Title from '../Geral/Title';
import styles from './TopHeader.module.css';
import Mode from '../Geral/Icons/Mode/Mode';
import HamburguerNav from '../Geral/Icons/HamburguerNav/HamburguerNav';
import Nav from '../Nav/Nav';

const TopHeader = () => {  
  return (
    <div div className={`${styles.wrapperTopHeader}`}>
      <div className={`${styles.containerTopHeader} ${styles.topTopHeader} containerDiv `}>
        <div className={`${styles.leftContainer}`}>
          <span className={`${styles.iconName}`}>M</span> <p>Mariane Mendes</p>
        </div>
        <div className={`${styles.rightContainer}`}>
          <span>search</span> | <span>AI</span> | <span><Mode /></span> | <span><HamburguerNav /></span>
        </div>
      </div>
      <div className={`${styles.containerTopHeader} ${styles.bottomTopHeader} containerDiv`}>
        <Nav className={`${styles.containerTopHeaderNav}`}/>
      </div>
    </div>
  );
};

export default TopHeader;

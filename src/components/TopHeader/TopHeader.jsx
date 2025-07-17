import React from 'react';
import styles from './TopHeader.module.css';
import Mode from '../Geral/Icons/Mode/Mode';
import HamburguerNav from '../Geral/Icons/HamburguerNav/HamburguerNav';
import Nav from '../Nav/Nav';
import Paragraph from '../Geral/Paragraph';

const TopHeader = () => {  
  return (
    <div div className={`${styles.wrapperTopHeader}`}>
      <div className={`${styles.containerTopHeader} ${styles.topTopHeader} `}>
        <div className={`${styles.leftContainer}`}>
          <span className={`${styles.iconName}`}>M</span> <Paragraph>Mariane Mendes</Paragraph>
        </div>
        <div className={`${styles.rightContainer}`}>
          <span>AI</span> | <span><Mode /></span> | <span><HamburguerNav /></span>
        </div>
      </div>
      <div className={`${styles.containerTopHeader} ${styles.bottomTopHeader} containerDiv`}>
        <Nav className={`${styles.containerTopHeaderNav}`}/>
      </div>
    </div>
  );
};

export default TopHeader;

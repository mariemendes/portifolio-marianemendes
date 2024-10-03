import React from 'react';
import styles from './Address.module.css';
import ExpTitle from '../Geral/ExpSubTitle';
// import ResumeDownload from '../Resume/ResumeDownload';

const Address = () => {
  return (
    <div className={`${styles.address}`}>
      <ExpTitle>Address</ExpTitle>
      <div>
        <p>Burnaby, BC - Canada</p>
        <p>+ 1 (604) 369-2958</p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Address;

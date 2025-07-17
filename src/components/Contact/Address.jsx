import React from 'react';
import styles from './Address.module.css';
import Paragraph from '../Geral/Paragraph';

const Address = () => {
  return (
    <div className={`${styles.address}`}>
      <div>
        <Paragraph>Burnaby, BC - Canada</Paragraph>
        <Paragraph>+ 1 (604) 369-2958</Paragraph>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Address;

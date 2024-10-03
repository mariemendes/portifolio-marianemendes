import React from 'react';
import styles from './Title.module.css';

const Title = ({ children, ...props }) => {
  return (
    <>
      <span {...props} className={styles.span}>
        {children}
      </span>
    </>
  );
};

export default Title;

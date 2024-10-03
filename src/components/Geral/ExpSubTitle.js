import React from 'react';
import styles from './ExpSubTitle.module.css';

const ExpSubTitle = ({ children, ...props }) => {
  return (
    <>
      <h2 {...props} className={styles.h2}>
        {children}
      </h2>
    </>
  );
};

export default ExpSubTitle;

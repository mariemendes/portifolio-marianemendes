import React from 'react';
import styles from './ExpTitle.module.css';

const ExpTitle = ({ children, ...props }) => {
  return (
    <>
      <h1 {...props} className={styles.h1}>
        {children}
      </h1>
    </>
  );
};

export default ExpTitle;

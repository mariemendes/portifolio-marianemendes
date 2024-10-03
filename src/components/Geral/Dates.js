import React from 'react';
import styles from './Dates.module.css';

const Dates = ({ children, ...props }) => {
  return (
    <>
      <span {...props} className={styles.span}>
        {children}
      </span>
    </>
  );
};

export default Dates;

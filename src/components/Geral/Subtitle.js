import React from 'react';
import styles from './Subtitle.module.css';

const Subtitle = ({ children, ...props }) => {
  return (
    <>
      <h2 {...props} className={styles.h2}>
        {children}
      </h2>
    </>
  );
};

export default Subtitle;

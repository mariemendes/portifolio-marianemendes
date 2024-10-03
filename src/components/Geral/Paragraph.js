import React from 'react';
import styles from './Paragraph.module.css';

const Paragraph = ({ children, ...props }) => {
  return (
    <>
      <p {...props} className={styles.paragraph}>
        {children}
      </p>
    </>
  );
};

export default Paragraph;

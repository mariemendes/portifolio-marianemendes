import React from 'react';
import styles from './Portifolio.module.css';

const PortifolioItem = ({ project, onClick }) => {
  return (
    <img
      className={styles.portifolioItem}
      src={project.url}
      alt={project.title}
      onClick={onClick}
      style={{ width: '300px', height: '200px', objectFit: 'cover' }}
    />
  );
};

export default PortifolioItem;

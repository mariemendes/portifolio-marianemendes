import React from 'react';
import styles from './TechRating.module.css';

const TechRating = ({ techName, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= rating
          ? `${styles.star} ${styles.filled}`
          : `${styles.star} ${styles.empty}`;
      stars.push(<span className={starClass} key={i}></span>);
    }
    return stars;
  };

  return (
    <div className={styles.starDiv}>
      <span>{techName}</span>
      <div className={styles.rating}>{renderStars()}</div>
    </div>
  );
};

export default TechRating;

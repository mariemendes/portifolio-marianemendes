import React from 'react';
import styles from './Technologies.module.css';
import skills from '../Geral/skills'
import Paragraph from '../Geral/Paragraph';

const Technologies= ({ className }) => {
  return (
    <div className={`${styles.technologiesDiv}`}>
      <div className={`${styles.technologiesTitle}`}>
        <h1>Technologies I've Worked With:</h1>
      </div>
        <ul className={`${className} ${styles.listSkills}`}>
          {skills.map(({ label, icon: Icon, bg}) => (
          <li key={label} style={{ backgroundColor: bg, color: '#000' }}>
              {Icon ? <Icon height={21} /> : <span></span>}
              <Paragraph>{label}</Paragraph>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Technologies;

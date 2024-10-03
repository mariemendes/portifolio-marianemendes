import React from 'react';
import TechRating from '../Geral/TechRating';
import Title from '../Geral/Title';
import styles from './Skills.module.css';

const Technologies = () => {
  return (
    <div className={`${styles.technologiesDiv} containerDiv containerPages`}>
      <Title>Technologies</Title>
      <ul>
        <li>
          <TechRating techName="HTML" rating={5} />
        </li>
        <li>
          <TechRating techName="CSS/SCSS" rating={5} />
        </li>
        <li>
          <TechRating techName="TailwindCSS" rating={5} />
        </li>
        <li>
          <TechRating techName="JavaScript" rating={4} />
        </li>
        <li>
          <TechRating techName="JQuery" rating={4} />
        </li>
        <li>
          <TechRating techName="React.js" rating={3} />
        </li>
        <li>
          <TechRating techName="TypeScript" rating={3} />
        </li>
        <li>
          <TechRating techName="JAVA" rating={2} />
        </li>
        <li>
          <TechRating techName="PHP" rating={2} />
        </li>
        <li>
          <TechRating techName="SQL/MySql" rating={1} />
        </li>
        <li>
          <TechRating techName="Express.js" rating={3} />
        </li>
        <li>
          <TechRating techName="Git" rating={5} />
        </li>
        <li>
          <TechRating techName="VTEX" rating={3} />
        </li>
        <li>
          <TechRating techName="MongoDB" rating={2} />
        </li>
      </ul>
    </div>
  );
};

export default Technologies;

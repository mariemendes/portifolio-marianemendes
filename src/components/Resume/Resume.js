import React from 'react';
import Title from '../Geral/Title';
import Subtitle from '../Geral/Subtitle';
import styles from './Resume.module.css';
import Dates from '../Geral/Dates';
import ExpTitle from '../Geral/ExpTitle';
import ExpSubTitle from '../Geral/ExpSubTitle';
import Paragraph from '../Geral/Paragraph';

const Technologies = () => {
  return (
    <div className={`${styles.resumeDiv} containerPages`}>
      <Title>Resume</Title>
      <div className={`${styles.div}`}>
        <div>
          <Subtitle>My Education</Subtitle>
          <div className={`${styles.divExp}`}>
            <Dates>2022 - April/2023</Dates>
            <ExpTitle>Langara College</ExpTitle>
            <ExpSubTitle>Certificate - Internet and Web Technology</ExpSubTitle>
            <p className={styles.paragraph}>Vancouver - Canada</p>
          </div>
          <div className={`${styles.divExp}`}>
          <Dates>2024 - 2028</Dates>
          <ExpTitle>DESCOMPLICA DIGITAL UNIVERSITY</ExpTitle>
          <ExpSubTitle>
            BS - Computer Science 
          </ExpSubTitle>
        </div>
        </div>
        <div>
          <Subtitle>My Experience</Subtitle>
          <div className={`${styles.divExp}`}>
          <Dates>Aug/2024 - Atual</Dates>
          <ExpTitle>Data Analyst</ExpTitle>
          <ExpSubTitle>Catus</ExpSubTitle>
          <Paragraph>
          Developed new functionalities and resolved bugs in e-commerce platforms, with experience in
VTEX, VTEX-IO, Shopify, VNDA, and Wake. Proficient in React, jQuery, JavaScript, TypeScript,
HTML, and CSS.
          </Paragraph>
        </div>
          <div className={`${styles.divExp}`}>
          <Dates>Aug/2023 - September/2024</Dates>
          <ExpTitle>Data Analyst</ExpTitle>
          <ExpSubTitle>Transperfect Company</ExpSubTitle>
          <p className={styles.paragraph}>Vancouver - Canada</p>
          <Paragraph>
          Conducted analysis of the company’s database using SQL and MySQL, including data
corrections and translations.
          </Paragraph>
        </div>
          <div className={`${styles.divExp}`}>
            <Dates>June/2021 - August/2023</Dates>
            <ExpTitle>Front-End Developer</ExpTitle>
            <ExpSubTitle>ACCT Consulting & Technology</ExpSubTitle>
            <Paragraph>
              DDevelopment of new functionalities and bug fixes, with experience in e-commerce platforms
              such as VTEX, VTEX-IO, WordPress, and Shopify. Proficient in React, jQuery, JavaScript,
              TypeScript, HTML, and CSS.
            </Paragraph>
          </div>
          <div className={`${styles.divExp}`}>
            <Dates>Aug/2020 - April/2021</Dates>
            <ExpTitle>Front-End Developer</ExpTitle>
            <ExpSubTitle>Enext Technology</ExpSubTitle>
            <p className={styles.paragraph}>São Paulo - Brazil</p>
            <Paragraph>
            Development of new features and bug fixes, experience in VTEX(e-commerce plataform), React,
            JQuery, JavaScript, HTML, CSS.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

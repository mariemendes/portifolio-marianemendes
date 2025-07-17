import React from 'react';
import styles from './Experience.module.css';
import Paragraph from '../Geral/Paragraph';

const Experience = () => {
  return (
    <div className={`${styles.expDiv} containerWrapperRight`}>
      <div className={`${styles.expWrapper}`}>
        <h1 className={`titleLine`}>Experience</h1>
        <ul>
          <li>
            <div className={`${styles.infosExp}`}>
              <h2>
                Front-End Developer (Freelancer) - <span>Catus Agency</span>
              </h2>
              <span className={`${styles.dates}`}>Aug. 2024 - present</span>
            </div>
            <Paragraph>
              Developed end-to-end e-commerce stores while maintaining
              efficient, reusable, and scalable code across platforms such as
              VTEX, VTEX IO, Shopify, VNDA, and Wake.
            </Paragraph>
          </li>
          <li>
            <div className={`${styles.infosExp}`}>
              <h2>
                Data Analyst - <span>Transperfect</span>
              </h2>
              <span className={`${styles.dates}`}>Aug. 2023 - Sep. 2024</span>
            </div>
            <Paragraph>
              Analyzed the company’s database using SQL and MySQL, focusing on
              data corrections and translations.
            </Paragraph>
          </li>
          <li>
            <div className={`${styles.infosExp}`}>
              <h2>
                Front-End Developer - <span>ACCT / Quality Digital</span>
              </h2>
              <span className={`${styles.dates}`}>Jun. 2021 - Dec. 2021</span>
            </div>

            <Paragraph>
              React.js, JavaScript, TypeScript, HTML, and CSS.<br></br>-
              Implemented new features, optimized performance, and resolved bugs
              on e-commerce platforms—primarily in the checkout flow—focusing on
              solutions within the VTEX IO ecosystem.<br></br>- Collaborate with
              UX/UI designers to implement design specifications.
            </Paragraph>
          </li>
          <li>
            <div className={`${styles.infosExp}`}>
              <h2>
                Front-End Developer - <span>ENEXT Consulting</span>
              </h2>
              <span className={`${styles.dates}`}>Aug. 2020 - Apr. 2021</span>
            </div>

            <Paragraph>
              React.js, JavaScript, HTML, and CSS.<br></br>- Implemented new
              functionalities, identify and addressed performance and fixing
              bugs on e-commerce platforms, specifically VTEX LEGACY .
            </Paragraph>
          </li>
        </ul>
      </div>
      <div className={`${styles.eduWrapper}`}>
        <h1 className={`titleLine`}>Education</h1>
        <ul>
          <li>
            <h2>
              Certificate of Internet and Web Technology -{' '}
              <span>Langara College</span>
            </h2>
            <span className={`${styles.dates}`}>Jan. 2022 - Apr. 2023</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

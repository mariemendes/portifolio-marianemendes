import React from 'react';
import styles from './SocialMedia.module.css';
import LinkedinIcon from '../../assets/linkedin-icon.png';
import InstagramIcon from '../../assets/instagran-icon.png';
import GithubIcon from '../../assets/github-icon.png';
// import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div>
      <ul className={`${styles.icons}`}>
        <li>
          <a
            href="https://www.linkedin.com/in/mariane-mendes-5ab7b8102/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mariemendes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mendesmarie_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

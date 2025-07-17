import React from 'react';
import styles from './SocialMedia.module.css';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon 
} from '../../assets/Icons/Icons';
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
            <LinkedinIcon height={30} width={30}  />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mariemendes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon height={30} width={30}  />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mendesmarie_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon height={30} width={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

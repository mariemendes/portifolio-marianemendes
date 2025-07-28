import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import MarianeIMG from '../../assets/IMG_MarianeMendes.jpg';
import {
  DiscordIcon,
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon 
} from '../../assets/Icons/Icons';
import CopyandPastIcon from '../Geral/Icons/CopyIcon/CopyIcon';

const Profile = () => {
  return (
    <div className={`${styles.profileContainer} containerWrapperLeft`}>
      <div className={`${styles.profilePicture} ${styles.profilePictureHambMenu}`}>
        <img src={MarianeIMG} alt="Mariane IMG" />
      </div>
        <div className={`${styles.profileNav} ${styles.profileNavPictureHambMenu}`}>
        <h1>Mariane Mendes</h1>
        <h3>Developer</h3>
        <p className={styles.profilePar}>
          Front-end developer with an unhealthy obsession for side quests, like
          mobile dev, back-end experiments, and probably reading a book while
          waiting for npm to install.
        </p>
        <div className={styles.profileLinks}>
          <ul className={styles.profileListLinks}>
            <li>
              <Link to="mailto:marianemendes1104@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon height={18} width={18} />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/mariemendes" target="_blank" rel="noopener noreferrer">
                <GitHubIcon height={18} width={18}  />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/mariane-mendes-5ab7b8102/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon height={18} width={18}  />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/mendesmarie_/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon height={18} width={18}  />
              </Link>
            </li>
            <li>
                <DiscordIcon height={18} width={18}  />
                <CopyandPastIcon textToCopy="mariemendes" />
            </li>
          </ul>
        </div>
      </div>
    </div>  
  );
};
export default Profile;

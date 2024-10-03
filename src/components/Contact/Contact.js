import React from 'react';
import styles from './Contact.module.css';
import Title from '../Geral/Title';
import ContactForm from './ContactForm';
import Address from './Address';
import SocialMedia from './SocialMedia';

const Contact = () => {
  return (
    <div className={`${styles.contactDiv} containerDiv containerPages`}>
      <Title>Contact</Title>
      <div className={styles.contact}>
        <Address />
        <ContactForm />
      </div>
      <SocialMedia />
    </div>
  );
};

export default Contact;

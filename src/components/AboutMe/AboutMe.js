import React from 'react';
import styles from './AboutMe.module.css';
import Title from '../Geral/Title';
import Paragraph from '../Geral/Paragraph';
// import Footer from '../Footer';

const AboutMe = () => {
  return (
    <div className={`${styles.aboutmeDiv} containerDiv containerPages`}>
      <Title>Aboult Me</Title>
      <Paragraph>
        My name is Mariane Mendes, and I'm a 30-year-old Brazilian who recently
        relocated to Vancouver, Canada. Living in this beautiful city has been
        an incredible experience for me.
        <br /> <br />
        I embarked on my career journey in 2010 by pursuing studies in tourism.
        In 2012, as tourism started gaining popularity in São Paulo, Brazil, I
        secured an internship as a Receptionist at a hotel. Within five months,
        I was promoted to the role of Junior Receptionist, and after another
        four months, I advanced to become a Pleno Receptionist. While working in
        this capacity, an opportunity arose for me to join another hotel as a
        Reservations Agent. I accepted the offer and spent five months in that
        position.
        <br /> <br />
        Later, I received an offer to join a temporary house start-up company,
        which I gladly accepted. Over the course of five years, I progressed
        from a Junior position to a Reservations Coordinator. However, around
        2017, I decided to make a change and explore different opportunities.
        <br /> <br />
        Following my contemplation during the Covid-19 pandemic, I realized my
        passion for learning something new. This led me to pursue studies in
        Front-End development. After five months of self-study, I entered the
        workforce and was fortunate to have two incredible opportunities with
        different companies. I feel blessed to have met amazing individuals and
        acquired a wealth of knowledge along the way.
        <br /> <br />
        Recently, I successfully graduated from Langara College in Internet and
        Web Technology. Currently, I am dedicating my time to further enhance my
        skills by studying languages and libraries such as React.js from the
        comfort of my home. I aim to be well-prepared for the upcoming
        challenges in my career.'
      </Paragraph>
    </div>
  );
};

export default AboutMe;

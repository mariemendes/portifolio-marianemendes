import React from 'react';
import styles from './Modal.module.css';
// import ExpTitle from '../Geral/ExpTitle';
import Paragraph from '../Geral/Paragraph';
import Button from '../Geral/Button';

const Modal = ({ project, onClose }) => {
  return (
    <div className={styles.modal}>
      <img
        src={project.url}
        alt={project.title}
        style={{ width: '300px', height: '200px' }}
      />
      <div className={styles.modalInfo}>
        <h1 className={styles.expTitle}>{project.title}</h1>
        <Paragraph>{project.description}</Paragraph>
        <Paragraph>{project.date}</Paragraph>
        <Paragraph>{project.frontend}</Paragraph>
        <Paragraph>{project.backend}</Paragraph>
        <Paragraph>
          <a href={project.link}>{project.link}</a>
        </Paragraph>
        <Button onClick={onClose}>Fechar</Button>
      </div>
    </div>
  );
};

export default Modal;

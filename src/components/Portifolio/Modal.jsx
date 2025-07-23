import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import Paragraph from '../Geral/Paragraph';
import Button from '../Geral/Button';
import { EyeIcon } from '../../assets/Icons/Icons';
import skills from '../Geral/skills';

const Modal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const getSkillData = (label) => {
    return skills.find(
      (skill) => skill.label.toLowerCase() === label.toLowerCase(),
    );
  };

  // Fecha o modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <img
          src={project.urlImg}
          alt={project.title}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className={styles.modalInfo}>
          <h1 className={styles.expTitle}>{project.title}</h1>
          <Paragraph>{project.description}</Paragraph>
          <ul className={`${styles.listSkills}`}>
            {Array.isArray(project.tech) ? (
              project.tech.map((tech) => {
                const skill = getSkillData(tech);
                if (!skill) return <Paragraph key={tech}>{tech}</Paragraph>;
                const IconComponent = skill.icon;
                return (
                  <li
                    key={tech}
                    className={`${styles.techItem} techItem`}
                    style={{ backgroundColor: skill.bg}}
                    title={skill.label}
                  >
                    <IconComponent height={21} />
                    <Paragraph style={{ color: "black" }}>{tech}</Paragraph>
                  </li>
                );
              })
            ) : (
              <li>
                <Paragraph style={{ color: "black" }}>{project.tech}</Paragraph>
              </li>
            )}
          </ul>
          {project.link && (
            <Paragraph>
              <a
                href={project.link}
                className={styles.techLinks}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EyeIcon width={18} height={18} />
                Live
              </a>
            </Paragraph>
          )}
          <Button onClick={onClose}>Fechar</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

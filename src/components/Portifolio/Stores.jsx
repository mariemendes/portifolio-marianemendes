import React, { useState } from 'react';
import styles from './Portifolio.module.css';
import PortifolioItem from './PortifolioItem';
import Modal from './Modal';
import data from '../data/portfolioProjects.json';
import skills from '../Geral/skills';
import Paragraph from '../Geral/Paragraph';
import { EyeIcon } from '../../assets/Icons/Icons';

const Stores = () => {
  const projects = data.stores;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Função que retorna o skill correspondente, por label (case insensitive)
  const getSkillData = (label) => {
    return skills.find(
      (skill) => skill.label.toLowerCase() === label.toLowerCase(),
    );
  };

  return (
    <div className={`${styles.projectsWrapperItem}`}>
      <h1>Live Stores Developed</h1>
      <Paragraph>
        Here are some of the e-commerce websites I’ve developed and launched.
      </Paragraph>
      <div className={`${styles.galleryProjects}`}>
        {projects.map((project) => (
          <div key={project.id} className={`${styles.item}`}>
            <PortifolioItem
              project={project}
              onClick={() => openModal(project)}
              className={`${styles.galleryItems}`}
            >
              <h3>{project.title}</h3>
              <Paragraph>{project.description}</Paragraph>
              <img
                className={styles.portifolioItem}
                src={project.urlImg}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </PortifolioItem>

            <div className={`${styles.projectLinks}`}>
              <div className={styles.techIcons}>
                {Array.isArray(project.mainTech) ? (
                  project.mainTech.map((tech) => {
                    const skill = getSkillData(tech);
                    if (!skill) return <Paragraph key={tech}>{tech}</Paragraph>;
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={tech}
                        className={styles.techItem}
                        style={{ backgroundColor: skill.bg }}
                        title={skill.label}
                      >
                        <IconComponent height={21} />
                        <Paragraph>{project.mainTech}</Paragraph>
                      </div>
                    );
                  })
                ) : (
                  <Paragraph>{project.mainTech}</Paragraph>
                )}
              </div>
              {project.link && (
                <Paragraph>
                  <a
                    href={project.link}
                    className={styles.techLinks}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <EyeIcon width={18} height={18} />
                    Live
                  </a>
                </Paragraph>
              )}
              <div className={styles.techIcons}>
                {Array.isArray(project.plataform) ? (
                  project.plataform.map((tech) => {
                    const skill = getSkillData(tech);
                    if (!skill) return <Paragraph key={tech}>{tech}</Paragraph>;
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={tech}
                        className={styles.techItem}
                        style={{ backgroundColor: skill.bg }}
                        title={skill.label}
                      >
                        <IconComponent width={21} height={21} />
                        <Paragraph>{project.plataform}</Paragraph>
                      </div>
                    );
                  })
                ) : (
                  <Paragraph>{project.plataform}</Paragraph>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Stores;

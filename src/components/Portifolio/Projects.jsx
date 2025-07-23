import React, { useState } from 'react';
import styles from './Portifolio.module.css';
import PortifolioItem from './PortifolioItem';
import Modal from './Modal';
import data from '../data/portfolioProjects.json';
import Paragraph from '../Geral/Paragraph';
import { EyeIcon, GitHubIcon } from '../../assets/Icons/Icons';
import skills from '../Geral/skills';


const Projects = () => {
  const projects = data.projects;
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
      <h1>Projects, Studies, and More</h1>
      <Paragraph>
        Here you’ll find a selection of projects and studies I’ve worked on —
        from personal experiments to real-world applications.
      </Paragraph>
      <div className={`${styles.galleryProjects}`}>
        {projects.map((project) => (
          <PortifolioItem
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
            className={`${styles.galleryItems}`}
          >
            <div key={project.id} className={`${styles.item}`}>
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
                      <EyeIcon width={18} height={18} />
                      Live
                    </a>
                  </Paragraph>
                )}
                {project.github && (
                  <Paragraph>
                    <a
                      className={styles.techLinks}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon width={18} height={18} />
                      Code
                    </a>
                  </Paragraph>
                )}
              </div>
            </div>
          </PortifolioItem>
        ))}
      </div>
      {modalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Projects;

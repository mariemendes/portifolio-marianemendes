import React, { useState } from 'react';
import styles from './Portifolio.module.css';
import PortifolioItem from './PortifolioItem';
import Modal from './Modal';
import data from '../Geral/data/portfolioProjects.json';
import Paragraph from '../Geral/Paragraph';

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
              {/* <img
                className={styles.portifolioItem}
                src={project.url}
                alt={project.title}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              />*/}
              <div className={`${styles.projectLinks}`}>
                <Paragraph>{project.mainTech}</Paragraph>
                {project.url && (
                  <Paragraph>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </Paragraph>
                )}
                {project.github && (
                  <Paragraph>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

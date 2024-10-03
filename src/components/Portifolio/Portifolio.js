import React, { useState } from 'react';
import styles from './Portifolio.module.css';
import Title from '../Geral/Title';
import PortifolioItem from './PortifolioItem';
import Modal from './Modal';
import { projects } from './projects';
import Paragraph from '../Geral/Paragraph';
import ExpTitle from '../Geral/ExpTitle';

const Portifolio = () => {
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
    <div className={`${styles.technologiesDiv} containerDiv containerPages`}>
      <Title>Portifolio</Title>
      <Paragraph>Now that you know a little about me, I would like to present some of the projects I have worked on. Please feel free to review them, and if you have any questions, suggestions, or just want to discuss any of them, don't hesitate to reach out to me!</Paragraph>
      <div className="gallery">
        {projects.map((project) => (
          <div key={project.id}>
          <ExpTitle>{project.title}</ExpTitle>
          <PortifolioItem
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
          </div>
        ))}
      </div>
      {modalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Portifolio;

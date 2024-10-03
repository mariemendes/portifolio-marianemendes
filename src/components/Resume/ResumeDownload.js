import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Geral/Button';

const ResumeDownload = () => {
  return (
    <>
      <Button>
        <Link
          to="https://drive.google.com/file/d/1uv2rN5T7eOwVGoLgd0-TfANOIu8igC9B/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my Resume
        </Link>
      </Button>
    </>
  );
};

export default ResumeDownload;

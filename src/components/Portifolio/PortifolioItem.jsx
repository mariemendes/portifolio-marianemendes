import React from 'react';

const PortifolioItem = ({ project, onClick, children }) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
};


export default PortifolioItem;

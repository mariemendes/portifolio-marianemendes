import React from 'react';

const PortifolioItem = ({ onClick, children }) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
};


export default PortifolioItem;

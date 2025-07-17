import React from 'react';
// import styles from './HamburguerNav.module.css';
import { HamburguerIcon } from '../../../../assets/Icons/Icons';


const HamburguerNav = () => {
  return (
    <>
    <button className="btn-first">
        <HamburguerIcon height={16} width={16} />
    </button>
    </>
  );
};

export default HamburguerNav;

import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '../../../../assets/Icons/Icons';

function Mode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme} className="btn-first">
        {theme === 'dark' ? (
          <SunIcon height={16} width={16} />

        ) : (
          <MoonIcon height={16} width={16} />
        )}
      </button>
    </div>
  );
}

export default Mode;

import React, { useState } from 'react';
import { CopyIcon } from '../../../../assets/Icons/Icons';


const CopyandPastIcon = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button className="btn-second" onClick={handleCopy} title="Copy to clipboard">
      <CopyIcon height={16} width={16}/>
      {copied && <span style={{ marginLeft: 8, fontSize: '0.8rem' }}>Copied!</span>}
    </button>
  );
};

export default CopyandPastIcon;

import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const UrlContainer = ({ display, content }) => {
  const [isHovered, setHovered] = useState(false);
  const [isCopied, setCopied] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={content} onCopy={handleCopy}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCopy}
        title={content}
        style={{ cursor: 'pointer', color: '#0069c2', whiteSpace: 'nowrap'}}
      >
        {isCopied ? 'Copied!' : isHovered ? 'Copy path' : display}
      </div>
    </CopyToClipboard>
  );
};

export default UrlContainer;

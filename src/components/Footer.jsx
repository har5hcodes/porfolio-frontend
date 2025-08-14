import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ showName = false }) => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshavardhanputta.career@gmail.com');
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <footer className="w-full flex justify-between items-end text-sm font-medium tracking-wider mt-auto p-8">
      <div>
        {showName && <Link to="/" className="text-xs hover:text-gray-500">Harshavardhan Putta</Link>}
      </div>
      <div className="text-right">
        
        <a href="https://drive.google.com/file/d/1eHSpCQMoLGmaOvwOPp5YdSUEVGR5g2mf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">DOWNLOAD RESUME</a>
        <div className="my-1 relative group">
          <span 
            onClick={handleCopyEmail} 
            className="cursor-pointer bg-black text-white px-2 py-1"
          >
            {isEmailCopied ? 'COPIED!' : 'harshavardhanputta.career@gmail.com'}
          </span>
          {!isEmailCopied && (
            <span className="absolute right-0 -bottom-6 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium bg-black text-white px-2 py-1 rounded">CLICK TO COPY</span>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

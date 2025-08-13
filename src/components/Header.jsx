import React, { useState, useEffect } from 'react';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConnectClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: isScrolled ? '#111827' : 'transparent',
    boxShadow: isScrolled ? '0 2px 24px 0 rgba(0,0,0,0.12)' : 'none',
    transition: 'background 0.3s, box-shadow 0.3s',
    borderBottom: isScrolled ? `1px solid rgba(255,255,255,0.07)` : 'none',
  };

  const linkStyle = {
    color: netflixWhite,
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: netflixRed,
  };

  return (
    <header style={headerStyle}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold tracking-tight" style={linkStyle}
             onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
             onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
          >
            Harshavardhan Putta
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#connect" onClick={handleConnectClick} className="font-medium" style={linkStyle}
               onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
               onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
            >Connect</a>
            <a href="https://drive.google.com/file/d/1eHSpCQMoLGmaOvwOPp5YdSUEVGR5g2mf/view?usp=drive_link" className="font-medium" style={linkStyle}
               onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
               onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
               target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

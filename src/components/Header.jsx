import React from 'react';

const Header = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 24px 0 rgba(0,0,0,0.05)',
  };

  const linkStyle = {
    color: '#000000',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: '#E50914',
  };

  return (
    <header style={headerStyle}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-end h-20">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://drive.google.com/file/d/1eHSpCQMoLGmaOvwOPp5YdSUEVGR5g2mf/view?usp=drive_link" 
               className="font-medium"
               style={linkStyle}
               onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
               onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
               target="_blank" 
               rel="noopener noreferrer">
              DOWNLOAD RESUME
            </a>
            <a href="#about" 
               onClick={(e) => handleScrollTo(e, 'about')} 
               className="font-medium"
               style={linkStyle}
               onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
               onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
            >
              ABOUT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

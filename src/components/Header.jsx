import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="https://drive.google.com/file/d/1eHSpCQMoLGmaOvwOPp5YdSUEVGR5g2mf/view?usp=drive_link" 
               className="font-medium text-sm"
               style={linkStyle}
               onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
               onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
               target="_blank" 
               rel="noopener noreferrer">
              DOWNLOAD RESUME
            </a>
            <a href="#about" 
               onClick={(e) => handleScrollTo(e, 'about')} 
               className="font-medium text-sm"
               style={linkStyle}
               onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
               onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
            >
              ABOUT
            </a>
          </nav>
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="https://drive.google.com/file/d/1eHSpCQMoLGmaOvwOPp5YdSUEVGR5g2mf/view?usp=drive_link" 
                 className="font-medium text-sm py-2"
                 style={linkStyle}
                 target="_blank" 
                 rel="noopener noreferrer"
                 onClick={() => setIsMobileMenuOpen(false)}>
                DOWNLOAD RESUME
              </a>
              <a href="#about" 
                 onClick={(e) => handleScrollTo(e, 'about')} 
                 className="font-medium text-sm py-2"
                 style={linkStyle}>
                ABOUT
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harshavardhan-putta-53b510238/',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/har5hcodes',
  },
];

const Connect = () => {
  const linkStyle = {
    color: netflixWhite,
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: netflixRed,
  };

  return (
    <section id="connect" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: netflixBlack }}>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6" style={{ color: netflixWhite }}>
          Let's Connect
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        <a 
          href="mailto:harshavardhanputta.career@gmail.com"
          className="text-3xl md:text-4xl font-bold underline underline-offset-8"
          style={{ ...linkStyle, textDecorationColor: 'rgba(255, 255, 255, 0.3)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = linkHoverStyle.color;
            e.currentTarget.style.textDecorationColor = linkHoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = linkStyle.color;
            e.currentTarget.style.textDecorationColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          harshavardhanputta.career@gmail.com
        </a>
        <div className="mt-16 flex justify-center items-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold"
              style={linkStyle}
              onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color}
              onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;

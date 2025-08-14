import React from 'react';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const projects = [
  {
    title: 'Swiptory',
    tagline: 'Story Sharing Platform',
    year: '2023',
    url: 'https://rad-churros-f3cef0.netlify.app/',
  },
  {
    title: 'Pocket Notes',
    tagline: 'Minimal Note-Taking App',
    year: '2023',
    url: 'https://symphonious-griffin-f869fc.netlify.app/',
  },
  {
    title: 'Super App',
    tagline: 'Productivity Tool Collection',
    year: '2022',
    url: 'https://zesty-sorbet-38aa79.netlify.app/',
  },
  {
    title: 'Rock Paper Scissors',
    tagline: 'Classic Game, Modern UI',
    year: '2022',
    url: 'https://magical-salmiakki-3b1f2d.netlify.app/',
  },
];

const ProjectItem = ({ title, tagline, year, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group grid grid-cols-12 gap-2 sm:gap-4 items-center py-6 sm:py-8 border-b transition-all duration-300 cursor-pointer"
    style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
  >
    <h3 className="col-span-12 sm:col-span-8 md:col-span-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter transition-colors duration-300 mb-2 sm:mb-0" style={{ color: netflixWhite }}>
      {title}
    </h3>
    <p className="col-span-8 sm:col-span-6 md:col-span-4 text-sm sm:text-base lg:text-lg transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
      {tagline}
    </p>
    <p className="col-span-2 sm:col-span-4 md:col-span-2 text-sm sm:text-base lg:text-lg transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
      {year}
    </p>
    <div className="col-span-2 sm:col-span-2 md:col-span-1 flex justify-end">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 transform -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1" fill="none" stroke={netflixRed} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: netflixBlack }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12" style={{ color: netflixWhite }}>
          Selected Works
        </h2>
        <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

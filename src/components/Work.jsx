import React from 'react';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const workExperience = [
  {
    company: 'Navi Technologies',
    role: 'Software Development Engineer',
    dates: '2024 - Present',
    url: 'https://www.linkedin.com/company/go-navi/',
  },
  {
    company: 'Mathworks',
    role: 'Engineering Development Intern',
    dates: '2023',
    url: 'https://www.linkedin.com/company/the-mathworks_2/',
  },
];

const WorkItem = ({ company, role, dates, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group grid grid-cols-12 gap-4 items-center py-8 border-b transition-all duration-300 cursor-pointer"
    style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
  >
    <h3 className="col-span-12 md:col-span-5 text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-300" style={{ color: netflixWhite }}>
      {company}
    </h3>
    <p className="col-span-8 md:col-span-4 text-lg transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
      {role}
    </p>
    <p className="col-span-2 md:col-span-2 text-lg transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
      {dates}
    </p>
    <div className="col-span-2 md:col-span-1 flex justify-end">
      <svg className="w-8 h-8 transform -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1" fill="none" stroke={netflixRed} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </a>
);

const Work = () => {
  return (
    <section id="work" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: netflixBlack }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12" style={{ color: netflixWhite }}>
          Work Experience
        </h2>
        <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          {workExperience.map((job, index) => (
            <WorkItem key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

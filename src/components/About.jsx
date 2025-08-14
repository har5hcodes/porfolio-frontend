import React from 'react';
import Footer from './Footer';

const About = ({ onClose }) => {
  const techStack = [
    'C++', 'Java', 'SQL', 'Python', 'JavaScript', 'Kotlin', 'Go', 'MATLAB',
    'Spring Boot', 'Kafka', 'Prometheus', 'Grafana', 'Redis', 'JUnit', 'Mockito', 'ReactJS', 'RESTful APIs',
    'PostgreSQL', 'MongoDB', 'DBeaver', 'Git', 'Postman', 'Linux', 'Windsurf', 'OpenSearch'
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col font-sans text-black">
      <div className="relative p-4 sm:p-6 lg:p-8 flex-grow flex flex-col overflow-y-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter">ABOUT</h1>
          <button onClick={onClose} className="text-sm sm:text-lg font-medium tracking-wider hover:text-gray-500 flex items-center gap-2">
            <span className="text-2xl sm:text-5xl leading-none">*</span>
            <span>CLOSE</span>
          </button>
        </header>

        {/* Decorative large asterisk */}
        <div className="pointer-events-none select-none absolute right-4 top-20 opacity-10 hidden md:block" aria-hidden="true">
          <div className="text-[10rem] lg:text-[16rem] font-black leading-none">*</div>
        </div>

        <main className="flex-grow grid lg:grid-cols-2 gap-8 mt-8 lg:mt-16 relative">
          <div className="flex flex-col">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide">
              I'm not just a developer; I'm a software craftsman in the making. Inspired by object-oriented design principles, my passion is to build great software—systems that are as elegant and maintainable as they are scalable and efficient. I am actively applying these concepts to solve complex backend problems and deliver solutions built to last.
            </p>
            {/* Stack moved under paragraph to use empty space */}
            <div className="mt-8">
              <h3 className="text-gray-500 mb-4">STACK</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-sm font-medium tracking-wider">
                {techStack.map(tech => (
                  <li key={tech}>{tech.toUpperCase()}</li>
                ))}
              </ul>
            </div>
            <div className="text-4xl sm:text-6xl lg:text-8xl font-bold mt-8 lg:mt-10 md:hidden">*</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-xs sm:text-sm font-medium tracking-wider">
            <div>
              <h3 className="text-gray-500 mb-4">LOCATION</h3>
              <p>Hyderabad, India</p>
            </div>
            <div>
              <h3 className="text-gray-500 mb-4">SOCIALS</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/harshavardhan-putta-53b510238/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">LINKEDIN</a></li>
                <li><a href="https://github.com/har5hcodes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">GITHUB</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer showName={true} />
    </div>
  );
};

export default About;
import React from 'react';
import Footer from './Footer';

const About = ({ onClose }) => {
  const techStack = ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'REST APIs', 'GraphQL', 'Java', 'Spring Boot', 'Kafka', 'React.js'];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col font-sans text-black">
      <div className="p-8 flex-grow flex flex-col">
        <header className="flex items-baseline gap-8">
          <h1 className="text-6xl font-bold tracking-tighter">ABOUT</h1>
          <button onClick={onClose} className="text-lg font-medium tracking-wider hover:text-gray-500 flex items-center gap-2">
            <span className="text-5xl leading-none">*</span>
            <span>CLOSE</span>
          </button>
        </header>

        <main className="flex-grow grid md:grid-cols-2 gap-8 mt-16">
          <div className="flex flex-col justify-between">
            <p className="max-w-md text-lg leading-relaxed tracking-wide">
              I'm not just a developer; I'm a software craftsman in the making. Inspired by object-oriented design principles, my passion is to build great software—systems that are as elegant and maintainable as they are scalable and efficient. I am actively applying these concepts to solve complex backend problems and deliver solutions built to last.
            </p>
            <div className="text-8xl font-bold">*</div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-sm font-medium tracking-wider">
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
            <div className="flex flex-col justify-between text-right">
              <div>
                <h3 className="text-gray-500 mb-4 text-left">STACK</h3>
                <ul className="space-y-1 text-left">
                  {techStack.map(tech => <li key={tech}>{tech.toUpperCase()}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer showName={true} />
    </div>
  );
};

export default About;
import React from 'react';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const skillsData = {
  'Programming Languages': ['C/C++', 'Java', 'Kotlin', 'Go', 'JavaScript', 'Python'],
  'Backend Technologies': ['SpringBoot', 'MERN Stack', 'Redis', 'Kafka', 'Microservices'],
  'Monitoring & Observability': ['Grafana', 'Prometheus', 'ELK Stack'],
  'Core Concepts': ['Data Structures', 'Algorithms', 'Object-Oriented Design', 'System Design'],
  'Developer Tools': ['Git', 'Postman', 'Junit', 'Linux', 'Docker', 'Kubernetes']
};

const allSkills = Object.values(skillsData).flat();

const Skills = () => {
  const skillStyle = {
    color: netflixWhite,
    transition: 'color 0.3s',
    opacity: 0.8,
  };

  const skillHoverStyle = {
    color: netflixRed,
    opacity: 1,
  };

  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: netflixBlack }}>
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12" style={{ color: netflixWhite }}>
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {allSkills.map((skill, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold cursor-default"
              style={skillStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = skillHoverStyle.color;
                e.currentTarget.style.opacity = skillHoverStyle.opacity;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = skillStyle.color;
                e.currentTarget.style.opacity = skillStyle.opacity;
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

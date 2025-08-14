import React from 'react';

// Define Netflix colors
const netflixRed = '#E50914';
const netflixBlack = '#111827';
const netflixWhite = '#FFFFFF';

const allSkills = [
  'C++', 'Java', 'SQL', 'Python', 'JavaScript', 'Kotlin', 'Go', 'MATLAB',
  'Spring Boot', 'Kafka', 'Prometheus', 'Grafana', 'Redis', 'JUnit', 'Mockito', 'ReactJS', 'RESTful APIs',
  'PostgreSQL', 'MongoDB', 'DBeaver', 'Git', 'Postman', 'Linux', 'Windsurf', 'OpenSearch'
];

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
    <section id="skills" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: netflixBlack }}>
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 sm:mb-10 lg:mb-12" style={{ color: netflixWhite }}>
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4">
          {allSkills.map((skill, index) => (
            <span 
              key={index} 
              className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-bold cursor-default px-2 py-1"
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

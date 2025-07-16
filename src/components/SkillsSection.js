import React from 'react';

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Java', 'Python', 'C/C++', 'PHP', 'Golang', 'Vert.X', 'Spring Boot', 'Hibernate'],
  },
  {
    category: 'Web Dev',
    items: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'JDBC', 'Hibernate ORM'],
  },
  {
    category: 'Tools',
    items: ['AWS Console', 'Git', 'Postman', 'Linux', 'Maven', 'IntelliJ IDEA', 'VS Code', 'ZMQ'],
  },
];

function SkillsSection() {
  return (
    <section className="bg-gray-50 py-16" id="skills">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((group) => (
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border border-gray-200" key={group.category}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection; 
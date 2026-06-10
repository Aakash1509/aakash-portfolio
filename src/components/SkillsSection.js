import React from 'react';

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Java', 'Spring Boot', 'Hibernate', 'Vert.X', 'Python', 'C/C++', 'Golang'],
  },
  {
    category: 'Database & Cloud',
    items: ['MySQL', 'PostgreSQL', 'JDBC', 'JPA / Hibernate ORM', 'AWS EC2', 'AWS ECS/ECR', 'AWS S3', 'AWS RDS'],
  },
  {
    category: 'APIs & Integration',
    items: ['REST API', 'Microservices', 'OAuth2', 'JWT', 'ZMQ'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Jenkins', 'Git', 'Maven', 'Linux', 'Grafana', 'Sentry', 'Postman', 'IntelliJ IDEA', 'VS Code'],
  },
];

function SkillsSection() {
  return (
    <section className="bg-gray-50 py-16" id="skills">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-800 border border-blue-100 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
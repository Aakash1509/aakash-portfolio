import React from 'react';

const projects = [
  {
    title: 'NMSLite – Network Monitoring System',
    tech: 'Java, Vert.X, Golang, PostgreSQL, ZMQ',
    highlights: 'Built REST APIs, optimized polling mechanism, reduced GET requests by 67%',
    github: 'https://github.com/Aakash1509/NMSLite',
    live: null,
  },
  {
    title: 'Real Estate Platform',
    tech: 'Java, Spring Boot, MySQL, React, JWT',
    highlights: 'Full-stack app with user/subscriber roles, secure auth, image upload, dashboards',
    github: 'https://github.com/Brilworks-Interns24-25/main/tree/real_estate_platform_dev',
    live: null,
  },
  {
    title: 'Chemesys – Backend Development',
    tech: 'HTML, CSS, JS, PHP, MySQL',
    highlights: 'Migrated backend from Django to PHP, 40% performance boost',
    github: null,
    live: 'https://chemesys.in/',
  },
];

function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-16" id="projects">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-start border border-gray-200 hover:shadow-2xl transition" key={project.title}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-sm text-black mb-1"><span className="font-semibold">Tech:</span> {project.tech}</p>
            <p className="text-gray-500 mb-4">{project.highlights}</p>
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow hover:bg-blue-700 transition">GitHub</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-600 hover:text-white transition">Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection; 
import React from 'react';

const experiences = [
  {
    company: 'Brilworks Software',
    period: 'Mar 2025 – Present',
    details: 'Built REST APIs with JWT auth, developed property listing and dashboard modules using Spring Boot',
  },
  {
    company: 'MindArray Systems (Motadata)',
    period: 'Aug – Dec 2024',
    details: 'Built NMS prototype using Vert.X and ZMQ, trained in core Java, OS, and networking',
  },
];

function ExperienceSection() {
  return (
    <section className="bg-gray-50 py-16" id="experience">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-start border border-gray-200" key={exp.company}>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{exp.company} <span className="text-sm text-gray-500 font-normal">({exp.period})</span></h3>
            <p className="text-gray-500 mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection; 
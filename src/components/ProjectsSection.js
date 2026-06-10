import React from 'react';

const projects = [
  {
    title: 'Trackimo – Device Management Platform',
    tech: ['Java', 'Spring Boot', 'MySQL', 'AWS', 'Jenkins', 'OAuth2'],
    highlights: [
      'Built backend microservices and REST APIs for authentication, payments, subscriptions, and IoT device management.',
      'Optimised database queries using JPA Specifications — cut response times from 4s to 650ms.',
      'Maintained FOTA workflows for Bluetooth, Wi-Fi, and Cellular devices; supported AWS ECS deployments and Jenkins CI/CD.',
    ],
    github: null,
    live: null,
    tag: 'Professional',
  },
  {
    title: 'NMSLite – Network Monitoring System',
    tech: ['Java', 'Vert.X', 'Golang', 'PostgreSQL', 'ZMQ'],
    highlights: [
      'Built REST APIs for credential and discovery modules; implemented a Golang-based polling mechanism for secure device data collection.',
      'Optimised DB interactions with HashMap caching — reduced GET requests by 67%.',
      'Transferred polled data via ZMQ to a Go application for processing and file-based storage.',
    ],
    github: 'https://github.com/Aakash1509/NMSLite',
    live: null,
    tag: 'Open Source',
  },
  {
    title: 'Real Estate Platform',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'JWT'],
    highlights: [
      'Full-stack web app for property buying/selling with user and subscriber roles.',
      'Secure onboarding with JWT-based token authentication and role-aware dashboards.',
      'Built with Spring Boot REST APIs on the backend and React on the frontend.',
    ],
    github: 'https://github.com/Brilworks-Interns24-25/main/tree/real_estate_platform_dev',
    live: null,
    tag: 'Full Stack',
  },
];

const tagColors = {
  Professional: 'bg-purple-100 text-purple-700',
  'Open Source': 'bg-green-100 text-green-700',
  'Full Stack': 'bg-orange-100 text-orange-700',
};

function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-16" id="projects">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-7 flex flex-col hover:shadow-2xl transition"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-base font-bold text-gray-900 leading-snug">{project.title}</h3>
              <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[project.tag]}`}>{project.tag}</span>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full border border-blue-100">{t}</span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 mb-5 flex-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow hover:bg-blue-700 transition"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-600 hover:text-white transition"
                >
                  Live
                </a>
              )}
              {!project.github && !project.live && (
                <span className="text-xs text-gray-400 italic mt-1">Private / Proprietary</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
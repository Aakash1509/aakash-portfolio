import React from 'react';

const experiences = [
  {
    company: 'Brilworks Software',
    role: 'Junior Software Engineer',
    period: 'Mar 2025 – May 2026',
    location: 'Ahmedabad, Gujarat',
    bullets: [
      'Developed backend microservices using Java, Spring Boot, Hibernate, REST APIs, and MySQL — covering authentication, subscriptions, payments, device management, and support tools.',
      'Built and maintained IoT device management and FOTA workflows for Bluetooth, WiFi, and Cellular devices; configured 15+ firmware rollout jobs and automated validation processes.',
      'Supported production reliability via Jenkins CI/CD, AWS ECS/ECR, Grafana, and Sentry — handling releases, security fixes, and incident resolution.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'AWS ECS/ECR', 'Jenkins', 'Grafana', 'IoT/FOTA'],
  },
  {
    company: 'MindArray Systems (Motadata)',
    role: 'Software Engineer Trainee',
    period: 'Aug 2024 – Dec 2024',
    location: 'Ahmedabad, Gujarat',
    bullets: [
      'Completed training in Operating Systems, Networking, Core & Advanced Java, Vert.X (reactive programming), and ZMQ — achieving 85% in internal assessments.',
      'Built a prototype scalable network monitoring system showcasing the company\'s core product features, with PostgreSQL as the backend.',
    ],
    tags: ['Java', 'Vert.X', 'ZMQ', 'PostgreSQL', 'Networking'],
  },
];

function ExperienceSection() {
  return (
    <section className="bg-white py-16" id="experience">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Experience</h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                <div className="text-base font-semibold text-blue-600">{exp.company}</div>
                <div className="text-sm text-gray-400 mt-0.5">{exp.location}</div>
              </div>
              <span className="shrink-0 text-sm text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1 h-fit mt-1">{exp.period}</span>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 mb-5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100">{tag}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
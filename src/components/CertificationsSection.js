import React from 'react';

const certifications = [
  {
    type: 'cert',
    badge: 'SAA-C03',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
  },
  {
    type: 'cert',
    badge: 'AIF-C01',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    type: 'cert',
    badge: 'CLF-C02',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
];

const achievements = [
  {
    badge: '🏆',
    title: 'Top 14 Finalist – HackOut Hackathon',
    issuer: 'DAIICT',
  },
  {
    badge: '☁️',
    title: 'Core Team Member – AWS Cloud Club CHARUSAT',
    issuer: 'Charusat University',
  },
];

function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-16" id="certifications">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Certifications &amp; Achievements</h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* Certifications */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {certifications.map(({ badge, title, issuer }) => (
              <div key={badge} className="bg-white rounded-2xl shadow border border-gray-200 p-6 flex flex-col gap-3">
                <span className="self-start bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded tracking-wide">{badge}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm leading-snug">{title}</div>
                  <div className="text-xs text-gray-400 mt-1">{issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-6">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {achievements.map(({ badge, title, issuer }) => (
              <div key={title} className="bg-white rounded-2xl shadow border border-gray-200 p-6 flex items-start gap-4">
                <span className="text-2xl shrink-0">{badge}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm leading-snug">{title}</div>
                  <div className="text-xs text-gray-400 mt-1">{issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CertificationsSection;
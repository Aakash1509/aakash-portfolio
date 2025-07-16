import React from 'react';

const certifications = [
  'AWS Certified Solutions Architect – Associate (SAA-C03)',
  'AWS Certified Cloud Practitioner (CLF-C02)',
  'Core Team Member, AWS Cloud Club – Charusat',
  'Top 14 finalist, HackOut Hackathon – DAIICT',
];

function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-16" id="certifications">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Certifications & Achievements</h2>
      <ul className="max-w-2xl mx-auto flex flex-col gap-5">
        {certifications.map((item) => (
          <li className="bg-white rounded-xl px-6 py-4 text-black font-medium shadow border border-gray-200" key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default CertificationsSection; 
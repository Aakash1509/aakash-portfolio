import React from 'react';

const highlights = [
  { label: '1+ yr', detail: 'Professional Experience' },
  { label: '3×', detail: 'AWS Certified' },
  { label: '9.69', detail: 'B.Tech CGPA' },
];

const certifications = [
  { code: 'SAA-C03', name: 'AWS Certified Solutions Architect – Associate' },
  { code: 'AIF-C01', name: 'AWS Certified AI Practitioner' },
  { code: 'CLF-C02', name: 'AWS Certified Cloud Practitioner' },
];

function AboutSection() {
  return (
    <section className="bg-white py-16" id="about">
      <h2 className="text-3xl font-bold text-black text-center mb-12">About Me</h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {/* Bio + Stats */}
        <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <p className="flex-1 text-gray-600 text-base md:text-lg leading-relaxed">
            I'm a backend software engineer currently working at{' '}
            <span className="font-semibold text-gray-900">Brilworks Software</span>, where I build
            production microservices in Java and Spring Boot — covering authentication, payments,
            subscriptions, and IoT device management. I'm comfortable across the stack: from
            designing REST APIs and optimising database queries to managing AWS deployments and
            Jenkins CI/CD pipelines. I care about observable, maintainable systems and shipping
            features that actually hold up in production.
          </p>
          <div className="flex md:flex-col gap-6 md:gap-5 shrink-0">
            {highlights.map(({ label, detail }) => (
              <div key={detail} className="text-center">
                <div className="text-2xl font-extrabold text-black leading-none">{label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Education</h3>
            <ul className="space-y-5">
              <li>
                <div className="font-semibold text-gray-900">B.Tech – Computer Science &amp; Engineering</div>
                <div className="text-sm text-gray-500 mt-0.5">Charusat University, Anand &nbsp;·&nbsp; 2021 – 2025</div>
                <div className="text-sm text-gray-500 mt-0.5">CGPA: <span className="font-medium text-gray-700">9.69</span></div>
              </li>
              <li>
                <div className="font-semibold text-gray-900">Higher Secondary (Science)</div>
                <div className="text-sm text-gray-500 mt-0.5">Parth School of Science &amp; Competition, Vadodara &nbsp;·&nbsp; 2021</div>
                <div className="text-sm text-gray-500 mt-0.5">Percentage: <span className="font-medium text-gray-700">92%</span></div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">AWS Certifications</h3>
            <ul className="space-y-4">
              {certifications.map(({ code, name }) => (
                <li key={code} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded">{code}</span>
                  <span className="text-gray-700 text-sm">{name}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded">CLUB</span>
                <span className="text-gray-500 text-sm italic">Core Team Member – AWS Cloud Club CHARUSAT</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
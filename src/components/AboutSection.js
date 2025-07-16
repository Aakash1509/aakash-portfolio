import React from 'react';

function AboutSection() {
  return (
    <section className="bg-white py-16" id="about">
      <h2 className="text-3xl font-bold text-black text-center mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">B.Tech in Computer Science and Engineering</span>, Charusat University (2021–2025), CGPA: 9.69</li>
            <li><span className="font-semibold">Parth School of Science and Competition</span>, 12th – 92%</li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="text-gray-500 text-base md:text-lg">
            I am a backend and full-stack developer passionate about building scalable applications and writing clean, maintainable code. My experience spans cloud-native development, RESTful APIs, and modern web technologies. I thrive on solving complex problems and continuously learning new skills to deliver impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 
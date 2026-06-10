import React from 'react';

function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-gray-50 px-4 py-12 md:py-20" id="hero">
      <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0 md:mr-12">
        <img
          src="/Profile.jpeg"
          alt="Aakash Saraiya"
          className="w-64 h-64 md:w-72 md:h-72 object-cover object-[50%_25%] rounded-xl shadow-lg border-4 border-gray-200"
        />
      </div>
      <div className="flex-1 text-center md:text-left w-full max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
          <span className="text-black">Aakash</span>{' '}
          <span className="text-blue-600">Saraiya</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Junior Software Engineer &nbsp;·&nbsp; Java &amp; Spring Boot &nbsp;·&nbsp; 3× AWS Certified
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          Backend engineer building production microservices, IoT device platforms, and cloud-native systems.
          Experienced with Java, Spring Boot, AWS ECS/ECR, Jenkins CI/CD, and REST APIs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Aakash%20Saraiya-Resume.pdf"
            className="inline-block bg-blue-600 text-white px-7 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg"
            download
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
import React, { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar height
      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar bg-white border-b border-gray-200 shadow-sm sticky top-0 w-full z-50">
      <div className="navbar-container max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        <a href="#hero" className="navbar-logo text-xl font-bold text-black tracking-wide">Aakash Saraiya</a>
        <ul className="navbar-links flex gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar-link text-gray-700 font-medium px-3 py-1 rounded transition hover:bg-gray-100 hover:text-black${activeSection === link.id ? ' active bg-gray-100 text-black' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
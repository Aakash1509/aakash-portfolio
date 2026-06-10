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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
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
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        <a href="#hero" className="text-xl font-bold text-black tracking-wide">Aakash Saraiya</a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-gray-700 font-medium px-3 py-1 rounded transition hover:bg-gray-100 hover:text-black${activeSection === link.id ? ' bg-gray-100 text-black' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 bg-gray-700 block" />
          <span className="w-5 h-0.5 bg-gray-700 block" />
          <span className="w-5 h-0.5 bg-gray-700 block" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col border-t border-gray-200 bg-white">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition${activeSection === link.id ? ' bg-gray-50 text-black' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
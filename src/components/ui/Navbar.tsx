'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'previous-cohorts'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Special case for home section when at top
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'apply') {
      window.location.href = '/apply';
      return;
    }
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100; // Account for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', ariaLabel: 'Navigate to home section' },
    { id: 'about', label: 'About', ariaLabel: 'Navigate to about section' },
    { id: 'previous-cohorts', label: 'Cohorts', ariaLabel: 'Navigate to previous cohorts section' },
    { id: 'apply', label: 'Apply', ariaLabel: 'Navigate to application section' },
  ];

  return (
    <nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-background/85 backdrop-blur-md rounded-full px-2 py-2 shadow-xl border border-border/20 dark:bg-background/85 dark:border-white/10">
        <div className="flex items-center space-x-1">
          <ul className="flex items-center space-x-1" role="list">
          {navItems.map((item) => (
            <li key={item.id} role="listitem">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-w-[44px] min-h-[44px] ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground/90 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                }`}
                aria-label={item.ariaLabel}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="sm:hidden">{item.label.charAt(0)}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            </li>
          ))}
          </ul>
          <div className="ml-2 pl-2 border-l border-border/20">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
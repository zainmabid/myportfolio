import React from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Brands } from '@/components/Brands';
import { Projects } from '@/components/Projects';
import { Industries } from '@/components/Industries';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased transition-colors duration-200">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Brands />
          <Projects />
          <Industries />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Brands } from '@/components/Brands';
import { Projects } from '@/components/Projects';
import { PhilosophyCallout } from '@/components/PhilosophyCallout';
import { Industries } from '@/components/Industries';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { GoogleBadges } from '@/components/GoogleBadges';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#FBFBFA] text-[#1A1A1A] antialiased selection:bg-slate-200 selection:text-slate-900">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Brands />
          <Projects />
          <PhilosophyCallout />
          <Industries />
          <Experience />
          <Skills />
          <Certifications />
          <GoogleBadges />
          <Education />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;

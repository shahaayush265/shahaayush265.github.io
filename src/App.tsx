import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 bg-grid-pattern selection:bg-indigo-500/30 selection:text-cyan-300">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full" />
        <div className="absolute top-[65%] -right-32 w-[550px] h-[550px] bg-purple-600/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Projects />
          <Timeline />
          <Skills />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

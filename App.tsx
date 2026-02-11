
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import PricingSection from './components/ui/pricing-section';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  // Handle navigation
  const navigateTo = (newView: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView(newView);
  };

  useEffect(() => {
    // Reveal animation observer logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [view]);

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar currentView={view} onNavigate={navigateTo} />
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <Services />
            <WorkGrid onProjectClick={(p) => navigateTo({ type: 'project', project: p })} />
            <About />
          </>
        )}

        {view.type === 'work' && (
            <div className="pt-32">
                <WorkGrid onProjectClick={(p) => navigateTo({ type: 'project', project: p })} />
            </div>
        )}

        {view.type === 'services' && (
            <div className="pt-32">
                <Services />
            </div>
        )}

        {view.type === 'about' && (
            <div className="pt-32">
                <About />
            </div>
        )}

        {view.type === 'pricing' && (
            <div className="pt-40">
                <PricingSection />
            </div>
        )}

        {view.type === 'project' && (
          <div className="pt-40 px-6 max-w-7xl mx-auto min-h-screen pb-32">
             <button 
               onClick={() => navigateTo({ type: 'home' })} 
               className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f2ff] mb-12 hover:translate-x-[-4px] transition-transform"
             >
               <span className="text-lg">←</span> Back to Exploration
             </button>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
               <div className="lg:col-span-2">
                 <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 leading-tight animate-on-scroll opacity-0">
                   {view.project.name}
                 </h1>
                 <p className="text-2xl text-slate-400 font-light leading-relaxed animate-on-scroll opacity-0 stagger-1">
                   {view.project.longDescription}
                 </p>
               </div>
               <div className="space-y-12 animate-on-scroll opacity-0 stagger-2">
                 <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00f2ff] mb-4">Category</h4>
                   <p className="text-white font-medium">{view.project.category}</p>
                 </div>
                 <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00f2ff] mb-4">Core Features</h4>
                   <ul className="space-y-2">
                     {view.project.features.map(f => (
                       <li key={f} className="text-slate-400 flex items-center gap-2">
                         <div className="w-1 h-1 bg-[#00f2ff] rounded-full"></div>
                         {f}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>

             {/* Main Project Image */}
             <div className="w-full aspect-video overflow-hidden mb-12 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 animate-on-scroll opacity-0">
               <img src={view.project.imageUrl} className="w-full h-full object-cover" alt={view.project.name} />
             </div>

             {/* Gallery Section */}
             {view.project.gallery && view.project.gallery.length > 0 && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                 {view.project.gallery.map((img, i) => (
                   <div key={i} className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 animate-on-scroll opacity-0">
                     <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" alt={`${view.project.name} detail ${i}`} />
                   </div>
                 ))}
               </div>
             )}
          </div>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0b] px-6">
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00f2ff]/30 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label */}
        <div className="reveal stagger-1 flex items-center justify-center gap-3 mb-8 opacity-0">
          <div className="h-[1px] w-8 bg-[#00f2ff]/50"></div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#00f2ff]">
            Digital Excellence Studio
          </span>
          <div className="h-[1px] w-8 bg-[#00f2ff]/50"></div>
        </div>

        {/* Headline */}
        <h1 className="reveal stagger-2 opacity-0 text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.9] tracking-tighter mb-10">
          Nadir-<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f2ff] to-[#00f2ff]/50">
            Zenith
          </span>
        </h1>

        {/* Subheadline */}
        <p className="reveal stagger-3 opacity-0 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-14">
          The Architecture of Ascension. <br className="hidden md:block"/> 
          We build high-performance web platforms, mobile apps, and custom digital solutions that scale with your ambition.
        </p>
        
        {/* CTA */}
        <div className="reveal stagger-4 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 bg-white text-[#0a0a0b] font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 magnetic-glow">
            <span className="relative z-10">Start Your Ascension</span>
            <div className="absolute inset-0 bg-[#00f2ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          
          <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-[#00f2ff] transition-colors">
            Our Work
            <span className="w-8 h-[1px] bg-white group-hover:bg-[#00f2ff] transition-all"></span>
          </button>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

      {/* Floating Elements (Scroll Indicator) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#00f2ff] to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium vertical-rl">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;

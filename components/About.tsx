
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#0a0a0b] py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Built for Ambition Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
            <div className="animate-on-scroll opacity-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#00f2ff] mb-6 block">Our Vision</span>
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-10 leading-[1.1]">
                    Built for <br/>
                    Ambition.
                </h2>
                <div className="space-y-6 text-slate-400 font-light text-lg max-w-lg">
                    <p>
                        Nadir-Zenith was born from a realization: most digital platforms are built for the average. We build for the zenith.
                    </p>
                    <p>
                        We partner with forward-thinking businesses to craft digital architecture that doesn't just function—it ascends. From initial concept (Nadir) to final peak performance (Zenith), we are your technical co-pilots.
                    </p>
                </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0 stagger-2">
                <div className="aspect-square bg-slate-900 overflow-hidden relative group">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                        alt="Office" 
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 border-[20px] border-[#0a0a0b]"></div>
                </div>
                {/* Stats */}
                <div className="absolute -bottom-10 -right-10 bg-[#00f2ff] p-10 hidden md:block">
                    <div className="text-[#0a0a0b]">
                        <div className="text-4xl font-heading font-bold mb-1">99.9%</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Uptime Reliability</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Meet the Zenith Core Section */}
        <div className="animate-on-scroll opacity-0 stagger-3 border-t border-white/5 pt-32">
            <div className="text-center mb-24">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#00f2ff] mb-6 block">Executive Leadership</span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
                    Meet the Zenith Core.
                </h2>
            </div>

            {/* Centered Grid with even tighter spacing to bring them closer */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
                {/* Member 1: Akshath Senthilkumar */}
                <div className="group animate-on-scroll opacity-0 stagger-1 flex flex-col items-center text-center w-60">
                    <div className="relative w-32 h-32 md:w-44 md:h-44 overflow-hidden bg-[#111113] mb-6 border border-white/5 transition-all duration-700 group-hover:border-[#00f2ff]/30 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                            alt="Akshath Senthilkumar" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-heading font-bold text-white tracking-tight leading-tight">
                            Akshath <br/> Senthilkumar
                        </h3>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-[1px] bg-[#00f2ff]/50"></div>
                            <p className="text-[#00f2ff] text-[9px] font-bold uppercase tracking-[0.3em]">
                                CEO & Founder
                            </p>
                            {/* LinkedIn Social Button */}
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/social w-14 h-14 rounded-full bg-[#0a0a0b] flex items-center justify-center transition-all duration-300 cursor-pointer mt-4"
                            >
                                <svg className="w-10 h-10 text-white transition-all duration-300 group-hover/social:drop-shadow-[0_0_15px_#00f2ff]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Member 2: Rohan Silvinstan Ramesh */}
                <div className="group animate-on-scroll opacity-0 stagger-2 flex flex-col items-center text-center w-60">
                    <div className="relative w-32 h-32 md:w-44 md:h-44 overflow-hidden bg-[#111113] mb-6 border border-white/5 transition-all duration-700 group-hover:border-[#00f2ff]/30 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                        <img 
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                            alt="Rohan Silvinstan Ramesh" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-heading font-bold text-white tracking-tight leading-tight">
                            Rohan Silvinstan <br/> Ramesh
                        </h3>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-[1px] bg-[#00f2ff]/50"></div>
                            <p className="text-[#00f2ff] text-[9px] font-bold uppercase tracking-[0.3em]">
                                President & Co-Founder
                            </p>
                            {/* LinkedIn Social Button */}
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/social w-14 h-14 rounded-full bg-[#0a0a0b] flex items-center justify-center transition-all duration-300 cursor-pointer mt-4"
                            >
                                <svg className="w-10 h-10 text-white transition-all duration-300 group-hover/social:drop-shadow-[0_0_15px_#00f2ff]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Member 3: Abdul Aatif */}
                <div className="group animate-on-scroll opacity-0 stagger-3 flex flex-col items-center text-center w-60">
                    <div className="relative w-32 h-32 md:w-44 md:h-44 overflow-hidden bg-[#111113] mb-6 border border-white/5 transition-all duration-700 group-hover:border-[#00f2ff]/30 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                        <img 
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                            alt="Abdul Aatif" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-heading font-bold text-white tracking-tight leading-tight">
                            Abdul <br/> Aatif
                        </h3>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-[1px] bg-[#00f2ff]/50"></div>
                            <p className="text-[#00f2ff] text-[9px] font-bold uppercase tracking-[0.3em]">
                                Technical Expert
                            </p>
                            {/* LinkedIn Social Button */}
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/social w-14 h-14 rounded-full bg-[#0a0a0b] flex items-center justify-center transition-all duration-300 cursor-pointer mt-4"
                            >
                                <svg className="w-10 h-10 text-white transition-all duration-300 group-hover/social:drop-shadow-[0_0_15px_#00f2ff]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface WorkGridProps {
  onProjectClick: (project: Project) => void;
}

const WorkGrid: React.FC<WorkGridProps> = ({ onProjectClick }) => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#0a0a0b]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="animate-on-scroll opacity-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#00f2ff] mb-4 block">Portfolio</span>
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-white">Selected Work.</h2>
            </div>
            <p className="max-w-xs text-slate-400 font-light text-sm leading-relaxed animate-on-scroll opacity-0 stagger-1">
                A showcase of digital platforms built for scale, performance, and aesthetic impact.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {PROJECTS.map((project, idx) => (
            <div 
                key={project.id} 
                onClick={() => onProjectClick(project)}
                className={`group cursor-pointer animate-on-scroll opacity-0 stagger-${(idx % 2) + 1}`}
            >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 mb-8">
                    <img 
                        src={project.imageUrl} 
                        alt={project.name} 
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0b]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-[#00f2ff] transition-colors">{project.name}</h3>
                        <p className="text-slate-500 font-light">{project.category} — {project.tagline}</p>
                    </div>
                    <div className="w-12 h-12 border border-slate-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                        <svg className="w-5 h-5 text-white group-hover:text-[#0a0a0b] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
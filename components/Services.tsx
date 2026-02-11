
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const SERVICES = [
  {
    title: 'Web Platforms',
    desc: 'High-performance React ecosystems built for modern enterprise scale.',
    icon: '⚡'
  },
  {
    title: 'Mobile Experiences',
    desc: 'Native and cross-platform applications with focus on fluid interaction.',
    icon: '📱'
  },
  {
    title: 'Custom AI',
    desc: 'Bespoke LLM integrations and automated intelligence systems.',
    icon: '🧠'
  },
  {
    title: 'Digital Strategy',
    desc: 'Architecture planning for growth, scalability and technical longevity.',
    icon: '📐'
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces engineered for seamless human-digital interaction.',
    icon: '🎨'
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Robust infrastructure automation for continuous deployment at scale.',
    icon: '☁️'
  },
  {
    title: 'E-commerce Solutions',
    desc: 'High-conversion digital storefronts built for global retail performance.',
    icon: '🛒'
  },
  {
    title: 'Brand Identity',
    desc: 'Visual architecture that elevates your market presence to the zenith.',
    icon: '💎'
  },
  {
    title: 'Data Analytics',
    desc: 'Turning raw data into actionable intelligence for strategic advantage.',
    icon: '📊'
  },
  {
    title: 'MVP Development',
    desc: 'Rapid technical prototyping to bring your vision to market altitude.',
    icon: '🚀'
  },
  {
    title: 'Legacy Modernization',
    desc: 'Systematic technical upgrades to bring existing systems into the future.',
    icon: '🛠️'
  },
  {
    title: 'Support & Optimization',
    desc: 'Continuous engineering refinements for peak system performance.',
    icon: '⚙️'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#0a0a0b] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading Section */}
        <div className="mb-24 animate-on-scroll opacity-0">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#00f2ff] mb-4 block">Our Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
                The Brand-Focused.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-y-24">
           {SERVICES.map((s, idx) => (
             <div key={s.title} className="animate-on-scroll opacity-0 stagger-1 group">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-[#00f2ff] transition-colors">{s.title}</h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{s.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

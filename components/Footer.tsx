
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME } from '../constants';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0a0a0b] pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">{BRAND_NAME}</h3>
                <p className="text-slate-500 max-w-sm font-light leading-relaxed text-sm">
                    Premium digital solutions for high-performance enterprises. We build the architecture of ascension.
                </p>
            </div>
            
            <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00f2ff] mb-8">Navigation</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-400">
                    <li><button onClick={() => onNavigate({ type: 'work' })} className="hover:text-white transition-colors">Work</button></li>
                    <li><button onClick={() => onNavigate({ type: 'services' })} className="hover:text-white transition-colors">Services</button></li>
                    <li><button onClick={() => onNavigate({ type: 'about' })} className="hover:text-white transition-colors">About</button></li>
                    <li><button onClick={() => onNavigate({ type: 'pricing' })} className="hover:text-white transition-colors">Pricing</button></li>
                </ul>
            </div>

            <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00f2ff] mb-8">Social</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                © 2026 Nadir to Zenith. All rights reserved.
            </span>
            <div className="flex gap-8">
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

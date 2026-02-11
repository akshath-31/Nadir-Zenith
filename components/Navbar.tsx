/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', type: 'work' },
    { label: 'Services', type: 'services' },
    { label: 'About', type: 'about' },
    { label: 'Pricing', type: 'pricing' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled || mobileMenuOpen ? 'glass py-4' : 'bg-transparent py-8'}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo (Wordmark + Icon) */}
          <button 
            onClick={() => onNavigate({ type: 'home' })}
            className="flex flex-col items-center z-[110] group relative"
          >
            {/* Sparkle Icon */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#00f2ff] opacity-80 group-hover:scale-125 transition-transform duration-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            {/* Wordmark */}
            <div className="flex flex-col items-center leading-none pt-1">
              <span className="text-2xl font-heading font-black tracking-[0.1em] text-[#00f2ff] uppercase">
                ZENITH
              </span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-light tracking-[0.05em] text-[#94a3b8]">
                  Nadir
                </span>
                <div className="w-[1px] h-4 bg-[#00f2ff] opacity-50"></div>
              </div>
            </div>
          </button>
          
          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => onNavigate({ type: link.type as any })}
                className={`text-[13px] font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:text-[#00f2ff] ${
                  currentView.type === link.type ? 'text-[#00f2ff]' : 'text-slate-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-6 z-[110]">
            <button 
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#00f2ff] text-[#0a0a0b] text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 magnetic-glow"
            >
              Contact Us <span className="text-lg">→</span>
            </button>
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
               </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0a0a0b] z-[90] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-10">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate({ type: link.type as any });
                }}
                className="text-4xl font-heading font-bold text-white hover:text-[#00f2ff] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button className="mt-12 px-10 py-5 bg-[#00f2ff] text-[#0a0a0b] font-bold uppercase tracking-[0.2em] text-sm">
                Start Project
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
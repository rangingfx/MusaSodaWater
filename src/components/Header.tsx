import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets, Sparkles, Languages } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  language: 'en' | 'ur';
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, language, onToggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = TRANSLATIONS[language];

  const navItems = [
    { name: t.navHome, path: '' },
    { name: t.navFlavors, path: 'products' },
    { name: t.navAbout, path: 'about' },
    { name: t.navGallery, path: 'gallery' },
    { name: t.navDistributors, path: 'distributor' },
    { name: t.navJournal, path: 'blog' },
    { name: t.navContact, path: 'contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050a12]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleLinkClick('')}
            className="flex items-center space-x-3 group focus:outline-none cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#2dd4ff] to-[#46f08a] rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#2dd4ff] to-[#46f08a] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <Droplets className="h-4.5 w-4.5 text-[#050a12] font-black" />
              </div>
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-2xl font-black tracking-tighter text-white font-display uppercase italic flex items-center">
                MUSA
                <span className="text-[#2dd4ff] ml-0.5 text-xxs font-black uppercase tracking-widest align-super">TM</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#46f08a] uppercase font-mono font-bold">
                {language === 'ur' ? 'سوڈا واٹر' : 'Soda Water'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  id={`nav-item-${item.path || 'home'}`}
                  onClick={() => handleLinkClick(item.path)}
                  className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full cursor-pointer overflow-hidden group focus:outline-none ${
                    isActive ? 'text-white font-extrabold' : 'text-white/60 hover:text-[#2dd4ff]'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-white/5 border border-white/10 rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Switcher + Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Elegant pill style language switcher */}
            <div 
              id="header-language-switcher"
              className="flex items-center bg-gray-950/80 border border-gray-800 rounded-full p-1.5 shadow-inner scale-90"
            >
              <Languages className="h-3.5 w-3.5 text-[#2dd4ff] mx-1 px-0.5" />
              <button
                id="lang-btn-en"
                onClick={() => { if (language !== 'en') onToggleLanguage(); }}
                className={`px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-[#050a12] shadow-md font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="lang-btn-ur"
                onClick={() => { if (language !== 'ur') onToggleLanguage(); }}
                className={`px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded-full transition-all cursor-pointer ${
                  language === 'ur'
                    ? 'bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-[#050a12] shadow-md font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                اردو
              </button>
            </div>

            <button
              id="header-cta-distributor"
              onClick={() => handleLinkClick('distributor')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[10px] font-bold uppercase tracking-widest rounded-full group bg-gradient-to-tr from-[#2dd4ff] to-[#46f08a] hover:text-black focus:ring-2 focus:ring-[#2dd4ff] focus:ring-offset-2 focus:ring-offset-[#050a12] transition-all duration-500 cursor-pointer scale-90 lg:scale-100"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-500 bg-gray-950 rounded-full group-hover:bg-opacity-0 font-display">
                {t.becomePartner}
              </span>
            </button>
          </div>

          {/* Mobile elements (switcher + menu toggle) */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Compact language toggler for mobile next to hamburger */}
            <button
              id="mobile-lang-quick-toggle"
              onClick={onToggleLanguage}
              className="px-2.5 py-1.5 bg-gray-900 border border-gray-800 hover:border-cyan-500 rounded-full flex items-center space-x-1.5 focus:outline-none cursor-pointer text-xxs font-bold text-gray-300"
            >
              <Languages className="h-3 w-3 text-[#2dd4ff]" />
              <span>{language === 'en' ? 'UR' : 'EN'}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden fixed inset-x-0 top-[60px] bg-[#050a12]/98 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 ease-in-out transform shadow-xl ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.path || (item.path && currentPath.startsWith(item.path));
            return (
              <button
                key={item.path}
                id={`mobile-nav-item-${item.path || 'home'}`}
                onClick={() => handleLinkClick(item.path)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold tracking-wide flex items-center justify-between transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/40 to-emerald-950/40 text-white border-cyan-500/30 shadow-indigo-950/20 shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900/60 border-transparent'
                }`}
              >
                <span>{item.name}</span>
                {isActive && <Sparkles className="h-4 w-4 text-[#2dd4ff]" />}
              </button>
            );
          })}
          
          {/* Mobile Menu Language Selector row */}
          <div className="pt-4 pb-2 border-t border-gray-800/60 flex items-center justify-between px-3">
            <span className="text-xs font-bold text-gray-450 uppercase tracking-widest flex items-center">
              <Languages className="h-4 w-4 text-[#2dd4ff] mr-2" />
              {language === 'ur' ? 'زبان منتخب کریں' : 'Choose Language'}
            </span>
            <div className="bg-gray-950 border border-gray-800 p-1 rounded-lg flex space-x-1">
              <button
                id="mobile-lang-en"
                onClick={() => { if (language !== 'en') onToggleLanguage(); }}
                className={`px-3 py-1 text-xs font-bold rounded ${
                  language === 'en' ? 'bg-[#212c3d] text-white' : 'text-gray-400'
                }`}
              >
                English
              </button>
              <button
                id="mobile-lang-ur"
                onClick={() => { if (language !== 'ur') onToggleLanguage(); }}
                className={`px-3 py-1 text-xs font-bold rounded ${
                  language === 'ur' ? 'bg-[#212c3d] text-white' : 'text-gray-400'
                }`}
              >
                اردو
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              id="mobile-header-cta-distributor"
              onClick={() => handleLinkClick('distributor')}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black font-semibold text-center rounded-xl tracking-wider text-sm transition-all focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            >
              {t.becomeDistributor}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

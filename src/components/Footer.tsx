import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Compass, ArrowUp, Send, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { WhatsAppLogo } from './WhatsAppLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
  language?: 'en' | 'ur';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language = 'en' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = TRANSLATIONS[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const flavorsList = [
    { name: language === 'ur' ? 'پودینہ اسپارکلنگ' : 'Mint Sparkling', id: 'mint' },
    { name: language === 'ur' ? 'لیمن زیسٹ' : 'Lemon Zest', id: 'lemon' },
    { name: language === 'ur' ? 'بلیوبیری اسپلش' : 'Blueberry Splash', id: 'blueberry' },
    { name: language === 'ur' ? 'املی رائل' : 'Imli Royal', id: 'imli' }
  ];

  return (
    <footer id="main-footer" className="bg-[#020509] border-t border-gray-900 text-gray-400 font-sans text-left">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-[#2dd4ff] to-[#46f08a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-6">
            <button
              id="footer-brand"
              onClick={() => { onNavigate(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center space-x-2 text-white text-left focus:outline-none cursor-pointer"
            >
              <span className="text-2xl font-extrabold tracking-wider font-sans">
                MUSA<span className="text-[#2dd4ff]">.</span>
              </span>
              <span className="bg-gray-900 border border-gray-800 text-[#46f08a] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono tracking-widest leading-none">
                {t.madeInBannu}
              </span>
            </button>
            <p className="text-sm leading-relaxed text-gray-400 select-text">
              {t.brandDescription}
            </p>
            {/* Social handles */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-white uppercase tracking-widest block">
                {t.followPureSparkle}
              </span>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <a
                  href="https://wa.me/923349029499"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-gray-950 border border-gray-900 rounded-full hover:border-[#25D366] text-emerald-400 hover:text-[#25D366] transition-all duration-300 flex items-center justify-center group"
                  aria-label="WhatsApp (+92 334 9029499)"
                  title="WhatsApp: +92 334 9029499"
                >
                  <WhatsAppLogo className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://facebook.com/musasodawater"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-gray-950 border border-gray-900 rounded-full hover:border-[#2dd4ff] hover:text-[#2dd4ff] transition-all duration-300"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com/musasodawater"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-gray-950 border border-gray-900 rounded-full hover:border-[#46f08a] hover:text-[#46f08a] transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://tiktok.com/@musasodawater"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-gray-950 border border-gray-900 rounded-full hover:border-red-400 hover:text-red-400 transition-all duration-300 flex items-center justify-center font-bold text-xs w-[34px] h-[34px] leading-none"
                  aria-label="TikTok Profile"
                >
                  <span className="font-sans">d</span>
                </a>
                <a
                  href="https://youtube.com/@musasodawater"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-gray-950 border border-gray-900 rounded-full hover:border-red-500 hover:text-red-500 transition-all duration-300"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col space-y-1 text-xs">
                <a
                  href="https://wa.me/923349029499"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <WhatsAppLogo className="w-3.5 h-3.5" />
                  <span>WhatsApp: +92 334 9029499</span>
                </a>
                <span className="font-mono text-gray-500">
                  @musasodawater
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              {t.brandDirectory}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#2dd4ff] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#2dd4ff] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  {t.navFlavors}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#2dd4ff] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#2dd4ff] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  {t.navGallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('distributor'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#2dd4ff] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  {t.navDistributors}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#2dd4ff] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  {language === 'ur' ? 'رابطہ کا صفحہ' : 'Contact Office'}
                </button>
              </li>
            </ul>
          </div>

          {/* Flavors Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              {t.signatureFlavors}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {flavorsList.map((f) => (
                <li key={f.id}>
                  <button
                    onClick={() => {
                      onNavigate(`products?id=${f.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#46f08a] transition-colors duration-200 cursor-pointer text-left focus:outline-none flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2 opacity-50" />
                    {f.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              {t.freshUpdates}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t.newsletterPromo}
            </p>
            <form onSubmit={handleSubscribe} className="relative group text-left">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-950 border border-gray-900 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#2dd4ff] focus:ring-1 focus:ring-[#2dd4ff] transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-gray-900 hover:bg-gradient-to-r hover:from-[#2dd4ff] hover:to-[#46f08a] hover:text-black py-2 px-3 rounded-md text-white transition-all text-xs font-semibold cursor-pointer"
              >
                {submitted ? <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> : <Send className="h-3.5 w-3.5" />}
              </button>
            </form>
            {submitted && (
              <p className="text-[10px] text-emerald-400 font-mono animate-fade-in">
                {t.subscribeSuccess}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-900 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-xs text-gray-500 pt-2">
          <div className="flex items-center space-x-2">
            <Compass className="h-4 w-4 text-[#2dd4ff] animate-spin-slow" />
            <span className="font-mono">
              {t.locationFooter}
            </span>
          </div>
          <div id="copyright-block" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} MUSA Soda Water. {t.rightsReserved}</span>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a
              id="footer-powered-by"
              href="https://rangingfx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#2dd4ff] transition-colors duration-200 flex items-center gap-1 font-medium group"
            >
              <span>Powered by</span>
              <span className="text-gray-200 group-hover:text-[#46f08a] font-semibold underline underline-offset-4 decoration-cyan-500/40 group-hover:decoration-[#46f08a]">
                RanginGfx.com
              </span>
            </a>
            <button
              id="footer-back-to-top"
              onClick={handleScrollTop}
              className="p-2 bg-gray-950 border border-gray-900 hover:border-[#2dd4ff] text-white rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-[#2dd4ff] cursor-pointer ml-1"
              aria-label={t.backToTop}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

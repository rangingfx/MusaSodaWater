import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';

interface FloatingWhatsAppProps {
  language?: 'en' | 'ur';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language = 'en' }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasClosedBadge, setHasClosedBadge] = useState(false);

  const whatsappUrl = 'https://wa.me/923349029499';
  const phoneNumberDisplay = '+92 334 9029499';

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 end-6 z-50 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Mini greeting bubble if not dismissed */}
      {!hasClosedBadge && (
        <div
          id="floating-whatsapp-popup"
          className="mb-3 max-w-[260px] bg-gray-950/95 border border-emerald-500/30 rounded-2xl p-3.5 shadow-2xl shadow-emerald-950/40 backdrop-blur-md text-left transition-all duration-300 animate-fade-in relative group"
        >
          <button
            id="close-whatsapp-popup"
            onClick={(e) => {
              e.stopPropagation();
              setHasClosedBadge(true);
            }}
            className="absolute top-2 end-2 text-gray-500 hover:text-white p-1 rounded-full focus:outline-none cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1.5">
            <WhatsAppLogo className="w-4 h-4" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#25D366] font-mono">
              {language === 'ur' ? 'موسیٰ سوڈا واٹس ایپ' : 'MUSA Official WhatsApp'}
            </span>
          </div>
          
          <p className="text-xs text-gray-300 leading-relaxed font-sans pr-3 rtl:pr-0 rtl:pl-3">
            {language === 'ur'
              ? 'تھوک خریداری یا کسی بھی معلومات کے لیے فوری رابطہ کریں۔'
              : 'Need instant wholesale pricing or product details? Chat with us live!'}
          </p>

          <a
            id="popup-whatsapp-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:text-[#46f08a] transition-colors"
          >
            <WhatsAppLogo className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'چیٹ شروع کریں' : 'Start WhatsApp Chat'}</span>
            <span className="font-mono text-[11px] text-gray-400">({phoneNumberDisplay})</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}

      {/* Main Floating Action Button */}
      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group bg-[#071911]/90 hover:bg-[#072418] border border-[#25D366]/50 p-2 sm:p-2.5 rounded-full shadow-2xl shadow-emerald-950/80 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer backdrop-blur-md"
        aria-label="Chat with MUSA Soda Water on WhatsApp (+92 334 9029499)"
      >
        {/* Animated Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Official WhatsApp Logo */}
        <WhatsAppLogo className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300" />

        {/* Active status indicator dot */}
        <span className="absolute top-0.5 end-0.5 w-3.5 h-3.5 bg-[#25D366] border-2 border-[#050a12] rounded-full ring-1 ring-emerald-300" />

        {/* Hover Tooltip */}
        {showTooltip && (
          <span
            className="absolute end-full mr-3 rtl:mr-0 rtl:ml-3 px-3 py-1.5 bg-gray-950 border border-gray-800 text-white text-xs font-medium rounded-lg shadow-xl whitespace-nowrap pointer-events-none hidden sm:inline-block font-sans"
          >
            {language === 'ur' ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp'} • {phoneNumberDisplay}
          </span>
        )}
      </a>
    </div>
  );
};

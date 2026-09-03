import React from 'react';

interface WhatsAppLogoProps {
  className?: string;
  size?: number | string;
}

export const WhatsAppLogo: React.FC<WhatsAppLogoProps> = ({ className = 'w-5 h-5', size }) => {
  return (
    <img
      src="/whatsapp.svg"
      alt="WhatsApp"
      className={`inline-block object-contain select-none shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      loading="eager"
      decoding="async"
    />
  );
};

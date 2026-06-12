import React from 'react';
import { motion } from 'motion/react';

interface MusaBottleProps {
  flavor: 'mint' | 'lemon' | 'imli' | 'blueberry';
  className?: string;
  isHovered?: boolean;
}

export const MusaBottle: React.FC<MusaBottleProps> = ({ flavor, className = '', isHovered = false }) => {
  // Theme configuration for each flavor matching original label art perfectly
  const config = {
    mint: {
      liquidColor: 'rgba(16, 185, 129, 0.25)', // pale sparkling green
      liquidGlow: '#10b981',
      capColor: '#047857', // forest green
      labelBg: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
      accentColor: '#34d399',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      labelTitle: 'MINT SPARKLING',
      labelText: 'Cooling & Crisp',
      herbs: (
        <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {/* Mint Leaf 1 */}
          <path d="M50,50 Q25,30 35,15 Q55,20 50,50" fill="#10B981" />
          <path d="M50,50 Q75,30 65,15 Q45,20 50,50" fill="#047857" />
          {/* Veins */}
          <path d="M43,30 Q46,25 41,20 M57,30 Q54,25 59,20" stroke="#a7f3d0" strokeWidth="1" fill="none" />
          <path d="M48,50 L48,15" stroke="#064e3b" strokeWidth="1.5" />
          {/* Sparkles */}
          <circle cx="30" cy="20" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="70" cy="25" r="2" fill="#fff" opacity="0.9" />
        </svg>
      ),
      nutrition: { calories: '42 kcal', carbs: '10.5g', sugars: '9.8g', sodium: '15 mg' }
    },
    lemon: {
      liquidColor: 'rgba(234, 179, 8, 0.22)', // golden bright yellow splash
      liquidGlow: '#eab308',
      capColor: '#ca8a04', // golden yellow cap
      labelBg: 'linear-gradient(135deg, #422006 0%, #78350f 100%)', // warm citrus contrast
      accentColor: '#facc15',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      labelTitle: 'LEMON ZEST',
      labelText: 'Sizzling Citrus',
      herbs: (
        <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {/* Lemon Slice */}
          <circle cx="50" cy="50" r="25" fill="#EAB308" />
          <circle cx="50" cy="50" r="22" fill="#FEF08A" />
          {/* Segments */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M50,50 L${50 + 20 * Math.cos((i * Math.PI) / 4)},${50 + 20 * Math.sin((i * Math.PI) / 4)}`}
              stroke="#EAB308"
              strokeWidth="2"
            />
          ))}
          <circle cx="50" cy="50" r="4" fill="#FEF08A" />
          {/* Leaves */}
          <path d="M68,36 Q80,25 75,15 Q64,25 68,36" fill="#15803d" />
        </svg>
      ),
      nutrition: { calories: '48 kcal', carbs: '12.0g', sugars: '11.2g', sodium: '12 mg' }
    },
    imli: {
      liquidColor: 'rgba(194, 65, 12, 0.28)', // reddish brown
      liquidGlow: '#ea580c',
      capColor: '#1e0b02', // charcoal brown cap
      labelBg: 'linear-gradient(135deg, #090300 0%, #150900 100%)', // pure sleek dark backdrop
      accentColor: '#f97316',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      labelTitle: 'IMLI ROYAL',
      labelText: 'Tangy Tamarind',
      herbs: (
        <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto drop-shadow-[0_2.5px_4px_rgba(0,0,0,0.8)]">
          {/* Tamarind Pod shape */}
          <path d="M25,55 C30,35 45,32 55,42 C65,52 75,45 80,30" stroke="#7c2d12" strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M25,55 C30,35 45,32 55,42 C65,52 75,45 80,30" stroke="#c2410c" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Little green leaf */}
          <path d="M40,32 Q35,20 48,18 Q45,28 40,32" fill="#166534" />
          <path d="M52,35 Q58,22 65,24 Q58,34 52,35" fill="#15803d" />
        </svg>
      ),
      nutrition: { calories: '58 kcal', carbs: '14.2g', sugars: '13.5g', sodium: '32 mg' }
    },
    blueberry: {
      liquidColor: 'rgba(79, 70, 229, 0.25)', // rich indigo-purple sparkling
      liquidGlow: '#6366f1',
      capColor: '#312e81', // deep blue-indigo cap
      labelBg: 'linear-gradient(135deg, #0c0a25 0%, #110e3d 100%)', // blue bary night contrast
      accentColor: '#818cf8',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      labelTitle: 'BLUEBERRY SPLASH',
      labelText: 'Bold Berry Fizz',
      herbs: (
        <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {/* Blueberries cluster */}
          <circle cx="42" cy="54" r="14" fill="#312e81" />
          <circle cx="42" cy="54" r="12" fill="#4f46e5" />
          <circle cx="42" cy="54" r="12" fill="url(#blue-grad)" />
          
          <circle cx="60" cy="46" r="12" fill="#1e1b4b" />
          <circle cx="60" cy="46" r="10" fill="#4338ca" />
          
          {/* Bloom/crown on berries */}
          <path d="M38,44 L42,47 L46,44 L44,48 L48,50 L44,52 L42,56" fill="#1e1b4b" strokeWidth="1" opacity="0.6"/>
          {/* Highlight */}
          <circle cx="38" cy="48" r="3" fill="#fff" opacity="0.35" />
          <circle cx="56" cy="42" r="2.5" fill="#fff" opacity="0.3" />
          <defs>
            <radialGradient id="blue-grad">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="60%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#312e81" />
            </radialGradient>
          </defs>
        </svg>
      ),
      nutrition: { calories: '54 kcal', carbs: '13.5g', sugars: '12.8g', sodium: '18 mg' }
    }
  };

  const current = config[flavor];

  // Fine static condensation droplets layout to guarantee high-fidelity render
  const drops = [
    { top: '15%', left: '20%', size: '3px', delay: '0s' },
    { top: '22%', left: '75%', size: '4px', delay: '0.4s' },
    { top: '35%', left: '15%', size: '2px', delay: '0.1s' },
    { top: '48%', left: '85%', size: '5px', delay: '1.2s' },
    { top: '60%', left: '10%', size: '3.5px', delay: '0.7s' },
    { top: '75%', left: '82%', size: '3px', delay: '1.5s' },
    { top: '85%', left: '22%', size: '4.5px', delay: '0.3s' },
    { top: '55%', left: '78%', size: '2.5px', delay: '0.9s' },
  ];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Pepsi-style 300ml Tapered PET Bottle Container */}
      <div 
        className="relative w-44 aspect-[3/9.5] transition-all duration-750 ease-out preserve-3d"
        style={{
          transform: isHovered 
            ? 'rotateY(12deg) rotateX(-5deg) scale(1.05)'
            : 'rotateY(0deg) rotateX(0deg) scale(1)'
        }}
      >
        {/* Absolute Outer Ambient Studio Shadow Behind Bottle */}
        <div 
          className="absolute -inset-x-2 top-4 bottom-0 bg-transparent rounded-full opacity-65 blur-3xl pointer-events-none transition-all duration-500"
          style={{
            background: `radial-gradient(circle, ${current.liquidGlow}1d 0%, transparent 70%)`
          }}
        />

        {/* 1. BOTTLE CAP */}
        <div className="relative w-12 h-8 mx-auto z-40">
          {/* Tapered upper ridge */}
          <div 
            className="w-10 h-1.5 mx-auto rounded-t-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
            style={{ backgroundColor: current.capColor }}
          />
          {/* Main rib structure with photorealistic vertical friction ribs */}
          <div 
            className="w-11 h-4.5 mx-auto relative overflow-hidden flex justify-around border-b border-black/30 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)]"
            style={{ backgroundColor: current.capColor }}
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-[1.5px] h-full bg-black/15 border-r border-white/10" />
            ))}
          </div>
          {/* Security seal breakaway plastic ring */}
          <div 
            className="w-11 h-1.5 mx-auto rounded-b-md border-t border-black/40 mt-[1px] shadow-sm"
            style={{ backgroundColor: current.capColor }}
          />
        </div>

        {/* 2. CRYSTAL-CLEAR PET NECK */}
        <div className="relative w-14 h-9 mx-auto z-30">
          {/* Smooth neck flare */}
          <div className="w-8 h-full mx-auto bg-gradient-to-r from-white/40 via-white/15 to-white/30 border-x border-white/25 relative">
            {/* Liquid inside the thin neck tube */}
            <div 
              className="absolute bottom-0 inset-x-1 h-3/4 opacity-40 transition-colors duration-500"
              style={{ backgroundColor: current.liquidColor }}
            />
            {/* Safety collar rib */}
            <div className="absolute bottom-1 inset-x-[-3px] h-1.5 bg-gradient-to-r from-white/60 via-white/10 to-white/40 border-b border-black/10 rounded-full" />
          </div>
        </div>

        {/* 3. UPPER TAPERED SHOULDER */}
        <div className="relative w-28 h-12 mx-auto z-20 -mt-[1px]">
          {/* Smooth curve outward */}
          <div className="w-full h-full bg-gradient-to-r from-white/45 via-white/10 to-white/35 rounded-t-[50%] border-t border-x border-white/20 relative overflow-hidden">
            {/* Level of carbonated liquid */}
            <div 
              className="absolute bottom-0 inset-x-0 h-[88%] opacity-85 transition-colors duration-500"
              style={{
                background: `linear-gradient(to top, ${current.liquidColor}, ${current.liquidColor}dd)`
              }}
            />
            {/* Bubbles in liquid shoulder */}
            <span className="absolute bottom-2 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce" />
            <span className="absolute bottom-5 right-1/3 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping" />
          </div>
        </div>

        {/* 4. MAIN CYLINDRICAL GRIP BODY (300ML PEPSI PROFILE) */}
        <div className="relative w-32 h-44 mx-auto z-20 -mt-[1px]">
          <div className="w-full h-full bg-gradient-to-r from-white/40 via-white/10 to-white/30 border-x border-white/15 relative overflow-hidden flex flex-col justify-between">
            {/* Carbonated Liquid Fill */}
            <div 
              className="absolute inset-0 opacity-80 z-0 transition-colors duration-500"
              style={{
                background: `linear-gradient(to right, ${current.liquidColor}ee 0%, ${current.liquidColor}88 50%, ${current.liquidColor}ff 100%)`
              }}
            />

            {/* Micro-carbonation Bubble Streams ascending inside PET */}
            <div className="absolute inset-0 z-10 overflow-hidden opacity-85 pointer-events-none">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/50 rounded-full animate-bounce"
                  style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    bottom: `${Math.random() * 100}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
            </div>

            {/* 5. THE ORIGINAL MUSA RECREATED COMPACT LABEL LABEL WRAP */}
            <div 
              className="relative z-20 my-auto h-28 w-full border-y border-black/35 shadow-lg select-text text-left flex flex-col justify-between p-1 overflow-hidden"
              style={{ background: current.labelBg }}
            >
              {/* Dynamic curvature shadow layer for cylinder simulation */}
              <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-30" />
              <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/[0.15] pointer-events-none z-35" />

              {/* Label Content Header */}
              <div className="flex items-center justify-between px-1.5 pt-0.5 z-20">
                <span className="text-[4px] uppercase font-mono tracking-widest text-white/50 font-black leading-none">
                  Pure * Sparkling * Refreshing
                </span>
                <span className="text-[4.5px] uppercase font-bold text-[#46f08a] font-mono leading-none">
                  300ML glass finish
                </span>
              </div>

              {/* Centerpiece Original Musa Logo & Vector Emblem */}
              <div className="text-center py-0.5 z-20 relative">
                {/* Micro outer circular badge details resembling Image 7 layout */}
                <div className="mx-auto w-[68px] h-20 rounded-full border border-white/20 bg-black/40 p-1 flex flex-col justify-center items-center shadow-inner relative">
                  
                  {/* Round Curved text placeholders */}
                  <span className="text-[3px] uppercase font-mono text-white/40 tracking-wider mb-[-1px]">Proudly Made In Bannu</span>
                  
                  <h4 className="text-[8px] font-black tracking-tighter text-white uppercase italic font-sans leading-none">
                    MUSA
                  </h4>
                  <p className="text-[3.5px] font-mono font-bold text-white/60 tracking-wider">
                    SODA WATER
                  </p>

                  <div className="mt-0.5 scale-95 flex items-center justify-center">
                    {current.herbs}
                  </div>
                </div>
              </div>

              {/* Original Bottom Specifications Label Board */}
              <div className="px-1 pb-1 z-20 flex justify-between items-end border-t border-white/10 pt-1">
                {/* Nutrition Panel mini-block */}
                <div className="scale-75 origin-left text-[3px] font-mono text-white/60 leading-none space-y-[1px]">
                  <p className="font-extrabold uppercase text-white tracking-widest border-b border-white/10 pb-[1px] mb-[1px]">NUTRITION (300ml)</p>
                  <p>CALORIES: {current.nutrition.calories}</p>
                  <p>CARBS: {current.nutrition.carbs}</p>
                  <p>SODIUM: {current.nutrition.sodium}</p>
                </div>

                {/* Flavor Tag Title */}
                <div className="text-center">
                  <span className={`text-[6px] font-black uppercase tracking-widest font-sans italic block ${current.textColor} drop-shadow`}>
                    {current.labelTitle}
                  </span>
                  <span className="text-[4px] text-white/50 font-mono tracking-widest uppercase block mt-[-1px]">
                    {current.labelText}
                  </span>
                </div>

                {/* Halal emblem & Barcode representation */}
                <div className="flex flex-col items-end space-y-[1.5px] scale-75 origin-right">
                  <div className="flex items-center space-x-[2px] bg-white/10 px-1 rounded-sm border border-white/15">
                    <span className="text-[3px] font-extrabold text-[#46f08a] uppercase font-mono">حلال HALAL</span>
                  </div>
                  {/* Miniature barcode bar elements */}
                  <div className="flex space-x-[0.5px] h-3.5 bg-white p-[1px] rounded-xs">
                    <span className="w-[1px] h-full bg-black" />
                    <span className="w-[1.5px] h-full bg-black" />
                    <span className="w-[0.5px] h-full bg-black" />
                    <span className="w-[1.5px] h-full bg-black" />
                    <span className="w-[1px] h-full bg-black" />
                    <span className="w-[0.5px] h-full bg-black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Droplets Layer Over the PET Body */}
            {drops.map((drop, idx) => (
              <div
                key={idx}
                className="absolute bg-white/40 shadow-[0_1px_1px_rgba(0,0,0,0.3)] rounded-full z-25 opacity-75 pointer-events-none"
                style={{
                  top: drop.top,
                  left: drop.left,
                  width: drop.size,
                  height: parseFloat(drop.size) * 1.5 + 'px',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  transform: 'rotate(-5deg)',
                }}
              />
            ))}
          </div>
        </div>

        {/* 6. LOWER BASE AND PETAL WEB RIBS */}
        <div className="relative w-28 h-10 mx-auto z-20 -mt-[1.5px]">
          {/* Tapered bottom body leading to structural base */}
          <div className="w-full h-full bg-gradient-to-r from-white/40 via-white/10 to-white/30 border-b border-x border-white/15 rounded-b-2xl relative overflow-hidden">
            {/* Liquid base */}
            <div 
              className="absolute inset-0 opacity-85 transition-colors duration-500"
              style={{ backgroundColor: current.liquidColor }}
            />
            
            {/* Petaloid Rib details for 300ml bottle baseline layout */}
            <div className="absolute inset-x-2 bottom-0 h-4.5 flex justify-between items-end bg-black/10">
              <div className="w-2.5 h-full bg-gradient-to-t from-white/40 to-transparent rounded-t-full border-r border-white/10" />
              <div className="w-2.5 h-3/4 bg-gradient-to-t from-white/45 to-transparent rounded-t-full border-r border-white/10" />
              <div className="w-2.5 h-full bg-gradient-to-t from-white/40 to-transparent rounded-t-full border-x border-white/10" />
              <div className="w-2.5 h-3/4 bg-gradient-to-t from-white/45 to-transparent rounded-t-full border-l border-white/10" />
              <div className="w-2.5 h-full bg-gradient-to-t from-white/40 to-transparent rounded-t-full border-l border-white/10" />
            </div>

            {/* Droplets on the bottom curve */}
            <span className="absolute bottom-2 left-1/3 w-1.5 h-1.5 rounded-full bg-white/40 shadow" />
            <span className="absolute bottom-1 right-1/4 w-1 h-1 rounded-full bg-white/35 shadow" />
          </div>
        </div>

        {/* 7. HIGH-REFRACTION SHINE VERTICAL GLARES */}
        {/* Adds studio-quality lighting, bright transparent highlights, glares across entirety of bottle bottle plastic */}
        <div className="absolute top-10 bottom-2 left-6 w-3 bg-gradient-to-r from-white/15 via-white/[0.04] to-transparent rounded-full z-25 pointer-events-none" />
        <div className="absolute top-10 bottom-2 right-6 w-2 bg-gradient-to-l from-white/20 via-white/[0.02] to-transparent rounded-full z-25 pointer-events-none" />
        <div className="absolute top-16 bottom-8 left-[18%] w-[1.5px] bg-white/25 rounded-full z-25 pointer-events-none" />
        <div className="absolute top-24 bottom-14 right-[18%] w-[1px] bg-white/35 rounded-full z-25 pointer-events-none" />
      </div>

      {/* 8. REALISTIC SPHERICAL GROUND SHADOW UNDER BOTTLE BASE */}
      <div 
        className="h-1.5 rounded-full bg-black/60 blur-xs transition-all duration-500 mt-4 pointer-events-none"
        style={{
          width: isHovered ? '95px' : '82px',
          opacity: isHovered ? 0.8 : 1,
          filter: isHovered ? 'blur(3px)' : 'blur(2.2px)'
        }}
      />
    </div>
  );
};

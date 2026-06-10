import React from 'react';
import { Target, Factory, Calendar, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const pillars = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: 'Purity Focused',
      desc: 'Our water goes through high-grade reverse osmosis filtration to reach optimal alkaline levels with zero chemical additives.'
    },
    {
      icon: <Factory className="h-6 w-6 text-[#2dd4ff]" />,
      title: 'Consistent Carbonation',
      desc: 'Using customized chilling coolers, we inject gas under extreme cold to guarantee stable micro-bubbles that preserve fizz.'
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      title: 'Refreshing Taste',
      desc: 'Balancing sour accents and crisp sugar cuts. MUSA acts as an instant palette purifier for local cuisines.'
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-400" />,
      title: 'Reliable Supply',
      desc: 'With automated glass bottling lanes based in Bannu Industrial Estate, we support steady merchant distribution timelines.'
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: 'Proudly Local',
      desc: '100% formulated and bottled by local staff in Bannu, KPK, strengthening our provincial industrial economy.'
    }
  ];

  const timelineSteps = [
    {
      year: '2020',
      title: 'Laying the Foundations',
      location: 'Bannu Industrial Estate',
      desc: 'Musa Khan and experienced local beverages veterans outline plans for a pure carbonated beverage to counter heavily chemical foreign products. The initial reverse osmosis lanes are installed.'
    },
    {
      year: '2022',
      title: 'Mint & Lemon Unveiling',
      location: 'Local Launches',
      desc: 'Launch of Mint Sparkling and Lemon Zest. The legendary 300ml glass "sting bottle" design takes local markets by storm due to its superior crispness and affordable local pricing.'
    },
    {
      year: '2024',
      title: 'Widespread KPK Distribution',
      location: 'Provincial Expansion',
      desc: 'MUSA expands beyond Bannu to Peshawar, Kohat, and Dera Ismail Khan, building reliable supply hubs and training over 50 regional distribution managers.'
    },
    {
      year: '2026',
      title: 'Exotic Recipes: Berry & Imli',
      location: 'National Sophistication',
      desc: 'Introduction of Blueberry Splash and the heritage-infused Imli Royal. Upgrading factory bottling efficiency to meet cross-provincial inquiries and setting sights nationwide.'
    }
  ];

  return (
    <div id="about-view" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* About Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">
              OUR MISSION & VALUES
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight">
              Championing Pakistan\'s Finest Sparkling Standard
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              For too long, the soft drink sector has been overrun by generic formulas loaded with high-fructose syrups and synthetic preservatives. In 2020, MUSA set out in Bannu, KPK with a simple mission: to execute a world-class carbonated standard using premium spring purification techniques and real botanical extracts.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              By controlling our bottling process directly from our specialized facility in the Bannu Industrial Area, we maintain strict control over our mineral balances and carbon charge strength. The outcome is a pristine fizzy experience that wakes up the senses and serves as the ultimate local premium drink.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-[#0a1424] to-[#040810] border border-gray-800 p-8 shadow-2xl flex flex-col justify-center items-center text-center space-y-6">
              <div className="p-4 bg-cyan-950/50 rounded-full border border-cyan-800">
                <Target className="h-8 w-8 text-[#2dd4ff]" />
              </div>
              <p className="text-xl font-bold text-white">"Quality Refreshment for All"</p>
              <p className="text-xs text-gray-500 font-mono leading-relaxed max-w-xs">
                Empowering regional supply chains, delivering zero-compromise carbonation stability, and celebrating our heritage with modern global processes.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Quality Pillars */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#46f08a] font-mono">
              THE VALUE PILLARS
            </h2>
            <p className="text-3xl font-extrabold text-white font-sans">
              Why Beverage Experts Choose MUSA
            </p>
            <p className="text-gray-400 text-sm">
              We stand against corner-cutting. Every drop contains our pledge to absolute transparency and production excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className="bg-[#070e17] border border-gray-900 rounded-2xl p-6 flex flex-col space-y-4 shadow-lg text-left hover:border-gray-800 transition duration-300"
              >
                <div className="p-3 bg-gray-950 rounded-xl border border-gray-800 self-start">
                  {pil.icon}
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {pil.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono">
              JOURNEY OVERVIEW
            </h2>
            <p className="text-3xl font-extrabold text-white font-sans">
              Our Professional Timeline
            </p>
            <p className="text-gray-400 text-sm">
              From a single pilot filtration tank in Bannu to one of KPK\'s fastest ascending beverage legends.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line for large screen */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 pointer-events-none hidden md:block" />

            <div className="space-y-12 relative">
              {timelineSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col md:flex-row items-center cursor-default ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Width Spacer */}
                    <div className="w-full md:w-1/2 px-0 md:px-8 text-left">
                      <div className="bg-[#070e17] border border-gray-900 hover:border-gray-800 rounded-2xl p-6 shadow-md space-y-3 transition">
                        <span className="inline-block bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black text-xs font-extrabold font-mono rounded px-2.5 py-0.5">
                          {step.year}
                        </span>
                        
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-white">{step.title}</h4>
                          <p className="text-[10px] text-gray-500 font-mono uppercase">{step.location}</p>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed font-sans">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Center Bullet Pin */}
                    <div className="relative flex items-center justify-center my-4 md:my-0">
                      <span className="w-8 h-8 rounded-full bg-gray-950 border-2 border-[#2dd4ff] flex items-center justify-center text-xs font-mono font-bold text-[#46f08a] z-10">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Width Spacer Side 2 */}
                    <div className="w-full md:w-1/2 px-8 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-gradient-to-r from-[#03070d] via-cyan-950/15 to-[#03070d] border border-gray-900 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <p className="text-lg text-gray-300 font-light max-w-xl mx-auto">
            We are dedicated to building a sustainable and proud beverage brand that represents the potential of KPK on the global map.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black font-semibold text-xs uppercase tracking-widest px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-0.5 transition cursor-pointer"
            >
              Our Flavor Profiles
            </button>
            <button
              onClick={() => onNavigate('distributor')}
              className="border border-gray-800 hover:border-white rounded-lg px-8 py-3 text-xs font-semibold text-gray-300 hover:text-white transition cursor-pointer bg-gray-950"
            >
              Become Distributor
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

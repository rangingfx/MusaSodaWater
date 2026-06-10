import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Flame, FlameKindling, Globe, Calendar, Clock, ArrowRightCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BLOG_POSTS } from '../data/blog';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sparkle / Bubble Rising Animation behind Hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = 650);

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = 650;
    };
    window.addEventListener('resize', handleResize);

    // Create bubbles
    interface Bubble {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      opacity: number;
      drift: number;
    }

    const bubbles: Bubble[] = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height + height,
      radius: Math.random() * 3 + 1,
      speedY: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      drift: Math.sin(Math.random() * Math.PI) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(45, 212, 255, 0.12)';

      bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 255, ${bubble.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(45, 212, 255, 0.4)';
        ctx.fill();

        // Update positions
        bubble.y -= bubble.speedY;
        bubble.x += bubble.drift;

        // Reset bubble to bottom
        if (bubble.y < -20) {
          bubble.y = height + 20;
          bubble.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="home-view" className="bg-[#050a12] text-white overflow-hidden pb-1">
      {/* 1) Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-[#03060c] via-[#050a12] to-[#071120] border-b border-gray-900">
        {/* Background bubble canvas */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none h-[650px] z-0">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Text & CTAs */}
            <div className="lg:col-span-7 text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#46f08a]/10 border border-[#46f08a]/20 rounded-full px-4 py-1.5 shadow-md">
                <Sparkles className="h-4 w-4 text-[#2dd4ff]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#46f08a] font-mono">
                  Pride of Bannu • Since 2020
                </span>
              </div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl sm:text-8xl xl:text-[105px] leading-[0.85] font-black italic uppercase tracking-tighter"
                >
                  Pure<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4ff] to-[#46f08a]">
                    Sparkling
                  </span>
                </motion.h1>

                <p className="text-white/60 text-lg sm:text-xl font-sans font-light max-w-2xl leading-relaxed">
                  Experience the premium refreshing taste of Bannu’s finest soda water. Hand-crafted using pure mountain reserves for crisp, cold, and consistently high carbonation.
                </p>
              </div>

              {/* Tagline list */}
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs tracking-[0.2em] font-black uppercase text-white/50">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#2dd4ff] rounded-full mr-2" /> PURE
                </span>
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#46f08a] rounded-full mr-2" /> SPARKLING
                </span>
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" /> REFRESHING
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="hero-explore-flavors"
                  onClick={() => onNavigate('products')}
                  className="px-8 py-4 bg-white text-black font-extrabold uppercase tracking-widest text-xs rounded-full hover:bg-[#2dd4ff] hover:text-black hover:shadow-lg hover:shadow-[#2dd4ff]/20 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-display"
                >
                  Explore Flavors
                </button>
                <button
                  id="hero-distributor"
                  onClick={() => onNavigate('distributor')}
                  className="px-8 py-4 border border-white/20 text-white font-extrabold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all cursor-pointer font-display"
                >
                  Wholesale Inquiry
                </button>
              </div>
            </div>

            {/* Right side: Bottle Lineup Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center h-[520px] overflow-hidden select-none">
              {/* Massive background watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] sm:text-[230px] font-black italic uppercase text-white/[0.03] select-none leading-none z-0 tracking-tighter">
                MUSA
              </div>

              {/* Physical Glass Bottle / Abstract Layout */}
              <div 
                id="interactive-editorial-bottle"
                className="relative w-52 h-[410px] rounded-[50px] bg-gradient-to-b from-white/15 to-transparent border border-white/20 flex flex-col items-center justify-between p-8 backdrop-blur-xl shadow-2xl z-10 hover:border-white/40 transition-all duration-500 hover:scale-105 group cursor-pointer"
                onClick={() => onNavigate('products')}
              >
                {/* Glowing fluid aura */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-gradient-to-r from-[#2dd4ff]/20 to-[#46f08a]/20 blur-3xl group-hover:from-[#2dd4ff]/40 group-hover:to-[#46f08a]/40 transition-all duration-700 pointer-events-none"></div>

                <div className="w-full flex justify-between items-center text-white/30 text-[9px] font-mono tracking-widest uppercase">
                  <span>300ml</span>
                  <span>Premium</span>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow py-4 w-full">
                  <span className="text-6xl font-black italic uppercase text-white/15 tracking-tighter transform -rotate-90 origin-center my-6 block group-hover:text-white/25 transition-colors duration-500">
                    MUSA
                  </span>
                  
                  {/* Dynamic rising line spark */}
                  <div className="w-0.5 h-24 bg-gradient-to-b from-[#46f08a] via-[#2dd4ff]/60 to-transparent group-hover:h-28 transition-all duration-500"></div>
                </div>

                {/* Bubble physical simulation particles */}
                <div className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-white/40 blur-[0.5px] animate-bounce"></div>
                <div className="absolute bottom-28 right-14 w-1 h-1 rounded-full bg-white/60 blur-[0.5px] animate-ping"></div>
                <div className="absolute bottom-12 right-10 w-3 h-3 rounded-full bg-white/20 blur-[0.5px]"></div>
                <div className="absolute top-24 left-10 w-1.5 h-1.5 rounded-full bg-white/30 blur-[0.5px]"></div>

                <div className="w-full text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#46f08a] group-hover:text-[#2dd4ff] transition-colors duration-300">
                    Open Catalog
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Trust / Proof Strip */}
      <section id="trust-strip" className="bg-[#03060a] border-y border-gray-900 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-[#2dd4ff]" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-mono">ESTABLISHED</p>
                <p className="text-sm font-extrabold text-white">Since 2020</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-5 w-5 text-[#46f08a]" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-mono">MANUFACTURED</p>
                <p className="text-sm font-extrabold text-white">Pride of Bannu</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-5 w-5 text-[#2dd4ff]" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-mono">QUALITY CHECKED</p>
                <p className="text-sm font-extrabold text-white">Focused Excellence</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-[#46f08a]" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-mono">FIZZ POWER</p>
                <p className="text-sm font-extrabold text-white">Refreshing Bite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Flavors Preview (Editorial High-Contrast Strip Section) */}
      <section id="flavors-preview" className="bg-white text-black py-16 px-4 md:px-12 flex flex-col md:flex-row items-stretch gap-8 border-y border-black/10">
        <div className="w-full md:w-1/4 pr-0 md:pr-8 md:border-r border-black/15 flex flex-col justify-center text-left">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mb-1">Curated Blends</span>
          <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-3">Flavor Gallery</h3>
          <p className="text-sm text-black/60 leading-relaxed italic pr-2 font-sans font-light">
            Hand-crafted, cold-carbonated recipes manufactured with pure regional mineral sources in Bannu, KPK.
          </p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-0 md:px-6">
          {/* Flavor Card: Mint */}
          <div 
            onClick={() => onNavigate('products?id=mint')}
            className="group cursor-pointer text-left flex flex-col justify-between py-2"
          >
            <div>
              <div className="h-1 w-full bg-[#46F08A] mb-4 group-hover:h-3 transition-all duration-300"></div>
              <h4 className="text-xl font-black uppercase italic tracking-tight group-hover:text-[#46F08A] transition-colors">Mint</h4>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/40 mt-1">Cooling & Herbal</p>
            </div>
            <span className="text-xxs font-mono text-black/30 mt-6 block group-hover:text-black/60 transition-colors uppercase tracking-widest">Explore Flavor →</span>
          </div>

          {/* Flavor Card: Lemon */}
          <div 
            onClick={() => onNavigate('products?id=lemon')}
            className="group cursor-pointer text-left flex flex-col justify-between py-2"
          >
            <div>
              <div className="h-1 w-full bg-[#F6E05E] mb-4 group-hover:h-3 transition-all duration-300"></div>
              <h4 className="text-xl font-black uppercase italic tracking-tight group-hover:text-yellow-600 transition-colors">Lemon</h4>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/40 mt-1">Zesty & Sharp</p>
            </div>
            <span className="text-xxs font-mono text-black/30 mt-6 block group-hover:text-black/60 transition-colors uppercase tracking-widest">Explore Flavor →</span>
          </div>

          {/* Flavor Card: Blueberry */}
          <div 
            onClick={() => onNavigate('products?id=blueberry')}
            className="group cursor-pointer text-left flex flex-col justify-between py-2"
          >
            <div>
              <div className="h-1 w-full bg-[#2DD4FF] mb-4 group-hover:h-3 transition-all duration-300"></div>
              <h4 className="text-xl font-black uppercase italic tracking-tight group-hover:text-[#2DD4FF] transition-colors">Blueberry</h4>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/40 mt-1">Bold & Tart</p>
            </div>
            <span className="text-xxs font-mono text-black/30 mt-6 block group-hover:text-black/60 transition-colors uppercase tracking-widest">Explore Flavor →</span>
          </div>

          {/* Flavor Card: Imli */}
          <div 
            onClick={() => onNavigate('products?id=imli')}
            className="group cursor-pointer text-left flex flex-col justify-between py-2"
          >
            <div>
              <div className="h-1 w-full bg-[#8D6E63] mb-4 group-hover:h-3 transition-all duration-300"></div>
              <h4 className="text-xl font-black uppercase italic tracking-tight group-hover:text-[#8D6E63] transition-colors">Imli Royal</h4>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/40 mt-1">Earthy & Exotic</p>
            </div>
            <span className="text-xxs font-mono text-black/30 mt-6 block group-hover:text-black/60 transition-colors uppercase tracking-widest">Explore Flavor →</span>
          </div>
        </div>
      </section>

      {/* 4) Brand Story Block */}
      <section id="brand-story" className="py-24 bg-[#03060a] border-t border-gray-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(70,240,138,0.03),transparent_35%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual placeholder of the Bannu pride */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative aspect-video lg:aspect-[4/5] rounded-2xl bg-gradient-to-br from-gray-950 to-[#070e15] border border-gray-800 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#46f08a]/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#46f08a] uppercase block">
                    BANNU, KPK ORIGIN
                  </span>
                  <p className="text-xl font-bold text-white tracking-tight">
                    Pure Water. Proud Heritage. Consistent Sparkle.
                  </p>
                </div>

                <div className="py-6 font-serif italic text-gray-500 text-sm leading-relaxed">
                  "Every bottle of MUSA tells the story of our hometown. In 2020, we committed to manufacturing soda water with global machinery standards, yet proudly keeping our roots centered in Bannu's industrial core."
                </div>

                <div className="border-t border-gray-900 pt-4 flex items-center justify-between">
                  <div className="text-left text-xs">
                    <p className="font-extrabold text-white">Musa Khan & Team</p>
                    <p className="text-gray-500">Founders of MUSA</p>
                  </div>
                  <span className="text-2xl font-black font-sans text-gray-700">2020</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#46f08a] font-mono">
                THE HISTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Water Crafted with Regional Pride
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                MUSA Soda Water is proudly manufactured in Bannu, Pakistan. Established in 2020, we set out to create a world-class carbonated beverage that respects local traditions while offering unmatched premium quality.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We draw from pristine local mountain reserves, utilizing advanced reverse osmosis filtration to neutralize dissolved solids. Our unique high-pressure carbonation technology locks tight gas structures, generating that long-lasting, energetic sting MUSA is celebrated for.
              </p>

              <div className="border-t border-gray-900 pt-6">
                <button
                  id="brand-story-learn-more"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-[#2dd4ff] hover:text-[#46f08a] cursor-pointer transition-colors"
                >
                  <span>Learn more about our manufacturing and timeline</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Distributor Call-Too-Action Banner */}
      <section id="distributor-cta-strip" className="py-16 bg-gradient-to-r from-[#03070d] via-[#071324] to-[#040a12] border-y border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#2dd4ff]/20 to-[#46f08a]/20 border border-cyan-500/30 rounded-full px-4 py-1">
            <span className="text-[10px] uppercase font-mono font-bold text-[#2dd4ff]">Global Supply Chain Link</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Grow with MUSA Soda Water
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Distributor slots and wholesale territories are now open in multiple sectors across Pakistan. Partner with a brand capturing the real fizz market.
            </p>
          </div>

          <div>
            <button
              id="distributor-btn-landing"
              onClick={() => onNavigate('distributor')}
              className="bg-white hover:bg-gradient-to-r hover:from-[#2dd4ff] hover:to-[#46f08a] text-black font-extrabold tracking-wider rounded-full px-10 py-4 text-sm transition-all shadow-lg hover:shadow-cyan-400/10 cursor-pointer"
            >
              Apply as Distributor Partner
            </button>
          </div>
        </div>
      </section>

      {/* 6) Latest Blog Posts Preview */}
      <section id="blog-preview" className="py-24 bg-gradient-to-b from-[#050a12] to-[#03060b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
            <div className="text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono">
                THE JOURNAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Sparkling Knowledge
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Discover serving guidelines, home cocktail chemistry, and company announcements.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-xs font-bold uppercase tracking-wider text-white border-b-2 border-[#46f08a] pb-1 hover:text-[#2dd4ff] hover:border-[#2dd4ff] transition-colors whitespace-nowrap cursor-pointer"
            >
              Browse All Articles
            </button>
          </div>

          {/* Post cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                id={`blog-card-${post.slug}`}
                className="bg-[#070d17]/80 border border-gray-800/80 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:border-gray-700 transition"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full transition duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-gray-950/85 backdrop-blur-sm border border-gray-800 text-xxs font-mono font-bold text-white rounded px-2.5 py-1 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 text-left">
                    <div className="flex items-center space-x-4 text-[10px] text-gray-500 font-mono">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white hover:text-[#2dd4ff] transition-colors line-clamp-2">
                      <button onClick={() => onNavigate(`blog?slug=${post.slug}`)} className="text-left focus:outline-none cursor-pointer">
                        {post.title}
                      </button>
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-900/40 text-left">
                  <button
                    onClick={() => onNavigate(`blog?slug=${post.slug}`)}
                    className="text-xs font-semibold text-[#2dd4ff] hover:text-[#46f08a] transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

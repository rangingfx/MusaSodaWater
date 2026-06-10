import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ArrowRight, ShoppingCart, MessageSquare, Flame, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductsProps {
  onNavigate: (path: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [selectedFlavorId, setSelectedFlavorId] = useState<string>('mint');
  const [expandedNutritionId, setExpandedNutritionId] = useState<string | null>(null);

  // Parse direct hash links (e.g. products?id=lemon)
  useEffect(() => {
    const handleUrlQuery = () => {
      const hash = window.location.hash;
      const idMatch = hash.match(/[?&]id=([^&]+)/);
      if (idMatch && idMatch[1]) {
        const flavorId = idMatch[1];
        if (PRODUCTS.some(p => p.id === flavorId)) {
          setSelectedFlavorId(flavorId);
          // Scroll to tab section
          const el = document.getElementById('catalogue-viewport');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleUrlQuery();
    // Watch hashchange
    window.addEventListener('hashchange', handleUrlQuery);
    return () => window.removeEventListener('hashchange', handleUrlQuery);
  }, []);

  const activeProduct = PRODUCTS.find((p) => p.id === selectedFlavorId) || PRODUCTS[0];

  const handleWholesaleInquiry = (productName: string) => {
    // Navigate to distributor or contact with predefined pre-filled string
    onNavigate(`distributor?subject=Wholesale Inquiry: ${productName}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleNutrition = (id: string) => {
    setExpandedNutritionId(expandedNutritionId === id ? null : id);
  };

  return (
    <div id="products-view" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 select-text">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2dd4ff] font-mono bg-cyan-950/40 border border-cyan-800/30 px-3.5 py-1.5 rounded-full">
            THE CATALOGUE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-display uppercase italic tracking-tighter text-white">
            Pure Craft Sparkle
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-light">
            Our selection honors provincial roots and modern machinery standards. Crafted using pristine water reserves and high-impact micro-bubbles for an unprecedented crisp fizz.
          </p>
        </div>

        {/* Tab Controls for Flavors */}
        <div id="flavor-tabs" className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === selectedFlavorId;
            return (
              <button
                key={prod.id}
                id={`tab-button-${prod.id}`}
                onClick={() => setSelectedFlavorId(prod.id)}
                className={`px-6 py-3 rounded-none font-bold text-xs uppercase tracking-[0.22em] border-b transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#2dd4ff] text-white font-black'
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                {prod.id}
              </button>
            );
          })}
        </div>

        {/* Highlight Viewport */}
        <div id="catalogue-viewport" className="relative p-1">
          {PRODUCTS.map((prod) => {
            const isVisible = prod.id === selectedFlavorId;
            if (!isVisible) return null;

            return (
              <div
                key={prod.id}
                id={`product-panel-${prod.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[#070e17] border border-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Background ambient gradient */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${prod.bannerGradient} opacity-20 rounded-full blur-3xl pointer-events-none`} />

                {/* Left Side: Dynamic Bottle Presentation / Color block */}
                <div className="lg:col-span-5 flex justify-center relative py-6">
                  {/* Outer circle glow */}
                  <div
                    className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: prod.accentColor }}
                  />

                  {/* Bottle visual representing the beverage color */}
                  <div className="relative z-10 w-44 aspect-[3/8] bg-gray-950/90 border-4 border-gray-800 rounded-3xl overflow-hidden flex flex-col justify-between p-4 shadow-2xl">
                    <div className="absolute top-0 inset-x-0 h-4 bg-gray-800 opacity-60" />
                    
                    {/* Liquid fill matching the flavor */}
                    <div
                      className="absolute bottom-0 inset-x-0 top-1/4 rounded-b-2xl opacity-60 flex flex-col justify-start items-center"
                      style={{
                        background: `linear-gradient(to top, ${prod.accentColor}, ${prod.accentColor}dd, transparent)`
                      }}
                    >
                      {/* Interactive CSS bubble stream inside bottle */}
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 absolute bottom-12 left-1/4 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-white/30 absolute bottom-24 left-1/2 animate-ping" />
                      <span className="w-1 h-1 rounded-full bg-white/50 absolute bottom-36 right-1/4 animate-pulse" />
                    </div>

                    <div className="relative z-10 text-center space-y-1">
                      <span className="text-[7.5px] uppercase font-bold text-slate-400 font-mono tracking-widest">
                        Bannu Reserve
                      </span>
                      <h3 className="text-sm font-extrabold text-white uppercase font-sans tracking-wide">
                        MUSA
                      </h3>
                    </div>

                    {/* Flavor sticker */}
                    <div className="relative z-10 bg-black/80 backdrop-blur-xs border border-gray-800 rounded py-2 text-center text-xxs font-mono text-[#2dd4ff] uppercase tracking-widest font-extrabold shadow-md">
                      {prod.id}
                    </div>

                    <div className="relative z-10 text-center leading-none">
                      <span className="text-[11px] font-bold text-white tracking-widest">
                        300 ML
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Specific Details */}
                <div className="lg:col-span-7 space-y-8 text-left">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xxs font-bold border font-mono tracking-widest uppercase ${prod.badgeColor}`}>
                        {prod.id} flavor
                      </span>
                      <span className="text-gray-500 text-xs font-mono">Premium Carbonated Drink</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
                      {prod.name}
                    </h2>

                    <p className="text-[#46f08a] text-sm font-semibold tracking-wider font-mono uppercase">
                      {prod.tagline}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {prod.longDescription}
                    </p>
                  </div>

                  {/* Flavor Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-900">
                    <div className="space-y-1">
                      <span className="text-[11px] text-gray-500 font-mono uppercase font-bold tracking-widest">Packaging Spec</span>
                      <p className="text-sm font-semibold text-white">{prod.size}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] text-gray-500 font-mono uppercase font-bold tracking-widest">Serving Directive</span>
                      <p className="text-sm font-semibold text-white">{prod.bestServed}</p>
                    </div>
                  </div>

                  {/* Taste Notes List */}
                  <div className="space-y-2">
                    <span className="text-[11px] text-gray-500 font-mono uppercase font-bold tracking-widest block">Taste Profile & Highlights</span>
                    <div className="flex flex-wrap gap-2">
                      {prod.tasteNotes.map((note, idx) => (
                        <span key={idx} className="flex items-center space-x-1.5 bg-gray-950 border border-gray-800 rounded-lg px-3 py-1.5 text-xs text-gray-300">
                          <CheckCircle className="h-3.5 w-3.5 text-[#2dd4ff]" />
                          <span>{note}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Nutritional Panel */}
                  <div className="bg-gray-950 border border-gray-900 rounded-xl overflow-hidden transition-all duration-300">
                    <button
                      id={`nutrition-toggle-${prod.id}`}
                      onClick={() => toggleNutrition(prod.id)}
                      className="w-full flex items-center justify-between p-4 focus:outline-none cursor-pointer hover:bg-gray-900/40"
                    >
                      <span className="text-xs font-bold font-mono tracking-widest text-[#46f08a] uppercase">
                        Nutritional Facts & Ingredients
                      </span>
                      {expandedNutritionId === prod.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    {expandedNutritionId === prod.id && (
                      <div className="p-4 border-t border-gray-900 space-y-4 text-xs">
                        {/* Nutrition Grid */}
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div className="bg-gray-900 p-2.5 rounded-lg border border-gray-800/60">
                            <p className="text-gray-500 text-[10px] uppercase font-mono mb-1">Calories</p>
                            <p className="text-sm font-bold text-white font-mono">{prod.nutrition.calories}</p>
                          </div>
                          <div className="bg-gray-900 p-2.5 rounded-lg border border-gray-800/60">
                            <p className="text-gray-500 text-[10px] uppercase font-mono mb-1">Carbs</p>
                            <p className="text-sm font-bold text-white font-mono">{prod.nutrition.carbs}</p>
                          </div>
                          <div className="bg-gray-900 p-2.5 rounded-lg border border-gray-800/60">
                            <p className="text-gray-500 text-[10px] uppercase font-mono mb-1">Sugars</p>
                            <p className="text-sm font-bold text-white font-mono">{prod.nutrition.sugars}</p>
                          </div>
                          <div className="bg-gray-900 p-2.5 rounded-lg border border-gray-800/60">
                            <p className="text-gray-500 text-[10px] uppercase font-mono mb-1">Sodium</p>
                            <p className="text-sm font-bold text-white font-mono">{prod.nutrition.sodium}</p>
                          </div>
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-1">
                          <p className="text-[10px] text-gray-500 font-mono uppercase font-bold tracking-widest">Ingredients:</p>
                          <p className="text-gray-400 font-sans leading-relaxed">
                            {prod.ingredients.join(', ')}.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button
                      id={`btn-inquire-${prod.id}`}
                      onClick={() => handleWholesaleInquiry(prod.name)}
                      className="w-full sm:w-auto bg-white hover:bg-gradient-to-r hover:from-[#2dd4ff] hover:to-[#46f08a] text-black font-extrabold tracking-wider rounded-lg px-8 py-3.5 text-xs transition-all flex items-center justify-center cursor-pointer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Order / Wholesale Inquiry
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full sm:w-auto border border-gray-800 hover:border-gray-600 rounded-lg px-8 py-3.5 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      Find Local Retailer
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

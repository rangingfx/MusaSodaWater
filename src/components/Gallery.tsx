import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { SquareEqual, ChevronLeft, ChevronRight, Eye, X, Compass, Navigation } from 'lucide-react';

interface GalleryProps {
  language?: 'en' | 'ur';
}

export const Gallery: React.FC<GalleryProps> = ({ language = 'en' }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'factory' | 'events'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Mint Botanical Fizz',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
      description: 'Micro-bubbles surrounding fresh peppermint sprigs during a laboratory recipe test.'
    },
    {
      id: 'g2',
      title: 'High-Speed Glass Bottling Lane',
      category: 'factory',
      imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=600&auto=format&fit=crop',
      description: 'Automated pressure sanitizing and labeling arrays inside our Bannu Industrial Area plant.'
    },
    {
      id: 'g3',
      title: 'KPK Street Food Expo',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop',
      description: 'MUSA Lemon Zest featured as the official palate-cleanser at the Peshawar Food Festival.'
    },
    {
      id: 'g4',
      title: 'Amber Tamarind Splash',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1543157148-f68f214d33a9?q=80&w=600&auto=format&fit=crop',
      description: 'The golden reddish-brown shimmer of Imli Royal, captured during studio photography.'
    },
    {
      id: 'g5',
      title: 'Pure Reverse Osmosis Terminal',
      category: 'factory',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      description: 'Our proprietary multi-membrane filtration system, removing 99.9% of dissolved impurities.'
    },
    {
      id: 'g6',
      title: 'MUSA Distributor Summit',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
      description: 'Welcoming 80+ wholesale partners from North and South KPK to coordinate expansion plans.'
    },
    {
      id: 'g7',
      title: 'Blueberry Micro-Carbonation Test',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
      description: 'Close-up of deep purple berry carbonation under slow-motion studio lighting.'
    },
    {
      id: 'g8',
      title: 'Semi-Automated Quality Inspection',
      category: 'factory',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
      description: 'Every single bottle of MUSA undergoes strict back-lit visibility checks to verify purity.'
    },
    {
      id: 'g9',
      title: 'Bannu Youth Gala Sponsorship',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
      description: 'Supplying fresh fizzes to local sports athletes and attendees during the summer games.'
    }
  ];

  const getLocalizedTitle = (id: string, def: string) => {
    if (language === 'ur') {
      if (id === 'g1') return 'پودینہ بوٹینیکل فیذ';
      if (id === 'g2') return 'ہائی سپیڈ بوٹلنگ اسمبلی لائن';
      if (id === 'g3') return 'خیبر پختونخوا فوڈ ایکسپو';
      if (id === 'g4') return 'املی شاہی اسپلش';
      if (id === 'g5') return 'ریورس اسموسس ٹرمینل';
      if (id === 'g6') return 'موسیٰ ڈسٹریبیوٹرز اجلاس';
      if (id === 'g7') return 'بلیوبیری کاربونیشن ٹیسٹ';
      if (id === 'g8') return 'معیار کی کڑی نگرانی';
      if (id === 'g9') return 'بنوں یوتھ گالا اسپانسر شپ';
    }
    return def;
  };

  const getLocalizedDesc = (id: string, def: string) => {
    if (language === 'ur') {
      if (id === 'g1') return 'لیبارٹری ریسیپی ٹیسٹ کے دوران پودینہ کے تازہ پتوں کے ساتھ کاربونیشن کا امتزاج۔';
      if (id === 'g2') return 'بنوں انڈسٹریل سٹیٹ میں انتہائی جدید خودکار صفائی اور لیبلنگ اسمبلی لائن۔';
      if (id === 'g3') return 'پشاور فوڈ فیسٹیول میں موسیٰ لیموں زیسٹ کو سرکاری ڈرنک کے طور پر پیش کیا گیا۔';
      if (id === 'g4') return 'اسٹوڈیو فوٹوگرافی کے دوران املی رائل کی دلفریب چمکدار رنگت۔';
      if (id === 'g5') return 'پانی کی سو فیصد شفافیت اور صفائی یقینی بنانے کے لیے ہمارا فلٹریشن یونٹ۔';
      if (id === 'g6') return 'شمالی اور جنوبی خیبر پختونخوا سے ۸۰ سے زائد ہول سیل شراکت داروں کا کوآرڈینیشن اجلاس۔';
      if (id === 'g7') return 'اسٹوڈیو کی متحرک لائٹنگ کے نیچے گہرے جامنی رنگ کی بلیوبیری کی تیاری کے لمحات۔';
      if (id === 'g8') return 'موسیٰ سوڈاکی ہر بوتل کو سپلائی سے پہلے کڑے معیار کے مراحل سے گزارا جاتا ہے۔';
      if (id === 'g9') return 'بنوں میں ہونے والے یوتھ اسپورٹس میلے کے کھلاڑیوں اور تماشائیوں کو انرجی اور تازگی فراہم کرنا۔';
    }
    return def;
  };

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (itemIndex: number) => {
    const globalItem = filteredItems[itemIndex];
    if (globalItem) {
      const globalIdx = galleryItems.findIndex(i => i.id === globalItem.id);
      setLightboxIndex(globalIdx >= 0 ? globalIdx : null);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div id="gallery-view" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono bg-cyan-950/40 border border-cyan-800/30 px-3.5 py-1 rounded-full">
            {language === 'ur' ? 'تصویری گیلری' : 'THE GALLERY'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight leading-tight">
            {language === 'ur' ? 'بصری منظر نامہ' : 'Our Brand in Frame'}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'ہمارے جدید مینوفیکچرنگ پلانٹ، صحت بخش پراڈکٹس اور خیبر پختونخوا بھر میں ہونے والی تقریبات پر ایک تفصیلی بصری نظر۔ زوم کرنے کے لیے تصویر پر کلک کریں۔'
              : 'Take a visual tour through our pristine facility, premium products, and community events across Pakistan. Click any image to enlarge.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div id="gallery-filters" className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['all', 'products', 'factory', 'events'] as const).map((tab) => {
            const isActive = activeTab === tab;
            let tabLabel = tab;
            if (language === 'ur') {
              if (tab === 'all') tabLabel = 'تمام تصاویر' as any;
              if (tab === 'products') tabLabel = 'پراڈکٹس' as any;
              if (tab === 'factory') tabLabel = 'پلانٹ' as any;
              if (tab === 'events') tabLabel = 'تقریبات' as any;
            }
            return (
              <button
                key={tab}
                id={`filter-tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black border-transparent shadow shadow-cyan-500/10'
                    : 'bg-gray-950 border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {tabLabel}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            let catLabel = item.category;
            if (language === 'ur') {
              if (item.category === 'products') catLabel = 'پراڈکٹس';
              if (item.category === 'factory') catLabel = 'پلانٹ';
              if (item.category === 'events') catLabel = 'تقریبات';
            }
            return (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                className="group relative bg-[#070e17] border border-gray-900 overflow-hidden rounded-2xl aspect-square shadow-xl cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark gradient overlap mapping text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pt-20 p-6 flex flex-col justify-end text-left select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#46f08a] bg-[#46f08a]/10 px-2 py-0.5 rounded border border-[#46f08a]/20 self-start">
                      {catLabel}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {getLocalizedTitle(item.id, item.title)}
                    </h3>
                    <p className="text-xxs text-gray-400 font-sans leading-relaxed line-clamp-2">
                      {getLocalizedDesc(item.id, item.description)}
                    </p>
                  </div>
                </div>

                {/* Glass trigger helper icon */}
                <div className="absolute top-4 right-4 bg-gray-950/80 border border-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="h-4 w-4 text-[#2dd4ff]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-6 p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Content Container */}
            <div
              className="max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video max-h-[70vh] bg-[#070e17] rounded-2xl overflow-hidden border border-gray-800/60 shadow-2xl">
                <img
                  src={galleryItems[lightboxIndex].imageUrl}
                  alt={galleryItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Caption details below photo */}
              <div className="text-center space-y-1 max-w-xl">
                <span className="text-[10px] font-mono tracking-widest text-[#46f08a] uppercase font-bold">
                  {language === 'ur' && galleryItems[lightboxIndex].category === 'products' ? 'پراڈکٹس' :
                   language === 'ur' && galleryItems[lightboxIndex].category === 'factory' ? 'پلانٹ' :
                   language === 'ur' && galleryItems[lightboxIndex].category === 'events' ? 'تقریبات' :
                   galleryItems[lightboxIndex].category}
                </span>
                <h3 className="text-lg font-bold text-white font-sans">
                  {getLocalizedTitle(galleryItems[lightboxIndex].id, galleryItems[lightboxIndex].title)}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {getLocalizedDesc(galleryItems[lightboxIndex].id, galleryItems[lightboxIndex].description)}
                </p>
                <p className="text-[10px] text-gray-500 font-mono mt-2">
                  {language === 'ur' ? (
                    <span>تصویر {lightboxIndex + 1} کل {galleryItems.length} میں سے</span>
                  ) : (
                    <span>Image {lightboxIndex + 1} of {galleryItems.length}</span>
                  )}
                </p>
              </div>
            </div>

            {/* Navigation Right */}
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-6 p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

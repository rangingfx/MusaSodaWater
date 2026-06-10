import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Distributor } from './components/Distributor';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  // Synchronize hash paths for instant deep-linking and back-button safety
  useEffect(() => {
    const parseUrlHash = () => {
      const hash = window.location.hash || '#/';
      const cleaned = hash.replace(/^#\/?/, ''); // strip lead # and /
      
      // Separate base path from specific queries (id=... / slug=...)
      const [basePath, query] = cleaned.split('?');
      setCurrentPath(basePath || '');

      if (query) {
        const slugMatch = query.match(/slug=([^&]+)/);
        if (slugMatch && slugMatch[1]) {
          setCurrentSlug(slugMatch[1]);
        } else {
          setCurrentSlug(null);
        }
      } else {
        setCurrentSlug(null);
      }
    };

    parseUrlHash();
    window.addEventListener('hashchange', parseUrlHash);
    return () => window.removeEventListener('hashchange', parseUrlHash);
  }, []);

  const handleNavigate = (path: string) => {
    // Navigate with a hash prefix, e.g. "products?id=lemon" becomes "#/products?id=lemon"
    window.location.hash = `/${path}`;
  };

  // Render proper view depending on hash base path
  const renderView = () => {
    // Support prefix matching for nested paths or secondary detail screens
    if (currentPath === 'products') {
      return <Products onNavigate={handleNavigate} />;
    }
    if (currentPath === 'about') {
      return <About onNavigate={handleNavigate} />;
    }
    if (currentPath === 'gallery') {
      return <Gallery />;
    }
    if (currentPath === 'distributor') {
      return <Distributor />;
    }
    if (currentPath === 'blog') {
      return <Blog currentSlug={currentSlug} onNavigate={handleNavigate} />;
    }
    if (currentPath === 'contact') {
      return <Contact />;
    }
    // Default view is the brand lobby
    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div id="musa-soda-app" className="min-h-screen bg-[#050a12] text-white flex flex-col font-sans select-text select-none">
      {/* 1) Dynamic Interactive Glass Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* 2) Main Render Space with transition hooks */}
      <main id="main-content-window" className="flex-grow animate-fade-in">
        {renderView()}
      </main>

      {/* 3) Dynamic Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}


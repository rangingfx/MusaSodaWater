import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/blog';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight, Share2, Facebook, Twitter, Link } from 'lucide-react';

interface BlogProps {
  currentSlug: string | null;
  onNavigate: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ currentSlug, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  // Parse direct hash links for blog (e.g. blog?slug=some-slug)
  const [activeSlug, setActiveSlug] = useState<string | null>(currentSlug);

  useEffect(() => {
    const handleHashParam = () => {
      const hash = window.location.hash;
      const slugMatch = hash.match(/[?&]slug=([^&]+)/);
      if (slugMatch && slugMatch[1]) {
        setActiveSlug(slugMatch[1]);
      } else {
        setActiveSlug(null);
      }
    };
    handleHashParam();
    window.addEventListener('hashchange', handleHashParam);
    return () => window.removeEventListener('hashchange', handleHashParam);
  }, [currentSlug]);

  const categories = ['all', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const handlePostClick = (slug: string) => {
    onNavigate(`blog?slug=${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    onNavigate('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // 1) Render single detailed post
  if (activeSlug) {
    const post = BLOG_POSTS.find(p => p.slug === activeSlug);
    if (post) {
      return (
        <div id="blog-detail-viewport" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button
              onClick={handleBackToList}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-[#2dd4ff] mb-8 group cursor-pointer focus:outline-none"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Journal Catalog</span>
            </button>

            {/* Headline Meta Block */}
            <div className="space-y-4 text-left mb-8">
              <span className="inline-block bg-[#2dd4ff]/10 text-[#2dd4ff] border border-[#2dd4ff]/20 text-xxs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight leading-tight text-white">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-500 font-mono border-b border-gray-900 pb-6">
                <span className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4 text-gray-600" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4 text-gray-600" />
                  {post.readTime}
                </span>
                <span className="text-gray-700">|</span>
                <span className="text-gray-500">By MUSA Brewing Experts</span>
              </div>
            </div>

            {/* Main Feature Photo */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-900 mb-12 shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Core Article Body Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Social Shares Left widget */}
              <div className="md:col-span-1 flex md:flex-col items-center justify-start gap-4 py-2 border-b md:border-b-0 border-gray-900 pb-4 md:pb-0">
                <span className="text-[10px] font-mono uppercase text-gray-600 font-bold tracking-widest md:[writing-mode:vertical-lr]">
                  Share Art
                </span>
                <button
                  onClick={handleShareCopy}
                  className="p-2.5 bg-gray-950 border border-gray-900 hover:border-[#2dd4ff] text-gray-400 hover:text-[#2dd4ff] rounded-full transition cursor-pointer"
                  title="Copy link"
                >
                  <Link className="h-4 w-4" />
                </button>
                {copied && (
                  <span className="text-[9px] text-emerald-400 font-mono absolute md:relative -top-6 md:top-0 animate-pulse bg-gray-950 px-2 py-0.5 rounded border border-gray-900">
                    Copied!
                  </span>
                )}
              </div>

              {/* Text Body */}
              <div className="md:col-span-11 text-left space-y-6">
                <div
                  className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base font-sans"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Tags */}
                <div className="pt-8 border-t border-gray-900 flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center bg-gray-950 border border-gray-900 text-gray-400 text-xs px-3 py-1 rounded">
                      <Tag className="mr-1.5 h-3.5 w-3.5 opacity-50" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Content quick CTA */}
            <div className="mt-16 bg-gradient-to-r from-gray-950 via-[#070e17] to-gray-950 border border-gray-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <h4 className="text-base font-bold text-white">Thirsty for pure fizzes?</h4>
                <p className="text-xs text-gray-500">Explore the specs of Mint, Lemon, Blueberry & Imli.</p>
              </div>
              <button
                onClick={() => onNavigate('products')}
                className="bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black text-xs font-bold px-6 py-2.5 rounded-lg hover:shadow cursor-pointer"
              >
                Go to Flavors catalog
              </button>
            </div>

          </div>
        </div>
      );
    }
  }

  // 2) Render Blog Listings Grid
  return (
    <div id="blog-list-viewport" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono bg-cyan-950/40 border border-cyan-800/30 px-3.5 py-1 rounded-full">
            MUSA JOURNAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight">
            Vibrant Stories & Knowledge
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Read expert analyses on mixology mechanics, beverage physics, supply territories, and upcoming flavor innovation notes from Bannu.
          </p>
        </div>

        {/* Categorization tabs */}
        <div id="blog-category-tabs" className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`blog-tab-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black border-transparent shadow shadow-cyan-400/10'
                    : 'bg-gray-950 border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Journal grid list */}
        <div id="blog-listing-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            return (
              <article
                key={post.slug}
                id={`journal-row-${post.slug}`}
                className="bg-[#070d17] border border-gray-900 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gray-850 transition duration-300 shadow-md"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative aspect-video overflow-hidden border-b border-gray-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                      onClick={() => handlePostClick(post.slug)}
                    />
                    <span className="absolute top-3 left-3 bg-gray-950/90 text-xxs font-mono text-[#2dd4ff] font-bold px-2.5 py-1 uppercase rounded border border-gray-800">
                      {post.category}
                    </span>
                  </div>

                  {/* Desc/Text info */}
                  <div className="p-6 text-left space-y-3">
                    <div className="flex items-center gap-4 text-[10px] text-gray-500 font-mono">
                      <span className="flex items-center">
                        <Calendar className="mr-1.5 h-3.5 w-3.5 text-gray-600" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1.5 h-3.5 w-3.5 text-gray-600" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white hover:text-[#2dd4ff] transition leading-tight pointer-events-auto">
                      <button onClick={() => handlePostClick(post.slug)} className="text-left focus:outline-none cursor-pointer">
                        {post.title}
                      </button>
                    </h3>

                    <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Foot CTA and arrow */}
                <div className="px-6 pb-6 pt-3 border-t border-gray-950 flex items-center justify-between text-left">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[9px] text-gray-500 font-mono font-medium">#{tag}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePostClick(post.slug)}
                    className="text-xs font-semibold text-[#2dd4ff] hover:text-[#46f08a] transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Read Full</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
};

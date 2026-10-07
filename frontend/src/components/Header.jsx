import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl rotate-6 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-500/20">
              D
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">DORA</span> AI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollTo('hero')} className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">Home</button>
          <button onClick={() => scrollTo('features')} className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">Features</button>
          <button onClick={() => scrollTo('how')} className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">How It Works</button>
          <button onClick={() => scrollTo('preview')} className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">Preview</button>
          <button onClick={() => scrollTo('editor')} className="btn-gradient px-5 py-2.5 text-sm ml-2">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-xl p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden glass border-t border-white/5 animate-scale-in">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            <button onClick={() => scrollTo('hero')} className="text-left px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Home</button>
            <button onClick={() => scrollTo('features')} className="text-left px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Features</button>
            <button onClick={() => scrollTo('how')} className="text-left px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">How It Works</button>
            <button onClick={() => scrollTo('preview')} className="text-left px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Preview</button>
            <button onClick={() => scrollTo('editor')} className="btn-gradient px-5 py-3 text-center mt-2">Get Started</button>
          </div>
        </nav>
      )}
    </header>
  );
}

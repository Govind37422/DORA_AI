import React from 'react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden px-6">
      {/* Floating Orbs */}
      <div className="orb w-96 h-96 bg-indigo-600 top-[-10%] left-[-10%]" style={{ animationDelay: '0s' }}></div>
      <div className="orb w-80 h-80 bg-purple-600 top-[20%] right-[-5%]" style={{ animationDelay: '2s' }}></div>
      <div className="orb w-64 h-64 bg-pink-500 bottom-[10%] left-[20%]" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-sm text-zinc-400 font-medium">Powered by GPT-4o via OpenRouter</span>
        </div>

        <h1 className="hero-title animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tight">
          Describe a website.<br />
          <span className="gradient-text">DORA AI builds it.</span>
        </h1>

        <p className="animate-fade-in-up text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Type what you want in plain English. DORA AI generates a complete, responsive, production-ready website in seconds. Free to start.
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.4s' }}>
          <button onClick={() => scrollTo('editor')} className="btn-gradient px-8 py-4 text-lg">
            🚀 Generate Website
          </button>
          <button onClick={() => scrollTo('how')} className="btn-outline px-8 py-4 text-lg">
            See How It Works →
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-xl p-4 glass-hover cursor-default">
            <div className="text-3xl font-bold gradient-text">10K+</div>
            <div className="text-sm text-zinc-500 mt-1">Websites Built</div>
          </div>
          <div className="glass rounded-xl p-4 glass-hover cursor-default">
            <div className="text-3xl font-bold gradient-text">5s</div>
            <div className="text-sm text-zinc-500 mt-1">Avg. Time</div>
          </div>
          <div className="glass rounded-xl p-4 glass-hover cursor-default">
            <div className="text-3xl font-bold gradient-text">Free</div>
            <div className="text-sm text-zinc-500 mt-1">To Start</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
    </section>
  );
}

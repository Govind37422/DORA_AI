import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Editor from './components/Editor';

export default function App() {
  const [generatedHtml, setGeneratedHtml] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (html, css, js) => {
    setLoading(true);
    setError(null);
    setGeneratedHtml(null);

    const safeHtml = html || '<p>No content generated.</p>';
    const safeCss = css || 'body { font-family: sans-serif; padding: 2rem; text-align: center; }';
    const safeJs = js || null;

    if (!html || html === 'undefined' || html === '') {
      setError('No website content was generated. Try a different description.');
      setLoading(false);
      return;
    }

    try {
      const fullHtml = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>${safeCss}</style></head>
        <body>${safeHtml}${safeJs ? `<script>${safeJs}</script>` : ''}</body>
        </html>
      `;
      setGeneratedHtml(fullHtml);
    } catch (err) {
      setError("Failed to render website");
    } finally {
      setLoading(false);
    }
  };

  const handleError = (msg) => {
    setError(msg);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px]"></div>
      </div>

      <Header />
      
      <main className="relative z-10">
        {/* HERO */}
        <Hero />

        {/* FEATURES */}
        <section id="features" className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight">
                Everything You <span className="gradient-text">Need</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">Built for speed, designed for everyone.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '⚡', title: 'Instant Generation', desc: 'Describe your vision in plain English and get a fully functional website in seconds.' },
                { icon: '🎨', title: 'Modern Design', desc: 'Every site comes with glassmorphism, gradients, animations — production-ready out of the box.' },
                { icon: '📱', title: 'Fully Responsive', desc: 'Mobile, tablet, desktop — your site looks perfect on every screen size automatically.' },
                { icon: '🔧', title: 'Easy Customization', desc: 'Edit, tweak, and customize the generated code. Export as HTML and deploy anywhere.' },
                { icon: '🛡️', title: 'Secure & Reliable', desc: 'Your code stays yours. No vendor lock-in. Download and host anywhere you choose.' },
                { icon: '🤖', title: 'Powered by AI', desc: 'Runs on GPT-4o via OpenRouter. Smart enough to handle any prompt, any domain.' }
              ].map((feat, i) => (
                <div key={i} className="card-premium p-8 glass-hover cursor-default">
                  <div className="text-3xl mb-4">{feat.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="separator max-w-6xl mx-auto"></div>

        {/* HOW IT WORKS */}
        <section id="how" className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight">
                Three Steps to <span className="gradient-text">Launch</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">From idea to live website in minutes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Describe', desc: 'Type what you want — "a landing page for my bakery" or "a portfolio for a photographer."' },
                { step: '02', title: 'Generate', desc: 'DORA AI processes your prompt and builds a complete HTML website with code and styling.' },
                { step: '03', title: 'Deploy', desc: 'Preview, customize, download as HTML, and host it anywhere — Vercel, Netlify, or your own server.' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    {i < 2 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="separator max-w-6xl mx-auto"></div>

        {/* PRICING */}
        <section id="pricing" className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Pricing</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">Start free. Scale when you need it.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Starter', price: 'Free', period: '/mo', popular: false, features: ['5 websites/month', 'Basic templates', 'Community support', '1GB storage'] },
                { name: 'Pro', price: '$9', period: '/mo', popular: true, features: ['Unlimited websites', 'Premium templates', 'Priority support', 'Custom domains', '10GB storage'] },
                { name: 'Enterprise', price: 'Custom', period: '', popular: false, features: ['Everything in Pro', 'Team collaboration', 'Dedicated support', 'SLA guarantee', 'Unlimited storage'] }
              ].map((plan, i) => (
                <div key={i} className={`card-premium p-8 glass-hover relative ${plan.popular ? 'border-indigo-500/30' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-zinc-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="text-indigo-400 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'btn-gradient' : 'btn-outline'}`}>
                    {plan.popular ? 'Go Pro' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="separator max-w-6xl mx-auto"></div>

        {/* EDITOR / GENERATE */}
        <Editor onGenerate={handleGenerate} onError={handleError} loading={loading} error={error} />

        {/* GENERATED OUTPUT */}
        {generatedHtml && (
          <section id="generated" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 tracking-tight">
                  ✨ <span className="gradient-text">Your Website</span>
                </h2>
                <p className="text-zinc-400">Preview and download your generated site.</p>
              </div>
              <div className="glass rounded-2xl p-2 glow-strong">
                <div className="flex items-center gap-2 px-4 py-3 bg-black/50 rounded-t-xl border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-3 text-sm text-zinc-500">dora-site.html</span>
                </div>
                <iframe
                  srcDoc={generatedHtml}
                  className="w-full h-[500px] rounded-b-xl border-0 bg-white"
                  title="Generated Website Preview"
                  sandbox="allow-scripts"
                />
              </div>
              <a
                href={`data:text/html;charset=utf-8,${encodeURIComponent(generatedHtml)}`}
                download="dora-site.html"
                className="mt-6 inline-flex items-center gap-2 btn-gradient px-8 py-4 text-lg"
              >
                📥 Download HTML
              </a>
            </div>
          </section>
        )}

        {/* CTA SECTION */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-3xl p-12 glow-strong relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Ready to <span className="gradient-text">Build</span>?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
                Your first website is free. No credits needed to get started.
              </p>
              <a href="#preview" className="btn-gradient px-8 py-4 text-lg inline-block">
                🚀 Generate Your First Website
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative border-t border-white/5 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">D</div>
                <span className="text-lg font-bold"><span className="gradient-text">DORA</span> AI</span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#features" className="text-zinc-500 hover:text-white transition-colors">Features</a>
                <a href="#how" className="text-zinc-500 hover:text-white transition-colors">How It Works</a>
                <a href="#pricing" className="text-zinc-500 hover:text-white transition-colors">Pricing</a>
                <a href="#preview" className="text-zinc-500 hover:text-white transition-colors">Generate</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Docs</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div className="separator mb-6"></div>
            <p className="text-zinc-600 text-sm text-center">© 2025 DORA AI — Build websites with AI. Powered by OpenRouter.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

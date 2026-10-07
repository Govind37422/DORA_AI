import React, { useState, useRef, useCallback } from 'react';

export default function Editor({ onGenerate, onError, loading, error }) {
  const [prompt, setPrompt] = useState('');
  const [sending, setSending] = useState(false);
  const promptRef = useRef(prompt);

  React.useEffect(() => {
    promptRef.current = prompt;
  }, [prompt]);

  const generate = useCallback(async (promptValue) => {
    const promptToUse = promptValue || promptRef.current;
    if (!promptToUse.trim() || sending) return;
    setSending(true);
    try {
      const res = await fetch('/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptToUse })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `HTTP ${res.status}`);
      }

      const data = await res.json();

      // Validate data has required fields
      const html = data?.html || '';
      const css = data?.css || '';
      const js = data?.js || null;

      if (!html || html === 'undefined' || html === '') {
        throw new Error('No website content was generated. Try a different prompt.');
      }

      onGenerate(html, css, js);
    } catch (err) {
      console.error('Generation error:', err);
      if (onError) onError(err.message);
    } finally {
      setSending(false);
    }
  }, [onGenerate, onError, sending]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generate();
  };

  const handleExampleClick = async (ex) => {
    setPrompt(ex);
    await generate(ex);
  };

  const examples = [
    "Build a landing page for a coffee shop with hero section, menu, and contact form",
    "Create a portfolio website for a photographer with gallery and about section",
    "Design a startup landing page with pricing table and features",
    "Make a restaurant menu website with categories and items",
    "Build an e-commerce product page with cart, checkout, and product listings",
    "Create a blog website with sidebar, recent posts, and comment section"
  ];

  return (
    <section id="editor" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Build anything{' '}
            <span className="gradient-text">with AI</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Just describe what you want and watch DORA AI create it for you. Click any example below to auto-generate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 glow-strong relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <label className="block text-sm font-semibold text-zinc-300 mb-3">
            Describe your website
          </label>

          <textarea
            className="input-glass w-full h-36 px-5 py-4 text-base resize-none"
            placeholder='e.g., Build a modern landing page for my SaaS startup with a hero section, features, pricing, and CTA...'
            value={prompt}
            onChange={(e) => { setPrompt(e.target.value); if (error) onError?.(''); }}
          />

          <div className="flex flex-wrap gap-2 mt-5 mb-6">
            {examples.map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleExampleClick(ex)}
                disabled={sending}
                className="tag"
              >
                {ex.slice(0, 50)}{ex.length > 50 ? '...' : ''}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={sending || loading}
            className="btn-gradient w-full py-4 text-lg flex items-center justify-center gap-3"
          >
            {sending || loading ? (
              <>
                <div className="spinner"></div>
                <span>DORA AI is building your website...</span>
              </>
            ) : (
              <>
                <span className="text-xl">✨</span>
                <span>Generate Website</span>
              </>
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm animate-fade-in-up">
              ⚠️ {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

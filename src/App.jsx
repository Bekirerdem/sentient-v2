import FluidCanvas from './components/FluidCanvas';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="antialiased selection:bg-[#6366F1]/30 selection:text-white relative scroll-smooth">
      {/* FLUID CURSOR BACKGROUND - UNTOUCHED */}
      <FluidCanvas />

      {/* HEADER */}
      <Header />

      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* MANIFESTO SECTION */}
        <section className="py-20 border-y border-white/5 bg-black/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Manuel iş gücü, modern çağın <span className="text-[#6366F1]">köleliğidir</span>.<br />
                Biz, kaosunuzu <span className="text-[#6366F1]">verimliliğe</span> dönüştürüyoruz.
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                Eski dünya, yavaş ve hataya açık süreçlerle can çekişiyor. Biz, işletmenizin DNA'sına 
                <span className="text-[#6366F1]"> otonom yapay zeka ajanlarını</span> entegre ederek verimsizliği yok ediyoruz. 
                Gelecek beklemez; ya adapte olursunuz ya da yok olursunuz.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 text-2xl md:text-3xl font-bold font-mono">
                <span className="text-red-500">KILL THE ROUTINE</span>
                <span className="text-neutral-600">/</span>
                <span className="text-[#6366F1]">AUTOMATE REALITY</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-[#6366F1]">SERVICES</span> // WHAT WE BUILD
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Dijital varlıklar inşa ediyoruz. Web sitesi değil, <span className="text-[#6366F1]">ekosistemler</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="glass-card p-8 rounded-xl hover:border-[#6366F1]/40 transition-all group">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6366F1]">SENTIENT ARCHITECTURE</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Data-driven roadmaps to crush competition.
              </p>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-8 rounded-xl hover:border-[#6366F1]/40 transition-all group">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6366F1]">DIGITAL DOMINANCE</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Self-learning neural interfaces that adapt in real-time.
              </p>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-8 rounded-xl hover:border-[#6366F1]/40 transition-all group">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6366F1]">AI INTEGRATION</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                High-performance immersive motion and aesthetics.
              </p>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-8 rounded-xl hover:border-[#6366F1]/40 transition-all group">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6366F1]">VISUAL ARCHITECTURE</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Aesthetics that command attention in the Web3 era.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="py-32 px-6 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#6366F1]/5 blur-3xl rounded-full -z-10 transform scale-50"></div>

          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              // START THE <span className="text-[#6366F1]">CONVERSATION</span>
            </h2>
            <p className="text-lg text-neutral-400">
              Building the neural architecture of the next web. <br />
              <span className="text-[#6366F1]">Automation, Intelligence, Dominance.</span>
            </p>
            <div className="flex justify-center pt-4">
              <a href="mailto:hello@sentient.agency" className="shiny-cta bg-[#6366F1] text-black hover:bg-[#6366F1]/90">
                <span className="font-bold">EMAIL US</span>
              </a>
            </div>
            <div className="pt-8 font-mono text-xs text-neutral-600 space-y-1">
              <p>CPU: 12% / MEM: 4GB</p>
              <p>LOC: BURSA, TR</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral-500">
            © 2024 Sentient Agency. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1]">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1]">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366F1]">
              Twitter / X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


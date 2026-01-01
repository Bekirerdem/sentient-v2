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

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  <span className="text-[#6366F1]">SELECTED</span> // WORKS
                </h2>
                <p className="text-neutral-400 text-lg">
                  Sınırları zorladığımız, yapay zekayı estetikle harmanladığımız projelerimiz.
                </p>
              </div>
              <div className="text-[#6366F1] font-mono text-sm hidden md:block">
                [ VIEW_ALL_PROJECTS_v2.0 ]
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-video bg-neutral-900 border border-white/5 hover:border-[#6366F1]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[#6366F1]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#6366F1] font-mono text-xs mb-2">NEURAL INTERFACE</div>
                  <h3 className="text-2xl font-bold text-white mb-2">CYBER-SENTIENCE OS</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Otonom karar verme yeteneğine sahip yeni nesil kullanıcı arayüzü mimarisi.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-video bg-neutral-900 border border-white/5 hover:border-[#6366F1]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[#6366F1]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#6366F1] font-mono text-xs mb-2">AI AUTOMATION</div>
                  <h3 className="text-2xl font-bold text-white mb-2">VOID ECOSYSTEM</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    E-ticaret devleri için geliştirilmiş, insan müdahalesi gerektirmeyen otonom yönetim sistemi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="py-24 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-[#6366F1]">OUR</span> // PROCESS
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                Fikirden gerçeğe; sistematik ve optimize edilmiş iş akışımız.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "EXTRACTION",
                  desc: "İşletmenizin darboğazlarını ve verimsiz noktalarını cerrahi bir hassasiyetle belirliyoruz."
                },
                {
                  step: "02",
                  title: "NEURAL MAPPING",
                  desc: "Size özel yapay zeka mimarisini ve otomasyon haritalarını tasarlıyoruz."
                },
                {
                  step: "03",
                  title: "DEPLOYMENT",
                  desc: "Sistemi hayata geçiriyor ve sürekli öğrenen algoritmalarla optimize ediyoruz."
                }
              ].map((item, i) => (
                <div key={i} className="relative p-8 glass-card rounded-2xl border-white/5 group hover:border-[#6366F1]/40 transition-all">
                  <div className="text-5xl font-black text-[#6366F1]/10 absolute -top-4 -left-2 group-hover:text-[#6366F1]/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-[#6366F1] tracking-wider">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
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


import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FluidCanvas from './components/FluidCanvas';
import Header from './components/Header';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useGSAP(() => {
    // Reveal Animations
    const reveals = gsap.utils.toArray('.gsap-reveal');
    reveals.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Staggered cards
    gsap.from(".gsap-stagger-card", {
      scrollTrigger: {
        trigger: ".gsap-stagger-container",
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="antialiased selection:bg-[#6366F1]/30 selection:text-white relative scroll-smooth text-white bg-transparent">
      {/* FLUID CURSOR BACKGROUND - FIXED BEHIND EVERYTHING */}
      <FluidCanvas />

      {/* HEADER */}
      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero />

        {/* MANIFESTO SECTION */}
        <section className="py-24 border-y border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 gsap-reveal">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Manuel iş gücü, modern çağın <span className="text-[#6366F1]">köleliğidir</span>.<br />
                Biz, kaosunuzu <span className="text-[#6366F1]">verimliliğe</span> dönüştürüyoruz.
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                Eski dünya, yavaş ve hataya açık süreçlerle can çekişiyor. Biz, işletmenizin DNA'sına 
                <span className="text-[#6366F1]"> otonom yapay zeka ajanlarını</span> entegre ederek verimsizliği yok ediyoruz. 
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
          <div className="mb-16 text-center gsap-reveal">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
              <span className="text-[#6366F1]">SERVICES</span> // WHAT WE BUILD
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Dijital varlıklar inşa ediyoruz. Web sitesi değil, <span className="text-[#6366F1]">ekosistemler</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-container">
            {[
              { title: "SENTIENT ARCHITECTURE", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", desc: "Data-driven roadmaps to crush competition." },
              { title: "DIGITAL DOMINANCE", icon: "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M12 16v-4 M12 8h.01", desc: "Self-learning neural interfaces." },
              { title: "AI INTEGRATION", icon: "M12 2v20 M2 12h20 M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", desc: "High-performance immersive motion." },
              { title: "VISUAL SYSTEMS", icon: "M3 3h18v18H3z M3 9h18 M9 21V9", desc: "Aesthetics that command attention." }
            ].map((service, i) => (
              <div key={i} className="gsap-stagger-card glass-card p-8 rounded-xl hover:border-[#6366F1]/40 transition-all group">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#6366F1]">{service.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 gsap-reveal">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
                  <span className="text-[#6366F1]">SELECTED</span> // WORKS
                </h2>
                <p className="text-neutral-400 text-lg">
                  Sınırları zorladığımız, yapay zekayı estetikle harmanladığımız projelerimiz.
                </p>
              </div>
              <div className="text-[#6366F1] font-mono text-sm hidden md:block border border-[#6366F1]/30 px-4 py-2 rounded-full">
                [ VIEW_ALL_SYSTEMS ]
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 gsap-stagger-container">
              {/* Project 1 */}
              <div className="gsap-stagger-card group relative overflow-hidden rounded-2xl aspect-video bg-neutral-900/50 border border-white/5 hover:border-[#6366F1]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black text-6xl select-none group-hover:scale-110 transition-transform duration-700">SENTIENT</div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#6366F1] font-mono text-xs mb-2 tracking-widest">NEURAL OS</div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">CYBER-SENTIENCE OS</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Otonom karar verme yeteneğine sahip yeni nesil kullanıcı arayüzü.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="gsap-stagger-card group relative overflow-hidden rounded-2xl aspect-video bg-neutral-900/50 border border-white/5 hover:border-[#6366F1]/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black text-6xl select-none group-hover:scale-110 transition-transform duration-700">VOID</div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#6366F1] font-mono text-xs mb-2 tracking-widest">AI AUTOMATION</div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">VOID ECOSYSTEM</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    E-ticaret devleri için otonom yönetim sistemi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="py-24 px-6 border-y border-white/5 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 gsap-reveal">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
                <span className="text-[#6366F1]">OUR</span> // PROCESS
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                Fikirden gerçeğe; sistematik ve optimize edilmiş iş akışımız.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 gsap-stagger-container">
              {[
                { step: "01", title: "EXTRACTION", desc: "Verimsiz noktaları cerrahi bir hassasiyetle belirliyoruz." },
                { step: "02", title: "RELAY", desc: "Size özel yapay zeka mimarisini tasarlıyoruz." },
                { step: "03", title: "DEPLOY", desc: "Sistemi hayata geçiriyor ve optimize ediyoruz." }
              ].map((item, i) => (
                <div key={i} className="gsap-stagger-card relative p-10 glass-card rounded-2xl border-white/5 group hover:border-[#6366F1]/40 transition-all text-center">
                  <div className="text-4xl font-black text-[#6366F1]/20 mb-4 group-hover:text-[#6366F1] transition-colors">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#6366F1] tracking-wider uppercase italic">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8 gsap-reveal">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase italic">
              READY TO <span className="text-[#6366F1]">EVOLVE?</span>
            </h2>
            <div className="flex justify-center pt-4">
              <a href="mailto:hello@sentient.agency" className="relative px-10 py-4 bg-[#6366F1] text-black font-bold rounded-lg hover:bg-[#6366F1]/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                INITIATE PROTOCOL
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-mono text-neutral-500 uppercase">
            © 2024 Sentient Agency // Bursa, TR
          </div>
          <div className="flex gap-8 text-xs font-mono text-neutral-400">
            {['LinkedIn', 'Instagram', 'X'].map((social) => (
              <a key={social} href="#" className="hover:text-[#6366F1] transition-colors uppercase tracking-widest">{social}</a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}

export default App;

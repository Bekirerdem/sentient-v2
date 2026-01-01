import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FluidCanvas from './components/FluidCanvas';
import Header from './components/Header';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const processContainerRef = useRef(null);

  useGSAP(() => {
    // Reveal Manifesto
    gsap.from(".manifesto-content > *", {
      scrollTrigger: {
        trigger: ".manifesto-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Reveal Services
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });

    // Projects Parallax & Reveal
    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out"
      });
    });

    // Process Steps Animation
    gsap.from(".process-step", {
      scrollTrigger: {
        trigger: "#process",
        start: "top 75%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.7)"
    });

  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="antialiased selection:bg-[#6366F1]/30 selection:text-white relative scroll-smooth bg-black text-white overflow-x-hidden">
      {/* FLUID CURSOR BACKGROUND */}
      <FluidCanvas />

      {/* HEADER */}
      <Header />

      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* MANIFESTO SECTION */}
        <section className="manifesto-section py-32 border-y border-white/5 bg-black/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-6xl mx-auto px-6 manifesto-content">
            <div className="text-center space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5 text-[#6366F1] font-mono text-xs mb-4">
                [ MANIFESTO_PROTOCOL.exe ]
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
                Manuel iş gücü, modern çağın <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-purple-400">köleliğidir</span>.
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed font-light">
                Biz, kaosunuzu <span className="text-white font-medium">verimliliğe</span> dönüştürüyoruz. 
                İşletmenizin DNA'sına otonom yapay zeka ajanlarını entegre ederek verimsizliği yok ediyoruz.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12 text-2xl md:text-4xl font-black font-mono">
                <span className="text-red-500/80 line-through decoration-2">KILL THE ROUTINE</span>
                <span className="text-neutral-700">/</span>
                <span className="text-[#6366F1] glow-text">AUTOMATE REALITY</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <div className="text-[#6366F1] font-mono text-sm mb-4 tracking-widest uppercase">01 // Expertise</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
              SERVICES<span className="text-[#6366F1]">.</span>
            </h2>
            <div className="w-24 h-1 bg-[#6366F1] mx-auto mb-8"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto text-xl font-light">
              Dijital varlıklar değil, dijital <span className="text-white underline decoration-[#6366F1] underline-offset-8 transition-all hover:text-[#6366F1]">imparatorluklar</span> inşa ediyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SENTIENT ARCHITECTURE", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", desc: "Data-driven roadmaps to crush competition." },
              { title: "DIGITAL DOMINANCE", icon: "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M12 16v-4 M12 8h.01", desc: "Self-learning neural interfaces that adapt in real-time." },
              { title: "AI INTEGRATION", icon: "M12 2v20 M2 12h20 M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", desc: "High-performance immersive motion and aesthetics." },
              { title: "VISUAL SYSTEMS", icon: "M3 3h18v18H3z M3 9h18 M9 21V9", desc: "Aesthetics that command attention in the Web3 era." }
            ].map((service, i) => (
              <div key={i} className="service-card glass-card p-10 rounded-2xl hover:border-[#6366F1]/50 transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl font-black">0{i+1}</span>
                </div>
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mb-6 group-hover:bg-[#6366F1] group-hover:text-black transition-all duration-500 scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black mb-4 group-hover:text-[#6366F1] transition-colors tracking-tight">{service.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 px-6 bg-[#050505] relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
              <div className="max-w-3xl">
                <div className="text-[#6366F1] font-mono text-sm mb-4 tracking-widest uppercase">02 // Portfolio</div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8">
                  SELECTED <span className="outline-text">WORKS</span>
                </h2>
                <p className="text-neutral-400 text-xl font-light leading-relaxed">
                  İnsan zekasının bittiği yerde <span className="text-white font-medium">yapay zekayı</span> estetikle harmanlayıp dijital devrimler yaratıyoruz.
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end gap-2 text-right">
                <span className="text-[#6366F1] font-mono text-sm">[ VIEW_ALL_SYSTEMS ]</span>
                <div className="w-32 h-px bg-gradient-to-l from-[#6366F1] to-transparent"></div>
              </div>
            </div>

            <div className="space-y-32">
              {/* Massive Project 1 */}
              <div className="project-card group grid md:grid-cols-12 items-center gap-12">
                <div className="md:col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden aspect-video bg-neutral-900 shadow-2xl overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[#6366F1]/5 group-hover:opacity-20 transition-opacity duration-700"></div>
                  {/* Image Placeholder with Gradient */}
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center">
                    <span className="text-[#6366F1]/20 font-black text-[15vw] select-none uppercase tracking-tighter">SENTIENT</span>
                  </div>
                  <div className="absolute bottom-10 left-10 z-20">
                    <div className="text-[#6366F1] font-mono text-xs mb-4 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse"></span>
                       NEURAL INTERFACE SYSTEM
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">CYBER-SENTIENCE OS</h3>
                  </div>
                </div>
                <div className="md:col-span-12 lg:col-span-4 space-y-6">
                  <h4 className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">/ Protocol 01</h4>
                  <p className="text-neutral-400 text-lg leading-relaxed italic">
                    "Otonom karar verme yeteneğine sahip yeni nesil kullanıcı arayüzü mimarisi. Kullanıcıyı anlayan, uyum sağlayan ve onunla büyüyen bir ekosistem."
                  </p>
                  <button className="group/btn flex items-center gap-4 text-xs font-mono text-white/50 hover:text-white transition-all uppercase tracking-widest">
                    <span>Explore Project</span>
                    <div className="w-10 h-px bg-white/20 group-hover/btn:w-16 transition-all duration-500"></div>
                  </button>
                </div>
              </div>

              {/* Massive Project 2 */}
              <div className="project-card group grid md:grid-cols-12 items-center gap-12 text-right">
                <div className="md:col-span-12 lg:col-span-4 order-2 lg:order-1 space-y-6">
                  <h4 className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">/ Protocol 02</h4>
                  <p className="text-neutral-400 text-lg leading-relaxed italic">
                    "E-ticaret devleri için geliştirilmiş, insan müdahalesi gerektirmeyen otonom yönetim sistemi. %100 otonom, %100 sonuç odaklı."
                  </p>
                  <button className="group/btn flex items-center gap-4 text-xs font-mono text-white/50 hover:text-white transition-all justify-end uppercase tracking-widest w-full">
                    <div className="w-10 h-px bg-white/20 group-hover/btn:w-16 transition-all duration-500"></div>
                    <span>Explore Project</span>
                  </button>
                </div>
                <div className="md:col-span-12 lg:col-span-8 order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-video bg-neutral-900 shadow-2xl border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-purple-500/5 group-hover:opacity-20 transition-opacity duration-700"></div>
                  <div className="w-full h-full bg-gradient-to-bl from-neutral-800 to-black flex items-center justify-center">
                    <span className="text-purple-500/20 font-black text-[15vw] select-none uppercase tracking-tighter">VOID</span>
                  </div>
                  <div className="absolute bottom-10 right-10 z-20 text-right">
                    <div className="text-purple-400 font-mono text-xs mb-4 flex items-center gap-2 justify-end">
                       AI AUTOMATION ECOSYSTEM
                       <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">VOID ECOSYSTEM</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="py-40 px-6 border-y border-white/5 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
              <div className="text-[#6366F1] font-mono text-sm mb-4 tracking-widest uppercase">03 // Methods</div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase">
                ENGAGE<span className="text-[#6366F1]">MENT</span> MODES
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-xl font-light">
                Fikirden gerçeğe; sistematik, optimize edilmiş ve <span className="text-white underline decoration-[#6366F1] underline-offset-4">ölçeklenebilir</span> iş akışımız.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16 relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-12"></div>
              
              {[
                { step: "01", title: "EXTRACTION", color: "#EF4444", desc: "İşletmenizin darboğazlarını ve verimsiz noktalarını cerrahi bir hassasiyetle belirliyoruz." },
                { step: "02", title: "NEURAL MAPPING", color: "#6366F1", desc: "Size özel yapay zeka mimarisini ve otomasyon haritalarını tasarlıyoruz." },
                { step: "03", title: "DEPLOYMENT", color: "#10B981", desc: "Sistemi hayata geçiriyor ve sürekli öğrenen algoritmalarla optimize ediyoruz." }
              ].map((item, i) => (
                <div key={i} className="process-step group relative text-center">
                  <div className="mb-12 relative">
                    <div 
                      className="w-32 h-32 rounded-full border border-white/10 mx-auto flex items-center justify-center bg-black transition-all duration-700 group-hover:scale-110 group-hover:border-[#6366F1]/50 relative z-20"
                    >
                      <span className="text-5xl font-black text-white group-hover:text-[#6366F1] transition-colors">{item.step}</span>
                    </div>
                    {/* Glow effect back */}
                    <div className="absolute inset-0 bg-[#6366F1]/10 blur-[40px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"></div>
                  </div>
                  <h3 className="text-2xl font-black mb-6 tracking-widest text-[#6366F1] uppercase">{item.title}</h3>
                  <div className="w-12 h-px bg-white/20 mx-auto mb-6 group-hover:bg-[#6366F1] group-hover:w-20 transition-all duration-500"></div>
                  <p className="text-neutral-400 text-md leading-relaxed font-light italic px-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-48 px-6 text-center relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[#6366F1]/10 blur-[150px] rounded-full -z-10 transform scale-50 animate-pulse"></div>

          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-[0.8]">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-purple-500">EVOLVE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              Building the neural architecture of the next web. <br />
              <span className="text-white font-medium uppercase tracking-[0.2em]">Intelligence. Dominance. Evolution.</span>
            </p>
            <div className="flex justify-center pt-8">
              <a href="mailto:hello@sentient.agency" className="shiny-cta-v2 group relative px-12 py-6 bg-transparent border border-[#6366F1] text-[#6366F1] overflow-hidden transition-all duration-500 hover:text-black">
                <div className="absolute inset-0 w-0 bg-[#6366F1] transition-all duration-500 ease-out group-hover:w-full -z-10"></div>
                <span className="font-black text-xl tracking-widest uppercase">INITIATE PROTOCOL</span>
              </a>
            </div>
            <div className="pt-20 font-mono text-[10px] text-neutral-700 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>[ CPU: REDLINE ]</div>
              <div>[ MEMORY: OPTIMIZED ]</div>
              <div>[ LATENCY: 0.002ms ]</div>
              <div>[ LOCATION: BURSA/TR ]</div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-mono text-neutral-600 uppercase tracking-widest">
            © 2024 Sentient Agency // All systems operational.
          </div>
          <div className="flex gap-12 text-xs font-mono text-neutral-500">
            {['LinkedIn', 'Instagram', 'Twitter / X'].map((social) => (
              <a key={social} href="#" className="hover:text-[#6366F1] transition-colors relative group">
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6366F1] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* CUSTOM CURSOR STYLING IN INDEX.CSS OR HERE */}
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(99, 102, 241, 0.5);
          color: transparent;
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }
        .glass-card {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .shiny-cta-v2 {
          box-shadow: 0 0 0px 0px rgba(99, 102, 241, 0);
        }
        .shiny-cta-v2:hover {
          box-shadow: 0 0 30px 0px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </div>
  );
}

export default App;



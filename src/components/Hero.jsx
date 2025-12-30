const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5 text-[#6366F1] text-xs font-mono tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]"></span>
          </span>
          SYSTEM ONLINE // NEURAL NETWORK ACTIVE
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
          SENTIENT <br />
          <span className="text-[#6366F1]">REALITY</span>
          <span className="text-white text-2xl md:text-3xl align-super ml-2">®</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
          WE BUILD AUTONOMOUS DIGITAL ECOSYSTEMS <br className="hidden md:block" />
          THAT <span className="text-[#6366F1]">THINK</span>, <span className="text-[#6366F1]">ADAPT</span>, AND <span className="text-[#6366F1]">EVOLVE</span>.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
          <button
            className="shiny-cta group bg-[#6366F1] text-black hover:bg-[#6366F1]/90"
            onClick={() => (window.location.href = '#contact')}
          >
            <span className="flex items-center gap-2 font-bold">
              INITIATE PROTOCOL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7l7 7l-7 7" />
              </svg>
            </span>
          </button>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-[#6366F1]/30 text-neutral-300 font-medium hover:bg-[#6366F1]/5 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            VIEW PROJECTS
          </a>
        </div>

        {/* Tech Cards */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="glass-card p-6 rounded-lg text-left border-[#6366F1]/20 hover:border-[#6366F1]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-mono text-[#6366F1]">CORE_INTELLIGENCE</h3>
              <span className="text-xs text-neutral-500">V.2.4.0</span>
            </div>
            <div className="space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Strategic AI: <span className="text-green-400">Active</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span>Neural Automation: <span className="text-yellow-400">Processing</span></span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-lg text-left border-[#6366F1]/20 hover:border-[#6366F1]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-mono text-[#6366F1]">CREATIVE_SYNTHESIS</h3>
              <span className="text-xs text-neutral-500">V.1.8.2</span>
            </div>
            <div className="space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span>Generative UI: <span className="text-yellow-400">Compiling</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Dynamic Branding: <span className="text-green-400">Active</span></span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-lg text-left border-[#6366F1]/20 hover:border-[#6366F1]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-mono text-[#6366F1]">PREDICTIVE_ENGINE</h3>
              <span className="text-xs text-neutral-500">V.3.0.1</span>
            </div>
            <div className="space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span>Market Foresight: <span className="text-blue-400">Calculating</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Omni-Channel Sync: <span className="text-green-400">Linked</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


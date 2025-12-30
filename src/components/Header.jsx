import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      {/* Top Status Bar */}
      <div className="border-b border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4 text-neutral-500">
            <span className="text-[#6366F1]">SYSTEM_STATUS:</span>
            <span className="text-white">ONLINE</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-neutral-500">
            <span>LOC: 41.0082° N, 28.9784° E</span>
            <span className="text-[#6366F1]">AI NATIVE | WEB 3.0 READY</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6366F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-bold tracking-tight text-sm text-white">
            SENTIENT <span className="text-[#6366F1]">AGENCY</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#services" className="hover:text-[#6366F1] transition-colors">
            SERVICES
          </a>
          <a href="#projects" className="hover:text-[#6366F1] transition-colors">
            PROJECTS
          </a>
          <a href="#process" className="hover:text-[#6366F1] transition-colors">
            PROCESS
          </a>
          <a href="#contact" className="hover:text-[#6366F1] transition-colors">
            CONTACT
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:block text-sm font-medium text-[#6366F1] hover:text-white transition-colors border border-[#6366F1]/30 px-4 py-2 rounded-lg hover:bg-[#6366F1]/10"
        >
          INITIATE PROTOCOL →
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%)] left-0 w-full bg-neutral-900 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden">
          <a href="#services" className="text-neutral-400 hover:text-[#6366F1]">
            SERVICES
          </a>
          <a href="#projects" className="text-neutral-400 hover:text-[#6366F1]">
            PROJECTS
          </a>
          <a href="#process" className="text-neutral-400 hover:text-[#6366F1]">
            PROCESS
          </a>
          <a href="#contact" className="text-[#6366F1]">
            INITIATE PROTOCOL
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

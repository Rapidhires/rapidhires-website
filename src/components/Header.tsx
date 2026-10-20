import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenEmployerModal?: () => void;
  onOpenCandidateModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEmployerModal, onOpenCandidateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'Employer Solutions', path: '/employers' },
    { label: 'Workforce Index', path: '/categories' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'Methodology & Standards', path: '/approach' },
    { label: 'Enterprise Profile', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Japan Bridge (日印協業)', path: '/japan' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#101417] text-vellum-100 transition-shadow duration-200 border-b border-[#232B32] ${isScrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      {/* High-density operational utility strip */}
      <div className="bg-[#07090A] text-steel-500 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#1E252C] font-mono tracking-tight">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-steel-300">
              <span className="w-1.5 h-1.5 bg-vermilion inline-block"></span>
              <span className="uppercase tracking-wider">MCA Registered Enterprise &bull; Republic of India</span>
            </span>
            <span className="hidden md:inline text-steel-600">|</span>
            <span className="hidden md:inline text-steel-400">Serving Industrial Operations across Germany, Japan, GCC & International Markets</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-[10px] text-steel-400">
            <span>T-Hub RubriX HR Winner</span>
            <span className="text-steel-600">&bull;</span>
            <span>Telangana Skilled Initiatives</span>
            <span className="text-steel-600">&bull;</span>
            <span className="text-steel-300">24/7 Candidate Support Channel</span>
          </div>
        </div>
      </div>

      {/* Main architectural navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-10 h-10 bg-vermilion flex items-center justify-center text-white border border-vermilion-border font-mono font-bold text-base tracking-wider shadow-sm">
              RH
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-xl text-white group-hover:text-steel-200 transition-colors uppercase font-mono leading-none">
                RAPIDHIRE
              </span>
              <span className="text-[10px] tracking-eyebrow uppercase text-steel-400 font-mono mt-1">
                Industrial Workforce Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const isJapan = link.path === '/japan';
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors relative ${
                    isJapan
                      ? 'text-[#E58872] hover:text-white font-semibold border border-[#C45238]/40 bg-[#C45238]/10'
                      : active
                        ? 'text-white font-semibold'
                        : 'text-steel-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isJapan && <span className="w-1.5 h-1.5 bg-[#C45238] inline-block animate-pulse"></span>}
                    <span>{link.label}</span>
                  </span>
                  {active && !isJapan && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-vermilion"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 font-mono">
            <button
              onClick={onOpenCandidateModal}
              className="text-xs uppercase tracking-wider px-3.5 py-2.5 text-steel-300 hover:text-white border border-[#2B353D] hover:border-steel-400 transition-colors focus:outline-none"
            >
              [Candidate Portal]
            </button>
            <button
              onClick={onOpenEmployerModal}
              className="inline-flex items-center gap-2 bg-vermilion hover:bg-vermilion-hover text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 transition-colors border border-vermilion-border shadow-sm focus:outline-none"
            >
              <span>Hire Workforce</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenEmployerModal}
              className="text-xs bg-vermilion text-white px-2.5 py-1.5 font-mono uppercase sm:hidden font-medium"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-steel-300 hover:text-white hover:bg-castiron-800 border border-[#232B32] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0E10] border-b border-[#232B32] px-4 pt-3 pb-6 space-y-4 font-mono">
          <div className="space-y-1">
            <p className="text-[10px] tracking-eyebrow text-steel-500 uppercase px-3 py-1">
              [SYSTEM INDEX]
            </p>
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const isJapan = link.path === '/japan';
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-sm uppercase transition-colors border-l-2 ${
                    isJapan
                      ? 'border-[#C45238] bg-[#C45238]/15 text-[#E58872] font-bold'
                      : active
                        ? 'border-vermilion bg-castiron-800 text-white font-bold'
                        : 'border-transparent text-steel-400 hover:text-white hover:bg-castiron-900'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{link.label}</span>
                    {isJapan && (
                      <span className="text-[10px] text-white bg-[#C45238] px-1.5 py-0.5">
                        PILOT
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#1E252C] space-y-2.5">
            <div className="bg-[#101417] p-3 border border-[#232B32]">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                For Employers & Plant Heads
              </p>
              <p className="text-xs text-steel-400 mb-2.5 font-sans leading-relaxed">
                Submit an industrial workforce brief or request a recruitment feasibility review.
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmployerModal?.();
                }}
                className="w-full flex items-center justify-between text-xs font-semibold uppercase bg-vermilion hover:bg-vermilion-hover text-white px-3 py-2"
              >
                <span>Submit Workforce Requirement</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#101417] p-3 border border-[#232B32]">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                For Indian Technical Personnel
              </p>
              <p className="text-xs text-steel-400 mb-2.5 font-sans leading-relaxed">
                Register engineering credentials or trade skills for verified international deployment.
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCandidateModal?.();
                }}
                className="w-full flex items-center justify-between text-xs font-semibold uppercase border border-steel-400 text-white hover:bg-castiron-800 px-3 py-2"
              >
                <span>Register Candidate Profile</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

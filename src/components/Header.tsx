import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Employers', path: '/employers' },
    { label: 'Workforce Categories', path: '/categories' },
    { label: 'International Opportunities', path: '/opportunities' },
    { label: 'Our Approach', path: '/approach' },
    { label: 'About Rapidhire', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#172B3A] text-warmwhite transition-shadow duration-200 border-b border-[#303A42] ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top operational announcement bar */}
      <div className="bg-[#0F1D27] text-steel-400 text-xs py-1.5 px-4 border-b border-navy-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono tracking-tight text-[11px] uppercase">
              Registered in India &bull; Serving International Engineering & Industrial Operations
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <span className="text-steel-500">T-Hub RubriX HR Winner</span>
            <span className="text-steel-500">&bull;</span>
            <span className="text-steel-400 font-mono">24/7 Candidate Support Channel</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-10 h-10 bg-industrial-orange flex items-center justify-center font-bold text-white tracking-widest text-lg border border-industrial-orange-dark shadow-sm">
              <span className="font-mono text-base font-extrabold">RH</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-xl text-warmwhite group-hover:text-steel-200 transition-colors uppercase font-mono">
                RAPIDHIRE
              </span>
              <span className="text-[10px] tracking-widest uppercase text-steel-400 font-mono -mt-1">
                Industrial Workforce Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                    active
                      ? 'text-white border-industrial-orange'
                      : 'text-steel-200 hover:text-white border-transparent hover:border-steel-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCandidateModal}
              className="text-xs font-semibold px-3.5 py-2 text-steel-200 hover:text-white border border-[#404C55] hover:border-steel-400 transition-colors focus:outline-none focus:ring-1 focus:ring-industrial-orange"
            >
              Explore Opportunities
            </button>
            <button
              onClick={onOpenEmployerModal}
              className="inline-flex items-center gap-2 bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-semibold px-4 py-2 transition-colors border border-industrial-orange-dark shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-industrial-orange"
            >
              <span>Hire Workforce</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEmployerModal}
              className="text-xs bg-industrial-orange text-white px-2.5 py-1.5 font-medium sm:hidden"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-steel-200 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-industrial-orange"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1B3243] border-b border-[#303A42] px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <p className="text-[11px] font-mono tracking-wider text-steel-400 uppercase px-3 py-1">
              Navigation
            </p>
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 text-base font-medium rounded-none border-l-2 transition-colors ${
                    active
                      ? 'border-industrial-orange bg-navy-900 text-white font-semibold'
                      : 'border-transparent text-steel-200 hover:text-white hover:bg-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile distinct path options */}
          <div className="pt-4 border-t border-navy-700 space-y-2.5">
            <div className="bg-[#172B3A] p-3 border border-[#303A42]">
              <p className="text-xs font-bold text-warmwhite uppercase tracking-wider mb-1">
                For Employers & Hiring Teams
              </p>
              <p className="text-xs text-steel-400 mb-2.5">
                Submit an industrial workforce brief or request a recruitment consultation.
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmployerModal?.();
                }}
                className="w-full flex items-center justify-between text-xs font-semibold bg-industrial-orange hover:bg-industrial-orange-hover text-white px-3 py-2"
              >
                <span>Submit Workforce Requirement</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#172B3A] p-3 border border-[#303A42]">
              <p className="text-xs font-bold text-warmwhite uppercase tracking-wider mb-1">
                For Indian Candidates & Technicians
              </p>
              <p className="text-xs text-steel-400 mb-2.5">
                Register skills for verified domestic or international recruitment requirements.
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCandidateModal?.();
                }}
                className="w-full flex items-center justify-between text-xs font-semibold border border-steel-400 text-warmwhite hover:bg-navy-900 px-3 py-2"
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

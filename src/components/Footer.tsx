import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1D27] text-steel-200 border-t border-[#303A42]">
      {/* Upper Operational & Legal Disclaimer Banner */}
      <div className="bg-[#172B3A] border-b border-[#303A42] py-4 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-steel-400">
          <div className="flex items-start md:items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5 md:mt-0" />
            <p>
              <strong className="text-warmwhite font-semibold">Regulatory Notice:</strong> Rapidhire is an international industrial workforce recruitment solutions business registered in India. We are <span className="text-warmwhite">not an immigration consultancy</span> or visa advisory firm. All cross-border placements are conducted strictly according to employer sponsor criteria and destination country legal frameworks.
            </p>
          </div>
          <div className="shrink-0 text-steel-400 font-mono text-[11px]">
            Statutory Registration: Republic of India
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none">
              <div className="w-9 h-9 bg-industrial-orange flex items-center justify-center font-bold text-white font-mono text-base border border-industrial-orange-dark">
                RH
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-xl text-warmwhite uppercase font-mono">
                  RAPIDHIRE
                </span>
                <span className="text-[10px] tracking-widest uppercase text-steel-400 font-mono -mt-1">
                  Workforce Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-steel-400 leading-relaxed max-w-md">
              <strong className="text-warmwhite">Skilled people. Industrial capability. International reach.</strong>
              <br />
              Rapidhire connects international employers with engineering professionals, manufacturing talent, skilled tradespeople, technicians, and industrial workforce candidates from India through recruiter-led evaluation and structured talent pools.
            </p>

            <div className="pt-2 border-t border-navy-800 text-xs space-y-2 text-steel-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-industrial-orange shrink-0" />
                <span>Operational Headquarters: Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-industrial-orange shrink-0" />
                <span>Employer Enquiries: <a href="mailto:enquiries@rapidhire.work" className="text-warmwhite hover:underline font-mono">enquiries@rapidhire.work</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-industrial-orange shrink-0" />
                <span>Candidate Desk: <a href="mailto:candidates@rapidhire.work" className="text-warmwhite hover:underline font-mono">candidates@rapidhire.work</a></span>
              </div>
            </div>
          </div>

          {/* Col 2: For Employers */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-warmwhite font-bold mb-4 pb-2 border-b border-navy-700">
              For Employers
            </h4>
            <ul className="space-y-2.5 text-xs text-steel-400">
              <li>
                <Link to="/employers" className="hover:text-warmwhite transition-colors">
                  Hire Industrial Workforce
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-warmwhite transition-colors">
                  Permanent Engineering Recruitment
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-warmwhite transition-colors">
                  Manufacturing & Trades Hiring
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-warmwhite transition-colors">
                  Bulk & Project Workforce
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-warmwhite transition-colors">
                  5-Stage Sourcing Methodology
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-warmwhite transition-colors">
                  Browse Occupations Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Candidates */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-warmwhite font-bold mb-4 pb-2 border-b border-navy-700">
              For Candidates
            </h4>
            <ul className="space-y-2.5 text-xs text-steel-400">
              <li>
                <Link to="/opportunities" className="hover:text-warmwhite transition-colors">
                  Verified Opportunities
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-warmwhite transition-colors">
                  Register Your Profile
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-warmwhite transition-colors">
                  Occupations & Skill Requirements
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-warmwhite transition-colors">
                  Recruiter Screening Standards
                </Link>
              </li>
              <li>
                <Link to="/candidate-consent" className="hover:text-warmwhite transition-colors">
                  Candidate Data & Consent Rights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-warmwhite transition-colors">
                  24/7 Candidate Support Channel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapidhire & Governance */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-warmwhite font-bold mb-4 pb-2 border-b border-navy-700">
              About & Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-steel-400">
              <li>
                <Link to="/about" className="hover:text-warmwhite transition-colors">
                  About Rapidhire
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-warmwhite transition-colors">
                  Fair Practice & Ethical Charter
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-warmwhite transition-colors">
                  T-Hub RubriX HR Recognition
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-warmwhite transition-colors">
                  Telangana Government Collaboration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-warmwhite transition-colors">
                  Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-warmwhite transition-colors">
                  Contact Recruitment Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <p className="text-[11px] font-mono uppercase tracking-wider text-steel-500 mb-3">
            Core Sourcing Categories:
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-steel-400">
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Mechanical Engineers</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Electrical & Automation</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Civil & Structural</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">CNC Machinists & Programmers</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">6G Pipe Welders</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Structural Fabricators</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Industrial Maintenance Fitters</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">HVAC Technicians</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Instrumentation & Controls</span>
            <span className="px-2.5 py-1 bg-navy-900 border border-navy-700">Heavy Equipment Operators</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-500">
          <div>
            &copy; {new Date().getFullYear()} Rapidhire. All rights reserved. Registered Enterprise in the Republic of India.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-warmwhite transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-warmwhite transition-colors">
              Terms of Use
            </Link>
            <Link to="/candidate-consent" className="hover:text-warmwhite transition-colors">
              Candidate Data & Consent
            </Link>
            <Link to="/contact" className="hover:text-warmwhite transition-colors">
              Operational Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

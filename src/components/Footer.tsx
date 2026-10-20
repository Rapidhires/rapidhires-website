import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090A] text-steel-400 border-t border-[#1E252C]">
      {/* Upper Operational & Legal Disclaimer Banner */}
      <div className="bg-[#101417] border-b border-[#1E252C] py-4 px-4 sm:px-6 lg:px-8 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-steel-400">
          <div className="flex items-start md:items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-vermilion shrink-0 mt-1 md:mt-0"></span>
            <p className="font-sans leading-relaxed text-[11px] text-steel-300">
              <strong className="text-white font-mono uppercase tracking-wider">Regulatory Notice:</strong> Rapidhire is an international industrial workforce recruitment solutions business registered in India. We are <span className="text-white font-semibold">not an immigration consultancy</span> or visa advisory firm. All cross-border placements are conducted strictly according to employer sponsor criteria and destination country legal frameworks.
            </p>
          </div>
          <div className="shrink-0 text-steel-500 font-mono text-[10px] uppercase tracking-wider">
            MCA Statutory Registration: Republic of India
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none">
              <div className="w-8 h-8 bg-vermilion flex items-center justify-center font-bold text-white font-mono text-sm border border-vermilion-border">
                RH
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg text-white uppercase font-mono leading-none">
                  RAPIDHIRE
                </span>
                <span className="text-[9px] tracking-eyebrow uppercase text-steel-500 font-mono mt-1">
                  Workforce Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-steel-400 leading-relaxed max-w-md font-sans">
              <strong className="text-white">Skilled people. Industrial capability. International reach.</strong>
              <br />
              Rapidhire connects international employers with engineering professionals, manufacturing talent, skilled tradespeople, technicians, and industrial workforce candidates from India through recruiter-led evaluation and structured talent pools.
            </p>

            <div className="pt-3 border-t border-[#1E252C] text-xs space-y-2 text-steel-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-vermilion shrink-0" />
                <span>Headquarters: Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-vermilion shrink-0" />
                <span>Employer Desk: <a href="mailto:enquiries@rapidhire.work" className="text-white hover:underline">enquiries@rapidhire.work</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-vermilion shrink-0" />
                <span>Candidate Desk: <a href="mailto:candidates@rapidhire.work" className="text-white hover:underline">candidates@rapidhire.work</a></span>
              </div>
            </div>
          </div>

          {/* Col 2: For Employers */}
          <div>
            <h4 className="text-[11px] font-mono tracking-wider uppercase text-white font-bold mb-4 pb-2 border-b border-[#1E252C]">
              For Employers
            </h4>
            <ul className="space-y-2 text-xs text-steel-400 font-sans">
              <li>
                <Link to="/employers" className="hover:text-white transition-colors">
                  Hire Industrial Workforce
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-white transition-colors">
                  Permanent Engineering Recruitment
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-white transition-colors">
                  Manufacturing & Trades Hiring
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-white transition-colors">
                  Bulk & Project Mobilisation
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-white transition-colors">
                  5-Stage Sourcing Methodology
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors">
                  Browse Occupations Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Candidates */}
          <div>
            <h4 className="text-[11px] font-mono tracking-wider uppercase text-white font-bold mb-4 pb-2 border-b border-[#1E252C]">
              For Candidates
            </h4>
            <ul className="space-y-2 text-xs text-steel-400 font-sans">
              <li>
                <Link to="/opportunities" className="hover:text-white transition-colors">
                  Verified Opportunities
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-white transition-colors">
                  Register Your Profile
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors">
                  Occupations & Skill Specs
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-white transition-colors">
                  Recruiter Screening Standards
                </Link>
              </li>
              <li>
                <Link to="/candidate-consent" className="hover:text-white transition-colors">
                  Candidate Data Rights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  24/7 Candidate Support Channel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapidhire & Governance */}
          <div>
            <h4 className="text-[11px] font-mono tracking-wider uppercase text-white font-bold mb-4 pb-2 border-b border-[#1E252C]">
              About Enterprise
            </h4>
            <ul className="space-y-2 text-xs text-steel-400 font-sans">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Rapidhire
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-white transition-colors">
                  Fair Practice & Ethical Charter
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  T-Hub RubriX Recognition
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Telangana Government Initiatives
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Recruitment Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Categories Sourcing Chips */}
        <div className="mt-12 pt-8 border-t border-[#1E252C]">
          <p className="text-[10px] font-mono uppercase tracking-wider text-steel-500 mb-3">
            Primary Industrial Sourcing Taxonomy:
          </p>
          <div className="flex flex-wrap gap-1.5 text-xs text-steel-400 font-mono">
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Mechanical Engineers</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Electrical & Automation</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Civil & Structural</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">CNC 5-Axis Machinists</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">6G Pipe Welders</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Structural Fabricators</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Industrial Maintenance</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">HVAC Technicians</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Controls Specialists</span>
            <span className="px-2 py-0.5 bg-[#101417] border border-[#232B32] text-[11px]">Certified Riggers</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-[#1E252C] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-steel-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Rapidhire. All rights reserved. Registered Enterprise in the Republic of India.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/candidate-consent" className="hover:text-white transition-colors">
              Candidate Data & Consent
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Operational Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

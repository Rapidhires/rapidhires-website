import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Headphones, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Info,
  Calendar
} from 'lucide-react';
import { CREDENTIALS } from '../data/credentials';

interface AboutPageProps {
  onOpenEmployerModal: () => void;
  onOpenCandidateModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenEmployerModal,
  onOpenCandidateModal
}) => {
  return (
    <div className="bg-warmwhite min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#172B3A] text-warmwhite py-14 lg:py-20 border-b border-[#303A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
              <span className="w-2 h-2 bg-industrial-orange"></span>
              CORPORATE PROFILE & GOVERNANCE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              About Rapidhire
            </h1>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed">
              An Indian recruitment enterprise connecting international employers with engineering professionals, technicians, and industrial workforce talent through disciplined sourcing and fair recruitment principles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Section 1: Executive Company Overview */}
        <section className="bg-white p-8 sm:p-12 border border-steel-DEFAULT">
          <div className="max-w-3xl space-y-6 text-sm text-graphite-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-navy-DEFAULT leading-snug">
              Structured Sourcing. Recruiter-Led Evaluation. Transparent Operations.
            </h2>
            <p className="text-base text-graphite-800 font-medium leading-relaxed">
              Rapidhire is an Indian recruitment startup focused on connecting employers with suitable talent through structured sourcing, recruiter-led evaluation, and candidate-centred recruitment processes.
            </p>
            <p>
              Headquartered in Hyderabad, India, Rapidhire was founded to bridge the gap between heavy industrial operations abroad and the vast pool of disciplined technical talent in India. We specialise across engineering disciplines, manufacturing operations, precision trades, plant maintenance, and large-scale industrial project mobilization.
            </p>
            <p>
              Our operating model combines open-source recruitment workflow automation with deep human recruiter oversight. Rather than treating recruitment as an impersonal resume dissemination pipeline, our recruiters conduct structured interviews, examine trade test records, cross-check machine control capabilities, and prepare candidates for international work cultures.
            </p>

            <div className="pt-4 border-t border-steel-DEFAULT grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-graphite-600">
              <div className="p-3 bg-warmwhite border border-steel-DEFAULT">
                <strong className="text-navy-DEFAULT block mb-1">Corporate Registration:</strong>
                <span>Registered and incorporated in the Republic of India under applicable corporate statutes.</span>
              </div>
              <div className="p-3 bg-warmwhite border border-steel-DEFAULT">
                <strong className="text-navy-DEFAULT block mb-1">Operational Focus:</strong>
                <span>Engineering, Manufacturing, Skilled Technical Trades & Industrial Project Workforce.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Verified Credentials & Programmes */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-steel-DEFAULT">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
                Evidence-Backed Standing
              </span>
              <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1">
                Verified Credentials & Institutional Participation
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0">
              Factual corporate records, awards, and collaborative programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="bg-white p-6 border border-steel-DEFAULT flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-steel-100 text-navy-DEFAULT font-bold border border-steel-DEFAULT block w-fit mb-3">
                    {cred.badge}
                  </span>
                  <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                    {cred.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-steel-100 text-[10px] font-mono text-graphite-400">
                  {cred.verificationNote}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-warmwhite border border-steel-DEFAULT flex items-start gap-3 text-xs text-graphite-600">
            <Info className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
            <p>
              <strong>Editorial Transparency:</strong> Rapidhire does not fabricate client references, candidate counts, placement percentages, or international partner logos. Award dates, programme participation milestones, and collaboration scopes are maintained transparently and updated upon formal verification.
            </p>
          </div>
        </section>

        {/* Section 3: Technology & Operating Principles */}
        <section className="bg-white p-8 sm:p-10 border border-steel-DEFAULT">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Engineering our own Process
            </span>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1 mb-2">
              Technology-Assisted, Human-Governed Recruitment
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
              We leverage modern technology without losing sight of human accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-warmwhite border border-steel-DEFAULT space-y-2">
              <Cpu className="w-5 h-5 text-industrial-orange" />
              <h4 className="text-sm font-bold text-navy-DEFAULT">Open-Source Architecture</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                We believe in transparent, auditable recruitment systems. Utilizing open frameworks allows us to map technical taxonomies without proprietary lock-in.
              </p>
            </div>

            <div className="p-5 bg-warmwhite border border-steel-DEFAULT space-y-2">
              <Users className="w-5 h-5 text-industrial-orange" />
              <h4 className="text-sm font-bold text-navy-DEFAULT">Structured Talent Pools</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Candidates who meet our baseline vetting criteria are indexed into structured pools with verified credentials for future industrial client briefs.
              </p>
            </div>

            <div className="p-5 bg-warmwhite border border-steel-DEFAULT space-y-2">
              <Headphones className="w-5 h-5 text-industrial-orange" />
              <h4 className="text-sm font-bold text-navy-DEFAULT">24/7 Support Desk</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Post-placement follow-up is an integral operational commitment. We maintain round-the-clock candidate support to resolve questions and communicate with host employers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Clear Boundary Statement */}
        <section className="bg-[#172B3A] text-warmwhite p-8 sm:p-10 border border-[#303A42]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Boundary & Scope Declaration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Industrial Workforce Recruitment — Not an Immigration Consultancy
            </h3>
            <p className="text-xs sm:text-sm text-steel-200 leading-relaxed">
              Rapidhire exists to solve technical manpower requirements for international employers. We are not an immigration agency, visa points broker, or study-abroad consultancy. We do not sell visas or promise immigration status. All international employment opportunities facilitated through Rapidhire are based on genuine employer sponsorship and bilateral legal compliance.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenEmployerModal}
                className="text-xs font-semibold px-5 py-3 bg-industrial-orange text-white hover:bg-industrial-orange-hover transition-colors font-mono uppercase tracking-wider"
              >
                Discuss Hiring Requirements
              </button>
              <Link
                to="/contact"
                className="text-xs font-semibold px-5 py-3 border border-[#404C55] text-warmwhite hover:bg-navy-800 transition-colors font-mono uppercase tracking-wider inline-flex items-center justify-center"
              >
                Contact Corporate Office
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

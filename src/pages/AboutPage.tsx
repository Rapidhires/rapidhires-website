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
  Check, 
  Info
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
    <div className="bg-vellum-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#101417] text-white py-14 lg:py-20 border-b border-[#232B32] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
              <span className="w-1.5 h-1.5 bg-vermilion"></span>
              <span>CORPORATE MONOGRAPH & GOVERNANCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About Rapidhire
            </h1>
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-sans">
              An Indian recruitment enterprise connecting international employers with engineering professionals, technicians, and industrial workforce talent through disciplined sourcing and fair recruitment principles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Section 1: Executive Company Overview */}
        <section className="bg-white p-8 sm:p-12 border border-steel-300 shadow-sm">
          <div className="max-w-3xl space-y-6 text-sm text-graphite-700 leading-relaxed">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [OPERATIONAL POSITIONING]
            </div>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT leading-snug tracking-tight">
              Structured Sourcing. Recruiter-Led Evaluation. Transparent Operations.
            </h2>
            <p className="text-base text-graphite-800 font-medium leading-relaxed font-sans">
              Rapidhire is an Indian recruitment startup focused on connecting employers with suitable talent through structured sourcing, recruiter-led evaluation, and candidate-centred recruitment processes.
            </p>
            <p className="font-sans">
              Headquartered in Hyderabad, India, Rapidhire was founded to bridge the gap between heavy industrial operations abroad and the vast pool of disciplined technical talent in India. We specialise across engineering disciplines, manufacturing operations, precision trades, plant maintenance, and large-scale industrial project mobilization.
            </p>
            <p className="font-sans">
              Our operating model combines open-source recruitment workflow automation with deep human recruiter oversight. Rather than treating recruitment as an impersonal resume dissemination pipeline, our recruiters conduct structured interviews, examine trade test records, cross-check machine control capabilities, and prepare candidates for international work cultures.
            </p>

            <div className="pt-4 border-t border-steel-300 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-graphite-600">
              <div className="p-3 bg-vellum-100 border border-steel-300">
                <strong className="text-castiron-DEFAULT block mb-1 uppercase tracking-wider text-[11px]">Corporate Incorporation:</strong>
                <span>Registered and incorporated in the Republic of India under applicable Ministry of Corporate Affairs statutes.</span>
              </div>
              <div className="p-3 bg-vellum-100 border border-steel-300">
                <strong className="text-castiron-DEFAULT block mb-1 uppercase tracking-wider text-[11px]">Primary Sector Scope:</strong>
                <span>Engineering, Precision Manufacturing, Certified Technical Trades & Industrial Project Mobilisation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Verified Credentials & Programmes */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-steel-300">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [FACTUAL CREDENTIALS]
              </span>
              <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 tracking-tight">
                Verified Credentials & Institutional Standing
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0">
              Factual corporate records, programme selections, and collaborative initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="bg-white p-6 border border-steel-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-steel-100 text-castiron-DEFAULT font-bold border border-steel-300 block w-fit mb-3">
                    {cred.badge}
                  </span>
                  <h3 className="text-base font-bold text-castiron-DEFAULT mb-2 font-sans">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                    {cred.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-steel-200 text-[10px] font-mono text-graphite-400">
                  {cred.verificationNote}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white border border-steel-300 flex items-start gap-3 text-xs text-graphite-600 shadow-sm font-mono">
            <Info className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
            <p className="font-sans">
              <strong>Editorial Transparency:</strong> Rapidhire does not fabricate client references, candidate counts, placement percentages, or international partner logos. Award dates, programme participation milestones, and collaboration scopes are maintained transparently and updated upon formal verification.
            </p>
          </div>
        </section>

        {/* Section 3: Technology & Operating Principles */}
        <section className="bg-white p-8 sm:p-10 border border-steel-300 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [SYSTEMS & WORKFLOW]
            </span>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 mb-2 tracking-tight">
              Technology-Assisted, Human-Governed Recruitment
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              We leverage modern technology without losing sight of human qualitative accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="p-5 bg-vellum-100 border border-steel-300 space-y-2">
              <Cpu className="w-5 h-5 text-vermilion" />
              <h4 className="text-sm font-bold text-castiron-DEFAULT uppercase">Open Architecture</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                We believe in transparent, auditable recruitment systems. Utilizing open frameworks allows us to map technical taxonomies without proprietary lock-in.
              </p>
            </div>

            <div className="p-5 bg-vellum-100 border border-steel-300 space-y-2">
              <Users className="w-5 h-5 text-vermilion" />
              <h4 className="text-sm font-bold text-castiron-DEFAULT uppercase">Structured Talent Pools</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Candidates who meet our baseline vetting criteria are indexed into structured pools with verified credentials for future industrial client briefs.
              </p>
            </div>

            <div className="p-5 bg-vellum-100 border border-steel-300 space-y-2">
              <Headphones className="w-5 h-5 text-vermilion" />
              <h4 className="text-sm font-bold text-castiron-DEFAULT uppercase">24/7 Support Desk</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Post-placement follow-up is an integral operational commitment. We maintain round-the-clock candidate support to resolve questions and communicate with host employers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Clear Boundary Statement */}
        <section className="bg-[#101417] text-white p-8 sm:p-10 border border-[#232B32] shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [BOUNDARY & SCOPE DECLARATION]
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Industrial Workforce Recruitment — Not an Immigration Consultancy
            </h3>
            <p className="text-xs sm:text-sm text-steel-300 leading-relaxed font-sans">
              Rapidhire exists to solve technical manpower requirements for international employers. We are not an immigration agency, visa points broker, or study-abroad consultancy. We do not sell visas or promise immigration status. All international employment opportunities facilitated through Rapidhire are based on genuine employer sponsorship and bilateral legal compliance.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 font-mono">
              <button
                onClick={onOpenEmployerModal}
                className="text-xs font-semibold uppercase tracking-wider px-5 py-3 bg-vermilion text-white hover:bg-vermilion-hover transition-colors border border-vermilion-border"
              >
                Discuss Hiring Requirements
              </button>
              <Link
                to="/contact"
                className="text-xs font-semibold uppercase tracking-wider px-5 py-3 border border-[#2B353D] text-steel-200 hover:bg-castiron-800 transition-colors inline-flex items-center justify-center"
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

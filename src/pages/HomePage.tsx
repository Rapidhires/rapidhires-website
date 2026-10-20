import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Factory, 
  Wrench, 
  Cpu, 
  HardHat, 
  ChevronRight, 
  ExternalLink,
  Award,
  Clock,
  Compass
} from 'lucide-react';
import { HorizontalProcess, SourcingToSelectionDiagram } from '../components/IndustrialProcessDiagram';
import { INDUSTRIES } from '../data/industries';
import { CREDENTIALS } from '../data/credentials';

interface HomePageProps {
  onOpenEmployerModal: (preselectedOccupation?: string) => void;
  onOpenCandidateModal: (preselectedVacancyId?: string, preselectedVacancyTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenEmployerModal,
  onOpenCandidateModal,
}) => {
  return (
    <div className="space-y-0">
      
      {/* ========================================================
          SECTION A: HERO (Two-Column Desktop, Precision Industrial)
         ======================================================== */}
      <section className="bg-[#172B3A] text-warmwhite py-16 lg:py-24 border-b border-[#303A42] relative overflow-hidden">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 industrial-grid-dark pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Messaging & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
                <span className="w-2 h-2 bg-industrial-orange"></span>
                INTERNATIONAL WORKFORCE SOLUTIONS
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                The right workforce keeps industry moving.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-steel-200 leading-relaxed max-w-2xl">
                Rapidhire helps international employers connect with engineering professionals, manufacturing talent, skilled technicians, and industrial workers from India. From targeted sourcing and recruiter-led selection to candidate coordination and post-placement support, we help make workforce recruitment more structured and dependable.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenEmployerModal()}
                  className="inline-flex items-center justify-center gap-2 bg-industrial-orange hover:bg-industrial-orange-hover text-white text-sm font-semibold px-6 py-3.5 transition-colors border border-industrial-orange-dark shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-industrial-orange"
                >
                  <span>Hire Workforce</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-navy-800 text-warmwhite text-sm font-semibold px-6 py-3.5 border border-[#404C55] hover:border-steel-400 transition-colors"
                >
                  <span>Explore Talent Categories</span>
                  <ChevronRight className="w-4 h-4 text-steel-400" />
                </Link>
              </div>

              {/* Core categories line */}
              <div className="pt-4 border-t border-navy-800">
                <p className="text-xs font-mono uppercase tracking-wider text-steel-400">
                  Engineering <span className="text-industrial-orange">|</span> Manufacturing <span className="text-industrial-orange">|</span> Skilled Trades <span className="text-industrial-orange">|</span> Technicians <span className="text-industrial-orange">|</span> Industrial Workforce
                </p>
                <p className="text-[11px] text-steel-500 mt-1">
                  * Targeted sourcing across verified Indian technical clusters. Sourcing scope defined per client requirement.
                </p>
              </div>
            </div>

            {/* Right Column: Realistic Industrial Photography */}
            <div className="lg:col-span-5">
              <div className="relative border-2 border-[#303A42] bg-[#0F1D27] p-2 shadow-xl">
                <div className="overflow-hidden relative aspect-[4/3] bg-navy-900">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                    alt="Engineers reviewing technical specifications on an industrial manufacturing plant floor"
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent"></div>
                  
                  {/* Photo caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-navy-900/95 p-3 border border-navy-700">
                    <div className="flex items-center justify-between text-[11px] font-mono text-steel-400 mb-1">
                      <span className="uppercase text-industrial-orange font-semibold">Technical Sourcing Hub</span>
                      <span>IN-REC-INTL</span>
                    </div>
                    <p className="text-white text-xs font-medium">
                      Evaluating manufacturing professionals, CNC machinists, and mechanical engineers against client-specific technical matrices.
                    </p>
                  </div>
                </div>

                {/* Sub-panel with key operational metrics */}
                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-navy-800 text-xs font-mono">
                  <div className="bg-[#172B3A] p-2 text-steel-300">
                    <span className="block text-[10px] text-steel-500 uppercase">Evaluation Method</span>
                    <strong className="text-white">Recruiter-Led Review</strong>
                  </div>
                  <div className="bg-[#172B3A] p-2 text-steel-300">
                    <span className="block text-[10px] text-steel-500 uppercase">Post-Placement</span>
                    <strong className="text-white">24/7 Candidate Support</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION B: WHO WE SERVE (Four Visually Distinct Categories)
         ======================================================== */}
      <section className="py-20 bg-warmwhite border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-steel-DEFAULT">
            <div>
              <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold mb-2">
                Workforce Segments
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-DEFAULT">
                Built around the people who keep industry running.
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0 max-w-sm">
              Target sourcing categories tailored to industrial plants, infrastructure projects, and engineering workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category 1: Engineering Professionals */}
            <div className="bg-white border border-steel-DEFAULT p-6 flex flex-col justify-between hover:border-navy-DEFAULT transition-all group">
              <div>
                <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT group-hover:bg-navy-DEFAULT group-hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-DEFAULT mb-2">
                  Engineering Professionals
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                  Mechanical, electrical, civil, production, quality, design, and project engineering talent with formal degree credentials.
                </p>
                <div className="space-y-1.5 text-xs text-graphite-500 pt-3 border-t border-steel-100 font-mono">
                  <div>&bull; Mechanical & Design CAD</div>
                  <div>&bull; Electrical & Control Systems</div>
                  <div>&bull; Civil & Structural Works</div>
                  <div>&bull; QA/QC & Production Control</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-DEFAULT flex items-center justify-between">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-navy-DEFAULT hover:text-industrial-orange transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Profiles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Engineering Professionals')}
                  className="text-[11px] font-mono text-industrial-orange hover:underline font-semibold"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Category 2: Manufacturing & Production */}
            <div className="bg-white border border-steel-DEFAULT p-6 flex flex-col justify-between hover:border-navy-DEFAULT transition-all group">
              <div>
                <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT group-hover:bg-navy-DEFAULT group-hover:text-white transition-colors">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-DEFAULT mb-2">
                  Manufacturing & Production
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                  Production personnel, machine operators, CNC operators, machinists, quality inspectors, assemblers, and production supervisors.
                </p>
                <div className="space-y-1.5 text-xs text-graphite-500 pt-3 border-t border-steel-100 font-mono">
                  <div>&bull; CNC 3/4/5-Axis Operators</div>
                  <div>&bull; Conventional Lathe Machinists</div>
                  <div>&bull; Assembly Line Technicians</div>
                  <div>&bull; Production Shift Supervisors</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-DEFAULT flex items-center justify-between">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-navy-DEFAULT hover:text-industrial-orange transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Profiles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Manufacturing & Production')}
                  className="text-[11px] font-mono text-industrial-orange hover:underline font-semibold"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Category 3: Skilled Trades & Technicians */}
            <div className="bg-white border border-steel-DEFAULT p-6 flex flex-col justify-between hover:border-navy-DEFAULT transition-all group">
              <div>
                <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT group-hover:bg-navy-DEFAULT group-hover:text-white transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-DEFAULT mb-2">
                  Skilled Trades & Technicians
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                  Welders, fitters, electricians, HVAC technicians, instrumentation technicians, mechanical maintenance personnel, and specialist trades.
                </p>
                <div className="space-y-1.5 text-xs text-graphite-500 pt-3 border-t border-steel-100 font-mono">
                  <div>&bull; 6G TIG / MIG Pipe Welders</div>
                  <div>&bull; Industrial Maintenance Fitters</div>
                  <div>&bull; Plant & Panel Electricians</div>
                  <div>&bull; Industrial HVAC & Chiller Techs</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-DEFAULT flex items-center justify-between">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-navy-DEFAULT hover:text-industrial-orange transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Profiles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Skilled Trades & Technicians')}
                  className="text-[11px] font-mono text-industrial-orange hover:underline font-semibold"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Category 4: Industrial & Project Workforce */}
            <div className="bg-white border border-steel-DEFAULT p-6 flex flex-col justify-between hover:border-navy-DEFAULT transition-all group">
              <div>
                <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT group-hover:bg-navy-DEFAULT group-hover:text-white transition-colors">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-DEFAULT mb-2">
                  Industrial & Project Workforce
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                  Fabricators, pipefitters, equipment operators, construction-related trades, and project-based industrial workers.
                </p>
                <div className="space-y-1.5 text-xs text-graphite-500 pt-3 border-t border-steel-100 font-mono">
                  <div>&bull; Structural Steel Fabricators</div>
                  <div>&bull; High-Pressure Pipe Fitters</div>
                  <div>&bull; Crane & Heavy Equipment Ops</div>
                  <div>&bull; Certified Industrial Riggers</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-DEFAULT flex items-center justify-between">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-navy-DEFAULT hover:text-industrial-orange transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Profiles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Industrial & Project Workforce')}
                  className="text-[11px] font-mono text-industrial-orange hover:underline font-semibold"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-graphite-500">
              * Note: These represent target sourcing categories evaluated per client mandate, not an assumption of instant shelf availability.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION C: EMPLOYER VALUE PROPOSITION (Sourcing Capabilities)
         ======================================================== */}
      <section className="py-20 bg-steel-100 border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Explanatory copy & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold">
                Employer Value Proposition
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-DEFAULT">
                Workforce recruitment built around your requirements.
              </h2>
              <p className="text-sm text-graphite-700 leading-relaxed">
                Industrial operations cannot afford recruitment by guess-work. Rapidhire partners with international engineering firms and manufacturing plants to translate exact job specifications into disciplined, recruiter-led talent searches in India.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEmployerModal()}
                  className="inline-flex items-center gap-2 bg-navy-DEFAULT hover:bg-navy-800 text-white text-xs font-semibold px-5 py-3 transition-colors border border-navy-900 shadow-sm"
                >
                  <span>Discuss Your Workforce Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3 bg-white border border-steel-DEFAULT text-xs text-graphite-600 font-mono">
                &bull; Commercial scope, timeline, and compliance requirements agreed before mobilisation.
              </div>
            </div>

            {/* Right Col: Capabilities Grid */}
            <div className="lg:col-span-7">
              <SourcingToSelectionDiagram />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION D: INTERNATIONAL HIRING CLEARLY EXPLAINED (5 Steps)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold mb-2">
              Cross-Border Sourcing Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-DEFAULT mb-3">
              Connecting Indian talent with international employers.
            </h2>
            <p className="text-sm text-graphite-700 leading-relaxed">
              International recruitment takes more than sourcing a suitable profile. It requires clear job requirements, appropriate evaluation, transparent employment conditions, and coordination between employers, candidates, and relevant local partners.
            </p>
          </div>

          {/* 5-step horizontal process */}
          <HorizontalProcess />

          <div className="mt-8 text-right">
            <Link
              to="/approach"
              className="text-xs font-semibold text-navy-DEFAULT hover:text-industrial-orange inline-flex items-center gap-1 font-mono"
            >
              <span>Read complete recruiter-led methodology</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION E: INDUSTRIES SERVED (7 Industrial Sectors)
         ======================================================== */}
      <section className="py-20 bg-warmwhite border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-steel-DEFAULT">
            <div>
              <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold mb-2">
                Operational Sectors
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-DEFAULT">
                Supporting the industries that build, make, maintain, and move the world.
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0">
              Sector focus tailored to technical production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white border border-steel-DEFAULT p-6 flex flex-col justify-between hover:border-navy-DEFAULT transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                    <span className="text-industrial-orange font-bold">{ind.code}</span>
                    <span className="text-graphite-400">Sector Profile</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                  
                  <div className="pt-3 border-t border-steel-100">
                    <p className="text-[10px] font-mono uppercase text-graphite-400 mb-1.5">
                      Target Occupations:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {ind.keyOccupations.slice(0, 3).map((occ) => (
                        <span
                          key={occ}
                          className="text-[11px] px-2 py-0.5 bg-steel-100 text-graphite-700 border border-steel-DEFAULT font-mono"
                        >
                          {occ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-steel-DEFAULT flex items-center justify-between">
                  <span className="text-[10px] font-mono text-graphite-500 italic truncate max-w-[170px]">
                    {ind.scopeNote}
                  </span>
                  <button
                    onClick={() => onOpenEmployerModal(ind.name)}
                    className="text-xs font-semibold text-navy-DEFAULT hover:text-industrial-orange transition-colors inline-flex items-center gap-1 font-mono shrink-0"
                  >
                    <span>Explore Requirements</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION F: WHY RAPIDHIRE (4 Core Principles)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold mb-2">
              Foundational Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-DEFAULT mb-3">
              Recruitment is more than a shortlist.
            </h2>
            <p className="text-sm text-graphite-700 leading-relaxed">
              Successful industrial staffing requires deep accountability to both the commissioning plant and the deployed technical specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-warmwhite p-6 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">PRINCIPLE 01</span>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                Human Judgement Matters
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Technology can organise recruitment workflows, but seasoned recruiters must make informed qualitative decisions about hands-on suitability, trade skills, and candidate operational readiness.
              </p>
            </div>

            <div className="bg-warmwhite p-6 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">PRINCIPLE 02</span>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                Candidate Experience First
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Candidates deserve absolute transparency regarding role duties, remuneration, selection stages, working conditions, and safety protocols before committing to opportunities.
              </p>
            </div>

            <div className="bg-warmwhite p-6 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">PRINCIPLE 03</span>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                Talent Pools Create Continuity
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed">
                With candidate consent and strict data governance, suitable candidates are retained in structured talent pools for future recruitment requirements across relevant industrial clusters.
              </p>
            </div>

            <div className="bg-warmwhite p-6 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">PRINCIPLE 04</span>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                Support Beyond Placement
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Rapidhire operates a dedicated 24/7 candidate-support service, enabling placed technical personnel to raise operational queries and seek assistance through agreed channels.
              </p>
            </div>

          </div>

          <div className="mt-8 p-4 bg-steel-100 border border-steel-DEFAULT text-xs text-graphite-600 font-mono">
            * Operational note: Concerns and disputes are handled cooperatively through agreed client communication protocols and in-country host employer liaison.
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION G: CREDIBILITY & PROOF (Evidence-Backed Factuals)
         ======================================================== */}
      <section className="py-20 bg-warmwhite border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-steel-DEFAULT">
            <div>
              <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold mb-2">
                Verification & Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-DEFAULT">
                Built on recruitment experience. Focused on fair practice.
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0 max-w-sm">
              All credentials stated subject to formal verification. Factual corporate standing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="bg-white p-6 border border-steel-DEFAULT relative group hover:border-navy-DEFAULT transition-colors"
              >
                <div className="inline-block px-2 py-0.5 bg-steel-100 text-navy-DEFAULT font-mono text-[10px] uppercase font-bold border border-steel-DEFAULT mb-3">
                  {cred.badge}
                </div>
                <h3 className="text-sm font-bold text-navy-DEFAULT mb-2">
                  {cred.title}
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                  {cred.detail}
                </p>
                <div className="pt-3 border-t border-steel-100 text-[10px] font-mono text-graphite-400">
                  {cred.verificationNote}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-graphite-500 font-mono">
            Rapidhire maintains a strict policy against fabricated statistics, fictional placement counts, or unverified client endorsement claims.
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION H: EMPLOYER CONVERSION (Prominent & Restrained)
         ======================================================== */}
      <section className="py-20 bg-[#172B3A] text-warmwhite border-b border-[#303A42] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold">
                Direct Hiring Pipeline
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Tell us what your workforce needs to do. We'll start with the people you need.
              </h2>
              <p className="text-sm sm:text-base text-steel-200 leading-relaxed max-w-2xl">
                Share your hiring requirement, target location, occupation, and expected workforce size. Our team can review the brief and discuss a suitable recruitment approach.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-steel-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-industrial-orange" />
                  Engineering & Technical Specialisations
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-industrial-orange" />
                  Permanent & Project Deployments
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-industrial-orange" />
                  Recruiter-Led Verification
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenEmployerModal()}
                className="w-full inline-flex items-center justify-center gap-2 bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-semibold px-6 py-4 transition-colors border border-industrial-orange-dark shadow-sm uppercase font-mono tracking-wider"
              >
                <span>Submit a Workforce Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-warmwhite text-xs font-semibold px-6 py-4 border border-[#404C55] transition-colors uppercase font-mono tracking-wider"
              >
                <span>Speak to Rapidhire</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION I: CANDIDATE CONVERSION (Indian Talent Gateway)
         ======================================================== */}
      <section className="py-16 bg-white border-b border-steel-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warmwhite border border-steel-DEFAULT p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono uppercase tracking-eyebrow text-industrial-orange font-bold">
                For Technical Professionals & Trades
              </div>
              <h2 className="text-2xl font-bold text-navy-DEFAULT">
                Your skills can take you further.
              </h2>
              <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
                Register your interest in engineering, manufacturing, technical, and skilled workforce opportunities. Share your experience and preferred career direction so Rapidhire can consider your profile for relevant opportunities.
              </p>
              <p className="text-[11px] text-graphite-400 font-mono pt-1">
                * Initial registration is free. Registration does not guarantee a job offer, interview, overseas placement, or immigration approval.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenCandidateModal()}
                className="w-full sm:w-auto text-xs font-semibold px-6 py-3.5 bg-navy-DEFAULT hover:bg-navy-800 text-white transition-colors border border-navy-900 shadow-sm"
              >
                Register Your Profile
              </button>
              <Link
                to="/opportunities"
                className="w-full sm:w-auto text-xs font-semibold px-5 py-3.5 border border-steel-DEFAULT text-navy-DEFAULT hover:bg-white text-center transition-colors"
              >
                Browse Verified Vacancies
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

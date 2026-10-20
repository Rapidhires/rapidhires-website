import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ExternalLink,
  Award,
  Clock,
  Compass,
  Check,
  AlertCircle,
  FileText
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
    <div className="space-y-0 bg-vellum-100">
      
      {/* ========================================================
          SECTION 1: HERO (The Industrial Monograph)
         ======================================================== */}
      <section className="bg-[#101417] text-white py-16 lg:py-24 border-b border-[#232B32] relative overflow-hidden">
        {/* Architectural blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: The Monograph */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
                <span className="w-1.5 h-1.5 bg-vermilion"></span>
                <span>SPECIFICATION: INTERNATIONAL INDUSTRIAL WORKFORCE</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.12]">
                The right workforce keeps industry moving.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-steel-300 leading-relaxed max-w-2xl font-sans">
                Rapidhire helps international employers connect with engineering professionals, manufacturing talent, skilled technicians, and industrial workers from India. From targeted sourcing and recruiter-led selection to candidate coordination and post-placement support, we help make workforce recruitment more structured and dependable.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 font-mono">
                <button
                  onClick={() => onOpenEmployerModal()}
                  className="inline-flex items-center justify-center gap-2 bg-vermilion hover:bg-vermilion-hover text-white text-xs font-semibold uppercase tracking-wider px-6 py-4 transition-colors border border-vermilion-border shadow-sm focus:outline-none"
                >
                  <span>Submit Workforce Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center gap-2 bg-[#171D21] hover:bg-[#232B32] text-steel-200 text-xs font-semibold uppercase tracking-wider px-6 py-4 border border-[#2B353D] hover:border-steel-400 transition-colors"
                >
                  <span>Explore Technical Index</span>
                  <ChevronRight className="w-4 h-4 text-steel-400" />
                </Link>
              </div>

              {/* Sourcing categories strip */}
              <div className="pt-6 border-t border-[#1E252C]">
                <p className="text-xs font-mono uppercase tracking-wider text-steel-400">
                  Engineering <span className="text-vermilion">|</span> Manufacturing <span className="text-vermilion">|</span> Skilled Trades <span className="text-vermilion">|</span> Technicians <span className="text-vermilion">|</span> Industrial Workforce
                </p>
                <p className="text-[11px] text-steel-500 font-mono mt-1">
                  * Targeted talent mapping across verified Indian technical clusters. Sourcing scope defined per client mandate.
                </p>
              </div>
            </div>

            {/* Right Column: High-Precision Technical Plate */}
            <div className="lg:col-span-5">
              <div className="border border-[#2B353D] bg-[#0B0E10] p-3 shadow-2xl relative">
                
                {/* Header datum */}
                <div className="flex items-center justify-between text-[10px] font-mono text-steel-400 mb-2 border-b border-[#1E252C] pb-2">
                  <span className="uppercase tracking-wider text-vermilion font-bold">[FIELD DOSSIER: IN-IND-2025]</span>
                  <span>TELANGANA / PUNE CLUSTER</span>
                </div>

                <div className="overflow-hidden relative aspect-[4/3] bg-castiron-950 border border-[#1E252C]">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Engineers reviewing technical specifications on an industrial manufacturing plant floor"
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-90 grayscale-[25%]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-castiron-950 via-transparent to-transparent"></div>

                  {/* Micro coordinate crosshairs */}
                  <span className="absolute top-2 left-2 text-[10px] font-mono text-vermilion">+</span>
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-vermilion">+</span>
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-vermilion">+</span>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-vermilion">+</span>

                  {/* Caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-castiron-900/95 p-3 border border-[#2B353D]">
                    <div className="flex items-center justify-between text-[10px] font-mono text-steel-400 mb-1">
                      <span className="uppercase text-vermilion font-semibold">Technical Capability Screening</span>
                      <span>ISO / ASME / DIN</span>
                    </div>
                    <p className="text-steel-200 text-xs font-sans">
                      Evaluating manufacturing personnel, CNC 5-axis machinists, and mechanical engineers against plant-specific technical matrices.
                    </p>
                  </div>
                </div>

                {/* Micro spec indicators */}
                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#1E252C] text-xs font-mono">
                  <div className="bg-[#101417] p-2 text-steel-300 border border-[#1E252C]">
                    <span className="block text-[9px] text-steel-500 uppercase tracking-wider">Evaluation Method</span>
                    <strong className="text-white text-[11px]">Recruiter-Led Review</strong>
                  </div>
                  <div className="bg-[#101417] p-2 text-steel-300 border border-[#1E252C]">
                    <span className="block text-[9px] text-steel-500 uppercase tracking-wider">Post-Placement</span>
                    <strong className="text-white text-[11px]">24/7 Support Desk</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: OCCUPATIONAL CLASSIFICATION DIRECTORY (5-Col 1px Grid)
         ======================================================== */}
      <section className="py-20 bg-vellum-100 border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-steel-300">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
                [CATALOGUE CLASSIFICATIONS]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
                Built around the people who keep industry running.
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0 max-w-sm">
              Structured sourcing classifications tailored to precision manufacturing, infrastructure, and heavy plant operations.
            </p>
          </div>

          {/* 5-Column Technical Directory (Zero-Radius, 1px Divider Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-steel-300 divide-y md:divide-y-0 md:divide-x divide-steel-300 bg-white shadow-sm">
            
            {/* Column 1: Engineering Professionals */}
            <div className="p-6 flex flex-col justify-between hover:bg-vellum-50 transition-colors group">
              <div>
                <div className="text-[11px] font-mono text-steel-500 mb-2 border-b border-steel-200 pb-1.5 flex justify-between">
                  <span>DISCIPLINE 01</span>
                  <span className="text-vermilion font-bold">ENG</span>
                </div>
                <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                  Engineering Professionals
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                  Mechanical, electrical, civil, production, quality, design, and project engineering talent with formal accredited degrees.
                </p>
                <div className="space-y-1.5 text-[11px] text-graphite-600 font-mono pt-3 border-t border-steel-200">
                  <div>&bull; Mechanical & Design CAD</div>
                  <div>&bull; Electrical & Control Systems</div>
                  <div>&bull; Civil & Structural Works</div>
                  <div>&bull; QA/QC & Production Control</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-200 flex items-center justify-between font-mono">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion transition-colors inline-flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Engineering Professionals')}
                  className="text-xs font-bold text-vermilion hover:underline"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Column 2: Manufacturing & Production */}
            <div className="p-6 flex flex-col justify-between hover:bg-vellum-50 transition-colors group">
              <div>
                <div className="text-[11px] font-mono text-steel-500 mb-2 border-b border-steel-200 pb-1.5 flex justify-between">
                  <span>DISCIPLINE 02</span>
                  <span className="text-vermilion font-bold">MFG</span>
                </div>
                <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                  Manufacturing & Production
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                  Production personnel, machine operators, CNC operators, machinists, quality inspectors, assemblers, and production supervisors.
                </p>
                <div className="space-y-1.5 text-[11px] text-graphite-600 font-mono pt-3 border-t border-steel-200">
                  <div>&bull; CNC 3/4/5-Axis Operators</div>
                  <div>&bull; Conventional Lathe Machinists</div>
                  <div>&bull; Assembly Line Technicians</div>
                  <div>&bull; Production Shift Supervisors</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-200 flex items-center justify-between font-mono">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion transition-colors inline-flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Manufacturing & Production')}
                  className="text-xs font-bold text-vermilion hover:underline"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Column 3: Skilled Trades & Technicians */}
            <div className="p-6 flex flex-col justify-between hover:bg-vellum-50 transition-colors group">
              <div>
                <div className="text-[11px] font-mono text-steel-500 mb-2 border-b border-steel-200 pb-1.5 flex justify-between">
                  <span>DISCIPLINE 03</span>
                  <span className="text-vermilion font-bold">TRD</span>
                </div>
                <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                  Skilled Trades & Technicians
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                  Welders, fitters, electricians, HVAC technicians, instrumentation technicians, mechanical maintenance personnel, and specialist trades.
                </p>
                <div className="space-y-1.5 text-[11px] text-graphite-600 font-mono pt-3 border-t border-steel-200">
                  <div>&bull; 6G TIG / MIG Pipe Welders</div>
                  <div>&bull; Maintenance Fitters</div>
                  <div>&bull; Plant & Panel Electricians</div>
                  <div>&bull; Industrial HVAC Techs</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-200 flex items-center justify-between font-mono">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion transition-colors inline-flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Skilled Trades & Technicians')}
                  className="text-xs font-bold text-vermilion hover:underline"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Column 4: Maintenance & Technical Services */}
            <div className="p-6 flex flex-col justify-between hover:bg-vellum-50 transition-colors group">
              <div>
                <div className="text-[11px] font-mono text-steel-500 mb-2 border-b border-steel-200 pb-1.5 flex justify-between">
                  <span>DISCIPLINE 04</span>
                  <span className="text-vermilion font-bold">MNT</span>
                </div>
                <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                  Maintenance & Controls
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                  Mechanical maintenance technicians, equipment specialists, controls technicians, and field service personnel.
                </p>
                <div className="space-y-1.5 text-[11px] text-graphite-600 font-mono pt-3 border-t border-steel-200">
                  <div>&bull; Laser Shaft Alignment</div>
                  <div>&bull; Hydraulic & Pneumatic Systems</div>
                  <div>&bull; Instrumentation & Hart Loops</div>
                  <div>&bull; Heavy Equipment Field Service</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-200 flex items-center justify-between font-mono">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion transition-colors inline-flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Maintenance & Technical Services')}
                  className="text-xs font-bold text-vermilion hover:underline"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

            {/* Column 5: Industrial & Project Workforce */}
            <div className="p-6 flex flex-col justify-between hover:bg-vellum-50 transition-colors group">
              <div>
                <div className="text-[11px] font-mono text-steel-500 mb-2 border-b border-steel-200 pb-1.5 flex justify-between">
                  <span>DISCIPLINE 05</span>
                  <span className="text-vermilion font-bold">PRJ</span>
                </div>
                <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                  Project & Heavy Mobilisation
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                  Fabricators, pipefitters, heavy equipment operators, construction-related trades, and project-based industrial workers.
                </p>
                <div className="space-y-1.5 text-[11px] text-graphite-600 font-mono pt-3 border-t border-steel-200">
                  <div>&bull; Structural Steel Fabricators</div>
                  <div>&bull; High-Pressure Pipe Fitters</div>
                  <div>&bull; Crane & Excavator Operators</div>
                  <div>&bull; Certified Industrial Riggers</div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-steel-200 flex items-center justify-between font-mono">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion transition-colors inline-flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEmployerModal('Industrial & Project Workforce')}
                  className="text-xs font-bold text-vermilion hover:underline"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>

          </div>

          <div className="mt-4 text-right">
            <span className="text-[11px] font-mono text-steel-500">
              * Note: Sourcing categories represent verified target capabilities, not unverified off-the-shelf claims.
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 3: EMPLOYER VALUE PROPOSITION (Sourcing Capabilities)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [EMPLOYER SOURCING ARCHITECTURE]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
                Workforce recruitment built around your requirements.
              </h2>
              <p className="text-sm text-graphite-700 leading-relaxed font-sans">
                Industrial operations cannot afford recruitment by guess-work. Rapidhire partners with international engineering firms, production facilities, and EPC contractors to translate exact technical job criteria into disciplined, recruiter-led talent searches in India.
              </p>
              <div className="pt-2 font-mono">
                <button
                  onClick={() => onOpenEmployerModal()}
                  className="inline-flex items-center gap-2 bg-castiron-DEFAULT hover:bg-castiron-800 text-white text-xs font-semibold uppercase tracking-wider px-5 py-3.5 transition-colors border border-castiron-900 shadow-sm"
                >
                  <span>Discuss Your Workforce Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3 bg-vellum-100 border border-steel-300 text-xs text-graphite-600 font-mono">
                &bull; Commercial scope, timeline, and compliance requirements agreed before mobilisation.
              </div>
            </div>

            <div className="lg:col-span-7">
              <SourcingToSelectionDiagram />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: 5-STAGE SOURCING PIPELINE (Horizontal Schematic)
         ======================================================== */}
      <section className="py-20 bg-vellum-100 border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
              [CROSS-BORDER SOURCING PROTOCOL]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT mb-3 tracking-tight">
              Connecting Indian talent with international employers.
            </h2>
            <p className="text-sm text-graphite-700 leading-relaxed font-sans">
              International recruitment takes more than sourcing a suitable profile. It requires clear job requirements, appropriate evaluation, transparent employment conditions, and coordination between employers, candidates, and relevant local partners.
            </p>
          </div>

          <HorizontalProcess />

          <div className="mt-8 text-right">
            <Link
              to="/approach"
              className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion inline-flex items-center gap-1 font-mono uppercase tracking-wider"
            >
              <span>Review Complete Recruiter-Led Methodology &rarr;</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5: INDUSTRIES SERVED (7 Industrial Sectors Grid)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-steel-300">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
                [OPERATIONAL SECTORS]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
                Supporting the industries that build, make, maintain, and move the world.
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0">
              Sector alignment tailored to technical plant standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-vellum-100 border border-steel-300 p-6 flex flex-col justify-between hover:border-castiron-DEFAULT transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono border-b border-steel-200 pb-2">
                    <span className="text-vermilion font-bold">{ind.code}</span>
                    <span className="text-graphite-400 uppercase text-[10px]">Sector Specification</span>
                  </div>
                  <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                    {ind.description}
                  </p>
                  
                  <div className="pt-3 border-t border-steel-200">
                    <p className="text-[10px] font-mono uppercase text-graphite-500 mb-1.5 font-semibold">
                      Target Technical Roles:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {ind.keyOccupations.slice(0, 3).map((occ) => (
                        <span
                          key={occ}
                          className="text-[11px] px-2 py-0.5 bg-white text-graphite-700 border border-steel-300 font-mono"
                        >
                          {occ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-steel-200 flex items-center justify-between font-mono">
                  <span className="text-[10px] text-graphite-500 italic truncate max-w-[170px]">
                    {ind.scopeNote}
                  </span>
                  <button
                    onClick={() => onOpenEmployerModal(ind.name)}
                    className="text-xs font-semibold text-castiron-DEFAULT hover:text-vermilion transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
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
          SECTION 6: WHY RAPIDHIRE (4 Core Principles)
         ======================================================== */}
      <section className="py-20 bg-vellum-100 border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
              [GOVERNANCE & PRINCIPLES]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT mb-3 tracking-tight">
              Recruitment is more than a shortlist.
            </h2>
            <p className="text-sm text-graphite-700 leading-relaxed font-sans">
              Reliable cross-border industrial staffing demands accountability both to the operating plant and to the deployed technical specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[PRINCIPLE 01]</span>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                Human Judgement Matters
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Technology can organize recruitment workflows, but seasoned recruiters must make informed qualitative decisions about hands-on suitability, trade skills, and candidate operational readiness.
              </p>
            </div>

            <div className="bg-white p-6 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[PRINCIPLE 02]</span>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                Candidate Experience First
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Candidates deserve absolute clarity on requirements, selection stages, communication, and workplace expectations before committing to international opportunities.
              </p>
            </div>

            <div className="bg-white p-6 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[PRINCIPLE 03]</span>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                Talent Pools Create Continuity
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                With appropriate candidate consent and data controls, qualified candidates can be indexed for future relevant recruitment requirements across international manufacturing clusters.
              </p>
            </div>

            <div className="bg-white p-6 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[PRINCIPLE 04]</span>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                Support Beyond Placement
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Rapidhire operates a dedicated 24/7 candidate-support service, according to its stated operating model, to help placed personnel raise operational concerns and seek assistance.
              </p>
            </div>

          </div>

          <div className="mt-8 p-4 bg-white border border-steel-300 text-xs text-graphite-600 font-mono">
            * Operational note: Concerns are handled through appropriate agreed channels and local host employer coordination.
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 7: CREDIBILITY & PROOF (Evidence-Backed Factuals)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-steel-300">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
                [STATUTORY STANDING & RECOGNITION]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
                Built on recruitment experience. Focused on fair practice.
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0 max-w-sm">
              All credentials stated subject to formal verification standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="bg-vellum-100 p-6 border border-steel-300 relative group hover:border-castiron-DEFAULT transition-colors"
              >
                <div className="inline-block px-2 py-0.5 bg-white text-castiron-DEFAULT font-mono text-[10px] uppercase font-bold border border-steel-300 mb-3">
                  {cred.badge}
                </div>
                <h3 className="text-sm font-bold text-castiron-DEFAULT mb-2">
                  {cred.title}
                </h3>
                <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                  {cred.detail}
                </p>
                <div className="pt-3 border-t border-steel-200 text-[10px] font-mono text-graphite-400">
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
          SECTION 8: EMPLOYER CONVERSION (Enterprise Requirement Intake)
         ======================================================== */}
      <section className="py-20 bg-[#101417] text-white border-b border-[#232B32] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [DIRECT WORKFORCE INTAKE]
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Tell us what your workforce needs to do. We'll start with the people you need.
              </h2>
              <p className="text-sm sm:text-base text-steel-300 leading-relaxed max-w-2xl font-sans">
                Share your hiring requirement, target location, occupation, and expected workforce size. Our team can review the brief and discuss a suitable recruitment approach.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-steel-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-vermilion" />
                  Engineering & Technical Specialisations
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-vermilion" />
                  Permanent & Project Deployments
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-vermilion" />
                  Recruiter-Led Verification
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono">
              <button
                onClick={() => onOpenEmployerModal()}
                className="w-full inline-flex items-center justify-center gap-2 bg-vermilion hover:bg-vermilion-hover text-white text-xs font-semibold px-6 py-4 transition-colors border border-vermilion-border shadow-sm uppercase tracking-wider"
              >
                <span>Submit a Workforce Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#171D21] hover:bg-[#232B32] text-steel-200 text-xs font-semibold px-6 py-4 border border-[#2B353D] transition-colors uppercase tracking-wider"
              >
                <span>Speak to Rapidhire</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: CANDIDATE GATEWAY
         ======================================================== */}
      <section className="py-16 bg-vellum-100 border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-steel-300 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
            <div className="max-w-2xl space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [FOR CANDIDATES & TRADES]
              </div>
              <h2 className="text-2xl font-bold text-castiron-DEFAULT tracking-tight">
                Your skills can take you further.
              </h2>
              <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
                Register your interest in engineering, manufacturing, technical, and skilled workforce opportunities. Share your experience and preferred career direction so Rapidhire can consider your profile for relevant opportunities.
              </p>
              <p className="text-[11px] text-graphite-500 font-mono pt-1">
                * Initial registration is free. Registration does not guarantee a job offer, interview, overseas placement, or immigration approval.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto font-mono">
              <button
                onClick={() => onOpenCandidateModal()}
                className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-6 py-3.5 bg-castiron-DEFAULT hover:bg-castiron-800 text-white transition-colors border border-castiron-900 shadow-sm"
              >
                Register Your Profile
              </button>
              <Link
                to="/opportunities"
                className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-5 py-3.5 border border-steel-300 text-castiron-DEFAULT hover:bg-vellum-50 text-center transition-colors"
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

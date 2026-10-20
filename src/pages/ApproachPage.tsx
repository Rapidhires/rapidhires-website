import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Headphones,
  Check
} from 'lucide-react';
import { HorizontalProcess } from '../components/IndustrialProcessDiagram';

interface ApproachPageProps {
  onOpenEmployerModal: () => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onOpenEmployerModal }) => {
  const comparisons = [
    {
      dimension: 'Core Business Focus',
      rapidhire: 'Industrial, engineering & manufacturing workforce recruitment solutions.',
      jobBoard: 'Advertising resume databases and generic digital job listings.',
      visaAgency: 'Immigration point calculations and visa application processing.'
    },
    {
      dimension: 'Candidate Fee Policy',
      rapidhire: 'Strict ZERO candidate placement fee policy. Fully employer-funded.',
      jobBoard: 'Often charges candidates for premium visibility or alerts.',
      visaAgency: 'Charges candidates substantial fees for documentation and advisory.'
    },
    {
      dimension: 'Skill Verification',
      rapidhire: 'Recruiter-led human review, trade credential audits & practical testing.',
      jobBoard: 'Automated keyword matching without technical validation.',
      visaAgency: 'Focuses on immigration points rather than hands-on machine competence.'
    },
    {
      dimension: 'Client Engagement',
      rapidhire: 'Defined employer mandates with technical specifications & job criteria.',
      jobBoard: 'Unfiltered high-volume candidate CV submissions.',
      visaAgency: 'Rarely coordinates direct plant employer requirements.'
    },
    {
      dimension: 'Post-Placement Care',
      rapidhire: '24/7 dedicated support channel for placed technical workforce.',
      jobBoard: 'Relationship terminates upon CV dispatch.',
      visaAgency: 'Relationship ends once visa decision is stamped.'
    }
  ];

  return (
    <div className="bg-vellum-100 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-[#101417] text-white py-14 lg:py-20 border-b border-[#232B32] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
              <span className="w-1.5 h-1.5 bg-vermilion"></span>
              <span>METHODOLOGY & FAIR PRACTICE CHARTER</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Recruiter-Led Sourcing & Fair Recruitment Practice
            </h1>
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-sans">
              Industrial operations cannot compromise on competence or safety. Our structured methodology pairs technology-assisted candidate identification with human recruiter judgement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Section 1: The 5-Stage Process Detail */}
        <section>
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [OPERATIONAL PHASES]
            </span>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 mb-2 tracking-tight">
              The 5-Stage Recruitment Sequence
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              From the initial technical brief in the employer's home country to post-placement operational support on the factory floor.
            </p>
          </div>

          <HorizontalProcess />
        </section>

        {/* Section 2: Why Human Judgement Matters */}
        <section className="bg-white p-8 sm:p-10 border border-steel-300 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [RECRUITMENT PHILOSOPHY]
              </span>
              <h2 className="text-2xl font-bold text-castiron-DEFAULT tracking-tight">
                Why Software Alone Cannot Qualify an Industrial Workforce
              </h2>
              <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed font-sans">
                An algorithm can match the acronym "CNC" or "6G" on a resume. It cannot determine whether a machinist understands Heidenhain vs Fanuc kinematic offsets, whether a welder can consistently produce radiographic-quality root passes in a restricted 6G pipe position, or whether an electrician is conversant with IEC 60364 insulation protocols.
              </p>
              <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed font-sans">
                At Rapidhire, open-source technology tools automate talent pool indexing, communication scheduling, and documentation tracking, freeing our experienced technical recruiters to conduct in-depth qualitative evaluation.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-graphite-600">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-vermilion" />
                  Trade Certificate Verification
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-vermilion" />
                  Machine Control Proficiency Checks
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-vermilion" />
                  Safety Culture Assessment
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-vellum-50 p-6 border border-steel-300 space-y-4 font-mono">
              <h4 className="text-xs uppercase font-bold text-castiron-DEFAULT tracking-wider border-b border-steel-300 pb-2">
                [RAPIDHIRE EVALUATION MATRIX]
              </h4>
              <div className="space-y-3 text-xs">
                <div className="bg-white p-3 border border-steel-300">
                  <strong className="text-castiron-DEFAULT block mb-1">1. Credential Audit</strong>
                  <span className="text-graphite-600 font-sans">Verification of ITI, NCVT, Polytechnic, or B.Tech degrees with issuing institutions and previous employers.</span>
                </div>
                <div className="bg-white p-3 border border-steel-300">
                  <strong className="text-castiron-DEFAULT block mb-1">2. Technical Dialogue</strong>
                  <span className="text-graphite-600 font-sans">Recruiter interviews probing hands-on machine maintenance, tooling tolerances, and blueprint reading.</span>
                </div>
                <div className="bg-white p-3 border border-steel-300">
                  <strong className="text-castiron-DEFAULT block mb-1">3. Practical Trade Testing</strong>
                  <span className="text-graphite-600 font-sans">Conducting physical trade tests at accredited Indian workshops for welders, fitters, and operators prior to client review.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comparative Distinction (Rapidhire vs Job Boards vs Visa Consultancies) */}
        <section>
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [MARKET CLARITY]
            </span>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 mb-2 tracking-tight">
              Understanding the Distinction: Rapidhire vs Others
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              Rapidhire is an industrial recruitment partner. We are neither an impersonal digital job board nor an immigration visa consultancy.
            </p>
          </div>

          <div className="bg-white border border-steel-300 overflow-x-auto shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#101417] text-white font-mono uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4 border-r border-[#1E252C]">Operating Dimension</th>
                  <th className="py-3 px-4 border-r border-[#1E252C] bg-vermilion text-white font-bold">
                    Rapidhire Model
                  </th>
                  <th className="py-3 px-4 border-r border-[#1E252C]">Generic Job Boards</th>
                  <th className="py-3 px-4">Immigration / Visa Consultancies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-300 font-sans text-graphite-700">
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-vellum-50'}>
                    <td className="py-4 px-4 font-semibold text-castiron-DEFAULT border-r border-steel-300 font-mono text-[11px]">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 font-medium text-castiron-DEFAULT bg-vermilion-light/20 border-r border-steel-300">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-vermilion shrink-0 mt-0.5" />
                        <span>{row.rapidhire}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-graphite-500 border-r border-steel-300">
                      {row.jobBoard}
                    </td>
                    <td className="py-4 px-4 text-graphite-500">
                      {row.visaAgency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Fair Recruitment Charter */}
        <section className="bg-white p-8 sm:p-10 border border-steel-300 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [ETHICAL RECRUITMENT CHARTER]
            </span>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 mb-2 tracking-tight">
              Our Fair Practice & Ethical Charter
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              Cross-border labor recruitment has historically suffered from predatory intermediaries. Rapidhire is committed to fair, transparent, and legally compliant international staffing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-vellum-50 p-5 border border-steel-300">
              <ShieldCheck className="w-6 h-6 text-vermilion mb-3" />
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-2">Zero Candidate Fees</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Candidates are never charged placement, interview, or processing fees. Rapidhire’s recruitment services are funded entirely by commissioning employers.
              </p>
            </div>

            <div className="bg-vellum-50 p-5 border border-steel-300">
              <Lock className="w-6 h-6 text-vermilion mb-3" />
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-2">Contract Transparency</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Prior to mobilization, every worker receives written terms specifying salary, overtime rates, deductions, accommodation standards, and health coverage in a language they comprehend.
              </p>
            </div>

            <div className="bg-vellum-50 p-5 border border-steel-300">
              <Headphones className="w-6 h-6 text-vermilion mb-3" />
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-2">24/7 Support Channel</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                A dedicated point of contact is accessible to placed workers to report irregularities, clarify site protocols, or seek assistance through agreed liaison channels.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center font-mono">
            <button
              onClick={onOpenEmployerModal}
              className="inline-flex items-center gap-2 bg-castiron-DEFAULT hover:bg-castiron-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 transition-colors border border-castiron-900 shadow-sm"
            >
              <span>Partner with an Ethical Recruitment Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ArrowRight, 
  UserCheck, 
  Compass, 
  AlertTriangle, 
  Lock, 
  Headphones,
  HelpCircle
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
    <div className="bg-warmwhite min-h-screen">
      
      {/* Page Header */}
      <section className="bg-[#172B3A] text-warmwhite py-14 lg:py-20 border-b border-[#303A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
              <span className="w-2 h-2 bg-industrial-orange"></span>
              METHODOLOGY & FAIR PRACTICE CHARTER
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Recruiter-Led Sourcing & Fair Recruitment Practice
            </h1>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed">
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
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Step-by-Step Delivery
            </span>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1 mb-2">
              The 5-Stage Recruitment Sequence
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
              From the initial technical brief in the employer's home country to post-placement operational support on the factory floor.
            </p>
          </div>

          <HorizontalProcess />
        </section>

        {/* Section 2: Why Human Judgement Matters */}
        <section className="bg-white p-8 sm:p-10 border border-steel-DEFAULT">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
                Recruitment Philosophy
              </span>
              <h2 className="text-2xl font-bold text-navy-DEFAULT">
                Why Software Alone Cannot Qualify an Industrial Workforce
              </h2>
              <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed">
                An algorithm can match the acronym "CNC" or "6G" on a resume. It cannot determine whether a machinist understands Heidenhain vs Fanuc kinematic offsets, whether a welder can consistently produce radiographic-quality root passes in a restricted 6G pipe position, or whether an electrician is conversant with IEC 60364 insulation protocols.
              </p>
              <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed">
                At Rapidhire, open-source technology tools automate talent pool indexing, communication scheduling, and documentation tracking, freeing our experienced technical recruiters to conduct in-depth qualitative evaluation.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-graphite-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Trade Certificate Verification
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Machine Control Proficiency Checks
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Safety Culture Assessment
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-warmwhite p-6 border border-steel-DEFAULT space-y-4">
              <h4 className="text-xs font-mono uppercase font-bold text-navy-DEFAULT tracking-wider border-b border-steel-DEFAULT pb-2">
                Rapidhire Evaluation Matrix
              </h4>
              <div className="space-y-3 text-xs">
                <div className="bg-white p-3 border border-steel-DEFAULT">
                  <strong className="text-navy-DEFAULT block mb-1">1. Credential Audit</strong>
                  <span className="text-graphite-600">Verification of ITI, NCVT, Polytechnic, or B.Tech degrees with issuing institutions and previous employers.</span>
                </div>
                <div className="bg-white p-3 border border-steel-DEFAULT">
                  <strong className="text-navy-DEFAULT block mb-1">2. Technical Dialogue</strong>
                  <span className="text-graphite-600">Recruiter interviews probing hands-on machine maintenance, tooling tolerances, and blueprint reading.</span>
                </div>
                <div className="bg-white p-3 border border-steel-DEFAULT">
                  <strong className="text-navy-DEFAULT block mb-1">3. Practical Trade Testing</strong>
                  <span className="text-graphite-600">Conducting physical trade tests at accredited Indian workshops for welders, fitters, and operators prior to client review.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comparative Distinction (Rapidhire vs Job Boards vs Visa Consultancies) */}
        <section>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Market Clarity
            </span>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1 mb-2">
              Understanding the Distinction: Rapidhire vs Others
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
              Rapidhire is an industrial recruitment partner. We are neither an impersonal digital job board nor an immigration visa consultancy.
            </p>
          </div>

          <div className="bg-white border border-steel-DEFAULT overflow-x-auto shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#172B3A] text-white font-mono uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4 border-r border-navy-700">Operating Dimension</th>
                  <th className="py-3 px-4 border-r border-navy-700 bg-industrial-orange text-white">
                    Rapidhire Model
                  </th>
                  <th className="py-3 px-4 border-r border-navy-700">Generic Job Boards</th>
                  <th className="py-3 px-4">Immigration / Visa Consultancies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-DEFAULT font-sans text-graphite-700">
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-warmwhite'}>
                    <td className="py-4 px-4 font-semibold text-navy-DEFAULT border-r border-steel-DEFAULT">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 font-medium text-navy-DEFAULT bg-industrial-orange-light/20 border-r border-steel-DEFAULT">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-industrial-orange shrink-0 mt-0.5" />
                        <span>{row.rapidhire}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-graphite-500 border-r border-steel-DEFAULT">
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
        <section className="bg-steel-100 p-8 sm:p-10 border border-steel-DEFAULT">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Ethical Standard
            </span>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1 mb-2">
              Our Fair Practice & Ethical Charter
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
              Cross-border labor recruitment has historically suffered from predatory intermediaries. Rapidhire is committed to fair, transparent, and legally compliant international staffing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 border border-steel-DEFAULT">
              <ShieldCheck className="w-6 h-6 text-industrial-orange mb-3" />
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-2">Zero Candidate Fees</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Candidates are never charged placement, interview, or processing fees. Rapidhire’s recruitment services are funded entirely by commissioning employers.
              </p>
            </div>

            <div className="bg-white p-5 border border-steel-DEFAULT">
              <Lock className="w-6 h-6 text-industrial-orange mb-3" />
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-2">Contract Transparency</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Prior to mobilization, every worker receives written terms specifying salary, overtime rates, deductions, accommodation standards, and health coverage in a language they comprehend.
              </p>
            </div>

            <div className="bg-white p-5 border border-steel-DEFAULT">
              <Headphones className="w-6 h-6 text-industrial-orange mb-3" />
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-2">24/7 Support Channel</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                A dedicated point of contact is accessible to placed workers to report irregularities, clarify site protocols, or seek assistance through agreed liaison channels.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenEmployerModal}
              className="inline-flex items-center gap-2 bg-navy-DEFAULT hover:bg-navy-800 text-white text-xs font-semibold px-6 py-3.5 transition-colors border border-navy-900 shadow-sm"
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

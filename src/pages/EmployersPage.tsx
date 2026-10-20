import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Users, 
  FileText, 
  Settings, 
  HardHat,
  ChevronRight
} from 'lucide-react';
import { EmployerEnquiryForm } from '../components/EmployerEnquiryForm';

export const EmployersPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preselectedFromUrl = searchParams.get('occupation') || '';

  const [selectedSolution, setSelectedSolution] = useState<string>('all');

  const solutions = [
    {
      id: 'permanent',
      title: 'Permanent Engineering Recruitment',
      scope: 'Key Technical & Staff Appointments',
      description: 'Retained or contingency search for degree-qualified mechanical, electrical, civil, and quality engineers to strengthen core plant operations and design departments.',
      suitableFor: 'Mid-to-senior technical professionals, project engineers, and technical leads.'
    },
    {
      id: 'technical-trades',
      title: 'Skilled Trades & Specialized Crafts',
      scope: 'Certified Craftsmen Mobilisation',
      description: 'Recruitment of certified welders (6G / TIG / MIG), high-pressure pipe fitters, industrial electricians, and millwright fitters for workshop or plant deployments.',
      suitableFor: 'Fabrication shops, petrochemical turnaround crews, and industrial contractors.'
    },
    {
      id: 'mfg-production',
      title: 'Manufacturing & Production Hiring',
      scope: 'Shop-Floor Machinery Specialists',
      description: 'Sourcing CNC machinists (3/4/5-axis), precision turners, assembly technicians, and production shift supervisors for continuous manufacturing facilities.',
      suitableFor: 'Automotive tier-1/tier-2 suppliers, precision machining facilities, and component makers.'
    },
    {
      id: 'bulk-project',
      title: 'Bulk & Project Workforce Mobilisation',
      scope: 'Coordinated Shift Crews & Teams',
      description: 'Recruiting and mobilizing coordinated cohorts of industrial workers, riggers, scaffolders, and equipment operators for major infrastructure and EPC projects.',
      suitableFor: 'Industrial plant erection, annual turnaround maintenance, and capital expansions.'
    },
    {
      id: 'workflow-support',
      title: 'Recruitment Workflow & Screening Support',
      scope: 'Technical Assessment Coordination',
      description: 'Assisting international hiring teams with initial skills verification, documentation audits, trade testing logistics, and candidate readiness briefings.',
      suitableFor: 'International recruitment departments seeking dedicated on-the-ground support in India.'
    }
  ];

  const stages = [
    {
      number: '01',
      title: 'Requirement Briefing',
      detail: 'Confirm job roles, machine and technical skills, qualifications, employment conditions, deployment location, volume, and mobilisation timeline.'
    },
    {
      number: '02',
      title: 'Sourcing Strategy',
      detail: 'Identify appropriate regional industrial clusters, polytechnic institutions, trade test centers, and pre-screened talent pools in India.'
    },
    {
      number: '03',
      title: 'Screening & Shortlist',
      detail: 'Conduct recruiter-led human evaluation, experience cross-checks, qualification validation, and role-specific candidate assessments.'
    },
    {
      number: '04',
      title: 'Interview & Selection Coordination',
      detail: 'Deliver structured profile dossiers, coordinate remote or on-site practical trade testing, and document employer feedback.'
    },
    {
      number: '05',
      title: 'Mobilisation & Follow-Up',
      detail: 'Coordinate agreed candidate readiness protocols, safety briefing documentation, and post-placement communication within contract scope.'
    }
  ];

  return (
    <div className="bg-warmwhite min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#172B3A] text-warmwhite py-14 lg:py-20 border-b border-[#303A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
              <span className="w-2 h-2 bg-industrial-orange"></span>
              B2B WORKFORCE RECRUITMENT SOLUTIONS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Hire Engineering, Manufacturing & Skilled Workforce from India
            </h1>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed">
              Rapidhire works with employers to define recruitment requirements and identify suitable engineering professionals, technicians, skilled tradespeople, and industrial workforce candidates from India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: Hiring Solutions */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-steel-DEFAULT">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
                Tailored Engagement Models
              </span>
              <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1">
                Recruitment Solutions Built Around Industrial Operations
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 max-w-sm mt-2 md:mt-0">
              Selectable service models. Commercial scope and regulatory compliance confirmed prior to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, index) => (
              <div
                key={sol.id}
                className="bg-white p-6 border border-steel-DEFAULT flex flex-col justify-between hover:border-navy-DEFAULT transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-graphite-400 mb-3">
                    <span className="px-2 py-0.5 bg-steel-100 text-navy-DEFAULT font-bold border border-steel-DEFAULT">
                      {sol.scope}
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                    {sol.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-steel-100">
                  <p className="text-[11px] font-mono text-graphite-500">
                    <strong className="text-navy-DEFAULT">Typical Scope:</strong> {sol.suitableFor}
                  </p>
                </div>
              </div>
            ))}

            {/* Verification callout card */}
            <div className="bg-[#172B3A] text-warmwhite p-6 border border-[#303A42] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-industrial-orange block mb-2">
                  Operating Capacity & Compliance
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Structured Service Agreements
                </h3>
                <p className="text-xs text-steel-300 leading-relaxed">
                  Before confirming delivery commitments, Rapidhire conducts a feasibility review confirming candidate availability in India, skill requirements, destination statutory standards, and employer sponsor readiness.
                </p>
              </div>
              <div className="pt-4 border-t border-navy-800 text-[11px] font-mono text-steel-400">
                &bull; Transparent contracts &bull; Zero worker fee charter
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How We Work With Employers (5 Stages) */}
        <section className="mb-20 bg-white p-8 sm:p-10 border border-steel-DEFAULT">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Five-Stage Engagement Model
            </span>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1 mb-2">
              How We Work with Employers
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
              Every recruitment engagement follows a transparent, documented sequence designed to preserve candidate quality and eliminate operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {stages.map((stg) => (
              <div
                key={stg.number}
                className="p-4 bg-warmwhite border border-steel-DEFAULT flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-mono font-bold text-industrial-orange mb-2">
                    STAGE {stg.number}
                  </div>
                  <h4 className="text-xs font-bold text-navy-DEFAULT uppercase tracking-wider mb-2">
                    {stg.title}
                  </h4>
                  <p className="text-xs text-graphite-600 leading-relaxed">
                    {stg.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-steel-DEFAULT flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-graphite-600 font-mono">
            <span>&bull; Full documentation audit trail maintained per candidate dossier</span>
            <span className="text-industrial-orange font-semibold">Recruiter-Assisted Quality Assurance</span>
          </div>
        </section>

        {/* Section 3: The Employer Enquiry Form */}
        <section id="enquiry-form" className="max-w-4xl mx-auto">
          <EmployerEnquiryForm initialOccupation={preselectedFromUrl} />
        </section>

      </div>
    </div>
  );
};

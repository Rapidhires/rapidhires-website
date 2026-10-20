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

  const solutions = [
    {
      id: 'permanent',
      code: 'SOL-01',
      title: 'Permanent Engineering Recruitment',
      scope: 'Key Technical & Staff Appointments',
      description: 'Retained or contingency search for degree-qualified mechanical, electrical, civil, and quality engineers to strengthen core plant operations, R&D, and engineering departments.',
      suitableFor: 'Mid-to-senior technical professionals, project engineers, and discipline leads.'
    },
    {
      id: 'technical-trades',
      code: 'SOL-02',
      title: 'Skilled Trades & Specialized Crafts',
      scope: 'Certified Craftsmen Mobilisation',
      description: 'Recruitment of certified welders (6G / TIG / MIG), high-pressure pipe fitters, industrial electricians, and millwright fitters for workshop or plant deployments.',
      suitableFor: 'Fabrication facilities, petrochemical shutdown turnarounds, and industrial contractors.'
    },
    {
      id: 'mfg-production',
      code: 'SOL-03',
      title: 'Manufacturing & Production Hiring',
      scope: 'Shop-Floor Machinery Specialists',
      description: 'Sourcing CNC machinists (3/4/5-axis), precision turners, assembly technicians, and production shift supervisors for continuous manufacturing facilities.',
      suitableFor: 'Automotive tier-1/tier-2 suppliers, precision machining facilities, and component makers.'
    },
    {
      id: 'bulk-project',
      code: 'SOL-04',
      title: 'Bulk & Project Workforce Mobilisation',
      scope: 'Coordinated Shift Crews & Teams',
      description: 'Recruiting and mobilizing coordinated cohorts of industrial workers, riggers, scaffolders, and equipment operators for major infrastructure and EPC projects.',
      suitableFor: 'Industrial plant erection, annual turnaround maintenance, and capital expansions.'
    },
    {
      id: 'workflow-support',
      code: 'SOL-05',
      title: 'Recruitment Workflow & Screening Support',
      scope: 'Technical Assessment Coordination',
      description: 'Assisting international hiring teams with initial skills verification, documentation audits, trade testing logistics, and candidate readiness briefings.',
      suitableFor: 'International recruitment departments seeking dedicated on-the-ground support in India.'
    },
    {
      id: 'it-software-europe',
      code: 'SOL-06',
      title: 'European IT & Software Engineering',
      scope: 'EU Blue Card Fast-Track Only',
      description: 'Sourcing senior embedded software (AUTOSAR, CAN/LIN), industrial cloud/DevOps, smart factory MES, and robotics engineers exclusively for European industrial deployments.',
      suitableFor: 'German, Polish, and Central European automotive OEMs, Tier-1 suppliers, and robotics automation plants.'
    },
    {
      id: 'japan-bridge',
      code: 'SOL-07',
      title: 'Japan Bridge Co-Creation Pilots',
      scope: 'Bilingual Technical Pathway',
      description: 'Structured 4-stage recruitment pilot for Japanese mobility, precision tooling, and transport manufacturers in Hamamatsu, Shizuoka and industrial prefectures, with shared responsibility model.',
      suitableFor: 'Japanese manufacturing enterprises (自動車・工作機械・輸送機器) seeking vetted bilingual Indian engineers.'
    }
  ];

  const stages = [
    {
      number: '01',
      code: 'SPEC-LOCK',
      title: 'Requirement Briefing',
      detail: 'Confirm job roles, machine and technical skills, qualifications, employment conditions, deployment location, volume, and mobilisation timeline.'
    },
    {
      number: '02',
      code: 'SOURCING',
      title: 'Sourcing Strategy',
      detail: 'Identify appropriate regional industrial clusters, polytechnic institutions, trade test centers, and pre-screened talent pools in India.'
    },
    {
      number: '03',
      code: 'VETTING',
      title: 'Screening & Shortlist',
      detail: 'Conduct recruiter-led human evaluation, experience cross-checks, qualification validation, and role-specific candidate assessments.'
    },
    {
      number: '04',
      code: 'TESTING',
      title: 'Interview & Trade Testing',
      detail: 'Deliver structured profile dossiers, coordinate remote or on-site practical trade testing, and document employer feedback.'
    },
    {
      number: '05',
      code: 'DEPLOY',
      title: 'Mobilisation & Follow-Up',
      detail: 'Coordinate agreed candidate readiness protocols, safety briefing documentation, and post-placement communication within contract scope.'
    }
  ];

  return (
    <div className="bg-vellum-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#101417] text-white py-14 lg:py-20 border-b border-[#232B32] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
              <span className="w-1.5 h-1.5 bg-vermilion"></span>
              <span>B2B WORKFORCE RECRUITMENT SOLUTIONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Hire Engineering, Manufacturing & Skilled Workforce from India
            </h1>
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-sans">
              Rapidhire works with employers to define recruitment requirements and identify suitable engineering professionals, technicians, skilled tradespeople, and industrial workforce candidates from India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: Hiring Solutions */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-steel-300">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [SERVICE SPECIFICATIONS]
              </span>
              <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 tracking-tight">
                Recruitment Solutions Built Around Industrial Operations
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 max-w-sm mt-2 md:mt-0">
              Selectable service models. Commercial scope and regulatory compliance confirmed prior to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="bg-white p-6 border border-steel-300 flex flex-col justify-between hover:border-castiron-DEFAULT transition-all group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-graphite-400 mb-3 border-b border-steel-200 pb-2">
                    <span className="px-2 py-0.5 bg-steel-100 text-castiron-DEFAULT font-bold border border-steel-300">
                      {sol.scope}
                    </span>
                    <span className="text-vermilion font-bold">{sol.code}</span>
                  </div>
                  <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4 font-sans">
                    {sol.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-steel-200 font-mono">
                  <p className="text-[11px] text-graphite-500">
                    <strong className="text-castiron-DEFAULT">Target Operational Scope:</strong> {sol.suitableFor}
                  </p>
                </div>
              </div>
            ))}

            {/* Verification callout card */}
            <div className="bg-[#101417] text-white p-6 border border-[#232B32] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-vermilion block mb-2 font-bold">
                  [COMPLIANCE & CAPACITY CLEARANCE]
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Structured Service Agreements
                </h3>
                <p className="text-xs text-steel-300 leading-relaxed font-sans">
                  Before confirming delivery commitments, Rapidhire conducts a feasibility review confirming candidate availability in India, skill requirements, destination statutory standards, and employer sponsor readiness.
                </p>
              </div>
              <div className="pt-4 border-t border-[#1E252C] text-[11px] font-mono text-steel-400">
                &bull; Transparent contracts &bull; Zero worker fee charter
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How We Work With Employers (5 Stages) */}
        <section className="mb-20 bg-white p-8 sm:p-10 border border-steel-300 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [ENGAGEMENT FRAMEWORK]
            </span>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 mb-2 tracking-tight">
              How We Work with Employers
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              Every recruitment engagement follows a transparent, documented sequence designed to preserve candidate quality and eliminate operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 border border-steel-300 divide-y md:divide-y-0 md:divide-x divide-steel-300 bg-vellum-50">
            {stages.map((stg) => (
              <div
                key={stg.number}
                className="p-5 flex flex-col justify-between hover:bg-white transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-steel-500 mb-2 border-b border-steel-200 pb-1.5">
                    <span className="font-bold text-vermilion">STAGE {stg.number}</span>
                    <span className="text-[10px] uppercase text-graphite-400">{stg.code}</span>
                  </div>
                  <h4 className="text-xs font-bold text-castiron-DEFAULT uppercase tracking-wider mb-2 font-mono">
                    {stg.title}
                  </h4>
                  <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                    {stg.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-steel-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-graphite-600 font-mono">
            <span>&bull; Full documentation audit trail maintained per candidate dossier</span>
            <span className="text-vermilion font-semibold">Recruiter-Assisted Quality Assurance</span>
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

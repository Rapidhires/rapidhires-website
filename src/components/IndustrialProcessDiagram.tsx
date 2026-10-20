import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export const HorizontalProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement Definition',
      subtitle: 'Technical Scope & Profile Confirmation',
      detail: 'Confirm job roles, machine/tool specifications, required certifications (e.g. ASME, AWS, ISO), volume, timeline, and employment terms directly with the employer.'
    },
    {
      num: '02',
      title: 'Targeted Talent Sourcing',
      subtitle: 'Structured Outreach in India',
      detail: 'Source verified candidates across regional industrial clusters, polytechnics, technical alumni networks, and proprietary pre-screened talent pools.'
    },
    {
      num: '03',
      title: 'Recruiter-Led Evaluation',
      subtitle: 'Rigorous Human Verification',
      detail: 'Conduct multi-point vetting: trade skill verification, technical questionnaires, documentation checks, and candidate readiness assessment.'
    },
    {
      num: '04',
      title: 'Interviews & Readiness',
      subtitle: 'Client Evaluation & Testing',
      detail: 'Coordinate virtual or practical trade-test interviews, document employer feedback, and align candidate readiness with agreed client standards.'
    },
    {
      num: '05',
      title: 'Mobilisation & Follow-Up',
      subtitle: 'Structured Onboarding & 24/7 Care',
      detail: 'Facilitate transparent candidate communications, briefing packs, and post-placement follow-up via Rapidhire’s 24/7 candidate support channel.'
    }
  ];

  return (
    <div className="w-full">
      {/* 5-step grid on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className="bg-white border border-steel-DEFAULT p-5 relative flex flex-col justify-between hover:border-graphite-600 transition-colors group"
          >
            {/* Top step counter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-steel-100 text-graphite border border-steel-DEFAULT group-hover:bg-industrial-orange group-hover:text-white transition-colors">
                  STAGE {step.num}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-steel-400 group-hover:text-industrial-orange group-hover:translate-x-0.5 transition-all" />
                )}
              </div>
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-1 leading-snug">
                {step.title}
              </h4>
              <p className="text-[11px] font-mono text-industrial-orange font-medium mb-2.5">
                {step.subtitle}
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed">
                {step.detail}
              </p>
            </div>

            {/* Bottom geometric indicator line */}
            <div className="mt-4 pt-3 border-t border-steel-100 flex items-center gap-1.5 text-[10px] font-mono text-graphite-400">
              <span className="w-1.5 h-1.5 rounded-full bg-steel-400"></span>
              <span>Verification Milestone {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Regulatory & Compliance Clarification Callout */}
      <div className="mt-6 p-4 bg-steel-100 border-l-4 border-industrial-orange text-xs text-graphite-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-navy-DEFAULT">Jurisdiction Compliance:</strong> Destination-specific employment eligibility, immigration procedures, trade test certifications, and visa documentation depend strictly on the role, employer sponsorship, destination nation, and applicable statutory regulations. Rapidhire is an industrial workforce recruitment company, not an immigration advisory or visa consultancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export const SourcingToSelectionDiagram: React.FC = () => {
  const capabilities = [
    {
      title: 'Targeted Sourcing',
      badge: 'Cluster-Based Outreach',
      desc: 'Identify qualified candidates against defined technical job requirements rather than relying on undirected, generic CV volumes.'
    },
    {
      title: 'Recruiter-Led Evaluation',
      badge: 'Human Technical Review',
      desc: 'Conduct detailed recruiter screening, verifiable experience checks, trade certifications, and structured competency evaluations.'
    },
    {
      title: 'Flexible Hiring Scope',
      badge: 'Custom Mobilisation',
      desc: 'Support requirements ranging from key individual engineers to complete shift crews, shutdown teams, and large project mobilisations.'
    },
    {
      title: 'Candidate Coordination & Care',
      badge: 'Post-Placement Continuity',
      desc: 'Keep candidates transparently informed throughout selection and provide post-placement follow-up through our 24/7 candidate support channel.'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {capabilities.map((cap, i) => (
        <div
          key={cap.title}
          className="bg-white p-5 border border-steel-DEFAULT border-l-2 border-l-navy-DEFAULT hover:border-l-industrial-orange transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-500 bg-steel-100 px-2 py-0.5 border border-steel-DEFAULT">
              {cap.badge}
            </span>
            <span className="font-mono text-xs text-steel-400">0{i + 1}</span>
          </div>
          <h4 className="text-sm font-bold text-navy-DEFAULT mb-1.5">
            {cap.title}
          </h4>
          <p className="text-xs text-graphite-600 leading-relaxed">
            {cap.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

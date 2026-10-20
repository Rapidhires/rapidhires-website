import React from 'react';
import { ArrowRight, ShieldAlert, Check } from 'lucide-react';

export const HorizontalProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      code: 'SPEC-LOCK',
      title: 'Requirement Briefing',
      subtitle: 'Technical Scope & Profile Confirmation',
      detail: 'Confirm exact machine controls (e.g. Fanuc/Heidenhain), welding codes (ASME Sec IX, AWS D1.1), tolerance thresholds, shift schedules, living conditions, and statutory host country requirements.'
    },
    {
      num: '02',
      code: 'CLUSTER-MAP',
      title: 'Targeted Talent Sourcing',
      subtitle: 'Structured Outreach across India',
      detail: 'Source verified candidates across designated Indian engineering clusters, polytechnic alumni networks, accredited trade centers, and proprietary pre-screened talent pools.'
    },
    {
      num: '03',
      code: 'QUAL-AUDIT',
      title: 'Recruiter-Led Evaluation',
      subtitle: 'Human Trade Vetting & Verification',
      detail: 'Conduct in-depth human qualification audits: diploma authentication, verifiable experience cross-checks, technical dialogue, and practical trade testing at partner workshops.'
    },
    {
      num: '04',
      code: 'CLIENT-EVAL',
      title: 'Interviews & Readiness',
      subtitle: 'Client Evaluation & Testing Logistics',
      detail: 'Coordinate virtual interviews or on-site practical coupon assessments, document employer evaluations, and prepare candidate documentation dossiers.'
    },
    {
      num: '05',
      code: 'POST-DEPLOY',
      title: 'Mobilisation & Follow-Up',
      subtitle: 'Structured Onboarding & 24/7 Care',
      detail: 'Facilitate pre-departure safety briefings, transparent employment contract execution, and ongoing post-placement support via Rapidhire’s 24/7 candidate assistance channel.'
    }
  ];

  return (
    <div className="w-full">
      {/* 5-stage schematic grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 border border-steel-300 divide-y md:divide-y-0 md:divide-x divide-steel-300 bg-white">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className="p-5 flex flex-col justify-between hover:bg-vellum-50 transition-colors group relative"
          >
            {/* Top metadata strip */}
            <div>
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono border-b border-steel-200 pb-2">
                <span className="font-bold text-castiron-DEFAULT bg-steel-100 px-1.5 py-0.5 border border-steel-300 group-hover:bg-castiron-DEFAULT group-hover:text-white transition-colors">
                  STAGE {step.num}
                </span>
                <span className="text-steel-500 uppercase tracking-wider text-[10px]">
                  {step.code}
                </span>
              </div>
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-1 leading-snug">
                {step.title}
              </h4>
              <p className="text-[11px] font-mono text-vermilion font-medium mb-2.5">
                {step.subtitle}
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                {step.detail}
              </p>
            </div>

            {/* Bottom datum footer */}
            <div className="mt-5 pt-3 border-t border-steel-200 flex items-center justify-between text-[10px] font-mono text-steel-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-vermilion"></span>
                <span>Gate {idx + 1} Cleared</span>
              </span>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-3.5 h-3.5 text-steel-400 group-hover:text-vermilion group-hover:translate-x-0.5 transition-all" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Regulatory & Compliance Clarification Callout */}
      <div className="mt-6 p-4 bg-white border border-steel-300 border-l-4 border-l-vermilion text-xs text-graphite-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
          <p className="leading-relaxed font-sans">
            <strong className="text-castiron-DEFAULT font-mono uppercase tracking-wider text-[11px]">Jurisdiction Compliance Protocol:</strong> Destination-specific work authorization, trade certifications, immigration documentation, and employment eligibility depend strictly on the role, employer sponsorship, destination nation, and applicable statutory regulations. Rapidhire is an industrial workforce recruitment company, not an immigration advisory or visa consultancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export const SourcingToSelectionDiagram: React.FC = () => {
  const capabilities = [
    {
      code: 'CAP-01',
      title: 'Targeted Cluster Sourcing',
      badge: 'Cluster-Based Outreach',
      desc: 'Identify qualified candidates against defined technical job requirements rather than relying on undirected, generic CV volumes.'
    },
    {
      code: 'CAP-02',
      title: 'Recruiter-Led Qualitative Evaluation',
      badge: 'Human Technical Review',
      desc: 'Conduct detailed recruiter screening, verifiable experience checks, trade certifications, and structured competency evaluations.'
    },
    {
      code: 'CAP-03',
      title: 'Flexible Mobilisation Scope',
      badge: 'Custom Team Sizing',
      desc: 'Support requirements ranging from key individual engineers to complete shift crews, shutdown teams, and large project mobilisations.'
    },
    {
      code: 'CAP-04',
      title: 'Candidate Coordination & Post-Placement Care',
      badge: 'Operational Continuity',
      desc: 'Keep candidates transparently informed throughout selection and provide post-placement follow-up through our 24/7 candidate support channel.'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {capabilities.map((cap) => (
        <div
          key={cap.title}
          className="bg-white p-5 border border-steel-300 border-l-2 border-l-castiron-DEFAULT hover:border-l-vermilion transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-500 bg-steel-100 px-2 py-0.5 border border-steel-300">
              {cap.badge}
            </span>
            <span className="font-mono text-xs text-steel-500">{cap.code}</span>
          </div>
          <h4 className="text-sm font-bold text-castiron-DEFAULT mb-1.5">
            {cap.title}
          </h4>
          <p className="text-xs text-graphite-600 leading-relaxed font-sans">
            {cap.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

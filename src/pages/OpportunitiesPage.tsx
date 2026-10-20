import React, { useState } from 'react';
import { VACANCIES, Vacancy } from '../data/vacancies';
import { CandidateRegistrationForm } from '../components/CandidateRegistrationForm';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Search
} from 'lucide-react';

interface OpportunitiesPageProps {
  onOpenCandidateModal: (preselectedVacancyId?: string, preselectedVacancyTitle?: string) => void;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({
  onOpenCandidateModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVacancyForForm, setSelectedVacancyForForm] = useState<Vacancy | null>(null);

  const countries = ['All', 'Germany', 'United Arab Emirates', 'Saudi Arabia', 'Poland'];
  const categories = ['All', 'Engineering', 'Manufacturing', 'Skilled Trades', 'Maintenance & Technical'];

  const filteredVacancies = VACANCIES.filter((v) => {
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.roleSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.reference.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCountry =
      selectedCountry === 'All' || v.destinationCountry === selectedCountry;

    const matchesCat =
      selectedCategory === 'All' || v.category === selectedCategory;

    return matchesSearch && matchesCountry && matchesCat;
  });

  return (
    <div className="bg-vellum-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#101417] text-white py-14 lg:py-20 border-b border-[#232B32] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
              <span className="w-1.5 h-1.5 bg-vermilion"></span>
              <span>INTERNATIONAL CANDIDATE CAREER GATEWAY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Build Your Career Beyond Borders
            </h1>
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-sans">
              Explore verified international opportunities in engineering, manufacturing, skilled trades, and technical work. Register your skills and experience so Rapidhire can assess your profile against suitable recruitment requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Anti-exploitation & Transparency Charter Banner */}
        <div className="mb-12 p-4 bg-white border-l-4 border-vermilion border border-steel-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
            <div className="text-xs text-graphite-700 leading-relaxed font-sans">
              <strong className="text-castiron-DEFAULT font-mono uppercase tracking-wider text-[11px]">Fair Recruitment Standard:</strong> Rapidhire does not charge candidates recruitment fees, security deposits, or interview fees. Overseas work eligibility and visa issuance are determined solely by sovereign destination immigration authorities and verified employer sponsors.
            </div>
          </div>
          <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 bg-steel-100 text-castiron-DEFAULT border border-steel-300 uppercase tracking-wider">
            Zero Placement Fee Policy
          </span>
        </div>

        {/* Section 1: Browse Verified Opportunities */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-steel-300">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
                [CLIENT MANDATES]
              </span>
              <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 tracking-tight">
                Verified Active Requirements
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0">
              Only genuine, client-approved opportunities are published below.
            </p>
          </div>

          {/* Vacancy Filter Toolbar */}
          <div className="bg-white p-4 border border-steel-300 mb-8 grid grid-cols-1 md:grid-cols-3 gap-3 font-mono shadow-sm">
            <div className="relative">
              <Search className="w-4 h-4 text-graphite-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vacancies by title or reference..."
                className="w-full text-xs pl-9 pr-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
              />
            </div>

            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
              >
                <option value="All">All Destination Countries</option>
                <option value="Germany">Germany</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Poland">Poland</option>
              </select>
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
              >
                <option value="All">All Functional Categories</option>
                <option value="Engineering">Engineering</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Skilled Trades">Skilled Trades</option>
                <option value="Maintenance & Technical">Maintenance & Technical</option>
              </select>
            </div>
          </div>

          {/* Vacancies List or Required Empty State */}
          {filteredVacancies.length === 0 ? (
            <div className="bg-white p-12 border border-steel-300 text-center max-w-xl mx-auto my-8 shadow-sm font-mono">
              <div className="text-xs text-vermilion uppercase font-bold mb-2">[ZERO ACTIVE MATCHES]</div>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
                No active opportunities are published here at present.
              </h3>
              <p className="text-xs text-graphite-600 mb-6 leading-relaxed font-sans">
                Register your profile to express interest in relevant future requirements. Rapidhire regularly reviews talent registrations against new international client briefs.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCountry('All');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-semibold uppercase tracking-wider px-4 py-2 border border-steel-300 text-castiron-DEFAULT hover:bg-vellum-50"
                >
                  Clear Filters
                </button>
                <a
                  href="#registration-form"
                  className="text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-vermilion text-white hover:bg-vermilion-hover"
                >
                  Register Profile Now
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredVacancies.map((vac) => (
                <div
                  key={vac.id}
                  className="bg-white border border-steel-300 p-6 sm:p-8 hover:border-castiron-DEFAULT transition-all shadow-sm"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
                        <span className="px-2 py-0.5 bg-steel-100 text-castiron-DEFAULT border border-steel-300 font-bold">
                          {vac.reference}
                        </span>
                        <span className="text-steel-600 bg-steel-100 px-2 py-0.5 border border-steel-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-vermilion" />
                          {vac.verifiedStatus}
                        </span>
                        <span className="text-graphite-500 uppercase">
                          {vac.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-castiron-DEFAULT tracking-tight font-sans">
                        {vac.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-graphite-600 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-vermilion" />
                          {vac.workLocation}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-steel-500" />
                          {vac.employmentType}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-steel-500" />
                          Deadline: {vac.applicationDeadline}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 font-mono">
                      <button
                        onClick={() => {
                          setSelectedVacancyForForm(vac);
                          const el = document.getElementById('registration-form');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-castiron-DEFAULT hover:bg-castiron-800 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 transition-colors border border-castiron-900"
                      >
                        <span>Apply / Register Interest</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-graphite-700 leading-relaxed mb-4 font-sans">
                    {vac.roleSummary}
                  </p>

                  <div className="mb-4 pt-3 border-t border-steel-200">
                    <p className="text-[11px] font-mono uppercase text-graphite-500 mb-2 font-semibold">
                      Primary Operational Duties:
                    </p>
                    <ul className="text-xs text-graphite-600 space-y-1 list-disc pl-4 font-sans">
                      {vac.duties.map((duty, idx) => (
                        <li key={idx}>{duty}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-vellum-50 border border-steel-300 text-xs font-mono text-graphite-600">
                    <div>
                      <span className="block text-[10px] text-graphite-400 uppercase">Experience Required</span>
                      <span className="font-semibold text-castiron-DEFAULT">{vac.experienceRequired}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-graphite-400 uppercase">Qualification</span>
                      <span className="font-semibold text-castiron-DEFAULT">{vac.qualificationRequired}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-graphite-400 uppercase">Language Proficiency</span>
                      <span className="font-semibold text-castiron-DEFAULT">{vac.languageRequirements}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-graphite-500 pt-2 border-t border-steel-200">
                    <span>Remuneration: {vac.salaryAndBenefits}</span>
                    <span className="italic">Client: {vac.employerName}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 2: How Candidate Communication & Support Works */}
        <section className="mb-20 bg-white p-8 sm:p-10 border border-steel-300 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [CANDIDATE SUPPORT PROTOCOL]
            </span>
            <h2 className="text-2xl font-bold text-castiron-DEFAULT mt-1 mb-2 tracking-tight">
              How Candidate Communication & 24/7 Support Work
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              We believe technical candidates deserve respect, transparency, and ongoing support throughout recruitment and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-vellum-50 p-5 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[STAGE 01]</span>
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-1.5">Direct Recruiter Feedback</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                If your profile is shortlisted for an employer interview, our recruiters conduct a comprehensive briefing discussing contract terms, shift structures, safety standards, and living conditions.
              </p>
            </div>

            <div className="bg-vellum-50 p-5 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[STAGE 02]</span>
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-1.5">Transparent Readiness Briefing</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Prior to deployment, you receive verified documentation outlining your host employer’s contact details, accommodation standards, payroll cycle, and health insurance provisions.
              </p>
            </div>

            <div className="bg-vellum-50 p-5 border border-steel-300">
              <span className="text-xs font-mono text-vermilion font-bold block mb-2">[STAGE 03]</span>
              <h4 className="text-sm font-bold text-castiron-DEFAULT mb-1.5">24/7 Post-Placement Care</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Placed technicians and workers have access to Rapidhire’s dedicated 24/7 support channel to raise questions, report workplace concerns, or seek coordination assistance with their host employer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Candidate Registration Form */}
        <section id="registration-form" className="max-w-4xl mx-auto">
          <CandidateRegistrationForm
            preselectedVacancyId={selectedVacancyForForm?.id}
            preselectedVacancyTitle={selectedVacancyForForm?.title}
          />
        </section>

      </div>
    </div>
  );
};

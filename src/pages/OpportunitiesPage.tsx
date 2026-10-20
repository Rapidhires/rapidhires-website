import React, { useState } from 'react';
import { VACANCIES, Vacancy } from '../data/vacancies';
import { CandidateRegistrationForm } from '../components/CandidateRegistrationForm';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  Search, 
  FileCheck, 
  Clock, 
  HelpCircle,
  ExternalLink
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
    <div className="bg-warmwhite min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#172B3A] text-warmwhite py-14 lg:py-20 border-b border-[#303A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
              <span className="w-2 h-2 bg-industrial-orange"></span>
              INTERNATIONAL CANDIDATE CAREER GATEWAY
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Build Your Career Beyond Borders
            </h1>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed">
              Explore relevant opportunities in engineering, manufacturing, skilled trades, and technical work. Register your skills and experience so Rapidhire can assess your profile against suitable recruitment requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Anti-exploitation & Transparency Charter Banner */}
        <div className="mb-12 p-4 bg-white border-l-4 border-industrial-orange border border-steel-DEFAULT shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-industrial-orange shrink-0 mt-0.5" />
            <div className="text-xs text-graphite-700 leading-relaxed">
              <strong className="text-navy-DEFAULT">Candidate Fair Recruitment Standard:</strong> Rapidhire does not charge candidates recruitment fees, security deposits, or interview fees. Overseas work eligibility and visa issuance are determined solely by sovereign immigration authorities and verified employer sponsors.
            </div>
          </div>
          <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 bg-steel-100 text-navy-DEFAULT border border-steel-DEFAULT">
            Zero Placement Fee Policy
          </span>
        </div>

        {/* Section 1: Browse Verified Opportunities */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-steel-DEFAULT">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
                Client Mandates
              </span>
              <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1">
                Verified Active Requirements
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0">
              Only genuine, client-approved opportunities are published below.
            </p>
          </div>

          {/* Vacancy Filter Toolbar */}
          <div className="bg-white p-4 border border-steel-DEFAULT mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-graphite-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vacancies by title or reference..."
                className="w-full text-xs pl-9 pr-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
              />
            </div>

            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
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
                className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
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
            <div className="bg-white p-12 border border-steel-DEFAULT text-center max-w-xl mx-auto my-8">
              <Briefcase className="w-10 h-10 text-steel-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
                No active opportunities are published here at present.
              </h3>
              <p className="text-xs text-graphite-600 mb-6 leading-relaxed">
                Register your profile to express interest in relevant future requirements. Rapidhire regularly reviews talent registrations against new international client briefs.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCountry('All');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-semibold px-4 py-2 border border-steel-DEFAULT text-navy-DEFAULT hover:bg-warmwhite"
                >
                  Clear Filters
                </button>
                <a
                  href="#registration-form"
                  className="text-xs font-semibold px-4 py-2 bg-industrial-orange text-white hover:bg-industrial-orange-hover"
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
                  className="bg-white border border-steel-DEFAULT p-6 sm:p-8 hover:border-navy-DEFAULT transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-[11px] px-2 py-0.5 bg-steel-100 text-navy-DEFAULT border border-steel-DEFAULT font-bold">
                          {vac.reference}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {vac.verifiedStatus}
                        </span>
                        <span className="text-[11px] font-mono text-graphite-500">
                          {vac.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-DEFAULT">
                        {vac.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-graphite-600 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-industrial-orange" />
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

                    <div className="shrink-0">
                      <button
                        onClick={() => {
                          setSelectedVacancyForForm(vac);
                          // Smooth scroll to form or open modal
                          const el = document.getElementById('registration-form');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-navy-DEFAULT hover:bg-navy-800 text-white text-xs font-semibold px-4 py-2.5 transition-colors border border-navy-900"
                      >
                        <span>Apply / Register Interest</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-graphite-700 leading-relaxed mb-4">
                    {vac.roleSummary}
                  </p>

                  {/* Duties list */}
                  <div className="mb-4 pt-3 border-t border-steel-100">
                    <p className="text-[11px] font-mono uppercase text-graphite-500 mb-2 font-semibold">
                      Primary Operational Duties:
                    </p>
                    <ul className="text-xs text-graphite-600 space-y-1 list-disc pl-4">
                      {vac.duties.map((duty, idx) => (
                        <li key={idx}>{duty}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-warmwhite border border-steel-DEFAULT text-xs font-mono text-graphite-600">
                    <div>
                      <span className="block text-[10px] text-graphite-400 uppercase">Experience Required</span>
                      <span className="font-semibold text-navy-DEFAULT">{vac.experienceRequired}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-graphite-400 uppercase">Qualification</span>
                      <span className="font-semibold text-navy-DEFAULT">{vac.qualificationRequired}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-graphite-400 uppercase">Language Proficiency</span>
                      <span className="font-semibold text-navy-DEFAULT">{vac.languageRequirements}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-graphite-500 pt-2 border-t border-steel-100">
                    <span>Remuneration: {vac.salaryAndBenefits}</span>
                    <span className="italic">Client: {vac.employerName}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 2: How Candidate Communication & Support Works */}
        <section className="mb-20 bg-white p-8 sm:p-10 border border-steel-DEFAULT">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Candidate Support Charter
            </span>
            <h2 className="text-2xl font-bold text-navy-DEFAULT mt-1 mb-2">
              How Candidate Communication & 24/7 Support Work
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
              We believe technical candidates deserve respect, transparency, and ongoing support throughout recruitment and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-warmwhite p-5 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">STAGE 1</span>
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-1.5">Direct Recruiter Feedback</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                If your profile is shortlisted for an employer interview, our recruiters conduct a comprehensive briefing discussing contract terms, shift structures, safety standards, and living conditions.
              </p>
            </div>

            <div className="bg-warmwhite p-5 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">STAGE 2</span>
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-1.5">Transparent Readiness Briefing</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Prior to deployment, you receive verified documentation outlining your host employer’s contact details, accommodation standards, payroll cycle, and health insurance provisions.
              </p>
            </div>

            <div className="bg-warmwhite p-5 border border-steel-DEFAULT">
              <span className="text-xs font-mono text-industrial-orange font-bold block mb-2">STAGE 3</span>
              <h4 className="text-sm font-bold text-navy-DEFAULT mb-1.5">24/7 Post-Placement Care</h4>
              <p className="text-xs text-graphite-600 leading-relaxed">
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

import React, { useState, useMemo } from 'react';
import { OCCUPATIONS, Occupation } from '../data/occupations';
import { Search, ArrowRight, ChevronRight, X } from 'lucide-react';

interface CategoriesPageProps {
  onOpenEmployerModal: (preselectedOccupation?: string) => void;
  onOpenCandidateModal: (preselectedVacancyId?: string, preselectedVacancyTitle?: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onOpenEmployerModal,
  onOpenCandidateModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedExperience, setSelectedExperience] = useState<string>('All');
  const [selectedQualification, setSelectedQualification] = useState<string>('All');
  const [activeOccupationModal, setActiveOccupationModal] = useState<Occupation | null>(null);

  const categories = [
    'All',
    'Engineering',
    'Manufacturing',
    'Skilled Trades',
    'Maintenance & Technical',
    'Industrial & Project',
    'IT & Software (Europe Only)'
  ];

  const filteredOccupations = useMemo(() => {
    return OCCUPATIONS.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesExp =
        selectedExperience === 'All' || item.experienceLevel === selectedExperience;

      const matchesQual =
        selectedQualification === 'All' || item.qualificationLevel === selectedQualification;

      return matchesSearch && matchesCategory && matchesExp && matchesQual;
    });
  }, [searchQuery, selectedCategory, selectedExperience, selectedQualification]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedExperience('All');
    setSelectedQualification('All');
  };

  return (
    <div className="bg-vellum-100 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#101417] text-white py-14 lg:py-20 border-b border-[#232B32] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
              <span className="w-1.5 h-1.5 bg-vermilion"></span>
              <span>OCCUPATIONAL TAXONOMY & SOURCING CATALOGUE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Industrial Workforce Categories
            </h1>
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-sans">
              Explore standardized technical capability dossiers across Indian engineering clusters, precision machining, certified trades, and project sites.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white p-6 border border-steel-300 mb-10 shadow-sm space-y-4 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
                Search Roles, Tooling, or Codes
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-graphite-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. CNC 5-Axis, 6G Welder, AutoCAD, Fanuc, Millwright..."
                  className="w-full text-xs pl-9 pr-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white focus:border-castiron-DEFAULT font-sans"
                />
              </div>
            </div>

            {/* Experience Level Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
                Experience Tier
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
              >
                <option value="All">All Experience Levels</option>
                <option value="Junior (1-3 yrs)">Junior (1-3 yrs)</option>
                <option value="Mid-Level (3-7 yrs)">Mid-Level (3-7 yrs)</option>
                <option value="Senior (7-12 yrs)">Senior (7-12 yrs)</option>
                <option value="Lead / Specialist (12+ yrs)">Lead / Specialist (12+ yrs)</option>
              </select>
            </div>

            {/* Qualification Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
                Accredited Qualification
              </label>
              <select
                value={selectedQualification}
                onChange={(e) => setSelectedQualification(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
              >
                <option value="All">All Qualifications</option>
                <option value="ITI / Trade Diploma">ITI / Trade Diploma</option>
                <option value="Polytechnic Diploma">Polytechnic Diploma</option>
                <option value="Bachelor of Engineering (B.E./B.Tech)">B.E. / B.Tech</option>
                <option value="Vocational Certification">Vocational Certification</option>
              </select>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="pt-3 border-t border-steel-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 uppercase tracking-wider transition-colors border ${
                    selectedCategory === cat
                      ? 'bg-castiron-DEFAULT text-white border-castiron-900 font-bold'
                      : 'bg-vellum-50 text-graphite-600 border-steel-300 hover:border-steel-500 hover:text-castiron-DEFAULT'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {(searchQuery || selectedCategory !== 'All' || selectedExperience !== 'All' || selectedQualification !== 'All') && (
              <button
                onClick={clearFilters}
                className="text-xs text-vermilion hover:underline inline-flex items-center gap-1 font-bold"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata Header */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-steel-300 text-xs font-mono text-graphite-500">
          <div>
            Showing <strong className="text-castiron-DEFAULT">{filteredOccupations.length}</strong> Target Occupations
          </div>
          <div className="hidden sm:block">
            * Recruitable per confirmed employer requirements &bull; Human recruiter evaluation
          </div>
        </div>

        {/* Technical Dossier Grid */}
        {filteredOccupations.length === 0 ? (
          <div className="bg-white p-12 border border-steel-300 text-center max-w-xl mx-auto my-12 shadow-sm font-mono">
            <div className="text-xs uppercase text-vermilion mb-1 font-bold">[ZERO MATCHING RECORDS]</div>
            <h3 className="text-base font-bold text-castiron-DEFAULT mb-2">
              No matching occupations found in directory
            </h3>
            <p className="text-xs text-graphite-600 mb-6 font-sans">
              We frequently source specialized industrial profiles that may not be listed in this general directory. Submit your custom brief to evaluate feasibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={clearFilters}
                className="text-xs font-semibold px-4 py-2 border border-steel-300 text-castiron-DEFAULT hover:bg-vellum-50"
              >
                Clear Filters
              </button>
              <button
                onClick={() => onOpenEmployerModal()}
                className="text-xs font-semibold px-4 py-2 bg-vermilion text-white hover:bg-vermilion-hover"
              >
                Submit Custom Requirement
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOccupations.map((occ) => (
              <div
                key={occ.id}
                className="bg-white border border-steel-300 p-6 flex flex-col justify-between hover:border-castiron-DEFAULT transition-all group relative shadow-sm"
              >
                <div>
                  {/* Category & Status pill */}
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3 border-b border-steel-200 pb-2">
                    <span className="px-2 py-0.5 bg-steel-100 text-castiron-DEFAULT font-bold border border-steel-300">
                      {occ.category}
                    </span>
                    <span className="text-steel-600 font-mono text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-vermilion"></span>
                      ACTIVE PIPELINE
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-castiron-DEFAULT mb-1 group-hover:text-vermilion transition-colors font-sans">
                    {occ.title}
                  </h3>
                  <p className="text-xs font-mono text-graphite-500 mb-3">
                    {occ.industry}
                  </p>

                  <div className="text-xs text-graphite-600 mb-4 line-clamp-2 font-sans">
                    {occ.responsibilities[0]}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-3 border-t border-steel-200 mb-4">
                    <p className="text-[10px] font-mono uppercase text-graphite-500 mb-1.5 font-semibold">
                      Tooling / Standards:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {occ.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 bg-vellum-100 text-graphite-700 border border-steel-300 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                      {occ.skills.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 text-graphite-400 font-mono self-center">
                          +{occ.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card footer with CTA */}
                <div className="pt-4 border-t border-steel-300 flex items-center justify-between font-mono">
                  <button
                    onClick={() => setActiveOccupationModal(occ)}
                    className="text-xs font-semibold text-graphite-600 hover:text-castiron-DEFAULT underline"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenEmployerModal(occ.title)}
                    className="inline-flex items-center gap-1 bg-castiron-DEFAULT hover:bg-castiron-800 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 transition-colors border border-castiron-900"
                  >
                    <span>Enquire for Role</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Detailed Occupation Specs Modal (Technical Blueprint Plate) */}
      {activeOccupationModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-castiron-950/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white shadow-2xl border border-steel-400 p-6 sm:p-8">
            <button
              onClick={() => setActiveOccupationModal(null)}
              className="absolute top-4 right-4 p-2 text-graphite-400 hover:text-castiron-DEFAULT hover:bg-steel-100 border border-transparent hover:border-steel-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 border-b border-steel-300 pb-3">
              <span className="text-xs font-mono px-2 py-0.5 bg-steel-100 text-castiron-DEFAULT font-bold border border-steel-300">
                {activeOccupationModal.category} &bull; {activeOccupationModal.experienceLevel}
              </span>
              <h3 className="text-2xl font-bold text-castiron-DEFAULT mt-2 tracking-tight">
                {activeOccupationModal.title}
              </h3>
              <p className="text-xs font-mono text-graphite-500 mt-1">
                Industry: {activeOccupationModal.industry}
              </p>
            </div>

            <div className="space-y-4 text-xs text-graphite-700 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Typical Core Responsibilities:
                </h4>
                <ul className="space-y-1.5 list-disc pl-4 font-sans leading-relaxed">
                  {activeOccupationModal.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Technical Skill / Tooling Requirements:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeOccupationModal.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-vellum-100 border border-steel-300 font-mono text-graphite-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Educational & Trade Credentials:
                </h4>
                <ul className="space-y-1 list-disc pl-4 font-sans leading-relaxed">
                  {activeOccupationModal.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Related / Lateral Roles:
                </h4>
                <div className="flex flex-wrap gap-2 text-steel-500 font-mono">
                  {activeOccupationModal.relatedRoles.map((role) => (
                    <span key={role} className="text-graphite-600 bg-steel-100 px-2 py-0.5 border border-steel-300">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-steel-100 text-[11px] font-mono text-graphite-600 border border-steel-300">
                <strong>Sourcing Feasibility:</strong> {activeOccupationModal.statusNote}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-steel-300 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
              <button
                onClick={() => {
                  const title = activeOccupationModal.title;
                  setActiveOccupationModal(null);
                  onOpenCandidateModal(undefined, title);
                }}
                className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-4 py-2.5 border border-steel-300 text-castiron-DEFAULT hover:bg-vellum-100"
              >
                Register as Candidate for this Role
              </button>
              <button
                onClick={() => {
                  const title = activeOccupationModal.title;
                  setActiveOccupationModal(null);
                  onOpenEmployerModal(title);
                }}
                className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-5 py-2.5 bg-vermilion hover:bg-vermilion-hover text-white flex items-center justify-center gap-1.5"
              >
                <span>Enquire as Employer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { OCCUPATIONS, Occupation } from '../data/occupations';
import { Search, Filter, ArrowRight, CheckCircle2, ChevronRight, X, Cpu, Factory, Wrench, HardHat, Cog } from 'lucide-react';

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
    'Industrial & Project'
  ];

  const filteredOccupations = useMemo(() => {
    return OCCUPATIONS.filter((item) => {
      // Search filter
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Experience filter
      const matchesExp =
        selectedExperience === 'All' || item.experienceLevel === selectedExperience;

      // Qualification filter
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
    <div className="bg-warmwhite min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#172B3A] text-warmwhite py-14 lg:py-20 border-b border-[#303A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
              <span className="w-2 h-2 bg-industrial-orange"></span>
              OCCUPATIONAL DIRECTORY & SOURCING CATALOGUE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Industrial Workforce Categories
            </h1>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed">
              Explore target sourcing occupations across Indian engineering clusters, heavy manufacturing, skilled technical trades, and project sites.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white p-6 border border-steel-DEFAULT mb-10 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
                Search Roles, Skills, or Tools
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-graphite-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. CNC, 6G Welder, AutoCAD, Fanuc, Millwright..."
                  className="w-full text-sm pl-9 pr-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
                />
              </div>
            </div>

            {/* Experience Level Filter */}
            <div>
              <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
                Experience Tier
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
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
              <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
                Qualification
              </label>
              <select
                value={selectedQualification}
                onChange={(e) => setSelectedQualification(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
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
          <div className="pt-3 border-t border-steel-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 font-medium transition-colors border ${
                    selectedCategory === cat
                      ? 'bg-navy-DEFAULT text-white border-navy-900 font-semibold'
                      : 'bg-warmwhite-50 text-graphite-600 border-steel-DEFAULT hover:border-steel-400 hover:text-navy-DEFAULT'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {(searchQuery || selectedCategory !== 'All' || selectedExperience !== 'All' || selectedQualification !== 'All') && (
              <button
                onClick={clearFilters}
                className="text-xs text-industrial-orange hover:underline font-mono inline-flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-steel-DEFAULT text-xs font-mono text-graphite-500">
          <div>
            Showing <strong className="text-navy-DEFAULT">{filteredOccupations.length}</strong> Target Occupations
          </div>
          <div className="hidden sm:block">
            * Recruitable per confirmed employer requirements
          </div>
        </div>

        {/* Occupations Grid */}
        {filteredOccupations.length === 0 ? (
          <div className="bg-white p-12 border border-steel-DEFAULT text-center max-w-xl mx-auto my-12">
            <h3 className="text-base font-bold text-navy-DEFAULT mb-2">
              No matching occupations found
            </h3>
            <p className="text-xs text-graphite-600 mb-6">
              We frequently source specialized industrial profiles that may not be listed in this general directory. Submit your custom brief to evaluate feasibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={clearFilters}
                className="text-xs font-semibold px-4 py-2 border border-steel-DEFAULT text-navy-DEFAULT hover:bg-warmwhite"
              >
                Clear Filters
              </button>
              <button
                onClick={() => onOpenEmployerModal()}
                className="text-xs font-semibold px-4 py-2 bg-industrial-orange text-white hover:bg-industrial-orange-hover"
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
                className="bg-white border border-steel-DEFAULT p-6 flex flex-col justify-between hover:border-navy-DEFAULT transition-all group relative"
              >
                <div>
                  {/* Category & Status pill */}
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span className="px-2 py-0.5 bg-steel-100 text-navy-DEFAULT font-bold border border-steel-DEFAULT">
                      {occ.category}
                    </span>
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Recruitable
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-DEFAULT mb-1 group-hover:text-industrial-orange transition-colors">
                    {occ.title}
                  </h3>
                  <p className="text-xs font-mono text-graphite-500 mb-3">
                    {occ.industry}
                  </p>

                  <div className="text-xs text-graphite-600 mb-4 line-clamp-2">
                    {occ.responsibilities[0]}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-3 border-t border-steel-100 mb-4">
                    <p className="text-[10px] font-mono uppercase text-graphite-400 mb-1.5">
                      Core Technical Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {occ.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 bg-warmwhite text-graphite-700 border border-steel-DEFAULT font-mono"
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
                <div className="pt-4 border-t border-steel-DEFAULT flex items-center justify-between">
                  <button
                    onClick={() => setActiveOccupationModal(occ)}
                    className="text-xs font-semibold text-graphite-600 hover:text-navy-DEFAULT font-mono underline"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenEmployerModal(occ.title)}
                    className="inline-flex items-center gap-1 bg-navy-DEFAULT hover:bg-navy-800 text-white text-xs font-semibold px-3 py-1.5 transition-colors"
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

      {/* Detailed Occupation Specs Modal */}
      {activeOccupationModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white shadow-2xl border border-steel-DEFAULT p-6 sm:p-8">
            <button
              onClick={() => setActiveOccupationModal(null)}
              className="absolute top-4 right-4 p-2 text-graphite-400 hover:text-navy-DEFAULT hover:bg-steel-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono px-2 py-0.5 bg-steel-100 text-navy-DEFAULT font-bold border border-steel-DEFAULT">
                {activeOccupationModal.category} &bull; {activeOccupationModal.experienceLevel}
              </span>
              <h3 className="text-2xl font-bold text-navy-DEFAULT mt-2">
                {activeOccupationModal.title}
              </h3>
              <p className="text-xs font-mono text-graphite-500 mt-1">
                Typical Industry: {activeOccupationModal.industry}
              </p>
            </div>

            <div className="space-y-4 text-xs text-graphite-700 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="font-bold text-navy-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Typical Core Responsibilities:
                </h4>
                <ul className="space-y-1.5 list-disc pl-4">
                  {activeOccupationModal.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-navy-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Technical Skill Requirements:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeOccupationModal.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-warmwhite border border-steel-DEFAULT font-mono text-graphite-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Educational & Trade Credentials:
                </h4>
                <ul className="space-y-1 list-disc pl-4">
                  {activeOccupationModal.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-navy-DEFAULT uppercase font-mono tracking-wider mb-2">
                  Related / Lateral Roles:
                </h4>
                <div className="flex flex-wrap gap-2 text-steel-500 font-mono">
                  {activeOccupationModal.relatedRoles.map((role) => (
                    <span key={role} className="text-graphite-600 bg-steel-100 px-2 py-0.5">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-steel-100 text-[11px] font-mono text-graphite-600 border border-steel-DEFAULT">
                <strong>Sourcing Feasibility:</strong> {activeOccupationModal.statusNote}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-steel-DEFAULT flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => {
                  const title = activeOccupationModal.title;
                  setActiveOccupationModal(null);
                  onOpenCandidateModal(undefined, title);
                }}
                className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 border border-steel-DEFAULT text-navy-DEFAULT hover:bg-warmwhite"
              >
                Register as Candidate for this Role
              </button>
              <button
                onClick={() => {
                  const title = activeOccupationModal.title;
                  setActiveOccupationModal(null);
                  onOpenEmployerModal(title);
                }}
                className="w-full sm:w-auto text-xs font-semibold px-5 py-2.5 bg-industrial-orange hover:bg-industrial-orange-hover text-white flex items-center justify-center gap-1.5"
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

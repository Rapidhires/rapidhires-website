import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Users, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp,
  Clock
} from 'lucide-react';
import { submitPartnerEnquiry } from '../lib/storage';

export const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employer' | 'candidate' | 'partner'>('employer');
  
  // Partner Form State
  const [partnerForm, setPartnerForm] = useState({
    fullName: '',
    jobTitle: '',
    organisationName: '',
    partnerType: 'Technical Training Institute' as const,
    email: '',
    phoneNumber: '',
    country: 'India',
    collaborationScope: '',
    privacyAcknowledged: false
  });
  const [isSubmittingPartner, setIsSubmittingPartner] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState<string | null>(null);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Rapidhire charge candidates any fees for job placement or interviews?',
      a: 'No. Rapidhire strictly operates a zero-candidate-fee policy. All recruitment, screening, and administrative coordination costs are covered by the commissioning employer. We never ask candidates for security deposits, registration fees, or processing money.'
    },
    {
      q: 'Is Rapidhire an immigration consultancy or visa agency?',
      a: 'No. Rapidhire is an industrial and engineering workforce recruitment company. We recruit for verified employers who sponsor work permits according to their country’s legal regulations. We do not provide private immigration advice, points calculations, or tourist-to-work visa conversions.'
    },
    {
      q: 'How does Rapidhire evaluate technical trade qualifications from India?',
      a: 'We verify accredited ITI, NCVT, Polytechnic, and engineering degrees directly. Furthermore, we conduct practical trade testing (such as 6G weld coupon evaluations or CNC G-code programming tests) at authorized Indian testing facilities to verify hands-on competency.'
    },
    {
      q: 'What is the typical timeline for mobilising an industrial workforce cohort?',
      a: 'Timelines depend on the destination country’s visa processing frameworks, trade testing requirements, and employer interview schedules. Sourcing and shortlisting are typically accomplished within 2 to 4 weeks, with subsequent deployment aligned with visa issuance schedules.'
    },
    {
      q: 'How does the 24/7 candidate support channel operate post-placement?',
      a: 'Once deployed, technical personnel have access to our designated support hotline and messaging channels. Our team assists with communication coordination, operational queries, and liaison with host employer representatives to maintain smooth workplace integration.'
    }
  ];

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.privacyAcknowledged) {
      alert('Please acknowledge data consent.');
      return;
    }
    setIsSubmittingPartner(true);
    const res = await submitPartnerEnquiry(partnerForm);
    setIsSubmittingPartner(false);
    if (res.success) {
      setPartnerSuccess(res.message);
    }
  };

  return (
    <div className="bg-warmwhite min-h-screen">
      
      {/* Page Header */}
      <section className="bg-[#172B3A] text-warmwhite py-14 lg:py-20 border-b border-[#303A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-700 text-steel-200 text-xs font-mono uppercase tracking-eyebrow">
              <span className="w-2 h-2 bg-industrial-orange"></span>
              DIRECT COMMUNICATION CHANNELS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Contact Rapidhire
            </h1>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed">
              Connect directly with our international recruitment desks, candidate services, or institutional partnerships team in Hyderabad, India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Channel 1: Employers */}
          <div className="bg-white p-6 border border-steel-DEFAULT flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-1">
                International Employers Desk
              </h3>
              <p className="text-xs text-graphite-600 mb-4 leading-relaxed">
                For manufacturing plants, EPC contractors, and engineering companies looking to recruit technical talent from India.
              </p>
            </div>
            <div className="pt-4 border-t border-steel-100 space-y-2 text-xs font-mono">
              <div className="text-steel-500">Official Intake Channel:</div>
              <a
                href="mailto:enquiries@rapidhire.work"
                className="text-navy-DEFAULT font-bold hover:text-industrial-orange hover:underline block"
              >
                enquiries@rapidhire.work
              </a>
              <div className="text-[11px] text-graphite-400">Response time: within 24 business hours</div>
            </div>
          </div>

          {/* Channel 2: Candidates */}
          <div className="bg-white p-6 border border-steel-DEFAULT flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-1">
                Candidate Services Desk
              </h3>
              <p className="text-xs text-graphite-600 mb-4 leading-relaxed">
                For engineers, technicians, and skilled workers inquiring about profile registration, active requirements, or support.
              </p>
            </div>
            <div className="pt-4 border-t border-steel-100 space-y-2 text-xs font-mono">
              <div className="text-steel-500">Candidate Enquiries:</div>
              <a
                href="mailto:candidates@rapidhire.work"
                className="text-navy-DEFAULT font-bold hover:text-industrial-orange hover:underline block"
              >
                candidates@rapidhire.work
              </a>
              <div className="text-[11px] text-graphite-400">24/7 assistance desk for deployed workforce</div>
            </div>
          </div>

          {/* Channel 3: Institutional Partnerships */}
          <div className="bg-white p-6 border border-steel-DEFAULT flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-steel-100 flex items-center justify-center text-navy-DEFAULT mb-4 border border-steel-DEFAULT">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-DEFAULT mb-1">
                Institutional Partnerships
              </h3>
              <p className="text-xs text-graphite-600 mb-4 leading-relaxed">
                For polytechnics, technical institutes, universities, and certification bodies proposing talent pipeline collaboration.
              </p>
            </div>
            <div className="pt-4 border-t border-steel-100 space-y-2 text-xs font-mono">
              <div className="text-steel-500">Partnership Inquiries:</div>
              <a
                href="mailto:partnerships@rapidhire.work"
                className="text-navy-DEFAULT font-bold hover:text-industrial-orange hover:underline block"
              >
                partnerships@rapidhire.work
              </a>
              <div className="text-[11px] text-graphite-400">Cooperative workforce development initiatives</div>
            </div>
          </div>

        </div>

        {/* Operating Headquarters & Hours */}
        <div className="bg-white p-8 border border-steel-DEFAULT">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-industrial-orange font-bold">
                <MapPin className="w-4 h-4" />
                <span>Headquarters</span>
              </div>
              <p className="text-sm font-semibold text-navy-DEFAULT">
                Hyderabad, Telangana, India
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Incorporated under the laws of the Republic of India. Operational coordination with regional sourcing clusters across southern, western, and northern India.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-industrial-orange font-bold">
                <Clock className="w-4 h-4" />
                <span>Operational Hours</span>
              </div>
              <p className="text-sm font-semibold text-navy-DEFAULT">
                Recruitment Desk: Mon – Fri, 09:00 – 18:30 IST
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed font-mono">
                International Coordination: Aligned with client time zones across the GCC, Europe, and Asia-Pacific.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-industrial-orange font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Fair Practice Helpline</span>
              </div>
              <p className="text-sm font-semibold text-navy-DEFAULT">
                24/7 Candidate Support Channel
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed">
                Ensuring post-placement care and immediate escalation of any unverified fee requests or workplace grievances.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Partner Proposal Form */}
        <div className="bg-white p-8 sm:p-10 border border-steel-DEFAULT max-w-3xl mx-auto">
          <div className="border-b border-steel-200 pb-4 mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold mb-1">
              Institutional Collaborations
            </div>
            <h3 className="text-xl font-bold text-navy-DEFAULT">
              Propose a Training or Recruitment Partnership
            </h3>
            <p className="text-xs text-graphite-500 mt-1">
              For technical training institutes, polytechnics, universities, and international recruitment partners.
            </p>
          </div>

          {partnerSuccess ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-navy-DEFAULT">Partnership Enquiry Received</h4>
              <p className="text-xs text-graphite-600">{partnerSuccess}</p>
              <button
                onClick={() => setPartnerSuccess(null)}
                className="text-xs font-semibold px-4 py-2 bg-navy-DEFAULT text-white hover:bg-navy-800"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.fullName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, fullName: e.target.value })}
                    placeholder="e.g. Dr. K. Venkat"
                    className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                    Job Title / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.jobTitle}
                    onChange={(e) => setPartnerForm({ ...partnerForm, jobTitle: e.target.value })}
                    placeholder="e.g. Director of Placements / Principal"
                    className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                    Organisation Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.organisationName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, organisationName: e.target.value })}
                    placeholder="e.g. Regional Polytechnic Institute"
                    className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                    Partner Category *
                  </label>
                  <select
                    value={partnerForm.partnerType}
                    onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value as any })}
                    className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                  >
                    <option value="Technical Training Institute">Technical Training Institute / ITI</option>
                    <option value="University / College">Engineering College / Polytechnic</option>
                    <option value="Certification Body">Trade Testing / Certification Body</option>
                    <option value="International Agency">International Recruitment Partner</option>
                    <option value="Industry Association">Industry Association</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="placements@institute.edu"
                    className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                    Phone / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={partnerForm.phoneNumber}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phoneNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-DEFAULT uppercase mb-1">
                  Proposed Scope of Collaboration *
                </label>
                <textarea
                  rows={3}
                  required
                  value={partnerForm.collaborationScope}
                  onChange={(e) => setPartnerForm({ ...partnerForm, collaborationScope: e.target.value })}
                  placeholder="Outline graduating student batches, trade specialties, or testing capabilities..."
                  className="w-full text-xs px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="flex items-start gap-2 cursor-pointer text-xs text-graphite-600">
                  <input
                    type="checkbox"
                    required
                    checked={partnerForm.privacyAcknowledged}
                    onChange={(e) => setPartnerForm({ ...partnerForm, privacyAcknowledged: e.target.checked })}
                    className="mt-0.5 text-industrial-orange rounded-none"
                  />
                  <span>
                    I confirm that I represent this organisation and agree to Rapidhire contacting us regarding formal partnership opportunities.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmittingPartner}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-DEFAULT hover:bg-navy-800 text-white text-xs font-semibold px-6 py-3 transition-colors border border-navy-900"
              >
                <span>Submit Collaboration Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="border-b border-steel-DEFAULT pb-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="text-xl font-bold text-navy-DEFAULT mt-1">
              Common Questions from Employers & Candidates
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div key={index} className="bg-white border border-steel-DEFAULT">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-navy-DEFAULT">
                      {faq.q}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-industrial-orange shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-graphite-400 shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 text-xs text-graphite-600 leading-relaxed border-t border-steel-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

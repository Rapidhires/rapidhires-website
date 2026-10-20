import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
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
    <div className="bg-vellum-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#101417] text-white py-14 lg:py-20 border-b border-[#232B32] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D21] border border-[#2B353D] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
              <span className="w-1.5 h-1.5 bg-vermilion"></span>
              <span>COMMUNICATION CHANNELS & DESKS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Contact Rapidhire
            </h1>
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-sans">
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
          <div className="bg-white p-6 border border-steel-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-steel-100 flex items-center justify-center text-castiron-DEFAULT mb-4 border border-steel-300">
                <Building2 className="w-4 h-4 text-vermilion" />
              </div>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-1 font-mono uppercase">
                International Employers Desk
              </h3>
              <p className="text-xs text-graphite-600 mb-4 leading-relaxed font-sans">
                For manufacturing plants, EPC contractors, and engineering companies looking to recruit technical talent from India.
              </p>
            </div>
            <div className="pt-4 border-t border-steel-200 space-y-2 text-xs font-mono">
              <div className="text-steel-500 text-[10px] uppercase">Intake Channel:</div>
              <a
                href="mailto:enquiries@rapidhire.work"
                className="text-castiron-DEFAULT font-bold hover:text-vermilion hover:underline block"
              >
                enquiries@rapidhire.work
              </a>
              <div className="text-[11px] text-graphite-400">Response time: within 24 business hours</div>
            </div>
          </div>

          {/* Channel 2: Candidates */}
          <div className="bg-white p-6 border border-steel-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-steel-100 flex items-center justify-center text-castiron-DEFAULT mb-4 border border-steel-300">
                <Users className="w-4 h-4 text-vermilion" />
              </div>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-1 font-mono uppercase">
                Candidate Services Desk
              </h3>
              <p className="text-xs text-graphite-600 mb-4 leading-relaxed font-sans">
                For engineers, technicians, and skilled workers inquiring about profile registration, active requirements, or support.
              </p>
            </div>
            <div className="pt-4 border-t border-steel-200 space-y-2 text-xs font-mono">
              <div className="text-steel-500 text-[10px] uppercase">Candidate Inquiries:</div>
              <a
                href="mailto:candidates@rapidhire.work"
                className="text-castiron-DEFAULT font-bold hover:text-vermilion hover:underline block"
              >
                candidates@rapidhire.work
              </a>
              <div className="text-[11px] text-graphite-400">24/7 assistance desk for deployed workforce</div>
            </div>
          </div>

          {/* Channel 3: Institutional Partnerships */}
          <div className="bg-white p-6 border border-steel-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-steel-100 flex items-center justify-center text-castiron-DEFAULT mb-4 border border-steel-300">
                <GraduationCap className="w-4 h-4 text-vermilion" />
              </div>
              <h3 className="text-base font-bold text-castiron-DEFAULT mb-1 font-mono uppercase">
                Institutional Partnerships
              </h3>
              <p className="text-xs text-graphite-600 mb-4 leading-relaxed font-sans">
                For polytechnics, technical institutes, universities, and certification bodies proposing talent pipeline collaboration.
              </p>
            </div>
            <div className="pt-4 border-t border-steel-200 space-y-2 text-xs font-mono">
              <div className="text-steel-500 text-[10px] uppercase">Partnership Proposals:</div>
              <a
                href="mailto:partnerships@rapidhire.work"
                className="text-castiron-DEFAULT font-bold hover:text-vermilion hover:underline block"
              >
                partnerships@rapidhire.work
              </a>
              <div className="text-[11px] text-graphite-400">Cooperative workforce development initiatives</div>
            </div>
          </div>

        </div>

        {/* Operating Headquarters & Hours */}
        <div className="bg-white p-8 border border-steel-300 shadow-sm font-mono">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase text-vermilion font-bold">
                <MapPin className="w-4 h-4" />
                <span>Headquarters</span>
              </div>
              <p className="text-sm font-bold text-castiron-DEFAULT">
                Hyderabad, Telangana, India
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Incorporated under the laws of the Republic of India. Operational coordination with regional sourcing clusters across southern, western, and northern India.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase text-vermilion font-bold">
                <Clock className="w-4 h-4" />
                <span>Operational Hours</span>
              </div>
              <p className="text-sm font-bold text-castiron-DEFAULT">
                Recruitment Desk: Mon – Fri, 09:00 – 18:30 IST
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                International Coordination: Aligned with client time zones across Europe, Japan, and the GCC.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase text-vermilion font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Fair Practice Helpline</span>
              </div>
              <p className="text-sm font-bold text-castiron-DEFAULT">
                24/7 Candidate Support Channel
              </p>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                Ensuring post-placement care and immediate escalation of any unverified fee requests or workplace grievances.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Partner Proposal Form */}
        <div className="bg-white p-8 sm:p-10 border border-steel-300 max-w-3xl mx-auto shadow-sm">
          <div className="border-b border-steel-300 pb-4 mb-6">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
              [INSTITUTIONAL PARTNERSHIPS]
            </div>
            <h3 className="text-xl font-bold text-castiron-DEFAULT tracking-tight">
              Propose a Training or Recruitment Partnership
            </h3>
            <p className="text-xs text-graphite-500 mt-1 font-sans">
              For technical training institutes, polytechnics, universities, and international recruitment partners.
            </p>
          </div>

          {partnerSuccess ? (
            <div className="p-6 bg-vellum-100 border border-steel-300 text-center space-y-3 font-mono">
              <CheckCircle2 className="w-8 h-8 text-vermilion mx-auto" />
              <h4 className="text-base font-bold text-castiron-DEFAULT">Partnership Enquiry Received</h4>
              <p className="text-xs text-graphite-600 font-sans">{partnerSuccess}</p>
              <button
                onClick={() => setPartnerSuccess(null)}
                className="text-xs font-semibold uppercase px-4 py-2 bg-castiron-DEFAULT text-white hover:bg-castiron-800"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-4 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.fullName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, fullName: e.target.value })}
                    placeholder="e.g. Dr. K. Venkat"
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                    Job Title / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.jobTitle}
                    onChange={(e) => setPartnerForm({ ...partnerForm, jobTitle: e.target.value })}
                    placeholder="e.g. Director of Placements / Principal"
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                    Organisation Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.organisationName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, organisationName: e.target.value })}
                    placeholder="e.g. Regional Polytechnic Institute"
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                    Partner Category *
                  </label>
                  <select
                    value={partnerForm.partnerType}
                    onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value as any })}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
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
                  <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="placements@institute.edu"
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                    Phone / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={partnerForm.phoneNumber}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phoneNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-castiron-DEFAULT uppercase mb-1">
                  Proposed Scope of Collaboration *
                </label>
                <textarea
                  rows={3}
                  required
                  value={partnerForm.collaborationScope}
                  onChange={(e) => setPartnerForm({ ...partnerForm, collaborationScope: e.target.value })}
                  placeholder="Outline graduating student batches, trade specialties, or testing capabilities..."
                  className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-sans"
                />
              </div>

              <div>
                <label className="flex items-start gap-2 cursor-pointer text-xs text-graphite-600 font-sans">
                  <input
                    type="checkbox"
                    required
                    checked={partnerForm.privacyAcknowledged}
                    onChange={(e) => setPartnerForm({ ...partnerForm, privacyAcknowledged: e.target.checked })}
                    className="mt-0.5 text-vermilion"
                  />
                  <span>
                    I confirm that I represent this organisation and agree to Rapidhire contacting us regarding formal partnership opportunities.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmittingPartner}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-castiron-DEFAULT hover:bg-castiron-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 transition-colors border border-castiron-900"
              >
                <span>Submit Collaboration Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="border-b border-steel-300 pb-3 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold">
              [COMMERCIAL & CANDIDATE FAQ]
            </span>
            <h3 className="text-xl font-bold text-castiron-DEFAULT mt-1 tracking-tight">
              Frequently Asked Questions from Employers & Candidates
            </h3>
          </div>

          <div className="space-y-3 font-mono">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div key={index} className="bg-white border border-steel-300 shadow-sm">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-castiron-DEFAULT">
                      {faq.q}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-vermilion shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-graphite-400 shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 text-xs text-graphite-600 leading-relaxed border-t border-steel-200 font-sans">
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

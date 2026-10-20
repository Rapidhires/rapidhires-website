import React, { useState } from 'react';
import { submitCandidateRegistration, CandidateProfile } from '../lib/storage';
import { CheckCircle2, UploadCloud, FileText, X, ArrowRight, ShieldCheck, Mail, Info } from 'lucide-react';

interface CandidateRegistrationFormProps {
  preselectedVacancyId?: string;
  preselectedVacancyTitle?: string;
  onSuccess?: () => void;
}

export const CandidateRegistrationForm: React.FC<CandidateRegistrationFormProps> = ({
  preselectedVacancyId,
  preselectedVacancyTitle,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCountryCode: '+91',
    phoneNumber: '',
    currentCity: '',
    currentCountry: 'India',
    currentOccupation: '',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    yearsOfExperience: '3-5 Years',
    preferredOccupation: preselectedVacancyTitle || '',
    preferredDestinationsText: 'Gulf Cooperation Council (UAE, Saudi Arabia), Germany, Poland',
    languagesKnownText: 'English, Hindi',
    technicalSkillsText: '',
    consentProcessData: false,
    consentFutureOpportunities: true
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    id: string;
    message: string;
    fallbackEmail?: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setFileError('CV file size exceeds 5MB limit.');
        setSelectedFile(null);
        return;
      }
      const allowedExt = ['pdf', 'doc', 'docx'];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!ext || !allowedExt.includes(ext)) {
        setFileError('Allowed formats: PDF, DOC, DOCX.');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentProcessData) {
      alert('Please check the data processing consent to proceed.');
      return;
    }

    setIsSubmitting(true);
    const technicalSkills = formData.technicalSkillsText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    const preferredDestinations = formData.preferredDestinationsText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    const languagesKnown = formData.languagesKnownText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phoneCountryCode: formData.phoneCountryCode,
      phoneNumber: formData.phoneNumber,
      currentCity: formData.currentCity,
      currentCountry: formData.currentCountry,
      currentOccupation: formData.currentOccupation,
      qualificationLevel: formData.qualificationLevel,
      yearsOfExperience: formData.yearsOfExperience,
      technicalSkills,
      preferredDestinations,
      languagesKnown,
      preferredOccupation: formData.preferredOccupation || formData.currentOccupation,
      fileName: selectedFile ? selectedFile.name : undefined,
      fileSizeBytes: selectedFile ? selectedFile.size : undefined,
      consentProcessData: formData.consentProcessData,
      consentFutureOpportunities: formData.consentFutureOpportunities,
      appliedVacancyId: preselectedVacancyId
    };

    const res = await submitCandidateRegistration(payload);
    setIsSubmitting(false);
    setSubmissionResult(res);

    if (res.success && onSuccess) {
      onSuccess();
    }
  };

  if (submissionResult?.success) {
    return (
      <div className="bg-white p-8 border border-steel-DEFAULT shadow-sm text-center">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-navy-DEFAULT font-mono uppercase mb-2">
          Profile Registration Received
        </h3>
        <p className="text-xs font-mono text-industrial-orange font-semibold mb-4">
          Registration Reference: {submissionResult.id}
        </p>
        <p className="text-sm text-graphite-700 max-w-lg mx-auto mb-4 leading-relaxed">
          {submissionResult.message}
        </p>

        <div className="bg-warmwhite p-4 border border-steel-DEFAULT text-left text-xs text-graphite-600 mb-6 space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-graphite-500">Candidate Name:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Occupation:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.currentOccupation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Qualification:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.qualificationLevel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Experience:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.yearsOfExperience}</span>
          </div>
          {preselectedVacancyTitle && (
            <div className="flex justify-between text-industrial-orange">
              <span>Attached Opportunity:</span>
              <span className="font-semibold">{preselectedVacancyTitle}</span>
            </div>
          )}
        </div>

        <div className="p-3 bg-steel-100 text-[11px] text-graphite-600 border border-steel-DEFAULT mb-6 text-left">
          <strong>Important Next Step Notice:</strong> Rapidhire evaluates profiles against verified employer mandates. We will never ask you for money or visa processing fees. All communications will originate from official <code>@rapidhire.work</code> email domains.
        </div>

        <button
          onClick={() => setSubmissionResult(null)}
          className="text-xs font-semibold px-4 py-2 bg-navy-DEFAULT text-white hover:bg-navy-800 transition-colors"
        >
          Register Another Profile
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 border border-steel-DEFAULT text-graphite">
      {/* Notice header */}
      <div className="border-b border-steel-200 pb-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-industrial-orange font-bold uppercase tracking-wider mb-1">
          <span className="w-2 h-2 bg-industrial-orange"></span>
          Candidate Talent Registration
        </div>
        <h3 className="text-xl font-bold text-navy-DEFAULT">
          {preselectedVacancyTitle ? `Apply for ${preselectedVacancyTitle}` : 'Register Your Technical Profile'}
        </h3>
        <p className="text-xs text-graphite-500 mt-1">
          Engineering, manufacturing, skilled trades, and technical personnel from India. No registration or placement fees charged.
        </p>
      </div>

      {/* Advisory banner */}
      <div className="mb-6 p-3 bg-warmwhite-100 border border-steel-DEFAULT flex items-start gap-2.5 text-xs text-graphite-600">
        <Info className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
        <div>
          <strong>Transparent Recruitment Notice:</strong> Registration enters your profile into Rapidhire’s talent database for evaluation by recruiters against confirmed client mandates. Registration does not constitute a job offer, guarantee of employment, or immigration sponsorship.
        </div>
      </div>

      <div className="space-y-5">
        {/* Row 1: Full Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Full Name <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Rajesh Kumar"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Email Address <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="rajesh.kumar@example.com"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
        </div>

        {/* Row 2: Phone & Current City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Phone / WhatsApp Number <span className="text-industrial-orange">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleInputChange}
                className="w-16 text-sm px-2 py-2 border border-r-0 border-steel-DEFAULT bg-steel-100 font-mono text-center"
              />
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="98765 43210"
                className="flex-1 text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Current City & Country <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="currentCity"
              required
              value={formData.currentCity}
              onChange={handleInputChange}
              placeholder="e.g. Hyderabad, India or Pune, India"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 3: Current Occupation & Qualification */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Current Occupation / Trade <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="currentOccupation"
              required
              value={formData.currentOccupation}
              onChange={handleInputChange}
              placeholder="e.g. CNC Turner, Mechanical Maintenance Engineer"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Highest Technical Qualification <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="qualificationLevel"
              value={formData.qualificationLevel}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="ITI / NCVT Trade Certificate">ITI / NCVT Trade Certificate</option>
              <option value="Polytechnic Diploma (State Board of Tech Ed)">Polytechnic Diploma (State Board of Tech Ed)</option>
              <option value="Bachelor of Engineering (B.E./B.Tech)">Bachelor of Engineering (B.E./B.Tech)</option>
              <option value="Master of Technology (M.Tech / M.E.)">Master of Technology (M.Tech / M.E.)</option>
              <option value="Vocational / Professional Certification (AWS, ASME, CSWIP, NDT)">Vocational / Professional Certification (AWS, ASME, CSWIP, NDT)</option>
              <option value="Secondary Education / Practical Apprenticeship">Secondary Education / Practical Apprenticeship</option>
            </select>
          </div>
        </div>

        {/* Row 4: Experience & Preferred Occupation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Total Verifiable Work Experience <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="1-2 Years (Entry / Junior Technician)">1-2 Years (Entry / Junior Technician)</option>
              <option value="3-5 Years (Mid-level Professional / Craftsman)">3-5 Years (Mid-level Professional / Craftsman)</option>
              <option value="6-9 Years (Senior Technician / Engineer)">6-9 Years (Senior Technician / Engineer)</option>
              <option value="10+ Years (Lead / Specialist / Supervisor)">10+ Years (Lead / Specialist / Supervisor)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Target / Preferred Role <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="preferredOccupation"
              required
              value={formData.preferredOccupation}
              onChange={handleInputChange}
              placeholder="e.g. 6G Welder, Automation Engineer"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 5: Skills & Preferred Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Key Technical Skills (comma separated) <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="technicalSkillsText"
              required
              value={formData.technicalSkillsText}
              onChange={handleInputChange}
              placeholder="e.g. Fanuc, SolidWorks, TIG 6G, PLC troubleshooting, EPLAN"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Preferred Work Destinations <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="preferredDestinationsText"
              required
              value={formData.preferredDestinationsText}
              onChange={handleInputChange}
              placeholder="e.g. UAE, Saudi Arabia, Germany, Poland, Domestic India"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 6: Languages & CV Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Languages Known & Fluency <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="languagesKnownText"
              required
              value={formData.languagesKnownText}
              onChange={handleInputChange}
              placeholder="e.g. English (Fluent), Hindi, Telugu, German (Basic)"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Upload CV / Resume <span className="text-graphite-400 font-normal">(Optional, PDF/Word max 5MB)</span>
            </label>
            {!selectedFile ? (
              <label className="border border-dashed border-steel-400 p-2.5 flex items-center justify-center gap-2 cursor-pointer bg-warmwhite-50 hover:bg-white text-xs text-graphite-600">
                <UploadCloud className="w-4 h-4 text-industrial-orange" />
                <span>Select CV File</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            ) : (
              <div className="flex items-center justify-between p-2 border border-steel-DEFAULT bg-steel-100 text-xs">
                <div className="flex items-center gap-1.5 truncate">
                  <FileText className="w-4 h-4 text-industrial-orange shrink-0" />
                  <span className="truncate">{selectedFile.name}</span>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1 hover:text-red-600 focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {fileError && <p className="text-[11px] text-red-600 mt-1">{fileError}</p>}
          </div>
        </div>

        {/* Consent Checkbox 1: Data Processing */}
        <div className="pt-2 border-t border-steel-200 space-y-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600">
            <input
              type="checkbox"
              name="consentProcessData"
              checked={formData.consentProcessData}
              onChange={handleInputChange}
              required
              className="mt-0.5 text-industrial-orange rounded-none focus:ring-industrial-orange"
            />
            <span>
              <strong className="text-navy-DEFAULT font-semibold">Mandatory Data Consent:</strong> I agree to Rapidhire processing my provided professional details and CV for assessing suitability against verified recruitment requirements. Rapidhire will not disclose my identity to prospective employers without prior discussion.
            </span>
          </label>

          {/* Consent Checkbox 2: Future communications */}
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600">
            <input
              type="checkbox"
              name="consentFutureOpportunities"
              checked={formData.consentFutureOpportunities}
              onChange={handleInputChange}
              className="mt-0.5 text-industrial-orange rounded-none focus:ring-industrial-orange"
            />
            <span>
              <strong className="text-navy-DEFAULT font-semibold">Optional Talent Pool Consent:</strong> I agree to Rapidhire retaining my profile in its talent pool to notify me about relevant future domestic or international opportunities matching my skill profile.
            </span>
          </label>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-DEFAULT hover:bg-navy-800 text-white text-sm font-semibold px-6 py-3 transition-colors border border-navy-900 shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Recording Profile...</span>
            ) : (
              <>
                <span>Register Profile</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-[11px] text-graphite-500 mt-2 font-mono">
            &bull; Stored securely &bull; No sensitive identity documents (passports, Aadhaar) collected at this stage
          </p>
        </div>
      </div>
    </form>
  );
};

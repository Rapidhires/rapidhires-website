import React, { useState } from 'react';
import { submitCandidateRegistration } from '../lib/storage';
import { CheckCircle2, UploadCloud, FileText, X, ArrowRight, Info } from 'lucide-react';

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
      <div className="bg-white p-8 border border-steel-300 text-center">
        <div className="w-12 h-12 bg-castiron-DEFAULT text-vermilion flex items-center justify-center mx-auto mb-4 border border-castiron-900">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="text-[11px] font-mono text-vermilion uppercase tracking-widest font-bold mb-1">
          [REGISTRATION RECORDED]
        </div>
        <h3 className="text-xl font-bold text-castiron-DEFAULT font-mono uppercase mb-2">
          Profile Registration Received
        </h3>
        <p className="text-xs font-mono text-steel-600 mb-4">
          CANDIDATE ID: <span className="text-vermilion font-bold">{submissionResult.id}</span>
        </p>
        <p className="text-xs text-graphite-600 max-w-lg mx-auto mb-4 leading-relaxed font-sans">
          {submissionResult.message}
        </p>

        <div className="bg-vellum-100 p-4 border border-steel-300 text-left text-xs text-graphite-700 mb-6 space-y-1.5 font-mono">
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Candidate Name:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Current Trade/Role:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.currentOccupation}</span>
          </div>
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Qualification:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.qualificationLevel}</span>
          </div>
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Verifiable Experience:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.yearsOfExperience}</span>
          </div>
          {preselectedVacancyTitle && (
            <div className="flex justify-between text-vermilion">
              <span>Attached Opportunity:</span>
              <span className="font-semibold">{preselectedVacancyTitle}</span>
            </div>
          )}
        </div>

        <div className="p-3 bg-steel-100 text-[11px] text-graphite-600 border border-steel-300 mb-6 text-left font-mono">
          <strong>Important Next Step Notice:</strong> Rapidhire evaluates profiles against verified employer mandates. We will never ask you for money or visa processing fees. All communications originate from official <code>@rapidhire.work</code> domains.
        </div>

        <button
          onClick={() => setSubmissionResult(null)}
          className="text-xs font-semibold uppercase tracking-wider px-4 py-2.5 bg-castiron-DEFAULT text-white hover:bg-castiron-800 transition-colors font-mono"
        >
          Register Another Profile
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 border border-steel-300 text-castiron-DEFAULT shadow-sm">
      <div className="border-b border-steel-300 pb-4 mb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono text-vermilion font-bold uppercase tracking-wider mb-1">
          <span className="w-1.5 h-1.5 bg-vermilion"></span>
          [CANDIDATE TALENT REGISTRATION]
        </div>
        <h3 className="text-xl font-bold text-castiron-DEFAULT tracking-tight">
          {preselectedVacancyTitle ? `Apply for ${preselectedVacancyTitle}` : 'Register Your Technical Profile'}
        </h3>
        <p className="text-xs text-graphite-500 mt-1 font-sans">
          Engineering, manufacturing, skilled trades, and technical personnel from India. Zero candidate fees charged.
        </p>
      </div>

      <div className="mb-6 p-3 bg-vellum-100 border border-steel-300 flex items-start gap-2.5 text-xs text-graphite-600">
        <Info className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
        <div className="font-sans">
          <strong className="font-mono text-castiron-DEFAULT uppercase tracking-wider text-[11px]">Recruitment Notice:</strong> Registration enters your profile into Rapidhire’s database for evaluation by recruiters against confirmed client mandates. Registration does not constitute a job offer, guarantee of employment, or immigration sponsorship.
        </div>
      </div>

      <div className="space-y-5">
        {/* Row 1: Full Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Full Name <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Rajesh Kumar"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Email Address <span className="text-vermilion">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="rajesh.kumar@example.com"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 2: Phone & Current City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Phone / WhatsApp Number <span className="text-vermilion">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleInputChange}
                className="w-16 text-xs px-2 py-2 border border-r-0 border-steel-300 bg-steel-100 font-mono text-center"
              />
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="98765 43210"
                className="flex-1 text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Current City & State <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="currentCity"
              required
              value={formData.currentCity}
              onChange={handleInputChange}
              placeholder="e.g. Hyderabad, Telangana or Pune, Maharashtra"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 3: Current Occupation & Qualification */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Current Trade / Occupation <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="currentOccupation"
              required
              value={formData.currentOccupation}
              onChange={handleInputChange}
              placeholder="e.g. CNC Turner, Mechanical Maintenance Engineer"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Highest Technical Qualification <span className="text-vermilion">*</span>
            </label>
            <select
              name="qualificationLevel"
              value={formData.qualificationLevel}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-mono"
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
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Total Verifiable Work Experience <span className="text-vermilion">*</span>
            </label>
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-mono"
            >
              <option value="1-2 Years (Entry / Junior Technician)">1-2 Years (Entry / Junior Technician)</option>
              <option value="3-5 Years (Mid-level Professional / Craftsman)">3-5 Years (Mid-level Professional / Craftsman)</option>
              <option value="6-9 Years (Senior Technician / Engineer)">6-9 Years (Senior Technician / Engineer)</option>
              <option value="10+ Years (Lead / Specialist / Supervisor)">10+ Years (Lead / Specialist / Supervisor)</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Target / Preferred Role <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="preferredOccupation"
              required
              value={formData.preferredOccupation}
              onChange={handleInputChange}
              placeholder="e.g. 6G Welder, Automation Engineer"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 5: Skills & Preferred Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Key Technical Skills (comma separated) <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="technicalSkillsText"
              required
              value={formData.technicalSkillsText}
              onChange={handleInputChange}
              placeholder="e.g. Fanuc, SolidWorks, TIG 6G, PLC troubleshooting, EPLAN"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Preferred Work Destinations <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="preferredDestinationsText"
              required
              value={formData.preferredDestinationsText}
              onChange={handleInputChange}
              placeholder="e.g. UAE, Saudi Arabia, Germany, Poland, Domestic India"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 6: Languages & CV Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Languages Known & Fluency <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="languagesKnownText"
              required
              value={formData.languagesKnownText}
              onChange={handleInputChange}
              placeholder="e.g. English (Fluent), Hindi, Telugu, German (Basic)"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Upload CV / Resume <span className="text-graphite-400 font-normal">(PDF/Word max 5MB)</span>
            </label>
            {!selectedFile ? (
              <label className="border border-dashed border-steel-400 p-2.5 flex items-center justify-center gap-2 cursor-pointer bg-vellum-50 hover:bg-white text-xs text-graphite-600 font-mono">
                <UploadCloud className="w-4 h-4 text-vermilion" />
                <span>Upload Document (PDF / Word)</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            ) : (
              <div className="flex items-center justify-between p-2 border border-steel-300 bg-steel-100 text-xs font-mono">
                <div className="flex items-center gap-1.5 truncate">
                  <FileText className="w-4 h-4 text-vermilion shrink-0" />
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
            {fileError && <p className="text-[11px] font-mono text-red-600 mt-1">{fileError}</p>}
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="pt-3 border-t border-steel-300 space-y-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600 font-sans">
            <input
              type="checkbox"
              name="consentProcessData"
              checked={formData.consentProcessData}
              onChange={handleInputChange}
              required
              className="mt-0.5 text-vermilion focus:ring-vermilion"
            />
            <span>
              <strong className="text-castiron-DEFAULT font-mono uppercase tracking-wider text-[11px]">Mandatory Data Consent:</strong> I agree to Rapidhire processing my provided professional details and CV for assessing suitability against verified recruitment requirements. Rapidhire will not disclose my identity to prospective employers without prior discussion.
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600 font-sans">
            <input
              type="checkbox"
              name="consentFutureOpportunities"
              checked={formData.consentFutureOpportunities}
              onChange={handleInputChange}
              className="mt-0.5 text-vermilion focus:ring-vermilion"
            />
            <span>
              <strong className="text-castiron-DEFAULT font-mono uppercase tracking-wider text-[11px]">Talent Pool Consent:</strong> I agree to Rapidhire retaining my profile in its talent pool to notify me about relevant future domestic or international opportunities matching my skill profile.
            </span>
          </label>
        </div>

        {/* Action Trigger */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-castiron-DEFAULT hover:bg-castiron-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 transition-colors border border-castiron-900 shadow-sm disabled:opacity-50 font-mono"
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
            &bull; Stored securely &bull; Zero sensitive identity numbers (passports, Aadhaar) collected at initial registration
          </p>
        </div>
      </div>
    </form>
  );
};

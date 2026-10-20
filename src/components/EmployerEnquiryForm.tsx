import React, { useState } from 'react';
import { submitEmployerEnquiry, EmployerEnquiry } from '../lib/storage';
import { CheckCircle2, AlertCircle, UploadCloud, FileText, X, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

interface EmployerEnquiryFormProps {
  initialOccupation?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const EmployerEnquiryForm: React.FC<EmployerEnquiryFormProps> = ({
  initialOccupation = '',
  onSuccess,
  isModal = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    companyWebsite: '',
    businessEmail: '',
    phoneCountryCode: '+971',
    phoneNumber: '',
    employerCountry: 'United Arab Emirates',
    industry: 'Industrial Manufacturing',
    occupationsRequired: initialOccupation || '',
    numberOfPeople: '1-5 Candidates',
    employmentType: 'Full-time Permanent',
    targetStartDate: 'Within 30-60 Days',
    workLocation: '',
    technicalRequirements: '',
    languageRequirements: '',
    message: '',
    privacyAcknowledged: false
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
        setFileError('File size exceeds the 5MB limit. Please provide a lighter document.');
        setSelectedFile(null);
        return;
      }
      const allowedExt = ['pdf', 'doc', 'docx', 'txt'];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!ext || !allowedExt.includes(ext)) {
        setFileError('Allowed formats: PDF, DOC, DOCX, TXT.');
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
    if (!formData.privacyAcknowledged) {
      alert('Please acknowledge the privacy & recruitment consent to proceed.');
      return;
    }

    setIsSubmitting(true);
    const payload = {
      ...formData,
      fileName: selectedFile ? selectedFile.name : undefined,
      fileSizeBytes: selectedFile ? selectedFile.size : undefined
    };

    const res = await submitEmployerEnquiry(payload);
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
          Workforce Requirement Recorded
        </h3>
        <p className="text-xs font-mono text-industrial-orange font-semibold mb-4">
          Reference Code: {submissionResult.id}
        </p>
        <p className="text-sm text-graphite-700 max-w-lg mx-auto mb-6 leading-relaxed">
          {submissionResult.message}
        </p>

        <div className="bg-warmwhite p-4 border border-steel-DEFAULT text-left text-xs text-graphite-600 mb-6 space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-graphite-500">Company:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.companyName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Contact:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.fullName} ({formData.businessEmail})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Occupations:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.occupationsRequired}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Hiring Volume:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.numberOfPeople}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Deployment Location:</span>
            <span className="font-semibold text-navy-DEFAULT">{formData.workLocation || formData.employerCountry}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setSubmissionResult(null)}
            className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 bg-navy-DEFAULT text-white hover:bg-navy-800 transition-colors"
          >
            Submit Another Requirement
          </button>
          <a
            href="mailto:enquiries@rapidhire.work"
            className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 border border-steel-DEFAULT text-navy-DEFAULT hover:bg-warmwhite transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-industrial-orange" />
            <span>Email Recruitment Desk</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 border border-steel-DEFAULT text-graphite">
      <div className="border-b border-steel-200 pb-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-industrial-orange font-bold uppercase tracking-wider mb-1">
          <span className="w-2 h-2 bg-industrial-orange"></span>
          Employer Requirement Intake
        </div>
        <h3 className="text-xl font-bold text-navy-DEFAULT">
          Define Your Workforce Requirement
        </h3>
        <p className="text-xs text-graphite-500 mt-1">
          Share your technical requirements and location. Our recruitment desk will conduct an initial feasibility review.
        </p>
      </div>

      <div className="space-y-5">
        {/* Row 1: Name and Job Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Your Full Name <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Marcus Vance"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Your Job Title <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="e.g. Plant Manager / Head of HR"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
        </div>

        {/* Row 2: Company Name and Website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Company Name <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="e.g. Al-Bahar Industrial Engineering"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Company Website <span className="text-graphite-400 font-normal">(Optional)</span>
            </label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
        </div>

        {/* Row 3: Business Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Corporate / Business Email <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              required
              value={formData.businessEmail}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Phone Number with Country Code <span className="text-industrial-orange">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleInputChange}
                className="w-20 text-sm px-2 py-2 border border-r-0 border-steel-DEFAULT bg-steel-100 font-mono text-center"
              />
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="50 123 4567"
                className="flex-1 text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Country and Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Employer's Operating Country <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="employerCountry"
              value={formData.employerCountry}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Qatar">Qatar</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Oman">Oman</option>
              <option value="Germany">Germany</option>
              <option value="Poland">Poland</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Japan">Japan</option>
              <option value="Singapore">Singapore</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="India (Domestic Project)">India (Domestic Project)</option>
              <option value="Other International Jurisdiction">Other International Jurisdiction</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Industry Sector <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="Industrial Manufacturing">Industrial Manufacturing</option>
              <option value="Automotive & Transport Equipment">Automotive & Transport Equipment</option>
              <option value="Engineering & Infrastructure">Engineering & Infrastructure</option>
              <option value="Electrical & Electronics">Electrical & Electronics</option>
              <option value="Energy & Industrial Maintenance">Energy & Industrial Maintenance</option>
              <option value="Construction & Project Workforce">Construction & Project Workforce</option>
              <option value="Railway & Transport Systems">Railway & Transport Systems (Area of interest)</option>
              <option value="Other Heavy Industry">Other Heavy Industry</option>
            </select>
          </div>
        </div>

        {/* Row 5: Occupations Required & Number of People */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Occupations Required <span className="text-industrial-orange">*</span>
            </label>
            <input
              type="text"
              name="occupationsRequired"
              required
              value={formData.occupationsRequired}
              onChange={handleInputChange}
              placeholder="e.g. 6G Welders, CNC Machinists, Mechanical Engineers"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white focus:border-navy-DEFAULT"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Number of People Required <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="1-2 Key Technical Hires">1-2 Key Technical Hires</option>
              <option value="3-5 Specialized Trades">3-5 Specialized Trades</option>
              <option value="6-15 Workshop / Shift Team">6-15 Workshop / Shift Team</option>
              <option value="16-50 Bulk Industrial Mobilisation">16-50 Bulk Industrial Mobilisation</option>
              <option value="50+ Major Infrastructure Requirement">50+ Major Infrastructure Requirement</option>
            </select>
          </div>
        </div>

        {/* Row 6: Employment Type & Target Start Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Employment Type <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="Full-time Permanent">Full-time Permanent</option>
              <option value="Fixed-Term Project Contract (1-2 Years)">Fixed-Term Project Contract (1-2 Years)</option>
              <option value="Shutdown / Outage Maintenance (3-6 Months)">Shutdown / Outage Maintenance (3-6 Months)</option>
              <option value="Technical Specialist Secondment">Technical Specialist Secondment</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Target Start / Deployment Date <span className="text-industrial-orange">*</span>
            </label>
            <select
              name="targetStartDate"
              value={formData.targetStartDate}
              onChange={handleInputChange}
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            >
              <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
              <option value="Within 30-60 Days">Within 30-60 Days</option>
              <option value="Quarter 1 / Quarter 2 Planning">Quarter 1 / Quarter 2 Planning</option>
              <option value="Project Mobilisation Schedule Dependent">Project Mobilisation Schedule Dependent</option>
            </select>
          </div>
        </div>

        {/* Row 7: Work Location */}
        <div>
          <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
            Specific Work Location / Plant Site <span className="text-industrial-orange">*</span>
          </label>
          <input
            type="text"
            name="workLocation"
            required
            value={formData.workLocation}
            onChange={handleInputChange}
            placeholder="e.g. Jubail Industrial Area 2, Saudi Arabia or Stuttgart Facility, Germany"
            className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
          />
        </div>

        {/* Row 8: Technical & Qualification Requirements */}
        <div>
          <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
            Technical & Qualification Requirements <span className="text-industrial-orange">*</span>
          </label>
          <textarea
            name="technicalRequirements"
            rows={3}
            required
            value={formData.technicalRequirements}
            onChange={handleInputChange}
            placeholder="Specify required machine controls (e.g. Fanuc, Siemens), trade certifications (e.g. ASME 6G, AWS), minimum years of experience, or equipment knowledge."
            className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
          />
        </div>

        {/* Row 9: Language Requirements & Additional Message */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Language Requirements <span className="text-graphite-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              name="languageRequirements"
              value={formData.languageRequirements}
              onChange={handleInputChange}
              placeholder="e.g. Conversational English, Basic German"
              className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
              Job Description / Spec Sheet <span className="text-graphite-400 font-normal">(Optional, max 5MB)</span>
            </label>
            {!selectedFile ? (
              <label className="border border-dashed border-steel-400 p-2.5 flex items-center justify-center gap-2 cursor-pointer bg-warmwhite-50 hover:bg-white text-xs text-graphite-600">
                <UploadCloud className="w-4 h-4 text-industrial-orange" />
                <span>Upload JD (PDF / Word)</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
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

        {/* Row 10: General Message */}
        <div>
          <label className="block text-xs font-semibold text-navy-DEFAULT uppercase tracking-wider mb-1">
            Additional Scope or Operational Context <span className="text-graphite-400 font-normal">(Optional)</span>
          </label>
          <textarea
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any specific project timelines, shift patterns, or commercial preferences..."
            className="w-full text-sm px-3 py-2 border border-steel-DEFAULT bg-warmwhite-50 focus:bg-white"
          />
        </div>

        {/* Privacy & Compliance Acknowledgement */}
        <div className="pt-2 border-t border-steel-200">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600">
            <input
              type="checkbox"
              name="privacyAcknowledged"
              checked={formData.privacyAcknowledged}
              onChange={handleInputChange}
              required
              className="mt-0.5 text-industrial-orange rounded-none focus:ring-industrial-orange"
            />
            <span>
              I confirm that this enquiry represents a legitimate corporate or project workforce requirement. I agree to Rapidhire processing this information to assess sourcing feasibility and contact me regarding workforce options. Rapidhire adheres to strict confidentiality standards.
            </span>
          </label>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-industrial-orange hover:bg-industrial-orange-hover text-white text-sm font-semibold px-6 py-3 transition-colors border border-industrial-orange-dark shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Workforce Brief...</span>
            ) : (
              <>
                <span>Submit Workforce Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-[11px] text-graphite-500 mt-2 font-mono">
            &bull; Direct recruitment desk review within 24 business hours &bull; Zero candidate placement fees charged
          </p>
        </div>
      </div>
    </form>
  );
};

import React, { useState } from 'react';
import { submitEmployerEnquiry } from '../lib/storage';
import { CheckCircle2, UploadCloud, FileText, X, ArrowRight, Mail } from 'lucide-react';

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
        setFileError('File size exceeds the 5MB limit.');
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
      <div className="bg-white p-8 border border-steel-300 text-center">
        <div className="w-12 h-12 bg-castiron-DEFAULT text-vermilion flex items-center justify-center mx-auto mb-4 border border-castiron-900">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="text-[11px] font-mono text-vermilion uppercase tracking-widest font-bold mb-1">
          [TRANSMISSION CONFIRMED]
        </div>
        <h3 className="text-xl font-bold text-castiron-DEFAULT font-mono uppercase mb-2">
          Workforce Requirement Recorded
        </h3>
        <p className="text-xs font-mono text-steel-600 mb-4">
          REFERENCE DOSSIER ID: <span className="text-vermilion font-bold">{submissionResult.id}</span>
        </p>
        <p className="text-xs text-graphite-600 max-w-lg mx-auto mb-6 leading-relaxed font-sans">
          {submissionResult.message}
        </p>

        <div className="bg-vellum-100 p-4 border border-steel-300 text-left text-xs text-graphite-700 mb-6 space-y-1.5 font-mono">
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Corporate Entity:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.companyName}</span>
          </div>
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Intake Contact:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.fullName} ({formData.businessEmail})</span>
          </div>
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Occupations Specified:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.occupationsRequired}</span>
          </div>
          <div className="flex justify-between border-b border-steel-200 pb-1">
            <span className="text-graphite-500">Target Volume:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.numberOfPeople}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-graphite-500">Deployment Location:</span>
            <span className="font-semibold text-castiron-DEFAULT">{formData.workLocation || formData.employerCountry}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono">
          <button
            onClick={() => setSubmissionResult(null)}
            className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-4 py-2.5 bg-castiron-DEFAULT text-white hover:bg-castiron-800 transition-colors"
          >
            Submit Another Requirement
          </button>
          <a
            href="mailto:enquiries@rapidhire.work"
            className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-4 py-2.5 border border-steel-300 text-castiron-DEFAULT hover:bg-vellum-100 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-vermilion" />
            <span>Email Recruitment Desk</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 border border-steel-300 text-castiron-DEFAULT shadow-sm">
      <div className="border-b border-steel-300 pb-4 mb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono text-vermilion font-bold uppercase tracking-wider mb-1">
          <span className="w-1.5 h-1.5 bg-vermilion"></span>
          [SPECIFICATION INTAKE FORM]
        </div>
        <h3 className="text-xl font-bold text-castiron-DEFAULT tracking-tight">
          Define Your Workforce Requirement
        </h3>
        <p className="text-xs text-graphite-500 mt-1 font-sans">
          Share your technical requirements and plant location. Our international recruitment desk will conduct an immediate feasibility review.
        </p>
      </div>

      <div className="space-y-5">
        {/* Row 1: Name and Job Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Your Full Name <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Klaus Weber / Marcus Vance"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Your Job Title <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="e.g. Plant Manager / Head of Technical Talent"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 2: Company Name and Website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Company Name <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="e.g. Precision Engineering GmbH"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Company Website <span className="text-graphite-400 font-normal">(Optional)</span>
            </label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Row 3: Business Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Corporate / Business Email <span className="text-vermilion">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              required
              value={formData.businessEmail}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Phone Number with Country Code <span className="text-vermilion">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleInputChange}
                className="w-20 text-xs px-2 py-2 border border-r-0 border-steel-300 bg-steel-100 font-mono text-center"
              />
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="50 123 4567"
                className="flex-1 text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Country and Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Employer Operating Country <span className="text-vermilion">*</span>
            </label>
            <select
              name="employerCountry"
              value={formData.employerCountry}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            >
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Germany">Germany</option>
              <option value="Poland">Poland</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Japan">Japan</option>
              <option value="Singapore">Singapore</option>
              <option value="Qatar">Qatar</option>
              <option value="Kuwait">Kuwait</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="India (Domestic Project)">India (Domestic Project)</option>
              <option value="Other International Jurisdiction">Other International Jurisdiction</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Industry Sector <span className="text-vermilion">*</span>
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            >
              <option value="Industrial Manufacturing">Industrial Manufacturing</option>
              <option value="Automotive & Transport Equipment">Automotive & Transport Equipment</option>
              <option value="Engineering & Infrastructure">Engineering & Infrastructure</option>
              <option value="Electrical & Electronics">Electrical & Electronics</option>
              <option value="Energy & Industrial Maintenance">Energy & Industrial Maintenance</option>
              <option value="Construction & Project Workforce">Construction & Project Workforce</option>
              <option value="Railway & Transport Systems">Railway & Transport Systems (Prospective)</option>
              <option value="Other Heavy Industry">Other Heavy Industry</option>
            </select>
          </div>
        </div>

        {/* Row 5: Occupations Required & Number of People */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Occupations Required <span className="text-vermilion">*</span>
            </label>
            <input
              type="text"
              name="occupationsRequired"
              required
              value={formData.occupationsRequired}
              onChange={handleInputChange}
              placeholder="e.g. CNC 5-Axis Operators, 6G Welders, Mechanical Engineers"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Workforce Volume Required <span className="text-vermilion">*</span>
            </label>
            <select
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-mono"
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
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Employment Type <span className="text-vermilion">*</span>
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            >
              <option value="Full-time Permanent">Full-time Permanent</option>
              <option value="Fixed-Term Project Contract (1-2 Years)">Fixed-Term Project Contract (1-2 Years)</option>
              <option value="Shutdown / Outage Maintenance (3-6 Months)">Shutdown / Outage Maintenance (3-6 Months)</option>
              <option value="Technical Specialist Secondment">Technical Specialist Secondment</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Target Start / Deployment Schedule <span className="text-vermilion">*</span>
            </label>
            <select
              name="targetStartDate"
              value={formData.targetStartDate}
              onChange={handleInputChange}
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
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
          <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
            Plant Site / Deployment City <span className="text-vermilion">*</span>
          </label>
          <input
            type="text"
            name="workLocation"
            required
            value={formData.workLocation}
            onChange={handleInputChange}
            placeholder="e.g. Jubail Industrial Zone 2, Saudi Arabia or Stuttgart Plant, Germany"
            className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
          />
        </div>

        {/* Row 8: Technical & Qualification Requirements */}
        <div>
          <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
            Technical & Qualification Specifications <span className="text-vermilion">*</span>
          </label>
          <textarea
            name="technicalRequirements"
            rows={3}
            required
            value={formData.technicalRequirements}
            onChange={handleInputChange}
            placeholder="Specify required machine controls (Fanuc, Siemens, Heidenhain), trade certifications (ASME 6G, AWS, ISO), min years of experience, or tooling knowledge."
            className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-mono"
          />
        </div>

        {/* Row 9: Language Requirements & JD Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Language Requirements <span className="text-graphite-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              name="languageRequirements"
              value={formData.languageRequirements}
              onChange={handleInputChange}
              placeholder="e.g. Technical English (B2), Basic German"
              className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
              Job Description / Spec Sheet <span className="text-graphite-400 font-normal">(PDF / Word max 5MB)</span>
            </label>
            {!selectedFile ? (
              <label className="border border-dashed border-steel-400 p-2.5 flex items-center justify-center gap-2 cursor-pointer bg-vellum-50 hover:bg-white text-xs text-graphite-600 font-mono">
                <UploadCloud className="w-4 h-4 text-vermilion" />
                <span>Upload Specification (PDF / Word)</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
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

        {/* Row 10: Additional Scope */}
        <div>
          <label className="block text-[11px] font-mono font-semibold text-castiron-DEFAULT uppercase tracking-wider mb-1">
            Additional Scope or Operational Context <span className="text-graphite-400 font-normal">(Optional)</span>
          </label>
          <textarea
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any shift schedules, tooling standards, or project milestone details..."
            className="w-full text-xs px-3 py-2 border border-steel-300 bg-vellum-50 focus:bg-white font-mono"
          />
        </div>

        {/* Privacy & Compliance Acknowledgement */}
        <div className="pt-3 border-t border-steel-300">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600 font-sans">
            <input
              type="checkbox"
              name="privacyAcknowledged"
              checked={formData.privacyAcknowledged}
              onChange={handleInputChange}
              required
              className="mt-0.5 text-vermilion focus:ring-vermilion"
            />
            <span>
              I confirm that this enquiry represents a legitimate corporate or project workforce requirement. I agree to Rapidhire processing this information to assess sourcing feasibility. Rapidhire adheres to strict client confidentiality.
            </span>
          </label>
        </div>

        {/* Action Trigger */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-vermilion hover:bg-vermilion-hover text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 transition-colors border border-vermilion-border shadow-sm disabled:opacity-50 font-mono"
          >
            {isSubmitting ? (
              <span>Transmitting Workforce Dossier...</span>
            ) : (
              <>
                <span>Submit Workforce Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-[11px] text-graphite-500 mt-2 font-mono">
            &bull; Direct recruitment desk feasibility review within 24 business hours &bull; Strict zero candidate fee policy
          </p>
        </div>
      </div>
    </form>
  );
};

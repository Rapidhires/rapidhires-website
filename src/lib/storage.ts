export interface EmployerEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  jobTitle: string;
  companyName: string;
  companyWebsite?: string;
  businessEmail: string;
  phoneCountryCode: string;
  phoneNumber: string;
  employerCountry: string;
  industry: string;
  occupationsRequired: string;
  numberOfPeople: string;
  employmentType: string;
  targetStartDate: string;
  workLocation: string;
  technicalRequirements: string;
  languageRequirements?: string;
  message: string;
  fileName?: string;
  fileSizeBytes?: number;
  privacyAcknowledged: boolean;
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'CONTACTED';
}

export interface CandidateProfile {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  currentCity: string;
  currentCountry: string;
  currentOccupation: string;
  qualificationLevel: string;
  yearsOfExperience: string;
  technicalSkills: string[];
  preferredDestinations: string[];
  languagesKnown: string[];
  preferredOccupation: string;
  fileName?: string;
  fileSizeBytes?: number;
  consentProcessData: boolean;
  consentFutureOpportunities: boolean;
  appliedVacancyId?: string;
  status: 'REGISTERED' | 'PROFILE_SCREENED' | 'TALENT_POOL';
}

export interface PartnerEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  jobTitle: string;
  organisationName: string;
  partnerType: 'Technical Training Institute' | 'University / College' | 'International Agency' | 'Certification Body' | 'Industry Association';
  email: string;
  phoneNumber: string;
  country: string;
  collaborationScope: string;
  privacyAcknowledged: boolean;
}

const STORAGE_KEYS = {
  EMPLOYERS: 'rapidhire_employer_enquiries',
  CANDIDATES: 'rapidhire_candidate_profiles',
  PARTNERS: 'rapidhire_partner_enquiries'
};

// Check if Supabase environment variables are configured
export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
};

export const submitEmployerEnquiry = async (
  enquiryData: Omit<EmployerEnquiry, 'id' | 'createdAt' | 'status'>
): Promise<{ success: boolean; id: string; message: string; fallbackEmail?: string }> => {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newRecord: EmployerEnquiry = {
    ...enquiryData,
    id: `EMP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'SUBMITTED'
  };

  try {
    // If Supabase is configured in the future, it would insert into 'employer_enquiries'
    if (isSupabaseConfigured()) {
      // In production, execute Supabase call here with RLS
    }

    // Persist to local browser storage for session demonstration & audit
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.EMPLOYERS) || '[]');
    existing.unshift(newRecord);
    localStorage.setItem(STORAGE_KEYS.EMPLOYERS, JSON.stringify(existing));

    return {
      success: true,
      id: newRecord.id,
      message: 'Your workforce requirement has been successfully recorded. Our international recruitment desk will review the brief and contact you within 24 business hours.'
    };
  } catch (err) {
    console.error('Submission error:', err);
    return {
      success: false,
      id: '',
      message: 'An error occurred while transmitting your request. Please reach out directly to our recruitment desk.',
      fallbackEmail: 'enquiries@rapidhire.work'
    };
  }
};

export const submitCandidateRegistration = async (
  candidateData: Omit<CandidateProfile, 'id' | 'createdAt' | 'status'>
): Promise<{ success: boolean; id: string; message: string; fallbackEmail?: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newRecord: CandidateProfile = {
    ...candidateData,
    id: `CAN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'REGISTERED'
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CANDIDATES) || '[]');
    existing.unshift(newRecord);
    localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(existing));

    return {
      success: true,
      id: newRecord.id,
      message: 'Your profile registration has been received and added to our recruiter review pool. If your qualifications match an active requirement, our team will reach out directly.'
    };
  } catch (err) {
    console.error('Candidate registration error:', err);
    return {
      success: false,
      id: '',
      message: 'An error occurred while recording your registration.',
      fallbackEmail: 'candidates@rapidhire.work'
    };
  }
};

export const submitPartnerEnquiry = async (
  partnerData: Omit<PartnerEnquiry, 'id' | 'createdAt'>
): Promise<{ success: boolean; id: string; message: string; fallbackEmail?: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const newRecord: PartnerEnquiry = {
    ...partnerData,
    id: `PTR-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.PARTNERS) || '[]');
    existing.unshift(newRecord);
    localStorage.setItem(STORAGE_KEYS.PARTNERS, JSON.stringify(existing));

    return {
      success: true,
      id: newRecord.id,
      message: 'Thank you for your institutional partnership enquiry. Our partnerships lead will follow up shortly.'
    };
  } catch (err) {
    return {
      success: false,
      id: '',
      message: 'Submission failed. Please email us directly.',
      fallbackEmail: 'partnerships@rapidhire.work'
    };
  }
};

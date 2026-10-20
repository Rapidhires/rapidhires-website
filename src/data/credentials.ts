export interface Credential {
  id: string;
  badge: string;
  title: string;
  detail: string;
  verificationNote: string;
}

export const CREDENTIALS: Credential[] = [
  {
    id: 'thub-rubrix',
    badge: 'T-Hub RubriX Programme',
    title: 'Winner — HR & Workforce Innovation Category',
    detail: 'Recognised as category winner in T-Hub’s flagship RubriX accelerator programme, selected from approximately 240 startup applicants across India for innovation in recruiter-assisted workforce sourcing.',
    verificationNote: 'Programme award subject to formal institutional verification standards.'
  },
  {
    id: 'govt-telangana',
    badge: 'State Skilled Hiring Initiative',
    title: 'Government of Telangana Collaboration',
    detail: 'Collaborative initiative focused on structured outreach, technical skill assessments, and formal career pathways for qualified engineering and industrial talent.',
    verificationNote: 'Scope of collaboration limited to defined skilled-workforce outreach initiatives.'
  },
  {
    id: 'india-registered',
    badge: 'Statutory Registration',
    title: 'Registered Enterprise in India',
    detail: 'Incorporated under the laws of the Republic of India as a formal recruitment and human resource workforce solutions entity, operating under domestic and bilateral business norms.',
    verificationNote: 'Corporate compliance records maintained under Ministry of Corporate Affairs guidelines.'
  },
  {
    id: 'fair-practice',
    badge: 'Ethical Recruitment',
    title: 'Fair Recruitment Practice Commitment',
    detail: 'Firm adherence to ethical recruitment principles: zero candidate-fee exploitation, transparent employment contracts, and direct coordination between candidates and verified employers.',
    verificationNote: 'Charter published in company compliance and candidate onboarding documentation.'
  },
  {
    id: 'open-technology',
    badge: 'Technology Approach',
    title: 'Open-Source Recruiter-Assisted Architecture',
    detail: 'Utilising open-source software methodologies to standardise candidate evaluation, skills ontology mapping, and interview logistics, keeping recruiters focused on qualitative human evaluation.',
    verificationNote: 'Architecture based on open technical frameworks and transparent workflows.'
  },
  {
    id: 'candidate-support-247',
    badge: 'Post-Placement Care',
    title: '24/7 Candidate Support Channel',
    detail: 'Dedicated round-the-clock support communication channel enabling placed technical personnel and industrial workers to raise operational queries, seek guidance, and report concerns.',
    verificationNote: 'Operates in conjunction with local host employers and agreed in-country contact points.'
  }
];

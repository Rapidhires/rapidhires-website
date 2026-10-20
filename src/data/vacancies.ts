export interface Vacancy {
  id: string;
  reference: string;
  title: string;
  category: 'Engineering' | 'Manufacturing' | 'Skilled Trades' | 'Maintenance & Technical' | 'Industrial & Project' | 'IT & Software (Europe Only)';
  employerName: string;
  isEmployerDisclosed: boolean;
  destinationCountry: string;
  workLocation: string;
  employmentType: 'Full-time Permanent' | 'Fixed-term Project (2 Years)' | 'Rotational Contract' | 'Direct Employment';
  roleSummary: string;
  experienceRequired: string;
  qualificationRequired: string;
  languageRequirements: string;
  salaryAndBenefits: string;
  applicationDeadline: string;
  verifiedStatus: 'Verified Open Requirement' | 'Candidate Screening Stage';
  duties: string[];
  regionScope?: string;
}

export const VACANCIES: Vacancy[] = [
  {
    id: 'rh-vac-2025-05',
    reference: 'RH-IT-DE-2025-01',
    title: 'Senior Embedded Systems & AUTOSAR Software Engineer',
    category: 'IT & Software (Europe Only)',
    employerName: 'Automotive Tier-1 Systems Integrator (Client reference confidential at initial screening)',
    isEmployerDisclosed: false,
    destinationCountry: 'Germany',
    workLocation: 'Munich / Stuttgart, Germany',
    employmentType: 'Full-time Permanent',
    roleSummary: 'Develop safety-critical AUTOSAR Classic ECU software for electric vehicle powertrain controllers, battery management systems, and body electronics.',
    experienceRequired: '4 to 8 years in Embedded C/C++ with deep hands-on AUTOSAR stack configuration, CANoe, and ISO 26262 compliance.',
    qualificationRequired: 'Bachelor / Master in Electronics, Electrical, or Computer Engineering. Fully eligible for German EU Blue Card fast-track.',
    languageRequirements: 'Fluent Technical English (C1/B2). German language classes subsidized by host employer upon arrival.',
    salaryAndBenefits: 'German collective engineering tariff (€68,000 – €85,000 p.a. benchmark) + comprehensive relocation assistance, legal visa filing, and statutory health insurance.',
    applicationDeadline: '2026-12-30',
    verifiedStatus: 'Verified Open Requirement',
    regionScope: 'Europe Only',
    duties: [
      'Architect and configure BSW (Base Software) modules, MCAL drivers, and RTE interfaces using Vector DaVinci or EB tresos.',
      'Perform static code analysis (MISRA C:2012) and unit testing using VectorCAST / GoogleTest.',
      'Coordinate with Munich system engineering teams during vehicle test bench integration.'
    ]
  },
  {
    id: 'rh-vac-2025-06',
    reference: 'RH-IT-PL-2025-03',
    title: 'Cloud Infrastructure & DevOps Engineer (Industrial IoT)',
    category: 'IT & Software (Europe Only)',
    employerName: 'European Smart Logistics & Telematics Provider',
    isEmployerDisclosed: false,
    destinationCountry: 'Poland',
    workLocation: 'Kraków / Warsaw (Hybrid), Poland',
    employmentType: 'Full-time Permanent',
    roleSummary: 'Manage scalable Kubernetes clusters, IaC pipelines, and secure telemetry gateways processing millions of daily sensor events across European fulfillment networks.',
    experienceRequired: '3 to 6 years in cloud engineering with Kubernetes, Terraform, AWS/Azure, and container security.',
    qualificationRequired: 'Degree in Computer Science or Software Engineering. EU Blue Card / Polish National Work Permit eligible.',
    languageRequirements: 'Professional English (B2 minimum).',
    salaryAndBenefits: 'Competitive European IT contract (Umowa o Pracę or B2B equivalent), private healthcare, relocation subsidy.',
    applicationDeadline: '2026-12-15',
    verifiedStatus: 'Verified Open Requirement',
    regionScope: 'Europe Only',
    duties: [
      'Maintain Terraform modules and Helm charts for multi-region microservice deployments.',
      'Implement strict GDPR data isolation and IEC 62443 zero-trust security postures.',
      'Monitor real-time industrial telemetry with Grafana, Prometheus, and automated PagerDuty escalation.'
    ]
  },
  {
    id: 'rh-vac-2025-01',
    reference: 'RH-ENG-DE-2025-04',
    title: 'Senior Mechanical Design Engineer (Machinery)',
    category: 'Engineering',
    employerName: 'Precision Machinery Manufacturer (Client reference: confidential at initial screening)',
    isEmployerDisclosed: false,
    destinationCountry: 'Germany',
    workLocation: 'Baden-Württemberg, Germany',
    employmentType: 'Full-time Permanent',
    roleSummary: 'Responsible for 3D parametric design of custom automated assembly stations, mechanical drive calculations, and integration with electrical control components.',
    experienceRequired: '5 to 8 years in mechanical machinery design with 3D CAD (SolidWorks or Siemens NX).',
    qualificationRequired: 'Bachelor of Engineering / B.Tech in Mechanical Engineering (AICTE recognized).',
    languageRequirements: 'Professional English (C1/B2). Basic German (A2 or willingness to undergo intensive language training prior to deployment).',
    salaryAndBenefits: 'Competitive European collective tariff benchmark; includes relocation allowance, visa assistance through certified employer legal counsel, and health insurance.',
    applicationDeadline: '2026-12-15',
    verifiedStatus: 'Verified Open Requirement',
    duties: [
      'Model precision assemblies and create 2D manufacturing drawings according to DIN / ISO standards.',
      'Perform tolerance stack analyses and structural strength verification.',
      'Coordinate with workshop assembly fitters during prototype assembly and commissioning.'
    ]
  },
  {
    id: 'rh-vac-2025-02',
    reference: 'RH-MFG-UAE-2025-11',
    title: 'CNC 5-Axis Milling Operator & Programmer',
    category: 'Manufacturing',
    employerName: 'Aerospace & Energy Component Manufacturer',
    isEmployerDisclosed: false,
    destinationCountry: 'United Arab Emirates',
    workLocation: 'Abu Dhabi Industrial Zone, UAE',
    employmentType: 'Fixed-term Project (2 Years)',
    roleSummary: 'Operate DMG MORI / Mazak 5-axis machining centres producing high-precision impellers, turbine casings, and aerospace sub-assemblies.',
    experienceRequired: 'Minimum 4 years verifiable experience on 5-axis CNC machines with Heidenhain or Siemens 840D controls.',
    qualificationRequired: 'ITI Machinist / Turner or Diploma in Mechanical Engineering.',
    languageRequirements: 'Working English proficiency (capable of interpreting technical drawings and shop-floor safety instructions).',
    salaryAndBenefits: 'Tax-free monthly salary, company provided bachelor accommodation, medical insurance, and return air ticket.',
    applicationDeadline: '2026-11-30',
    verifiedStatus: 'Verified Open Requirement',
    duties: [
      'Set workholding fixtures, touch off tools, and adjust kinematic machine offsets.',
      'Conduct first-off dimensional inspections using CMM and surface roughness testers.',
      'Maintain machine preventative maintenance logs and cutting fluid parameters.'
    ]
  },
  {
    id: 'rh-vac-2025-03',
    reference: 'RH-TRD-SA-2025-08',
    title: '6G TIG & SMAW Pipe Welder (Alloy & Carbon Steel)',
    category: 'Skilled Trades',
    employerName: 'Industrial EPC Infrastructure Contractor',
    isEmployerDisclosed: false,
    destinationCountry: 'Saudi Arabia',
    workLocation: 'Jubail Industrial City, Saudi Arabia',
    employmentType: 'Full-time Permanent',
    roleSummary: 'Perform high-integrity butt welds on heavy-wall alloy and carbon steel piping circuits subject to 100% radiographic inspection.',
    experienceRequired: 'Min. 5 years certified industrial welding experience with documented weld test qualifications.',
    qualificationRequired: 'ITI Welder certification + ability to pass 6G weld test coupons (GTAW root/hot pass + SMAW fill/cap).',
    languageRequirements: 'Basic English or Hindi working communication.',
    salaryAndBenefits: 'Monthly base pay, project allowances, free accommodation, food provisions, and comprehensive medical coverage.',
    applicationDeadline: '2026-12-01',
    verifiedStatus: 'Verified Open Requirement',
    duties: [
      'Prepare joint bevels, check pre-heat temperatures with tempilstiks, and maintain inert gas backing purge.',
      'Complete weld passes free from undercut, porosity, or lack of penetration.',
      'Mark joints with welder identification stamp and maintain weld traceability logs.'
    ]
  },
  {
    id: 'rh-vac-2025-04',
    reference: 'RH-MNT-PL-2025-02',
    title: 'Industrial Electrical & Automation Maintenance Technician',
    category: 'Maintenance & Technical',
    employerName: 'Automated Logistics & Warehousing Solutions Group',
    isEmployerDisclosed: false,
    destinationCountry: 'Poland',
    workLocation: 'Wrocław Industrial Park, Poland',
    employmentType: 'Full-time Permanent',
    roleSummary: 'Maintain automated conveyor systems, automated guided vehicles (AGVs), sortation loops, and industrial motor drives in a 24/7 fulfilment hub.',
    experienceRequired: '3 to 6 years industrial electrical maintenance with PLC troubleshooting skills.',
    qualificationRequired: 'Diploma in Electrical / Electronics Engineering or ITI Electrician with automation experience.',
    languageRequirements: 'Conversational English (B1/B2).',
    salaryAndBenefits: 'Standard Polish labor contract (Umowa o Pracę), single accommodation allowance, private healthcare, paid annual leave.',
    applicationDeadline: '2026-11-20',
    verifiedStatus: 'Verified Open Requirement',
    duties: [
      'Troubleshoot sensor, photo-eye, solenoid valve, and variable frequency drive (VFD) failures.',
      'Connect via diagnostic laptop to Siemens S7-1500 PLCs to identify input/output faults.',
      'Execute scheduled preventative maintenance on mechanical rollers and electrical distribution panels.'
    ]
  }
];

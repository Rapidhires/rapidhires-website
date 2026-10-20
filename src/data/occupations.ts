export interface Occupation {
  id: string;
  title: string;
  category: 'Engineering' | 'Manufacturing' | 'Skilled Trades' | 'Maintenance & Technical' | 'Industrial & Project';
  industry: string;
  experienceLevel: 'Junior (1-3 yrs)' | 'Mid-Level (3-7 yrs)' | 'Senior (7-12 yrs)' | 'Lead / Specialist (12+ yrs)';
  qualificationLevel: 'ITI / Trade Diploma' | 'Polytechnic Diploma' | 'Bachelor of Engineering (B.E./B.Tech)' | 'Master of Engineering / M.Tech' | 'Vocational Certification';
  responsibilities: string[];
  skills: string[];
  qualifications: string[];
  relatedRoles: string[];
  activeSourcing: boolean;
  statusNote: string;
}

export const OCCUPATIONS: Occupation[] = [
  // Engineering
  {
    id: 'mech-eng',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    industry: 'Industrial Manufacturing & Heavy Equipment',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Design, analyse, and oversee manufacturing processes and mechanical systems.',
      'Prepare detailed technical specifications, BOMs, and manufacturing tolerances.',
      'Coordinate with production teams, tooling specialists, and quality engineers.',
      'Conduct failure analysis, root-cause investigations, and engineering change management.'
    ],
    skills: ['AutoCAD', 'SolidWorks / Creo', 'GD&T', 'Thermodynamics', 'Finite Element Analysis (FEA)', 'DFM/DFA'],
    qualifications: ['B.Tech / B.E. in Mechanical Engineering from an AICTE-approved institution', 'Knowledge of ISO / ASME standards'],
    relatedRoles: ['Design Engineer', 'Production Engineer', 'Quality Engineer'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel available for verified international employers.'
  },
  {
    id: 'elec-eng',
    title: 'Electrical Engineer',
    category: 'Engineering',
    industry: 'Electrical & Electronics / Power Infrastructure',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Design power distribution networks, motor control centres (MCC), and switchgear installations.',
      'Develop single-line diagrams (SLDs), cable schedules, and substation layouts.',
      'Support commissioning of electrical panels, drives, and protection relays.',
      'Ensure compliance with IEC, NEC, and local electrical safety standards.'
    ],
    skills: ['EPLAN', 'AutoCAD Electrical', 'Switchgear Design', 'PLC Basics', 'Protection Relays', 'IEC Standards'],
    qualifications: ['B.Tech / B.E. in Electrical & Electronics Engineering', 'Certified in electrical safety protocols'],
    relatedRoles: ['Controls Technician', 'Industrial Electrician', 'Instrumentation Technician'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel available for verified international employers.'
  },
  {
    id: 'civil-eng',
    title: 'Civil & Structural Engineer',
    category: 'Engineering',
    industry: 'Engineering & Infrastructure',
    experienceLevel: 'Senior (7-12 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Oversee structural design, foundation analysis, and civil works on industrial job sites.',
      'Ensure execution compliance against structural drawings and project safety specifications.',
      'Coordinate site surveying, quantity estimations, and contractor delivery schedules.',
      'Perform structural audits and quality compliance inspections.'
    ],
    skills: ['STAAD.Pro', 'ETABS', 'AutoCAD Civil 3D', 'Bar Bending Schedules (BBS)', 'Concrete Technology', 'Site QA/QC'],
    qualifications: ['B.Tech / B.E. in Civil Engineering', 'Relevant structural design certifications'],
    relatedRoles: ['Project Engineer', 'Site Superintendent', 'Quality Inspector'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel for industrial infrastructure projects.'
  },
  {
    id: 'prod-eng',
    title: 'Production Engineer',
    category: 'Engineering',
    industry: 'Automotive & Component Manufacturing',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Plan and optimise shop-floor manufacturing cycles, line balancing, and throughput.',
      'Implement lean manufacturing principles, 5S, Kaizen, and SMED methodology.',
      'Monitor OEE (Overall Equipment Effectiveness) and resolve production bottlenecks.',
      'Work with maintenance teams to minimise unplanned machine downtime.'
    ],
    skills: ['OEE Optimization', 'Line Balancing', 'Kaizen / 5S', 'Value Stream Mapping', 'APQP / PPAP', 'Lean Manufacturing'],
    qualifications: ['B.Tech in Production / Mechanical / Industrial Engineering', 'Six Sigma Green Belt preferred'],
    relatedRoles: ['Manufacturing Supervisor', 'Process Engineer', 'Mechanical Engineer'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel for assembly and fabrication facilities.'
  },
  {
    id: 'qa-eng',
    title: 'Quality Assurance & QC Engineer',
    category: 'Engineering',
    industry: 'Industrial Manufacturing',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Oversee receiving, in-process, and final quality inspections on precision components.',
      'Develop Inspection Test Plans (ITP), control plans, and FMEA documentation.',
      'Lead non-conformance management (NCR), CAPA, and supplier quality audits.',
      'Calibrate measurement equipment and oversee coordinate measuring machine (CMM) testing.'
    ],
    skills: ['CMM Programming', 'Six Sigma / DMAIC', 'FMEA', 'SPC / MSA', 'ISO 9001:2015', 'CAPA'],
    qualifications: ['B.Tech in Mechanical / Industrial Engineering', 'ASQ / ISO Auditor certification is an asset'],
    relatedRoles: ['Quality Inspector', 'Production Engineer', 'Welding Inspector'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel.'
  },
  {
    id: 'design-eng',
    title: 'Design Engineer (CAD / Product)',
    category: 'Engineering',
    industry: 'Industrial Manufacturing & Equipment',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Generate 3D parametric models, complex assemblies, and production drawings.',
      'Conduct tolerance stack-up analyses and structural stress simulations.',
      'Interface with tooling designers, metal casters, and machining suppliers.',
      'Manage PDM / PLM release workflows and engineering change notices (ECN).'
    ],
    skills: ['CATIA', 'Siemens NX', 'SolidWorks', 'GD&T ASME Y14.5', 'FEA Analysis', 'Sheet Metal Design'],
    qualifications: ['B.Tech in Mechanical / Aerospace / Design Engineering'],
    relatedRoles: ['Mechanical Engineer', 'Tool & Die Maker', 'R&D Engineer'],
    activeSourcing: true,
    statusNote: 'Available for international technical design team deployments.'
  },
  {
    id: 'proj-eng',
    title: 'Project Engineer',
    category: 'Engineering',
    industry: 'Energy & Infrastructure',
    experienceLevel: 'Senior (7-12 yrs)',
    qualificationLevel: 'Bachelor of Engineering (B.E./B.Tech)',
    responsibilities: [
      'Manage engineering deliverables, project schedules, and procurement coordination.',
      'Supervise on-site multidisciplinary engineering contractors.',
      'Track milestone progress against Primavera P6 / MS Project timelines.',
      'Handle client technical submittals, vendor queries, and interface coordination.'
    ],
    skills: ['Primavera P6', 'MS Project', 'Contract Administration', 'Interface Management', 'HSE Protocols', 'Budget Tracking'],
    qualifications: ['B.Tech in Engineering', 'PMP / PRINCE2 credential preferred'],
    relatedRoles: ['Civil & Structural Engineer', 'Site Superintendent', 'Planning Engineer'],
    activeSourcing: true,
    statusNote: 'Available for industrial project and infrastructure assignments.'
  },

  // Manufacturing & Production
  {
    id: 'cnc-operator',
    title: 'CNC Machine Operator & Programmer',
    category: 'Manufacturing',
    industry: 'Precision Machining & Aerospace / Auto',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Set up and operate 3-axis, 4-axis, and 5-axis CNC milling and turning machines.',
      'Interpret G-code / M-code and adjust offsets, feeds, and spindle speeds.',
      'Perform precision part measurement using micrometers, verniers, and bore gauges.',
      'Perform routine preventative machine maintenance and tool wear monitoring.'
    ],
    skills: ['Fanuc / Siemens / Heidenhain controls', 'G-Code Programming', 'Tool Offset Setting', 'Boring & Threading', 'GD&T Inspection'],
    qualifications: ['ITI Machinist / Turner or Polytechnic Diploma in Mechanical Engineering', 'Min. 3 years verifiable machine shop experience'],
    relatedRoles: ['Conventional Machinist', 'Tool & Die Maker', 'Quality Inspector'],
    activeSourcing: true,
    statusNote: 'Consistently sourced for international precision manufacturing facilities.'
  },
  {
    id: 'machinist',
    title: 'Conventional Machinist / Turner',
    category: 'Manufacturing',
    industry: 'Industrial Manufacturing & Tooling',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Operate manual lathes, horizontal/vertical milling machines, shapers, and surface grinders.',
      'Manufacture custom components, shafts, bushings, and replacement parts to tight tolerances.',
      'Read engineering drawings and determine tool setups and machining sequences.',
      'Inspect finished components with precision measuring instruments.'
    ],
    skills: ['Manual Lathe Turning', 'Surface Grinding', 'Facing & Boring', 'Taper Turning', 'Metrology'],
    qualifications: ['ITI Machinist or Turner Trade Certificate (NCVT/SCVT)'],
    relatedRoles: ['CNC Operator', 'Tool & Die Maker', 'Mechanical Fitter'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel.'
  },
  {
    id: 'prod-supervisor',
    title: 'Production Supervisor',
    category: 'Manufacturing',
    industry: 'Industrial Manufacturing',
    experienceLevel: 'Senior (7-12 yrs)',
    qualificationLevel: 'Polytechnic Diploma',
    responsibilities: [
      'Supervise daily shift operations, shift handovers, and operator allocation.',
      'Enforce workplace safety regulations, PPE compliance, and production schedules.',
      'Maintain production logs, scrap rates, and efficiency reports for plant management.',
      'Train new operators on standard operating procedures (SOPs).'
    ],
    skills: ['Shift Management', 'Shop-Floor Leadership', 'SOP Enforcement', 'Scrap Reduction', '5S Practices'],
    qualifications: ['Diploma or Degree in Mechanical / Production Engineering', '5+ years manufacturing floor supervisory experience'],
    relatedRoles: ['Production Engineer', 'Assembly Technician', 'Operations Manager'],
    activeSourcing: true,
    statusNote: 'Active sourcing for manufacturing shift management.'
  },
  {
    id: 'quality-inspector',
    title: 'Quality Inspector (Mechanical / Metrology)',
    category: 'Manufacturing',
    industry: 'Industrial Manufacturing',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Perform first-piece, patrol, and final dimensional inspections on machined components.',
      'Operate profile projectors, height gauges, surface roughness testers, and optical comparators.',
      'Log inspection test results and flag non-conforming lots.',
      'Verify material test certificates (MTC) and heat treatment records.'
    ],
    skills: ['Precision Metrology', 'Vernier / Micrometer / Gauge Blocks', 'NDT Basics', 'Defect Analysis', 'Inspection Records'],
    qualifications: ['ITI Machinist / Diploma in Mechanical Engineering', 'ASNT NDT Level II certification is a plus'],
    relatedRoles: ['QA/QC Engineer', 'CNC Operator', 'Welding Inspector'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel.'
  },
  {
    id: 'assembly-tech',
    title: 'Industrial Assembly Technician',
    category: 'Manufacturing',
    industry: 'Automotive & Heavy Machinery',
    experienceLevel: 'Junior (1-3 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Assemble complex mechanical subsystems, hydraulic connections, and pneumatic lines.',
      'Use torque wrenches, pneumatic tools, and precision assembly fixtures.',
      'Follow assembly sequence routing sheets and check critical fastener torques.',
      'Perform basic electrical harness routing and sub-component testing.'
    ],
    skills: ['Torque Tool Calibration', 'Pneumatic Assembly', 'Blueprint Reading', 'Fastener Specifications', 'Clean-room assembly basics'],
    qualifications: ['ITI Fitter / Motor Mechanic / Electrical Trade Certificate'],
    relatedRoles: ['Mechanical Fitter', 'Production Operator', 'Maintenance Technician'],
    activeSourcing: true,
    statusNote: 'Active sourcing for volume assembly lines.'
  },

  // Skilled Trades
  {
    id: 'welder-tig-mig',
    title: 'Certified Welder (TIG / MIG / 6G)',
    category: 'Skilled Trades',
    industry: 'Industrial Manufacturing & Oil/Gas/Power',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Vocational Certification',
    responsibilities: [
      'Perform TIG (GTAW), MIG/MAG (GMAW), and Shielded Metal Arc (SMAW) welding.',
      'Weld carbon steel, stainless steel, duplex, and aluminum piping/plates in 3G, 4G, and 6G positions.',
      'Clean slag, grind bevels, and pre-heat joints according to Welding Procedure Specifications (WPS).',
      'Pass visual, liquid penetrant, and radiographic / ultrasonic joint tests.'
    ],
    skills: ['6G Position Welding', 'GTAW / GMAW / SMAW', 'WPS Compliance', 'Purging Techniques', 'Bevel Preparation', 'Pipe Welding'],
    qualifications: ['ITI Welder Certificate', 'ASME Section IX / AWS D1.1 / EN 287-1 welder qualification test records'],
    relatedRoles: ['Fabricator', 'Pipe Fitter', 'Quality Inspector'],
    activeSourcing: true,
    statusNote: 'High international demand with verified weld test procedures.'
  },
  {
    id: 'fabricator-structural',
    title: 'Structural Steel Fabricator',
    category: 'Skilled Trades',
    industry: 'Industrial Manufacturing & Infrastructure',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Lay out, cut, fit, and tack-weld structural steel components, beams, and plates.',
      'Interpret fabrication drawings, elevation layouts, and connection details.',
      'Operate plasma cutters, oxy-acetylene torches, hydraulic shears, and press brakes.',
      'Verify squareness, alignment, and dimensional tolerances prior to final welding.'
    ],
    skills: ['Structural Layout', 'Tack Welding', 'Oxy-Fuel Cutting', 'Plasma Cutting', 'Drawing Interpretation', 'Press Brake Setup'],
    qualifications: ['ITI Fitter / Sheet Metal Worker Certificate', 'Minimum 4 years heavy structural workshop experience'],
    relatedRoles: ['Certified Welder', 'Mechanical Fitter', 'Rigging Specialist'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel.'
  },
  {
    id: 'pipe-fitter',
    title: 'Industrial Pipe Fitter',
    category: 'Skilled Trades',
    industry: 'Energy, Chemical & Industrial Plants',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Fabricate, measure, bevel, and fit high-pressure piping spools and flanges.',
      'Interpret piping isometric drawings (isometric sketches, P&IDs) and coordinate callouts.',
      'Fit valves, expansion joints, strainers, and support hangers.',
      'Perform hydro-testing and pneumatic leak tests on completed piping circuits.'
    ],
    skills: ['Piping Isometrics', 'Spool Fabrication', 'Flange Alignment', 'Pipe Bending', 'Hydrostatic Testing'],
    qualifications: ['ITI Fitter or Piping Specialist Trade Certificate'],
    relatedRoles: ['Certified Welder', 'Mechanical Maintenance Technician', 'Plumbing Crew'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel for processing and refinery projects.'
  },
  {
    id: 'ind-electrician',
    title: 'Industrial Electrician',
    category: 'Skilled Trades',
    industry: 'Industrial Manufacturing & Power',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Install, terminate, and test industrial control panels, switchgear, and motors.',
      'Lay power cables, cable trays, conduits, and grounding/earthing systems.',
      'Troubleshoot electrical faults using multi-meters, insulation testers (meggers), and circuit tracers.',
      'Adhere strictly to Lockout/Tagout (LOTO) protocols and NFPA/IEC safety rules.'
    ],
    skills: ['Panel Wiring', 'Cable Glanding & Termination', 'LOTO Procedures', 'VFD Installation', 'Megger Testing', 'Electrical Schematics'],
    qualifications: ['ITI Electrician / Wireman (NCVT certified)', 'State Electrical Supervisory or Wireman Licence'],
    relatedRoles: ['Electrical Engineer', 'Controls Technician', 'Electrical Maintenance Technician'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel for plant installations and operations.'
  },
  {
    id: 'hvac-technician',
    title: 'Commercial / Industrial HVAC Technician',
    category: 'Skilled Trades',
    industry: 'Industrial Facilities & Commercial Infrastructure',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Install, service, and repair large chillers, air handling units (AHUs), cooling towers, and VRF systems.',
      'Charge refrigerants, perform leak checks with electronic detectors, and pull deep vacuums.',
      'Troubleshoot compressor motors, expansion valves, and building automation controllers.',
      'Balance air and chilled water flows across building circuits.'
    ],
    skills: ['Chiller Maintenance', 'Refrigerant Recovery', 'Psychrometry', 'BMS Controls', 'Compressor Overhaul', 'Duct Balancing'],
    qualifications: ['ITI Refrigeration & Air Conditioning (RAC)', 'EPA / F-Gas knowledge is advantageous'],
    relatedRoles: ['Mechanical Maintenance Technician', 'Building Services Tech', 'Industrial Electrician'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel.'
  },

  // Maintenance & Technical Services
  {
    id: 'mech-maint-tech',
    title: 'Mechanical Maintenance Technician',
    category: 'Maintenance & Technical',
    industry: 'Industrial Manufacturing & Heavy Plants',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Perform scheduled preventative and corrective maintenance on hydraulic presses, pumps, gearboxes, and conveyors.',
      'Align shafts and couplings using dial indicators and laser alignment tools.',
      'Replace mechanical seals, bearings, bushings, and drive belts.',
      'Troubleshoot pneumatic and hydraulic circuit anomalies.'
    ],
    skills: ['Laser Shaft Alignment', 'Bearing Replacement', 'Hydraulic Systems', 'Pneumatic Controls', 'Gearbox Overhaul', 'Vibration Monitoring Basics'],
    qualifications: ['ITI Maintenance Fitter / Millwright or Diploma in Mechanical Engineering'],
    relatedRoles: ['Equipment Technician', 'Machinist', 'Controls Technician'],
    activeSourcing: true,
    statusNote: 'High demand across heavy industrial and continuous process plants.'
  },
  {
    id: 'controls-tech',
    title: 'Instrumentation & Controls Technician',
    category: 'Maintenance & Technical',
    industry: 'Process Manufacturing & Energy',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Polytechnic Diploma',
    responsibilities: [
      'Calibrate pressure transmitters, RTDs, thermocouples, level gauges, and control valves.',
      'Trace and troubleshoot 4-20mA loop circuits, Hart communicators, and fieldbuses.',
      'Diagnose PLC I/O faults and assist with DCS / SCADA integration.',
      'Maintain loop test records and calibration certificates.'
    ],
    skills: ['HART Protocol', 'Transmitter Calibration', 'Control Valve Overhaul', 'PLC Troubleshooting (Siemens/Allen-Bradley)', 'Loop Checking', 'P&ID Tracing'],
    qualifications: ['Diploma in Instrumentation & Control / Electronics Engineering'],
    relatedRoles: ['Electrical Engineer', 'Automation Engineer', 'Electrical Maintenance Technician'],
    activeSourcing: true,
    statusNote: 'Specialist sourcing pool for automated processing lines.'
  },
  {
    id: 'field-service-tech',
    title: 'Heavy Equipment Field Service Technician',
    category: 'Maintenance & Technical',
    industry: 'Construction & Mining Equipment',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'ITI / Trade Diploma',
    responsibilities: [
      'Service and diagnose hydraulic excavators, wheel loaders, mobile cranes, and diesel gensets.',
      'Perform electronic diagnostics using OEM diagnostic software tools.',
      'Rebuild hydraulic cylinders, travel motors, and diesel fuel injectors.',
      'Submit comprehensive field service inspection and failure reports.'
    ],
    skills: ['Heavy Diesel Diagnostics', 'Hydraulic Troubleshooting', 'OEM Diagnostic Tools', 'Engine Overhaul', 'Undercarriage Repair'],
    qualifications: ['ITI Diesel Mechanic / Motor Mechanic or Diploma in Automobile/Mechanical Engineering'],
    relatedRoles: ['Mechanical Maintenance Technician', 'Equipment Operator', 'Shop Mechanic'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel for construction equipment fleets.'
  },

  // Industrial & Project Workforce
  {
    id: 'heavy-equipment-op',
    title: 'Heavy Equipment Operator (Excavator / Crane)',
    category: 'Industrial & Project',
    industry: 'Infrastructure & Project Workforce',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Vocational Certification',
    responsibilities: [
      'Operate heavy earthmoving machinery, crawler excavators, motor graders, or mobile cranes.',
      'Conduct daily pre-operational machine inspections, fluid checks, and ground assessments.',
      'Follow site banksman and rigger signals adhering to maximum load charts.',
      'Perform precision trenching, slope grading, and heavy lift positioning.'
    ],
    skills: ['Excavator Operations', 'Mobile Crane Load Charts', 'Daily Safety Inspections', 'Trenching Safety', 'Site Banksman Hand Signals'],
    qualifications: ['Valid Commercial Heavy Vehicle / Equipment Driving License', 'Third-party heavy equipment competency certification'],
    relatedRoles: ['Rigger Specialist', 'Field Service Technician', 'Site Worker'],
    activeSourcing: true,
    statusNote: 'Deployment subject to verified site operator competency assessments.'
  },
  {
    id: 'rigging-specialist',
    title: 'Certified Rigger & Slinger',
    category: 'Industrial & Project',
    industry: 'Construction, Shipyards & Heavy Lifting',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Vocational Certification',
    responsibilities: [
      'Select and inspect rigging gear (slings, shackles, spreader beams, hoists).',
      'Calculate load center of gravity and ensure safe working load (SWL) limits are never exceeded.',
      'Direct crane operators via standard radio and hand signals during complex tandem lifts.',
      'Tag out damaged or degraded lifting accessories immediately.'
    ],
    skills: ['Lifting Calculations', 'SWL & Load Charts', 'Shackle & Sling Inspection', 'Crane Signaling', 'Tandem Lift Procedures'],
    qualifications: ['Certified Rigger (OPITO, LEEA, or equivalent recognized rigging credential)'],
    relatedRoles: ['Heavy Equipment Operator', 'Structural Steel Fabricator', 'Scaffolder'],
    activeSourcing: true,
    statusNote: 'Active sourcing channel for major project mobilisations.'
  },
  {
    id: 'scaffolder-industrial',
    title: 'Industrial Scaffolder (Tubular / Cuplock)',
    category: 'Industrial & Project',
    industry: 'Construction & Industrial Plant Maintenance',
    experienceLevel: 'Mid-Level (3-7 yrs)',
    qualificationLevel: 'Vocational Certification',
    responsibilities: [
      'Erect, modify, and dismantle heavy industrial scaffolding, suspended scaffolds, and towers.',
      'Install toe boards, handrails, base jacks, and ladder access points in compliance with OSHA standards.',
      'Inspect scaffold components prior to erection and affix scaffolding inspection tags (Green/Red Scafftag).',
      'Wear double-lanyard fall arrest equipment at all elevated heights.'
    ],
    skills: ['Cuplock / Ringlock Systems', 'Tubular Scaffolding', 'Fall Protection Systems', 'Load Bearing Calculations', 'Scafftag Inspection'],
    qualifications: ['Certified Scaffolder (CITB / CISRS equivalent or recognized trade credential)'],
    relatedRoles: ['Rigging Specialist', 'Structural Steel Fabricator', 'Industrial Painter'],
    activeSourcing: true,
    statusNote: 'Active recruitment channel for shutdown maintenance and industrial construction.'
  }
];

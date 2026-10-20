export interface IndustrySector {
  id: string;
  name: string;
  code: string;
  description: string;
  keyOccupations: string[];
  scopeNote: string;
}

export const INDUSTRIES: IndustrySector[] = [
  {
    id: 'industrial-mfg',
    name: 'Industrial Manufacturing',
    code: 'IND-MFG',
    description: 'Precision machining, metal fabrication, component production, casting, forging, and heavy equipment fabrication facilities.',
    keyOccupations: ['CNC Machinists', 'Tool & Die Makers', 'Production Engineers', 'Quality Control Inspectors', 'Plant Maintenance Fitters'],
    scopeNote: 'Active sourcing pipelines across precision tooling and mechanical engineering.'
  },
  {
    id: 'automotive-transport',
    name: 'Automotive & Transport Equipment',
    code: 'AUTO-TRN',
    description: 'OEM assembly lines, tier-1 auto component manufacturers, body-in-white fabrication, and commercial vehicle sub-assembly.',
    keyOccupations: ['Assembly Line Technicians', 'Robotics & Automation Engineers', 'Press Tool Fitters', 'Paint Shop Technicians', 'PPAP Specialists'],
    scopeNote: 'Engineered workforce solutions for high-volume, quality-critical manufacturing.'
  },
  {
    id: 'eng-infrastructure',
    name: 'Engineering & Infrastructure',
    code: 'ENG-INF',
    description: 'Bridges, commercial plant structures, water treatment plants, industrial civil works, and EPC heavy industrial developments.',
    keyOccupations: ['Civil & Structural Engineers', 'Site QA/QC Engineers', 'Surveyors', 'Project Planning Engineers', 'Quantity Surveyors'],
    scopeNote: 'Multidisciplinary engineering teams for greenfield and brownfield infrastructure.'
  },
  {
    id: 'electrical-electronics',
    name: 'Electrical & Electronics',
    code: 'ELEC-ELX',
    description: 'Switchgear manufacturing, control panel fabrication, PCB assembly, motor rewind shops, and electrical equipment assembly.',
    keyOccupations: ['Electrical Design Engineers', 'Panel Wirers & Assemblers', 'Testing & Commissioning Technicians', 'SMT Machine Operators'],
    scopeNote: 'Technical personnel with strong grounding in IEC, NEC, and CE standards.'
  },
  {
    id: 'energy-maintenance',
    name: 'Energy & Industrial Maintenance',
    code: 'ENRG-MNT',
    description: 'Thermal, renewable, and industrial power plants, refineries, chemical processing units, and annual planned shutdown turnarounds.',
    keyOccupations: ['High-Pressure Pipe Fitters', '6G Alloy Welders', 'Turbine / Rotating Equipment Technicians', 'Instrumentation Specialists'],
    scopeNote: 'Specialist crews for heavy maintenance, shutdown outages, and mechanical integrity.'
  },
  {
    id: 'construction-project',
    name: 'Construction & Project Workforce',
    code: 'CONST-PRJ',
    description: 'Large-scale industrial sites, pre-engineered building (PEB) erection, plant expansions, and heavy civil construction projects.',
    keyOccupations: ['Structural Steel Erectors', 'Riggers & Banksmen', 'Heavy Equipment Operators', 'Industrial Scaffolders', 'Safety Officers'],
    scopeNote: 'Disciplined project workforce mobilisation for defined execution phases.'
  },
  {
    id: 'railway-transport',
    name: 'Railway & Transport-Related Technical Occupations',
    code: 'RAIL-TRN',
    description: 'Track maintenance support, rolling stock assembly, railway signalling installations, and high-speed rail systems engineering.',
    keyOccupations: ['Track Alignment Technicians', 'Rolling Stock Mechanics', 'Signalling & Telecom Fitters', 'Overhead Catenary Line Workers'],
    scopeNote: 'Sector of active interest and prospective talent mapping; recruitment initiated per specific client contract.'
  }
];

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-vellum-100 min-h-screen py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 border border-steel-300 space-y-8 shadow-sm">
          
          <div className="border-b border-steel-300 pb-6">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
              [STATUTORY COMPLIANCE & DATA PROTECTION]
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-graphite-500 mt-2">
              Last Updated & Effective: January 2025 &bull; Governing Jurisdiction: Republic of India
            </p>
          </div>

          <div className="space-y-6 text-xs text-graphite-700 leading-relaxed font-sans">
            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                1. General Overview & Scope
              </h2>
              <p>
                Rapidhire ("Rapidhire", "we", "us", or "our") is an industrial workforce recruitment enterprise registered under the laws of the Republic of India. We are dedicated to respecting and safeguarding the personal data of our client employers, prospective candidates, and institutional partners.
              </p>
              <p>
                This Privacy Policy sets out the basis on which any personal data collected from candidates through our web forms, resume uploads, email communications, or recruiter interviews will be processed, stored, and managed in compliance with India’s Digital Personal Data Protection (DPDP) Act, 2023, and applicable international cross-border transfer standards.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                2. Information We Collect
              </h2>
              <p>
                We collect information strictly necessary to evaluate professional suitability for engineering, manufacturing, and industrial trade roles:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Candidate Contact Data:</strong> Name, phone number, email address, current city, and country of residence.</li>
                <li><strong>Professional Credentials:</strong> Work experience, technical qualifications (ITI, Diploma, Degree), certifications, machine operation history, and language proficiencies.</li>
                <li><strong>Resume & Work Artifacts:</strong> Submitted CVs, trade certificates, or weld test records.</li>
                <li><strong>Employer Briefs:</strong> Corporate entity names, business emails, project locations, hiring volumes, and technical specifications.</li>
              </ul>
              <div className="p-3 bg-vellum-100 border border-steel-300 font-mono text-graphite-600 text-[11px]">
                <strong>Non-Collection of Sensitive Data:</strong> Rapidhire does NOT collect biometric records, medical histories, religious affiliations, or government identification cards (e.g. Passport numbers, Aadhaar) at the initial registration phase. Such documentation is requested only during formal statutory pre-deployment compliance in coordination with verified host employers.
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                3. Purpose of Processing
              </h2>
              <p>
                We use the information collected solely for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Evaluating candidate competencies against verified client mandates.</li>
                <li>Transmitting anonymized or consented candidate profiles to prospective client employers.</li>
                <li>Scheduling technical interviews and coordinating practical trade testing.</li>
                <li>Communicating updates regarding recruitment stages and post-placement support.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                4. Data Storage & Security
              </h2>
              <p>
                All electronic records and uploaded resumes are stored in secured database environments with strict access controls and encryption. Candidate documents are never published to public web directories, search engine indexes, or third-party marketing brokers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                5. Your Data Rights
              </h2>
              <p>
                Under applicable data privacy regulations, candidates have the right to request access to their stored profile, demand rectification of erroneous information, or request full deletion of their records from our talent pool at any time by contacting our privacy compliance desk.
              </p>
            </section>

            <section className="space-y-2 border-t border-steel-300 pt-4 font-mono">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase tracking-wider">
                6. Contact Privacy Officer
              </h2>
              <p className="font-sans">
                For data protection queries or profile deletion requests:
              </p>
              <p className="text-castiron-DEFAULT text-xs">
                Privacy Officer, Rapidhire<br />
                Email: <a href="mailto:privacy@rapidhire.work" className="text-vermilion hover:underline">privacy@rapidhire.work</a><br />
                Operational Hub: Hyderabad, Telangana, Republic of India
              </p>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
};

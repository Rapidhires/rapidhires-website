import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-vellum-100 min-h-screen py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 border border-steel-300 space-y-8 shadow-sm">
          
          <div className="border-b border-steel-300 pb-6">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
              [LEGAL FRAMEWORK & JURISDICTION]
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
              Terms of Use
            </h1>
            <p className="text-xs font-mono text-graphite-500 mt-2">
              Applicable to Website Visitors, Employers, and Candidates &bull; Republic of India
            </p>
          </div>

          <div className="space-y-6 text-xs text-graphite-700 leading-relaxed font-sans">
            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, submitting an employer recruitment brief, or registering a candidate profile, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use this website.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                2. Nature of Services & Disclaimers
              </h2>
              <p>
                Rapidhire provides recruitment facilitation and technical workforce identification services.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>No Employment Guarantee:</strong> Submission of a candidate profile or resume does not constitute a contract of employment, nor does it guarantee an interview, selection, or placement.</li>
                <li><strong>No Visa Advisory:</strong> Rapidhire is not an immigration consultancy. We do not provide statutory immigration legal advice, guarantee visa grants, or issue travel permits. Visas are granted solely at the discretion of sovereign destination immigration authorities upon verified employer sponsorship.</li>
                <li><strong>Accuracy of Information:</strong> Employers and candidates warrant that all data, certifications, job specifications, and corporate details provided through our forms are accurate and truthful.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                3. Prohibition of Unethical Fees
              </h2>
              <p>
                Rapidhire strictly prohibits any employee, associate, or agent from soliciting money, deposits, or gifts from job applicants. Any candidate approached by individuals claiming to represent Rapidhire demanding payments should immediately notify <a href="mailto:compliance@rapidhire.work" className="text-vermilion underline font-mono">compliance@rapidhire.work</a>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                4. Intellectual Property
              </h2>
              <p>
                All trademarks, logos, content, industrial classifications, and proprietary methodology diagrams on this website are the property of Rapidhire. Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
              </p>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CandidateConsentPage: React.FC = () => {
  return (
    <div className="bg-vellum-100 min-h-screen py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 border border-steel-300 space-y-8 shadow-sm">
          
          <div className="border-b border-steel-300 pb-6">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-vermilion font-bold mb-1">
              [CANDIDATE RIGHTS & CONSENT CHARTER]
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-castiron-DEFAULT tracking-tight">
              Candidate Data & Consent Framework
            </h1>
            <p className="text-xs font-mono text-graphite-500 mt-2">
              Transparent Information Governance for Indian Technical Personnel & Skilled Trades
            </p>
          </div>

          <div className="space-y-6 text-xs text-graphite-700 leading-relaxed font-sans">
            
            <div className="p-4 bg-vellum-100 border border-steel-300 text-castiron-DEFAULT flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
              <div>
                <strong className="font-mono uppercase tracking-wider text-[11px] block mb-1">Core Commitment:</strong> When you register with Rapidhire, you maintain full ownership of your professional identity. We do not sell resumes, we do not expose your contact details on public boards, and we never share your profile with a client without discussing the role with you first.
              </div>
            </div>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                1. What Your Consent Covers
              </h2>
              <p>
                When you check the mandatory data consent box on our registration form, you permit Rapidhire to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Store your submitted qualifications, experience records, and resume securely in our private recruitment database.</li>
                <li>Allow Rapidhire recruiters to review your profile and match it against active technical job vacancies in India and internationally.</li>
                <li>Contact you via phone, WhatsApp, or email to discuss relevant job opportunities and evaluate your readiness.</li>
                <li>Verify your stated educational diplomas, trade credentials, or employment references with former employers or training institutes where necessary.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                2. What Your Consent Does NOT Allow
              </h2>
              <p>
                Rapidhire will never use your consent to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Charge you any recruitment, interview, placement, or security deposit fees.</li>
                <li>Publish your resume or phone number on public job boards or online portals.</li>
                <li>Submit your application to an employer without your explicit prior confirmation.</li>
                <li>Sell or broker your data to third-party marketing companies, insurance providers, or loan brokers.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                3. Talent Pool Retention & Renewal
              </h2>
              <p>
                If an active mandate does not immediately match your profile, your credentials are kept in our active talent pool for a period of up to 24 months. You may renew your details or update your trade certificates at any time by contacting our candidate desk.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-castiron-DEFAULT uppercase font-mono tracking-wider">
                4. How to Revoke Consent or Request Profile Deletion
              </h2>
              <p>
                You retain the continuous right to be forgotten. If you have secured employment elsewhere or no longer wish to be considered for industrial roles:
              </p>
              <div className="p-3 bg-vellum-100 border border-steel-300 font-mono text-graphite-700 text-xs">
                Send an email with your full name and registered phone number to:<br />
                <strong className="text-castiron-DEFAULT">candidates@rapidhire.work</strong> with the subject line <code>"Profile Deletion Request"</code>.<br />
                Your records will be permanently purged within 7 business days.
              </div>
            </section>

            <div className="pt-6 border-t border-steel-300 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
              <Link
                to="/opportunities"
                className="text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-castiron-DEFAULT text-white hover:bg-castiron-800 transition-colors"
              >
                Return to Opportunities Page
              </Link>
              <a
                href="mailto:candidates@rapidhire.work"
                className="text-xs font-mono text-vermilion hover:underline font-semibold"
              >
                Contact Candidate Desk &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

# Rapidhire — International Engineering & Industrial Workforce Solutions

> **"Skilled people. Industrial capability. International reach."**

Rapidhire is a specialized workforce recruitment enterprise registered in India, serving international employers across engineering disciplines, manufacturing operations, skilled technical trades, and large-scale industrial projects.

---

## 1. Brand Positioning & Ethical Charter

- **Not an Immigration Consultancy:** Rapidhire is strictly an industrial recruitment and talent sourcing organisation. We do not provide visa point calculations or tourist-to-work visa conversions. Cross-border placements are conducted strictly according to employer sponsorship criteria and destination bilateral labor agreements.
- **Zero Placement Fee Policy:** Rapidhire does not charge candidates recruitment fees, security deposits, or interview fees. All recruitment operations are funded by commissioning employers.
- **Recruiter-Led Human Evaluation:** We pair automated indexing with in-depth human recruiter evaluation, practical trade testing (e.g., 6G welding, CNC programming), and credential audits.
- **24/7 Candidate Support:** Placed technicians and workers receive post-placement support through a dedicated 24/7 assistance channel.

---

## 2. Technical Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with a restrained industrial color palette:
  - Deep Navy: `#172B3A`
  - Graphite: `#303A42`
  - Warm White: `#F7F7F4`
  - Steel Grey: `#DCE1E3`
  - Muted Industrial Orange: `#D76B39`
- **Routing:** React Router v6 (`react-router-dom`)
- **Icons:** Lucide React
- **Data Layer:** Extensible typed models for Occupations, Vacancies, Credentials, and Industries with persistent client storage and Supabase integration hooks.

---

## 3. Website Structure & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Editorial corporate landing page highlighting the value proposition, 5-stage process, core categories, and verified credentials. |
| `/employers` | **Employers / Hire Workforce** | Serious B2B recruitment portal with selectable service models (Permanent, Trades, Project Mobilisation) and full requirement intake form. |
| `/categories` | **Workforce Categories** | Multi-criteria search directory covering Engineering, Manufacturing, Skilled Trades, Maintenance, and Project Workforce. |
| `/opportunities` | **International Opportunities** | Verified live vacancies listing, candidate charter, and full candidate profile registration form with consent flows. |
| `/approach` | **Recruitment Process** | Step-by-step recruiter-led methodology, comparison matrix (Rapidhire vs Job Boards vs Visa Agencies), and Fair Practice Charter. |
| `/about` | **About Rapidhire** | Evidence-backed company profile, T-Hub RubriX HR winner credential, Telangana government collaboration, and scope declaration. |
| `/contact` | **Contact** | Multi-intent routing (Employers, Candidates, Institutional Partners) with verified office location and FAQs. |
| `/privacy` | **Privacy Policy** | DPDP Act (India) compliant policy detailing candidate rights, resume storage security, and data protection. |
| `/terms` | **Terms of Use** | Legal terms, no-employment guarantee disclaimers, and jurisdiction declaration. |
| `/candidate-consent` | **Candidate Data & Consent** | Clear explanation of candidate ownership, zero-fee commitment, and right to be forgotten. |

---

## 4. Getting Started

### Prerequisites

- Node.js (v18 or higher recommended; v24 supported)
- npm (v9+)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the application locally at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Generates optimized, production-ready static assets in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

---

## 5. Backend & Supabase Configuration (Optional)

The application includes built-in mock persistence and client-side validation. To connect directly to a Supabase backend:

1. Create a `.env.local` file in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
2. The schemas correspond to:
   - `employer_enquiries`
   - `candidate_profiles`
   - `partner_enquiries`
   - `job_openings`
   - `occupation_categories`

If environment variables are omitted, the application seamlessly stores data in browser `localStorage` and provides direct verified email fallback (`enquiries@rapidhire.work` and `candidates@rapidhire.work`).

---

## 6. Verification & Credential Authenticity

All corporate milestones presented on the site are based on factual records:
- Registered enterprise in the Republic of India.
- Winner in the HR category of T-Hub's flagship RubriX accelerator programme (~240 applicants).
- Skilled workforce hiring initiatives in collaboration with the Government of Telangana.
- 24/7 post-placement candidate support capability.

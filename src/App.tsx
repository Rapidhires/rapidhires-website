import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EmployerModal } from './components/EmployerModal';
import { CandidateModal } from './components/CandidateModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { EmployersPage } from './pages/EmployersPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { ApproachPage } from './pages/ApproachPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CandidateConsentPage } from './pages/CandidateConsentPage';

export const App: React.FC = () => {
  // Employer modal state
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);
  const [preselectedOccupation, setPreselectedOccupation] = useState<string | undefined>(undefined);

  // Candidate modal state
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false);
  const [preselectedVacancyId, setPreselectedVacancyId] = useState<string | undefined>(undefined);
  const [preselectedVacancyTitle, setPreselectedVacancyTitle] = useState<string | undefined>(undefined);

  const handleOpenEmployerModal = (occupation?: string) => {
    setPreselectedOccupation(occupation);
    setIsEmployerModalOpen(true);
  };

  const handleOpenCandidateModal = (vacancyId?: string, vacancyTitle?: string) => {
    setPreselectedVacancyId(vacancyId);
    setPreselectedVacancyTitle(vacancyTitle);
    setIsCandidateModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-warmwhite selection:bg-industrial-orange selection:text-white">
        
        {/* Persistent Industrial Header */}
        <Header
          onOpenEmployerModal={() => handleOpenEmployerModal()}
          onOpenCandidateModal={() => handleOpenCandidateModal()}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenEmployerModal={handleOpenEmployerModal}
                  onOpenCandidateModal={handleOpenCandidateModal}
                />
              }
            />
            <Route path="/employers" element={<EmployersPage />} />
            <Route
              path="/categories"
              element={
                <CategoriesPage
                  onOpenEmployerModal={handleOpenEmployerModal}
                  onOpenCandidateModal={handleOpenCandidateModal}
                />
              }
            />
            <Route
              path="/opportunities"
              element={
                <OpportunitiesPage
                  onOpenCandidateModal={handleOpenCandidateModal}
                />
              }
            />
            <Route
              path="/approach"
              element={
                <ApproachPage
                  onOpenEmployerModal={() => handleOpenEmployerModal()}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenEmployerModal={() => handleOpenEmployerModal()}
                  onOpenCandidateModal={() => handleOpenCandidateModal()}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/candidate-consent" element={<CandidateConsentPage />} />
            
            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenEmployerModal={handleOpenEmployerModal}
                  onOpenCandidateModal={handleOpenCandidateModal}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Modals for Direct Quick Action */}
        <EmployerModal
          isOpen={isEmployerModalOpen}
          onClose={() => setIsEmployerModalOpen(false)}
          preselectedOccupation={preselectedOccupation}
        />

        <CandidateModal
          isOpen={isCandidateModalOpen}
          onClose={() => setIsCandidateModalOpen(false)}
          preselectedVacancyId={preselectedVacancyId}
          preselectedVacancyTitle={preselectedVacancyTitle}
        />

      </div>
    </Router>
  );
};
export default App;

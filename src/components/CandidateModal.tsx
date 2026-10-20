import React from 'react';
import { X } from 'lucide-react';
import { CandidateRegistrationForm } from './CandidateRegistrationForm';

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVacancyId?: string;
  preselectedVacancyTitle?: string;
}

export const CandidateModal: React.FC<CandidateModalProps> = ({
  isOpen,
  onClose,
  preselectedVacancyId,
  preselectedVacancyTitle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white shadow-2xl border border-steel-DEFAULT my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-graphite-500 hover:text-navy-DEFAULT hover:bg-steel-100 transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <CandidateRegistrationForm
            preselectedVacancyId={preselectedVacancyId}
            preselectedVacancyTitle={preselectedVacancyTitle}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

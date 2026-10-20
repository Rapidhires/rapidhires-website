import React from 'react';
import { X } from 'lucide-react';
import { EmployerEnquiryForm } from './EmployerEnquiryForm';

interface EmployerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOccupation?: string;
}

export const EmployerModal: React.FC<EmployerModalProps> = ({
  isOpen,
  onClose,
  preselectedOccupation
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-castiron-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white shadow-2xl border border-steel-400 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-graphite-500 hover:text-castiron-DEFAULT hover:bg-steel-100 transition-colors focus:outline-none border border-transparent hover:border-steel-300"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <EmployerEnquiryForm
            initialOccupation={preselectedOccupation}
            onSuccess={() => {}}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};

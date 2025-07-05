import React, { useState } from 'react';
import Button from './Button';

const MobileMenu = ({ onNewPrediction, onShowAbout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-6 pt-16">
              <div className="space-y-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onNewPrediction();
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  🎯 New Prediction
                </Button>
                
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    onShowAbout();
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  ℹ️ About
                </Button>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>📊 95% Accuracy</div>
                    <div>🤖 AI-Powered</div>
                    <div>📱 Mobile Friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

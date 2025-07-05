import React from 'react';
import Card from './Card';

const Loading = ({ message = "Analyzing student data..." }) => {
  return (
    <Card className="max-w-2xl mx-auto text-center">
      <div className="py-12">
        {/* Animated Brain Icon */}
        <div className="mb-8">
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-blue-400 border-r-transparent animate-spin animation-delay-150"></div>
            <div className="absolute inset-4 rounded-full border-4 border-blue-300 border-b-transparent animate-spin animation-delay-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">🧠</span>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          EduPredict AI is Analyzing
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          {message}
        </p>

        {/* Progress Steps */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Analyzing demographic factors</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse animation-delay-300"></div>
            <span>Processing test scores</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse animation-delay-600"></div>
            <span>Generating prediction</span>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            💡 <strong>Did you know?</strong> Our AI model analyzes over 7 different factors to provide accurate predictions!
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Loading;

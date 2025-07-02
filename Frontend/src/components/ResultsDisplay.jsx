import { useState, useEffect } from 'react';

const ResultsDisplay = ({ prediction, onReset }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (prediction) {
      // Animate the score counting up
      const targetScore = Math.round(prediction * 10) / 10;
      const duration = 1500; // 1.5 seconds
      const steps = 60;
      const increment = targetScore / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetScore) {
          setAnimatedScore(targetScore);
          clearInterval(timer);
        } else {
          setAnimatedScore(Math.round(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [prediction]);

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getPerformanceMessage = (score) => {
    if (score >= 90) return 'Excellent performance! The student is predicted to excel in mathematics.';
    if (score >= 80) return 'Good performance! The student shows strong mathematical abilities.';
    if (score >= 70) return 'Average performance. The student may benefit from additional support.';
    if (score >= 60) return 'Below average performance. Consider providing extra help and resources.';
    return 'Poor performance predicted. Immediate intervention and support recommended.';
  };

  if (!prediction) return null;

  return (
    <div className="card max-w-2xl mx-auto mt-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Prediction Results</h3>
        
        {/* Score Display */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-4 relative">
              {/* Circular Progress */}
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke={animatedScore >= 80 ? '#10b981' : animatedScore >= 60 ? '#f59e0b' : '#ef4444'}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${(animatedScore / 100) * 314} 314`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              
              {/* Score Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(animatedScore)}`}>
                    {animatedScore}
                  </div>
                  <div className="text-sm text-gray-500">/ 100</div>
                </div>
              </div>
            </div>
            
            {/* Grade */}
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(animatedScore)}`}>
              Grade: {getScoreGrade(animatedScore)}
            </div>
          </div>
        </div>

        {/* Performance Message */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Analysis</h4>
          <p className="text-gray-700 leading-relaxed">
            {getPerformanceMessage(animatedScore)}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-blue-600 font-semibold">Predicted Score</div>
            <div className="text-2xl font-bold text-blue-800">{animatedScore}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-purple-600 font-semibold">Grade Level</div>
            <div className="text-2xl font-bold text-purple-800">{getScoreGrade(animatedScore)}</div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="text-indigo-600 font-semibold">Percentile</div>
            <div className="text-2xl font-bold text-indigo-800">{Math.round(animatedScore)}%</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onReset}
            className="btn-primary"
          >
            Make Another Prediction
          </button>
          <button
            onClick={() => window.print()}
            className="btn-secondary"
          >
            Print Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;

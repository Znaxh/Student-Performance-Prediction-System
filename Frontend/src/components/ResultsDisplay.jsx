import { useState, useEffect } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';

const ResultsDisplay = ({ prediction, onReset }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

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
    <div className="space-y-6">
      {/* Main Results Card */}
      <Card className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            🎯 AI Analysis Complete
          </h3>
        
          {/* Score Display */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Circular Progress */}
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
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
                      <div className={`text-4xl md:text-5xl font-bold ${getScoreColor(animatedScore)}`}>
                        {animatedScore}
                      </div>
                      <div className="text-sm text-gray-500">/ 100</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grade and Performance Info */}
              <div className="text-center lg:text-left">
                <div className={`text-5xl md:text-6xl font-bold mb-4 ${getScoreColor(animatedScore)}`}>
                  Grade: {getScoreGrade(animatedScore)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-2xl">
                      {animatedScore >= 90 ? '🏆' : animatedScore >= 80 ? '🎯' : animatedScore >= 70 ? '📈' : animatedScore >= 60 ? '⚠️' : '🚨'}
                    </span>
                    <span className="text-lg font-medium text-gray-700">
                      {animatedScore >= 90 ? 'Excellent Performance' :
                       animatedScore >= 80 ? 'Good Performance' :
                       animatedScore >= 70 ? 'Average Performance' :
                       animatedScore >= 60 ? 'Below Average' : 'Needs Improvement'}
                    </span>
                  </div>
                  <div className="text-gray-600">
                    Predicted Math Score: <span className="font-semibold">{animatedScore}/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Message */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-8" padding="lg">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <span className="text-2xl">🎓</span>
                Performance Analysis
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                {getPerformanceMessage(animatedScore)}
              </p>
            </div>
          </Card>

          {/* Score Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <div className="text-blue-600 font-semibold mb-2">📊 Predicted Score</div>
              <div className="text-3xl font-bold text-blue-800">{animatedScore}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
              <div className="text-purple-600 font-semibold mb-2">🎯 Grade Level</div>
              <div className="text-3xl font-bold text-purple-800">{getScoreGrade(animatedScore)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
              <div className="text-green-600 font-semibold mb-2">📈 Percentile</div>
              <div className="text-3xl font-bold text-green-800">{Math.round(animatedScore)}%</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
              <div className="text-orange-600 font-semibold mb-2">⭐ Rating</div>
              <div className="text-3xl font-bold text-orange-800">
                {'★'.repeat(Math.ceil(animatedScore / 20))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onReset}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8"
            >
              🔄 Make Another Prediction
            </Button>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8"
            >
              {showDetails ? '📊 Hide Details' : '📊 Show Details'}
            </Button>
            <Button
              onClick={() => window.print()}
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto px-8"
            >
              🖨️ Print Results
            </Button>
          </div>
        </div>
      </Card>

      {/* Detailed Analysis Card */}
      {showDetails && (
        <Card className="max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📈 Detailed Performance Analysis
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Performance Insights */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span>💡</span> Key Insights
              </h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 mt-1">📚</span>
                  <div>
                    <div className="font-medium text-blue-900">Academic Performance</div>
                    <div className="text-sm text-blue-700">
                      {animatedScore >= 80 ? 'Strong academic foundation with excellent potential' :
                       animatedScore >= 60 ? 'Solid performance with room for improvement' :
                       'Requires additional academic support and intervention'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 mt-1">🎯</span>
                  <div>
                    <div className="font-medium text-green-900">Recommendations</div>
                    <div className="text-sm text-green-700">
                      {animatedScore >= 80 ? 'Continue current study methods and consider advanced coursework' :
                       animatedScore >= 60 ? 'Focus on strengthening foundational concepts' :
                       'Implement structured tutoring and additional practice sessions'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Distribution */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span>📊</span> Score Distribution
              </h5>
              <div className="space-y-3">
                {[
                  { range: '90-100', label: 'Excellent', color: 'green', percentage: animatedScore >= 90 ? 100 : 0 },
                  { range: '80-89', label: 'Good', color: 'blue', percentage: animatedScore >= 80 && animatedScore < 90 ? 100 : 0 },
                  { range: '70-79', label: 'Average', color: 'yellow', percentage: animatedScore >= 70 && animatedScore < 80 ? 100 : 0 },
                  { range: '60-69', label: 'Below Average', color: 'orange', percentage: animatedScore >= 60 && animatedScore < 70 ? 100 : 0 },
                  { range: '0-59', label: 'Needs Improvement', color: 'red', percentage: animatedScore < 60 ? 100 : 0 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-20 text-sm font-medium text-gray-600">{item.range}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-${item.color}-500 transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="w-24 text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ResultsDisplay;

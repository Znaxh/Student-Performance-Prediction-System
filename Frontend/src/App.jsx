import { useState } from 'react'
import StudentForm from './components/StudentForm'
import ResultsDisplay from './components/ResultsDisplay'
import Loading from './components/ui/Loading'
import ApiService from './services/api'

function App() {
  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleFormSubmit = async (studentData) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await ApiService.predictStudentPerformance(studentData)
      setPrediction(result.prediction)
    } catch (err) {
      setError(err.message || 'An error occurred while making the prediction')
      console.error('Prediction error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setPrediction(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl mb-4">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-14 md:h-14">
                <path d="M12 8C10.9 8 10 8.9 10 10C10 10.5 10.2 11 10.5 11.3C9.6 11.8 9 12.8 9 14C9 15.7 10.3 17 12 17H20C21.7 17 23 15.7 23 14C23 12.8 22.4 11.8 21.5 11.3C21.8 11 22 10.5 22 10C22 8.9 21.1 8 20 8C19.4 8 18.9 8.3 18.6 8.7C18.1 8.3 17.6 8 17 8H15C14.4 8 13.9 8.3 13.4 8.7C13.1 8.3 12.6 8 12 8Z" fill="white"/>
                <path d="M8 20L12 16L16 18L24 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="20" r="1.5" fill="white"/>
                <circle cx="12" cy="16" r="1.5" fill="white"/>
                <circle cx="16" cy="18" r="1.5" fill="white"/>
                <circle cx="24" cy="10" r="1.5" fill="white"/>
                <path d="M20 22L22 21L24 22L22 23L20 22Z" fill="#FCD34D"/>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduPredict AI
            </span>
            <span className="block text-2xl md:text-3xl font-medium text-gray-600 mt-2">
              Smart Academic Performance Prediction
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to predict student math performance and
            unlock actionable insights for educational excellence. Empowering educators with data-driven decisions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">7</div>
              <div className="text-sm text-gray-500">Factors Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1000+</div>
              <div className="text-sm text-gray-500">Students Helped</div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Prediction Error
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    {error}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative">
          {isLoading ? (
            <Loading message="Our AI is analyzing the student data to provide accurate predictions..." />
          ) : !prediction ? (
            <StudentForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          ) : (
            <ResultsDisplay prediction={prediction} onReset={handleReset} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-gray-200">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2 text-gray-600">
              <span>Built with</span>
              <span className="text-red-500">❤️</span>
              <span>using</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span>⚛️</span> React
              </span>
              <span className="flex items-center gap-1">
                <span>🚀</span> FastAPI
              </span>
              <span className="flex items-center gap-1">
                <span>🤖</span> Machine Learning
              </span>
              <span className="flex items-center gap-1">
                <span>🎨</span> Tailwind CSS
              </span>
            </div>
            <p className="text-xs text-gray-400">
              © 2024 EduPredict AI. Empowering education through artificial intelligence.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

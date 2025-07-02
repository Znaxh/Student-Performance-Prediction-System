import { useState } from 'react'
import StudentForm from './components/StudentForm'
import ResultsDisplay from './components/ResultsDisplay'
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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Performance Prediction System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Predict student math performance based on demographic factors and test scores using machine learning
          </p>
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
        {!prediction ? (
          <StudentForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        ) : (
          <ResultsDisplay prediction={prediction} onReset={handleReset} />
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>Built with React, FastAPI, and Machine Learning</p>
        </div>
      </div>
    </div>
  )
}

export default App

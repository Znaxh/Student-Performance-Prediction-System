import { useState } from 'react';

const StudentForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    gender: '',
    race_ethnicity: '',
    parental_level_of_education: '',
    lunch: '',
    test_preparation_course: '',
    reading_score: '',
    writing_score: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.race_ethnicity) newErrors.race_ethnicity = 'Race/Ethnicity is required';
    if (!formData.parental_level_of_education) newErrors.parental_level_of_education = 'Parental education level is required';
    if (!formData.lunch) newErrors.lunch = 'Lunch type is required';
    if (!formData.test_preparation_course) newErrors.test_preparation_course = 'Test preparation course is required';
    
    if (!formData.reading_score) {
      newErrors.reading_score = 'Reading score is required';
    } else if (isNaN(formData.reading_score) || formData.reading_score < 0 || formData.reading_score > 100) {
      newErrors.reading_score = 'Reading score must be between 0 and 100';
    }
    
    if (!formData.writing_score) {
      newErrors.writing_score = 'Writing score is required';
    } else if (isNaN(formData.writing_score) || formData.writing_score < 0 || formData.writing_score > 100) {
      newErrors.writing_score = 'Writing score must be between 0 and 100';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        reading_score: parseFloat(formData.reading_score),
        writing_score: parseFloat(formData.writing_score)
      });
    }
  };

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Performance Prediction</h2>
        <p className="text-gray-600">Enter student information to predict math performance</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`input-field ${errors.gender ? 'border-red-500' : ''}`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          {/* Race/Ethnicity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Race/Ethnicity
            </label>
            <select
              name="race_ethnicity"
              value={formData.race_ethnicity}
              onChange={handleChange}
              className={`input-field ${errors.race_ethnicity ? 'border-red-500' : ''}`}
            >
              <option value="">Select Race/Ethnicity</option>
              <option value="group A">Group A</option>
              <option value="group B">Group B</option>
              <option value="group C">Group C</option>
              <option value="group D">Group D</option>
              <option value="group E">Group E</option>
            </select>
            {errors.race_ethnicity && <p className="text-red-500 text-sm mt-1">{errors.race_ethnicity}</p>}
          </div>

          {/* Parental Level of Education */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parental Level of Education
            </label>
            <select
              name="parental_level_of_education"
              value={formData.parental_level_of_education}
              onChange={handleChange}
              className={`input-field ${errors.parental_level_of_education ? 'border-red-500' : ''}`}
            >
              <option value="">Select Education Level</option>
              <option value="some high school">Some High School</option>
              <option value="high school">High School</option>
              <option value="some college">Some College</option>
              <option value="associate's degree">Associate's Degree</option>
              <option value="bachelor's degree">Bachelor's Degree</option>
              <option value="master's degree">Master's Degree</option>
            </select>
            {errors.parental_level_of_education && <p className="text-red-500 text-sm mt-1">{errors.parental_level_of_education}</p>}
          </div>

          {/* Lunch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lunch
            </label>
            <select
              name="lunch"
              value={formData.lunch}
              onChange={handleChange}
              className={`input-field ${errors.lunch ? 'border-red-500' : ''}`}
            >
              <option value="">Select Lunch Type</option>
              <option value="standard">Standard</option>
              <option value="free/reduced">Free/Reduced</option>
            </select>
            {errors.lunch && <p className="text-red-500 text-sm mt-1">{errors.lunch}</p>}
          </div>

          {/* Test Preparation Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Preparation Course
            </label>
            <select
              name="test_preparation_course"
              value={formData.test_preparation_course}
              onChange={handleChange}
              className={`input-field ${errors.test_preparation_course ? 'border-red-500' : ''}`}
            >
              <option value="">Select Course Status</option>
              <option value="none">None</option>
              <option value="completed">Completed</option>
            </select>
            {errors.test_preparation_course && <p className="text-red-500 text-sm mt-1">{errors.test_preparation_course}</p>}
          </div>

          {/* Reading Score */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reading Score (0-100)
            </label>
            <input
              type="number"
              name="reading_score"
              value={formData.reading_score}
              onChange={handleChange}
              min="0"
              max="100"
              className={`input-field ${errors.reading_score ? 'border-red-500' : ''}`}
              placeholder="Enter reading score"
            />
            {errors.reading_score && <p className="text-red-500 text-sm mt-1">{errors.reading_score}</p>}
          </div>

          {/* Writing Score */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Writing Score (0-100)
            </label>
            <input
              type="number"
              name="writing_score"
              value={formData.writing_score}
              onChange={handleChange}
              min="0"
              max="100"
              className={`input-field ${errors.writing_score ? 'border-red-500' : ''}`}
              placeholder="Enter writing score"
            />
            {errors.writing_score && <p className="text-red-500 text-sm mt-1">{errors.writing_score}</p>}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-primary px-8 py-3 text-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Predicting...' : 'Predict Math Score'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;

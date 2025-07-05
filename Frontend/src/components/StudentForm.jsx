import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Card from './ui/Card';

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

  // Form options data with descriptions
  const formOptions = {
    gender: [
      { value: 'male', label: 'Male', description: 'Male student' },
      { value: 'female', label: 'Female', description: 'Female student' }
    ],
    race_ethnicity: [
      { value: 'group A', label: 'Group A', description: 'Ethnicity classification A' },
      { value: 'group B', label: 'Group B', description: 'Ethnicity classification B' },
      { value: 'group C', label: 'Group C', description: 'Ethnicity classification C' },
      { value: 'group D', label: 'Group D', description: 'Ethnicity classification D' },
      { value: 'group E', label: 'Group E', description: 'Ethnicity classification E' }
    ],
    parental_level_of_education: [
      { value: 'some high school', label: 'Some High School', description: 'Did not complete high school' },
      { value: 'high school', label: 'High School', description: 'High school diploma or equivalent' },
      { value: 'some college', label: 'Some College', description: 'Some college but no degree' },
      { value: "associate's degree", label: "Associate's Degree", description: '2-year college degree' },
      { value: "bachelor's degree", label: "Bachelor's Degree", description: '4-year college degree' },
      { value: "master's degree", label: "Master's Degree", description: 'Graduate degree' }
    ],
    lunch: [
      { value: 'standard', label: 'Standard', description: 'Regular price lunch' },
      { value: 'free/reduced', label: 'Free/Reduced', description: 'Subsidized lunch program' }
    ],
    test_preparation_course: [
      { value: 'none', label: 'None', description: 'No test preparation completed' },
      { value: 'completed', label: 'Completed', description: 'Test preparation course completed' }
    ]
  };

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
    <Card className="max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <path d="M12 8C10.9 8 10 8.9 10 10C10 10.5 10.2 11 10.5 11.3C9.6 11.8 9 12.8 9 14C9 15.7 10.3 17 12 17H20C21.7 17 23 15.7 23 14C23 12.8 22.4 11.8 21.5 11.3C21.8 11 22 10.5 22 10C22 8.9 21.1 8 20 8C19.4 8 18.9 8.3 18.6 8.7C18.1 8.3 17.6 8 17 8H15C14.4 8 13.9 8.3 13.4 8.7C13.1 8.3 12.6 8 12 8Z" fill="white"/>
            <path d="M8 20L12 16L16 18L24 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="20" r="1.5" fill="white"/>
            <circle cx="12" cy="16" r="1.5" fill="white"/>
            <circle cx="16" cy="18" r="1.5" fill="white"/>
            <circle cx="24" cy="10" r="1.5" fill="white"/>
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          AI Performance Analysis
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Enter student information to generate an AI-powered academic performance prediction
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gender */}
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={formOptions.gender}
            placeholder="Select Gender"
            error={errors.gender}
            required
          />

          {/* Race/Ethnicity */}
          <Select
            label="Race/Ethnicity"
            name="race_ethnicity"
            value={formData.race_ethnicity}
            onChange={handleChange}
            options={formOptions.race_ethnicity}
            placeholder="Select Race/Ethnicity"
            error={errors.race_ethnicity}
            required
          />

          {/* Parental Level of Education */}
          <Select
            label="Parental Education Level"
            name="parental_level_of_education"
            value={formData.parental_level_of_education}
            onChange={handleChange}
            options={formOptions.parental_level_of_education}
            placeholder="Select Education Level"
            error={errors.parental_level_of_education}
            searchable={true}
            required
          />

          {/* Lunch */}
          <Select
            label="Lunch Type"
            name="lunch"
            value={formData.lunch}
            onChange={handleChange}
            options={formOptions.lunch}
            placeholder="Select Lunch Type"
            error={errors.lunch}
            required
          />

          {/* Test Preparation Course */}
          <Select
            label="Test Preparation Course"
            name="test_preparation_course"
            value={formData.test_preparation_course}
            onChange={handleChange}
            options={formOptions.test_preparation_course}
            placeholder="Select Course Status"
            error={errors.test_preparation_course}
            required
          />

          {/* Reading Score */}
          <Input
            label="Reading Score"
            type="number"
            name="reading_score"
            value={formData.reading_score}
            onChange={handleChange}
            placeholder="Enter reading score (0-100)"
            error={errors.reading_score}
            min="0"
            max="100"
            required
          />

          {/* Writing Score */}
          <Input
            label="Writing Score"
            type="number"
            name="writing_score"
            value={formData.writing_score}
            onChange={handleChange}
            placeholder="Enter writing score (0-100)"
            error={errors.writing_score}
            min="0"
            max="100"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
          >
            {isLoading ? 'Analyzing Data...' : '🎯 Predict Math Score'}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => {
              setFormData({
                gender: '',
                race_ethnicity: '',
                parental_level_of_education: '',
                lunch: '',
                test_preparation_course: '',
                reading_score: '',
                writing_score: ''
              });
              setErrors({});
            }}
            className="w-full sm:w-auto px-6 py-4"
          >
            🔄 Reset Form
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default StudentForm;

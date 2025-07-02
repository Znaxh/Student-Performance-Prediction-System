#!/usr/bin/env python3
"""
Integration test for the Student Performance Prediction System
Tests both the FastAPI backend and the complete prediction pipeline
"""

import requests
import json

def test_health_endpoint():
    """Test the health check endpoint"""
    try:
        response = requests.get("http://localhost:8000/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        print("✅ Health endpoint test passed")
        return True
    except Exception as e:
        print(f"❌ Health endpoint test failed: {e}")
        return False

def test_prediction_endpoint():
    """Test the prediction endpoint with sample data"""
    try:
        # Sample student data
        student_data = {
            "gender": "female",
            "race_ethnicity": "group B",
            "parental_level_of_education": "master's degree",
            "lunch": "standard",
            "test_preparation_course": "completed",
            "reading_score": 85,
            "writing_score": 88
        }
        
        response = requests.post(
            "http://localhost:8000/predict",
            headers={"Content-Type": "application/json"},
            json=student_data
        )
        
        assert response.status_code == 200
        data = response.json()
        assert "prediction" in data
        assert "message" in data
        assert isinstance(data["prediction"], (int, float))
        assert data["message"] == "Prediction successful"
        
        print(f"✅ Prediction endpoint test passed")
        print(f"   Sample prediction: {data['prediction']:.2f}")
        return True
        
    except Exception as e:
        print(f"❌ Prediction endpoint test failed: {e}")
        return False

def test_multiple_predictions():
    """Test multiple predictions with different data"""
    test_cases = [
        {
            "name": "High performing student",
            "data": {
                "gender": "female",
                "race_ethnicity": "group E",
                "parental_level_of_education": "master's degree",
                "lunch": "standard",
                "test_preparation_course": "completed",
                "reading_score": 95,
                "writing_score": 92
            }
        },
        {
            "name": "Average performing student",
            "data": {
                "gender": "male",
                "race_ethnicity": "group C",
                "parental_level_of_education": "high school",
                "lunch": "free/reduced",
                "test_preparation_course": "none",
                "reading_score": 65,
                "writing_score": 68
            }
        },
        {
            "name": "Lower performing student",
            "data": {
                "gender": "male",
                "race_ethnicity": "group A",
                "parental_level_of_education": "some high school",
                "lunch": "free/reduced",
                "test_preparation_course": "none",
                "reading_score": 45,
                "writing_score": 42
            }
        }
    ]
    
    try:
        for test_case in test_cases:
            response = requests.post(
                "http://localhost:8000/predict",
                headers={"Content-Type": "application/json"},
                json=test_case["data"]
            )
            
            assert response.status_code == 200
            data = response.json()
            print(f"✅ {test_case['name']}: {data['prediction']:.2f}")
        
        print("✅ Multiple predictions test passed")
        return True
        
    except Exception as e:
        print(f"❌ Multiple predictions test failed: {e}")
        return False

def main():
    """Run all integration tests"""
    print("🚀 Starting Student Performance Prediction System Integration Tests\n")
    
    tests = [
        test_health_endpoint,
        test_prediction_endpoint,
        test_multiple_predictions
    ]
    
    passed = 0
    total = len(tests)
    
    for test in tests:
        if test():
            passed += 1
        print()
    
    print(f"📊 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! The system is working correctly.")
        print("\n📝 Next steps:")
        print("1. Open http://localhost:5173 to access the React frontend")
        print("2. Fill out the student form with sample data")
        print("3. Submit the form to see the prediction results")
        print("4. The FastAPI backend is running on http://localhost:8000")
        print("5. API documentation is available at http://localhost:8000/docs")
    else:
        print("❌ Some tests failed. Please check the error messages above.")

if __name__ == "__main__":
    main()

# 🚀 Student Performance Prediction - Backend

A modern FastAPI backend with machine learning pipeline for predicting student math performance. Built with FastAPI, scikit-learn, and multiple ML algorithms for accurate predictions.

## ✨ Features

- **🤖 Machine Learning Pipeline**: Complete ML workflow from data ingestion to prediction
- **🚀 FastAPI Framework**: Modern, fast, and auto-documented REST API
- **📊 Multiple ML Models**: CatBoost, XGBoost, Random Forest, and Linear Regression
- **🔧 Modular Architecture**: Clean separation of concerns and reusable components
- **📝 Auto Documentation**: Interactive API docs with Swagger UI
- **🛡️ Data Validation**: Pydantic models for request/response validation
- **📈 Logging System**: Comprehensive logging for monitoring and debugging
- **🔄 CORS Support**: Cross-origin resource sharing for frontend integration

## 🛠️ Technology Stack

### Core Framework
- **FastAPI**: Modern, fast web framework for building APIs
- **Uvicorn**: ASGI server for FastAPI applications
- **Pydantic**: Data validation using Python type annotations

### Machine Learning
- **Scikit-learn**: Machine learning library for preprocessing and evaluation
- **CatBoost**: Gradient boosting framework with categorical feature support
- **XGBoost**: Optimized gradient boosting library
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing library

### Utilities
- **Dill**: Extended pickling capabilities for model serialization
- **Python-multipart**: Form data parsing support

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Installation

1. **Navigate to backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the FastAPI server:**
   ```bash
   python fastapi_app.py
   ```

4. **Access the application:**
   - **API**: http://localhost:8000
   - **Interactive Docs**: http://localhost:8000/docs
   - **ReDoc**: http://localhost:8000/redoc
   - **Health Check**: http://localhost:8000/health

### Alternative Startup Methods

```bash
# Using uvicorn directly
uvicorn fastapi_app:app --host 0.0.0.0 --port 8000 --reload

# Using Python module
python -m uvicorn fastapi_app:app --reload
```
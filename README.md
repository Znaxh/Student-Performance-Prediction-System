# 🎓 Student Performance Prediction System

A modern, full-stack machine learning application that predicts student math performance based on demographic factors and test scores. Built with FastAPI backend and React frontend with responsive design.

## 🌟 Features

- **🤖 Machine Learning Prediction**: Predicts math scores using trained ML models (CatBoost, XGBoost, etc.)
- **🚀 FastAPI Backend**: Modern, fast, and auto-documented REST API
- **⚛️ React Frontend**: Responsive, interactive user interface with Tailwind CSS
- **📊 Real-time Results**: Animated prediction results with visual indicators
- **🔧 Modular Architecture**: Clean, maintainable code structure
- **✅ Comprehensive Testing**: Automated integration tests
- **📱 Mobile Responsive**: Works seamlessly on all devices

## 🏗️ Architecture

```
Student-Performance/
├── Backend/                 # FastAPI backend
│   ├── app/                # Application modules
│   ├── src/                # ML pipeline components
│   ├── artifacts/          # Trained models and data
│   └── tests/              # Backend tests
├── Frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   └── services/       # API services
└── docs/                   # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd Backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the FastAPI server:**
   ```bash
   python fastapi_app.py
   ```

   The API will be available at:
   - **API**: http://localhost:8000
   - **Documentation**: http://localhost:8000/docs
   - **Health Check**: http://localhost:8000/health

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at: http://localhost:5173

## 📊 Usage

1. **Open the application** in your browser at http://localhost:5173
2. **Fill out the student form** with the required information:
   - Gender
   - Race/Ethnicity
   - Parental Level of Education
   - Lunch Type
   - Test Preparation Course
   - Reading Score (0-100)
   - Writing Score (0-100)
3. **Click "Predict Math Score"** to get the prediction
4. **View the results** with animated score display and performance analysis

## 🧪 Testing

### Run Integration Tests

```bash
python test_integration.py
```

This will test:
- ✅ API health endpoint
- ✅ Prediction endpoint functionality
- ✅ Multiple prediction scenarios
- ✅ Response validation

### Manual API Testing

```bash
# Health check
curl http://localhost:8000/health

# Sample prediction
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "gender": "female",
    "race_ethnicity": "group B",
    "parental_level_of_education": "bachelor'\''s degree",
    "lunch": "standard",
    "test_preparation_course": "completed",
    "reading_score": 85,
    "writing_score": 88
  }'
```

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **Python**: Core programming language
- **Scikit-learn**: Machine learning library
- **CatBoost**: Gradient boosting framework
- **XGBoost**: Optimized gradient boosting
- **Pandas**: Data manipulation and analysis
- **Pydantic**: Data validation using Python type annotations
- **Uvicorn**: ASGI server for FastAPI

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features

### Machine Learning Pipeline
- **Data Ingestion**: Automated data loading and validation
- **Data Transformation**: Feature engineering and preprocessing
- **Model Training**: Multiple algorithm comparison and selection
- **Model Evaluation**: Performance metrics and validation
- **Prediction Pipeline**: Real-time inference system

## 📁 Project Structure

```
Student-Performance/
├── Backend/
│   ├── app/                    # FastAPI application
│   │   ├── config/            # Configuration management
│   │   ├── models/            # Pydantic models
│   │   ├── api/               # API routes
│   │   └── services/          # Business logic
│   ├── src/                   # ML pipeline
│   │   ├── components/        # ML components
│   │   │   ├── data_ingestion.py
│   │   │   ├── data_transformation.py
│   │   │   └── model_trainer.py
│   │   ├── pipeline/          # Prediction pipeline
│   │   │   ├── predict_pipeline.py
│   │   │   └── train_pipeline.py
│   │   ├── exception.py       # Custom exceptions
│   │   ├── logger.py          # Logging configuration
│   │   └── utils.py           # Utility functions
│   ├── artifacts/             # Trained models and data
│   ├── logs/                  # Application logs
│   ├── notebook/              # Jupyter notebooks
│   ├── fastapi_app.py         # Main application entry
│   └── requirements.txt       # Python dependencies
├── Frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── StudentForm.jsx
│   │   │   └── ResultsDisplay.jsx
│   │   ├── services/          # API services
│   │   │   └── api.js
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── public/                # Static assets
│   ├── package.json           # Node.js dependencies
│   └── vite.config.js         # Vite configuration
├── test_integration.py        # Integration tests
└── README.md                  # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the Backend directory:

```env
# API Configuration
APP_NAME=Student Performance Prediction API
DEBUG=true
HOST=0.0.0.0
PORT=8000

# CORS Origins
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# Model Paths
MODEL_PATH=artifacts/model.pkl
PREPROCESSOR_PATH=artifacts/proprocessor.pkl

# Logging
LOG_LEVEL=INFO
```

### Frontend Configuration

The frontend automatically connects to the backend at `http://localhost:8000`. To change this, update the `API_BASE_URL` in `Frontend/src/services/api.js`.

## 📈 Model Performance

The system uses multiple machine learning algorithms and selects the best performing model:

- **CatBoost**: Gradient boosting with categorical feature support
- **XGBoost**: Optimized gradient boosting
- **Random Forest**: Ensemble learning method
- **Linear Regression**: Baseline model

Performance metrics are logged during training and the best model is automatically selected based on R² score and cross-validation results.

## 🚀 Deployment

### Docker Deployment (Coming Soon)

```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Manual Deployment

1. **Backend**: Deploy FastAPI app using Uvicorn with Gunicorn
2. **Frontend**: Build and serve static files with nginx
3. **Database**: Optional PostgreSQL for data storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Documentation

### Endpoints

#### Health Check
```
GET /health
Response: {"status": "healthy"}
```

#### Predict Student Performance
```
POST /predict
Content-Type: application/json

Request Body:
{
  "gender": "male|female",
  "race_ethnicity": "group A|group B|group C|group D|group E",
  "parental_level_of_education": "some high school|high school|some college|associate's degree|bachelor's degree|master's degree",
  "lunch": "standard|free/reduced",
  "test_preparation_course": "none|completed",
  "reading_score": 0-100,
  "writing_score": 0-100
}

Response:
{
  "prediction": 75.5,
  "message": "Prediction successful"
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change ports in configuration
2. **Module not found**: Ensure all dependencies are installed
3. **CORS errors**: Check allowed origins in backend configuration
4. **Model not found**: Ensure artifacts directory contains trained models

### Getting Help

- Check the [Issues](https://github.com/Znaxh/Student-Performance-Prediction-System/issues) page
- Review the API documentation at http://localhost:8000/docs
- Run integration tests to verify setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dataset from Kaggle Student Performance Dataset
- Built with modern web technologies and ML frameworks
- Inspired by educational data science applications

---

**Made with ❤️ for educational purposes**

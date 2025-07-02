from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import pandas as pd
from typing import Optional

from src.pipeline.predict_pipeline import CustomData, PredictPipeline

# Create FastAPI application
app = FastAPI(
    title="Student Performance Prediction API",
    description="API for predicting student performance based on various factors",
    version="1.0.0"
)

# Add CORS middleware to allow frontend connections
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response
class StudentData(BaseModel):
    gender: str
    race_ethnicity: str
    parental_level_of_education: str
    lunch: str
    test_preparation_course: str
    reading_score: float
    writing_score: float

class PredictionResponse(BaseModel):
    prediction: float
    message: str

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Student Performance Prediction API", "status": "active"}

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Prediction endpoint
@app.post("/predict", response_model=PredictionResponse)
async def predict_performance(student_data: StudentData):
    try:
        # Create CustomData object
        data = CustomData(
            gender=student_data.gender,
            race_ethnicity=student_data.race_ethnicity,
            parental_level_of_education=student_data.parental_level_of_education,
            lunch=student_data.lunch,
            test_preparation_course=student_data.test_preparation_course,
            reading_score=student_data.reading_score,
            writing_score=student_data.writing_score
        )
        
        # Convert to DataFrame
        pred_df = data.get_data_as_data_frame()
        print(f"Prediction DataFrame: {pred_df}")
        
        # Make prediction
        predict_pipeline = PredictPipeline()
        results = predict_pipeline.predict(pred_df)
        
        return PredictionResponse(
            prediction=float(results[0]),
            message="Prediction successful"
        )
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("fastapi_app:app", host="0.0.0.0", port=8000, reload=True)

from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.ai_logic import predict_disease

router = APIRouter()

@router.get("/status")
async def health_check():
    return {"status": "AI Model Service is active and waiting for uploads"}

@router.post("/predict")
async def get_prediction(file: UploadFile = File(...)):
    # Validate file type
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File uploaded is not an image.")

    try:
        # Read the file bits
        image_bytes = await file.read()
        
        # Call our AI Service
        result = predict_disease(image_bytes)
        
        return {
            "filename": file.filename,
            "prediction": result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")
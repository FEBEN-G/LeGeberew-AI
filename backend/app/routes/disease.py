from fastapi import APIRouter

router = APIRouter()

@router.get("/status")
async def health_check():
    return {"status": "AI Model Service is ready for images"}

@router.post("/predict")
async def predict_placeholder():
    return {"message": "Image received, but model logic is in Phase 2"}
from fastapi import APIRouter, Query
from app.services.weather_logic import get_weather_advice

router = APIRouter()

@router.get("/alert")
async def fetch_weather_alert(region: str = Query("Gojjam", description="The farmer's region")):
    return get_weather_advice(region)
from fastapi import APIRouter, Query
from app.services.market_logic import get_market_prices

router = APIRouter()

@router.get("/prices")
async def fetch_prices(crop: str = Query(None, description="Name of the crop (e.g., Teff, Maize)")):
    return get_market_prices(crop)
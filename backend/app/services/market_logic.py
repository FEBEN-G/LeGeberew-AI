import json
import os

DATA_PATH = "app/data/market_mock.json"

def get_market_prices(crop_name: str = None):
    if not os.path.exists(DATA_PATH):
        return {"error": "Market data source not found."}

    with open(DATA_PATH, "r") as f:
        data = json.load(f)

    # If no crop specified, return all available crops
    if not crop_name:
        return {"available_crops": list(data["crops"].keys())}

    # Search for the crop (Case-insensitive)
    all_crops = data["crops"]
    found_crop = None
    for key in all_crops:
        if crop_name.lower() in key.lower():
            found_crop = key
            break

    if not found_crop:
        return {"error": f"No data found for '{crop_name}'", "available_crops": list(all_crops.keys())}

    # Sort results so the best price (highest) is at the top
    sorted_prices = sorted(all_crops[found_crop], key=lambda x: x['price'], reverse=True)

    return {
        "crop": found_crop,
        "unit": "Quintal (100KG)",
        "currency": "ETB",
        "markets": sorted_prices
    }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import disease, market, weather

app = FastAPI(
    title="LeGeberew AI API",
    description="Backend for Ethiopian Agricultural Advisory Platform",
    version="1.0.0"
)

# 1. Configure CORS (Crucial for Frontend-Backend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # During development, allow all. In production, specify your URL.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Include Routers (Modular Setup)
app.include_router(disease.router, prefix="/api/v1/disease", tags=["Plant Doctor"])
app.include_router(market.router, prefix="/api/v1/market", tags=["Market Intelligence"])
app.include_router(weather.router, prefix="/api/v1/weather", tags=["Smart Alerts"])

# 3. Root Endpoint
@app.get("/")
async def root():
    return {
        "project": "LeGeberew AI (Geberena AI)",
        "status": "Online",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    # This allows you to run the file directly with 'python app/main.py'
    uvicorn.run("app.main:app", host="0.0.0.0", port=5000, reload=True)
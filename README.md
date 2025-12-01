# 🌱 Geberena AI

**AI-Powered Agricultural Advisory & Market Linkage Platform for Ethiopian Farmers**

*Empowering smallholder farmers with intelligent insights to increase crop yield, reduce losses, and achieve fair market prices.*

---

## 🚀 The Problem

Smallholder farmers, who form the backbone of Ethiopia's economy, face critical challenges:
- **Information Gap:** Lack of access to real-time, localized advice on pests, diseases, and optimal farming practices.
- **Climate Vulnerability:** Unpredictable weather patterns lead to poor irrigation and planting decisions, causing crop loss.
- **Market Inefficiency:** Exploitative middlemen and lack of price transparency prevent farmers from achieving fair value for their produce.

## 💡 Our Solution

Geberena AI is a mobile-first platform that democratizes agricultural knowledge and market access through three core AI-driven features:

1.  **Digital Plant Doctor:** Uses computer vision to instantly diagnose plant diseases from a photo and provide expert treatment advice in Amharic.
2.  **Intelligent Market Connect:** Aggregates real-time price data to advise farmers on the most profitable markets, cutting out exploitative intermediaries.
3.  **Smart Farming Alerts:** Delivers personalized, location-specific alerts for irrigation and planting based on satellite and weather data.

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React.js (Mobile-responsive Web App) |
| **Backend** | Python, Flask |
| **AI/ML** | TensorFlow/Keras (Transfer Learning with MobileNetV2), PlantVillage Dataset |
| **Database** | SQLite |
| **Advisory System** | JSON-based Knowledge Base (Expert-Translated Amharic) |
| **Market Data** | Mock API with realistic Ethiopian crop & market data |

## 🏗️ System Architecture
```text
Farmer's Phone → React.js Frontend → Flask Backend API → AI Model / Database
↓
Amharic Advice + Market Data → Farmer's Phone
```

## 🎯 Key Features

### 1. Plant Disease Identification
- **Technology:** Transfer Learning with MobileNetV2
- **Accuracy:** >92% on test set
- **Input:** Plant leaf image
- **Output:** Disease identification + Amharic treatment advice

### 2. Market Intelligence
- Real-time price comparisons across major Ethiopian markets
- Simple ranking algorithm to identify most profitable options
- Clean, mobile-friendly interface

### 3. Farming Advisory
- Expert-curated agricultural knowledge in Amharic
- Weather-based irrigation recommendations
- Planting season guidance

## 📁 Project Structure
```text
geberena-ai/
├── frontend/ # React.js application
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Main application pages
│ │ └── styles/ # CSS and styling
├── backend/ # Flask application
│ ├── app.py # Main Flask application
│ ├── ml_model/ # AI model and prediction logic
│ ├── database/ # Database models and initialization
│ └── knowledge_base/ # Amharic agricultural advice JSON
├── docs/ # Documentation
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- TensorFlow 2.x

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/geberena-ai.git
   cd geberena-ai
   ```
2. **Backend Setup**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    python init_db.py
    python app.py
    ```
3. Frontend Setup
    ```bash
    cd frontend
    npm install
    npm start
    ```
4. Access the Application
    - Frontend: http://localhost:3000
    - Backend API: http://localhost:5000
    

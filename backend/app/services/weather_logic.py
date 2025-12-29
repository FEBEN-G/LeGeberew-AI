import random

def get_weather_advice(location: str = "Central Ethiopia"):
    # Simulated Weather Data (In a real app, you'd fetch this from OpenWeatherMap)
    conditions = ["Sunny", "Rainy", "Cloudy"]
    current_condition = random.choice(conditions)
    temp = random.randint(18, 30)

    # Localized Advice Logic
    if current_condition == "Rainy":
        advice_amharic = "አያጠጡ - ዝናብ ይጠበቃል"
        action_color = "blue"  # Helpful for Frontend UI later
        recommendation = "ዛሬ ዝናብ ስለሚጠበቅ መስኖ መጠቀም አያስፈልግዎትም።"
    elif temp > 27:
        advice_amharic = "ማጠጣት ያስፈልጋል"
        action_color = "red"
        recommendation = "ከፍተኛ ሙቀት ስላለ እባክዎን ማሳዎን ያጠጡ።"
    else:
        advice_amharic = "መደበኛ እንክብካቤ"
        action_color = "green"
        recommendation = "አየሩ መደበኛ ነው። መደበኛ ክትትልዎን ይቀጥሉ።"

    return {
        "location": location,
        "temperature": f"{temp}°C",
        "condition": current_condition,
        "alert_amharic": advice_amharic,
        "recommendation_amharic": recommendation,
        "ui_color": action_color
    }
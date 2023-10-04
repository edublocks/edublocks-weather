import requests 

class Location:
    def __init__(self, temperature, wind_speed, wind_direction, conditions):
        self.temperature = temperature
        self.wind_speed = wind_speed
        self.wind_direction = wind_direction
        self.wind_direction = wind_direction
        self.conditions = conditions

class Weather:
    def __init__(self):
        self.base_url = "https://api.open-meteo.com/v1/forecast"

    def _convert_weather_code(self, code):
        match code:
            case 0:
                return "Clear sky"
            case 1:
                return "Mainly clear"
            case 2:
                return "Partly cloudy"
            case 3:
                return "Overcast"
            case 45:
                return "Fog"
            case 48:
                return "Depositing rime fog"
            case 51:
                return "Light drizzle"
            case 53:
                return "Moderate drizzle"
            case 55:
                return "Dense drizzle"
            case 56:
                return "Light freezing drizzle"
            case 57:
                return "Dense freezing drizzle"
            case 61:
                return "Slight rain"
            case 63:
                return "Moderate rain"
            case 65:
                return "Heavy rain"
            case 66:
                return "Light freezing rain"
            case 67:
                return "Heavy freezing rain"
            case 71:
                return "Slight snow"
            case 73:
                return "Moderate snow"
            case 75:
                return "Heavy snow"
            case 77:
                return "Snow grains"
            case 80:
                return "Slight rain showers"
            case 81:
                return "Moderate rain showers"
            case 82:
                return "Violent rain showers"
            case 85:
                return "Slight snow showers"
            case 86:
                return "Heavy snow showers"
            case 95:
                return "Thunderstorm"
            case 96:
                return "Thunderstorm with slight hail"
            case 99:
                return "Thunderstorm with heavy hail"

    def get_current_weather(self, latitude, longitude):
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "current_weather": True
        }

        response = requests.get(self.base_url, params=params)

        if response.status_code == 200:
            data = response.json()

            return Location(
                temperature=data["current_weather"]["temperature"],
                wind_speed=data["current_weather"]["windspeed"],
                wind_direction=data["current_weather"]["winddirection"],
                conditions=self._convert_weather_code(data["current_weather"]["weathercode"])
            )
        else:
            return None
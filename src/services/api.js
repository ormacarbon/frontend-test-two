const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}}`);
  const data = await response.json()
  return data;
};

export const getForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}}`);
  const data = await response.json()
  return data;
}

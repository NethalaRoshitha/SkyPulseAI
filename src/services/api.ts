import axios from 'axios';
import { API_BASE_URL, API_KEY, GEO_BASE_URL } from '../constants';
import type { WeatherData, ForecastData, GeoLocation } from '../types';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  params: {
    appid: API_KEY,
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          throw new Error('City not found. Please check the spelling and try again.');
        case 401:
          throw new Error('Invalid API key. Please check your configuration.');
        case 429:
          throw new Error('Too many requests. Please wait a moment and try again.');
        default:
          throw new Error('Something went wrong. Please try again later.');
      }
    }
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out. Please check your connection.');
    }
    throw new Error('Network error. Please check your internet connection.');
  },
);

export const weatherApi = {
  async getCurrentWeather(city: string): Promise<WeatherData> {
    const { data } = await apiClient.get<WeatherData>('/weather', {
      params: { q: city, units: 'metric' },
    });
    return data;
  },

  async getForecast(city: string): Promise<ForecastData> {
    const { data } = await apiClient.get<ForecastData>('/forecast', {
      params: { q: city, units: 'metric' },
    });
    return data;
  },

  async searchCities(query: string): Promise<GeoLocation[]> {
    const { data } = await axios.get<GeoLocation[]>(`${GEO_BASE_URL}/direct`, {
      params: { q: query, limit: 5, appid: API_KEY },
    });
    return data;
  },
};

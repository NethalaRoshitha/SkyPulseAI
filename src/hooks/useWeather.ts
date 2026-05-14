import { useState, useCallback } from 'react';
import type { WeatherData, ForecastData, TemperatureUnit } from '../types';
import { weatherApi } from '../services/api';
import { addRecentSearch } from '../utils/storage';

interface UseWeatherReturn {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  loading: boolean;
  error: string | null;
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
  fetchWeather: (city: string) => Promise<void>;
  clearError: () => void;
}

export function useWeather(): UseWeatherReturn {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherApi.getCurrentWeather(city),
        weatherApi.getForecast(city),
      ]);
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      addRecentSearch(city);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch weather data';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { currentWeather, forecast, loading, error, unit, setUnit, fetchWeather, clearError };
}

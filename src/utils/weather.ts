import type { TemperatureUnit } from '../types';

export function convertTemp(kelvin: number, unit: TemperatureUnit): number {
  if (unit === 'fahrenheit') return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  return Math.round(kelvin - 273.15);
}

export function formatTemp(kelvin: number, unit: TemperatureUnit): string {
  const temp = convertTemp(kelvin, unit);
  return unit === 'fahrenheit' ? `${temp}\u00B0F` : `${temp}\u00B0C`;
}

export function formatTime(timestamp: number, timezoneOffset: number): string {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function getWeatherIconUrl(icon: string): string {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export function getWindDirection(deg: number): string {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

export function getDayFromTimestamp(timestamp: number): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[new Date(timestamp * 1000).getDay()];
}

export function getFullDayFromTimestamp(timestamp: number): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(timestamp * 1000).getDay()];
}

export function shareWeather(city: string, temp: string, description: string): void {
  const text = `Weather in ${city}: ${temp}, ${description} - via SkyPulse AI`;
  if (navigator.share) {
    navigator.share({ title: 'SkyPulse AI', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}

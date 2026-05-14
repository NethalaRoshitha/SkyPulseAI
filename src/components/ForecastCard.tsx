import { motion } from 'framer-motion';
import type { ForecastData, TemperatureUnit } from '../types';
import { formatTemp, getWeatherIconUrl, getDayFromTimestamp } from '../utils/weather';

interface ForecastCardProps {
  data: ForecastData;
  unit: TemperatureUnit;
}

export default function ForecastCard({ data, unit }: ForecastCardProps) {
  const dailyForecasts = data.list
    .filter((item) => item.dt_txt.includes('12:00:00'))
    .slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-white/20 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-600/20 p-6 sm:p-8 shadow-2xl"
    >
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {dailyForecasts.map((item, index) => (
          <motion.div
            key={item.dt}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white/30 dark:bg-slate-700/30 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-slate-600/20 hover:scale-105 transition-transform"
          >
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {getDayFromTimestamp(item.dt)}
            </p>
            <img
              src={getWeatherIconUrl(item.weather[0].icon)}
              alt={item.weather[0].description}
              className="w-14 h-14 mx-auto drop-shadow"
            />
            <p className="text-lg font-bold text-gray-800 dark:text-white mt-1">
              {formatTemp(item.main.temp, unit)}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{item.weather[0].description}</p>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{formatTemp(item.main.temp_min, unit)}</span>
              {' / '}
              <span>{formatTemp(item.main.temp_max, unit)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

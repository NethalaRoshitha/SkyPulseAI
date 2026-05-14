import { motion } from 'framer-motion';
import type { WeatherData, TemperatureUnit } from '../types';
import { formatTemp, getWeatherIconUrl, getWindDirection, shareWeather } from '../utils/weather';
import { MOOD_SUGGESTIONS } from '../constants';
import { Share2, Droplets, Wind, Eye, Gauge, Thermometer } from 'lucide-react';

interface WeatherCardProps {
  data: WeatherData;
  unit: TemperatureUnit;
}

export default function WeatherCard({ data, unit }: WeatherCardProps) {
  const condition = data.weather[0]?.main || 'Default';
  const suggestion = MOOD_SUGGESTIONS[condition] || MOOD_SUGGESTIONS.Default;

  const stats = [
    { icon: Droplets, label: 'Humidity', value: `${data.main.humidity}%` },
    { icon: Wind, label: 'Wind', value: `${data.wind.speed} m/s ${getWindDirection(data.wind.deg)}` },
    { icon: Eye, label: 'Visibility', value: `${(data.visibility / 1000).toFixed(1)} km` },
    { icon: Gauge, label: 'Pressure', value: `${data.main.pressure} hPa` },
    { icon: Thermometer, label: 'Feels Like', value: formatTemp(data.main.feels_like, unit) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Main Weather Display */}
      <div className="bg-white/20 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-600/20 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={getWeatherIconUrl(data.weather[0].icon)}
              alt={data.weather[0].description}
              className="w-24 h-24 drop-shadow-lg"
            />
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
                {formatTemp(data.main.temp, unit)}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 capitalize text-lg">{data.weather[0].description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                H: {formatTemp(data.main.temp_max, unit)} &middot; L: {formatTemp(data.main.temp_min, unit)}
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{data.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{data.sys.country}</p>
            <button
              onClick={() => shareWeather(data.name, formatTemp(data.main.temp, unit), data.weather[0].description)}
              className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/30 dark:bg-slate-700/30 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20 dark:border-slate-600/20"
            >
              <stat.icon className="w-5 h-5 mx-auto text-cyan-500 mb-1" />
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Mood Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 bg-white/20 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-600/20 p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">✨</span>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">AI Mood & Activity Suggestions</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-xl p-4 border border-cyan-500/10">
            <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-1">Mood</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{suggestion.mood}</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 rounded-xl p-4 border border-emerald-500/10">
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Activities</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-0.5">
              {suggestion.activities.slice(0, 3).map((a) => (
                <li key={a}>&bull; {a}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 rounded-xl p-4 border border-amber-500/10">
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Outfit</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{suggestion.outfit}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

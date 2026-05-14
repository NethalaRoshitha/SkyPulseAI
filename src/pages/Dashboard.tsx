import { useWeather } from '../hooks/useWeather';
import { useRecentSearches } from '../hooks/useRecentSearches';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import SunCard from '../components/SunCard';
import SkeletonCard from '../components/SkeletonCard';
import TemperatureToggle from '../components/TemperatureToggle';
import WeatherAnimation from '../components/WeatherAnimation';
import { BG_GRADIENTS } from '../constants';
import { AlertCircle, CloudLightning } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { currentWeather, forecast, loading, error, unit, setUnit, fetchWeather, clearError } = useWeather();
  const { searches, clear } = useRecentSearches();

  const condition = currentWeather?.weather[0]?.main || 'Default';
  const bgClass = currentWeather
    ? BG_GRADIENTS[condition] || BG_GRADIENTS.Default
    : BG_GRADIENTS.Default;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgClass} dark:bg-none transition-colors duration-700`}>
      {currentWeather && <WeatherAnimation condition={condition} />}

      <div className="relative pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <CloudLightning className="w-8 h-8 text-cyan-500" />
                Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Search a city to get started</p>
            </div>
            <TemperatureToggle unit={unit} onToggle={setUnit} />
          </div>

          {/* Search */}
          <div className="mb-8">
            <SearchBar
              onSearch={fetchWeather}
              recentSearches={searches}
              onClearRecent={clear}
              loading={loading}
            />
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto mb-6 bg-red-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-4 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              <button onClick={clearError} className="ml-auto text-red-400 hover:text-red-300 text-sm">
                Dismiss
              </button>
            </motion.div>
          )}

          {/* Loading */}
          {loading && <SkeletonCard />}

          {/* Weather Data */}
          {!loading && currentWeather && (
            <div className="space-y-6">
              <WeatherCard data={currentWeather} unit={unit} />
              {forecast && <ForecastCard data={forecast} unit={unit} />}
              <SunCard data={currentWeather} />
            </div>
          )}

          {/* Empty State */}
          {!loading && !currentWeather && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/30 dark:border-slate-600/20 flex items-center justify-center">
                <CloudLightning className="w-12 h-12 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Search for a City
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Enter any city name in the search bar above to get real-time weather data,
                forecasts, and AI-powered lifestyle suggestions.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

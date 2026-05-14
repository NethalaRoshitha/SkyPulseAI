import type { TemperatureUnit } from '../types';

interface TemperatureToggleProps {
  unit: TemperatureUnit;
  onToggle: (unit: TemperatureUnit) => void;
}

export default function TemperatureToggle({ unit, onToggle }: TemperatureToggleProps) {
  return (
    <div className="inline-flex items-center bg-white/30 dark:bg-slate-700/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-600/20 p-1">
      <button
        onClick={() => onToggle('celsius')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
          unit === 'celsius'
            ? 'bg-cyan-500 text-white shadow-md'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onToggle('fahrenheit')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
          unit === 'fahrenheit'
            ? 'bg-cyan-500 text-white shadow-md'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
        }`}
      >
        °F
      </button>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Sunrise, Sunset } from 'lucide-react';
import type { WeatherData } from '../types';
import { formatTime } from '../utils/weather';

interface SunCardProps {
  data: WeatherData;
}

export default function SunCard({ data }: SunCardProps) {
  const tz = data.timezone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 backdrop-blur-2xl rounded-2xl border border-amber-500/20 p-6 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-amber-500/10">
          <Sunrise className="w-8 h-8 text-amber-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sunrise</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{formatTime(data.sys.sunrise, tz)}</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5 backdrop-blur-2xl rounded-2xl border border-rose-500/20 p-6 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-rose-500/10">
          <Sunset className="w-8 h-8 text-rose-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sunset</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{formatTime(data.sys.sunset, tz)}</p>
        </div>
      </div>
    </motion.div>
  );
}

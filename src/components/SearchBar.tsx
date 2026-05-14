import { useState, type FormEvent } from 'react';
import { Search, MapPin, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch: (city: string) => void;
  recentSearches: string[];
  onClearRecent: () => void;
  loading?: boolean;
}

export default function SearchBar({ onSearch, recentSearches, onClearRecent, loading }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showRecent, setShowRecent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      onSearch(trimmed);
      setQuery('');
      setShowRecent(false);
    }
  };

  const handleRecentClick = (city: string) => {
    onSearch(city);
    setShowRecent(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowRecent(true)}
            onBlur={() => setTimeout(() => setShowRecent(false), 200)}
            placeholder="Search any city worldwide..."
            className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/30 dark:border-slate-600/30 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all shadow-lg shadow-black/5"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-500/20"
          >
            {loading ? '...' : 'Search'}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {showRecent && recentSearches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl border border-white/20 dark:border-slate-600/20 shadow-xl overflow-hidden z-20"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 dark:border-slate-700">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Recent Searches
              </span>
              <button
                onClick={onClearRecent}
                className="text-xs text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            </div>
            {recentSearches.map((city) => (
              <button
                key={city}
                onClick={() => handleRecentClick(city)}
                className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {city}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

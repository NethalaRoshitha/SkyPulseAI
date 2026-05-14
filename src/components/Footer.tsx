import { CloudLightning, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 dark:border-slate-700/30 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CloudLightning className="w-6 h-6 text-cyan-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                SkyPulse AI
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Intelligent weather insights and lifestyle recommendations powered by AI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Real-time Weather</li>
              <li>5-Day Forecast</li>
              <li>AI Mood Suggestions</li>
              <li>City Search</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>OpenWeatherMap API</li>
              <li>React Documentation</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by SkyPulse AI
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

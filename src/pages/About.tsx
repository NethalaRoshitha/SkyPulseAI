import { motion } from 'framer-motion';
import { CloudLightning, Code, Palette, Cpu, Globe, Heart, ExternalLink } from 'lucide-react';

export default function About() {
  const techStack = [
    { name: 'React 18', desc: 'Component-based UI library' },
    { name: 'Vite', desc: 'Lightning-fast build tool' },
    { name: 'TypeScript', desc: 'Type-safe development' },
    { name: 'Tailwind CSS', desc: 'Utility-first styling' },
    { name: 'Framer Motion', desc: 'Smooth animations' },
    { name: 'Axios', desc: 'HTTP client for APIs' },
    { name: 'OpenWeatherMap', desc: 'Weather data provider' },
    { name: 'React Router', desc: 'Client-side routing' },
  ];

  const highlights = [
    { icon: Code, title: 'Clean Architecture', desc: 'Modular folder structure with reusable components, custom hooks, and separated concerns.' },
    { icon: Palette, title: 'Glassmorphism UI', desc: 'Modern glass-effect design with backdrop blur, gradients, and smooth transitions.' },
    { icon: Cpu, title: 'AI Suggestions', desc: 'Intelligent mood, activity, and outfit recommendations based on weather conditions.' },
    { icon: Globe, title: 'Global Coverage', desc: 'Search any city worldwide with real-time data from OpenWeatherMap API.' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
            <CloudLightning className="w-4 h-4" /> About the Project
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Built with{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Passion & Precision
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            SkyPulse AI is a modern weather application that combines real-time data with
            intelligent lifestyle recommendations, wrapped in a premium glassmorphism interface.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-600/20 p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-xl border border-white/30 dark:border-slate-600/20 p-4 text-center hover:scale-105 transition-transform"
              >
                <p className="font-semibold text-gray-800 dark:text-white text-sm">{tech.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-600/20 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Weather Data Source</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
            SkyPulse AI uses the OpenWeatherMap API to provide accurate, real-time weather data
            for cities around the world.
          </p>
          <a
            href="https://openweathermap.org/api"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            OpenWeatherMap API <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by SkyPulse AI Team
          </p>
        </div>
      </div>
    </div>
  );
}

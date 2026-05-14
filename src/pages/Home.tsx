import { motion } from 'framer-motion';
import { CloudLightning, Search, Zap, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { icon: Search, title: 'Global City Search', desc: 'Search weather for any city worldwide with instant results' },
    { icon: Zap, title: 'AI Mood Suggestions', desc: 'Get personalized activity and outfit recommendations' },
    { icon: Globe, title: '5-Day Forecast', desc: 'Plan ahead with detailed multi-day weather predictions' },
    { icon: Sparkles, title: 'Dynamic Animations', desc: 'Beautiful weather animations that match current conditions' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent dark:from-cyan-500/5 dark:via-blue-500/3" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-8">
              <CloudLightning className="w-4 h-4" />
              AI-Powered Weather Intelligence
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Weather That{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Understands You
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              SkyPulse AI delivers real-time weather data with intelligent lifestyle recommendations,
              so you always know what to wear, where to go, and how to feel.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-600/30 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Why SkyPulse AI?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              More than just weather -- we help you live better every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-600/20 p-6 hover:scale-105 transition-transform group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-cyan-500/20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Check the Weather?
          </h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-lg mx-auto">
            Search any city and get instant weather data with AI-powered lifestyle suggestions.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-cyan-600 font-semibold text-lg hover:bg-cyan-50 transition-colors shadow-lg"
          >
            Open Dashboard <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

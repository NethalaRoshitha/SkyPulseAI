import { motion } from 'framer-motion';

interface WeatherAnimationProps {
  condition: string;
}

export default function WeatherAnimation({ condition }: WeatherAnimationProps) {
  const lower = condition.toLowerCase();

  if (lower.includes('rain') || lower.includes('drizzle')) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-4 bg-blue-300/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
            animate={{ y: ['0vh', '110vh'], x: [0, -20] }}
            transition={{ duration: 1 + Math.random() * 0.5, repeat: Infinity, delay: Math.random() * 2, ease: 'linear' }}
          />
        ))}
      </div>
    );
  }

  if (lower.includes('snow')) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
            animate={{ y: ['0vh', '110vh'], x: [0, Math.random() * 60 - 30], rotate: [0, 360] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'linear' }}
          />
        ))}
      </div>
    );
  }

  if (lower.includes('thunder')) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-5 bg-blue-200/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
            animate={{ y: ['0vh', '110vh'] }}
            transition={{ duration: 0.8 + Math.random() * 0.3, repeat: Infinity, delay: Math.random() * 2, ease: 'linear' }}
          />
        ))}
        <motion.div
          className="absolute inset-0 bg-yellow-200/10"
          animate={{ opacity: [0, 0.3, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
    );
  }

  if (lower.includes('clear')) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/20 rounded-full"
            style={{ left: `${20 + Math.random() * 60}%`, top: `${10 + Math.random() * 30}%` }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>
    );
  }

  if (lower.includes('cloud')) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-12 bg-white/5 rounded-full blur-xl"
            style={{ left: `${Math.random() * 80}%`, top: `${10 + Math.random() * 30}%` }}
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    );
  }

  return null;
}

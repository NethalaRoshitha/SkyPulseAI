export default function SkeletonCard() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-pulse">
      <div className="bg-white/20 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-600/20 p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-300/30 dark:bg-slate-600/30 rounded-2xl" />
            <div className="space-y-3">
              <div className="h-10 w-32 bg-gray-300/30 dark:bg-slate-600/30 rounded-lg" />
              <div className="h-4 w-40 bg-gray-300/30 dark:bg-slate-600/30 rounded" />
              <div className="h-3 w-28 bg-gray-300/30 dark:bg-slate-600/30 rounded" />
            </div>
          </div>
          <div className="space-y-3 text-center sm:text-right">
            <div className="h-6 w-24 bg-gray-300/30 dark:bg-slate-600/30 rounded" />
            <div className="h-4 w-12 bg-gray-300/30 dark:bg-slate-600/30 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-20 bg-gray-300/30 dark:bg-slate-600/30 rounded-xl" />
          ))}
        </div>
      </div>

      <div className="bg-white/20 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-600/20 p-8">
        <div className="h-5 w-48 bg-gray-300/30 dark:bg-slate-600/30 rounded mb-6" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-32 bg-gray-300/30 dark:bg-slate-600/30 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

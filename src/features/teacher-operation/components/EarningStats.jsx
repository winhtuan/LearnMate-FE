export default function EarningStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`flex flex-col gap-3 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark shadow-sm ${stat.isSpecial ? 'relative overflow-hidden group' : ''}`}>
          {stat.isSpecial && (
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          )}
          
          <div className="flex items-center justify-between relative z-10">
            <p className="text-slate-900 dark:text-white text-sm font-medium opacity-80">{stat.label}</p>
            <span className="material-symbols-outlined text-primary">{stat.icon}</span>
          </div>
          
          <div className={`flex items-baseline gap-2 relative z-10`}>
             <p className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">{stat.value}</p>
          </div>
          
          {stat.trend ? (
            <p className={`${stat.trendColor} text-sm font-medium flex items-center gap-1`}>
              <span className="material-symbols-outlined text-[16px]">{stat.trendIcon}</span>
              {stat.trend}
            </p>
          ) : (
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium relative z-10">{stat.subtext}</p>
          )}
        </div>
      ))}
    </div>
  );
}

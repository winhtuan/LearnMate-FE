export default function StatCard({ data }) {
  const { icon, iconBgColor, iconColor, iconRingColor, label, value, trend, trendDirection, trendLabel, gradientColor } = data;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
          <h3 className="mt-2 text-4xl font-extrabold text-slate-900">{value}</h3>
        </div>
        <div className={`rounded-xl ${iconBgColor} p-3 ${iconColor} ring-1 ${iconRingColor}`}>
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ring-1 ${
          trendDirection === 'up' 
            ? 'text-emerald-700 bg-emerald-50 ring-emerald-600/10' 
            : 'text-rose-700 bg-rose-50 ring-rose-600/10'
        }`}>
          <span className="material-symbols-outlined text-[14px]">
            {trendDirection === 'up' ? 'trending_up' : 'trending_down'}
          </span>
          {trend}
        </span>
        <span className="text-sm text-slate-500">{trendLabel}</span>
      </div>
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${gradientColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    </div>
  );
}

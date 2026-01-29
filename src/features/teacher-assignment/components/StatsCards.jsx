export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4"
        >
          <div
            className={`size-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}
          >
            <span className="material-symbols-outlined">{stat.icon}</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

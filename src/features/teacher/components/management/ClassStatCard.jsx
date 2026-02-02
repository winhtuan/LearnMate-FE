export default function ClassStatCard({ stat }) {
  const { label, value, trend, trendDirection, trendColor, subtitle } = stat;
  
  return (
    <div className="bg-white border border-[#e7edf3] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold text-[#4c739a] uppercase tracking-wider">
          {label}
        </span>
        <span
          className={`flex items-center text-xs font-bold ${
            trendColor === 'green' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            {trendDirection === 'up' ? 'trending_up' : 'trending_down'}
          </span>
          {trend}
        </span>
      </div>
      <p className="text-3xl font-bold text-[#0d141b]">{value}</p>
      <p className="text-xs text-[#4c739a] mt-1">{subtitle}</p>
    </div>
  );
}

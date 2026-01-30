export default function PerformanceSummaryCard({ performance }) {
  const { metrics, summary } = performance;
  
  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary';
      case 'green':
        return 'bg-green-500';
      case 'amber':
        return 'bg-amber-500';
      default:
        return 'bg-primary';
    }
  };
  
  return (
    <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
      <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider mb-4">
        Class Performance Summary
      </h3>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#4c739a] font-medium">{metric.label}</span>
              <span className="text-[#0d141b] font-bold">{metric.value}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${getColorClasses(metric.color)}`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-xs text-[#4c739a] uppercase font-bold tracking-tighter">
              Avg Score
            </p>
            <p className="text-xl font-bold text-[#0d141b]">{summary.avgScore}</p>
          </div>
          <div className="text-center border-l border-slate-100">
            <p className="text-xs text-[#4c739a] uppercase font-bold tracking-tighter">
              Missing
            </p>
            <p className="text-xl font-bold text-red-500">{summary.missing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

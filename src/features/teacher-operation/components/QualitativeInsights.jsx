export default function QualitativeInsights({ data }) {
  const { monthlyParticipation, keyStrengths } = data;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">Qualitative Insights</h3>
      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{monthlyParticipation.label}</p>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded">{monthlyParticipation.status}</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${monthlyParticipation.value}%` }}></div>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 italic">{monthlyParticipation.note}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">Key Strengths</p>
          <div className="flex flex-wrap gap-2">
            {keyStrengths.map((strength, index) => {
              // Simple color rotation logic or predetermined colors could be passed.
              // For now, hardcoding styles to match the HTML example as closely as possible, 
              // or using a generic style. The HTML used different colors for each.
              // I will use a simple color mapping or just cycle through a few.
              const colors = [
                "indigo", "purple", "orange", "teal"
              ];
              const color = colors[index % colors.length];
              
              return (
                <span 
                  key={index}
                  className={`px-2.5 py-1 rounded-md bg-${color}-50 dark:bg-${color}-900/20 text-${color}-700 dark:text-${color}-300 text-xs font-semibold border border-${color}-100 dark:border-${color}-800/30`}
                >
                  {strength}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

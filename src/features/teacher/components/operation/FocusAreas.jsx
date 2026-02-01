export default function FocusAreas({ data }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">Focus Areas</h3>
      <div className="space-y-4">
        {data.map((area) => (
          <div key={area.id} className="flex items-start gap-3">
            <div className={`bg-${area.color}-100 dark:bg-${area.color}-900/30 p-2 rounded-lg text-${area.color}-600 dark:text-${area.color}-400 shrink-0`}>
              <span className="material-symbols-outlined text-[20px]">{area.icon}</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{area.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-1">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

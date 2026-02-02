export default function PerformanceFilters({ filters }) {
  return (
    <section className="flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button key={index} className="flex h-9 items-center justify-between gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 pl-4 pr-2 hover:border-primary/50 transition-colors">
          <p className="text-slate-700 dark:text-slate-200 text-sm font-medium">{filter.label}</p>
          <span className="material-symbols-outlined text-slate-500 text-[20px]">expand_more</span>
        </button>
      ))}
    </section>
  );
}

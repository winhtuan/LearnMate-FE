export default function StudentManageHeader({ title, description }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <div className="flex gap-2">
        <button className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Export
        </button>
        <button className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
          <span className="material-symbols-outlined text-[18px]">filter_list</span>
          More Filters
        </button>
      </div>
    </div>
  );
}

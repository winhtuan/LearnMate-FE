export default function TaskCard({ task }) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-[1.5rem] bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all group cursor-pointer ${task.locked ? 'opacity-75' : ''}`}>
      <div className="flex items-start gap-4">
        <div className={`mt-1 flex-shrink-0 size-10 rounded-full ${task.iconBg} ${task.iconColor} flex items-center justify-center`}>
          <span className="material-symbols-outlined text-[20px]">{task.icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">{task.title}</h3>
          <p className="text-slate-500 text-sm mt-0.5">{task.due}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-right mr-4">
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Status</span>
          <span className="block text-sm font-semibold text-slate-700">{task.status}</span>
        </div>
        {task.locked ? (
          <span className="material-symbols-outlined text-slate-400">lock</span>
        ) : (
          <button className="w-full md:w-auto px-5 py-2.5 bg-white text-slate-900 text-sm font-bold rounded-xl border border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
            Start
          </button>
        )}
      </div>
    </div>
  );
}

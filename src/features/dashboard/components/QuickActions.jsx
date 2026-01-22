function QuickActions({ actions = [] }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5">
      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-400">bolt</span>
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button key={index} className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-primary hover:text-white text-slate-600 transition-all group border border-slate-100">
            <span className="material-symbols-outlined mb-2 group-hover:scale-110 transition-transform">{action.icon}</span>
            <span className="text-xs font-semibold">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;

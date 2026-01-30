export default function AssignmentDetailPanel({ assignment }) {
  return (
    <div className="sticky top-6 bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col">
      <div className="p-8 pb-0">
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider border border-blue-100">
            <span className="material-symbols-outlined text-[16px]">assignment</span>
            {assignment.type}
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2">{assignment.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            {assignment.dueDate}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">trophy</span>
            {assignment.points}
          </span>
        </div>
        <div className="h-px bg-slate-100 w-full"></div>
      </div>
      <div className="p-8 overflow-y-auto max-h-[calc(100vh-350px)]">
        <h3 className="font-bold text-slate-900 mb-3">Instructions</h3>
        <div className="prose prose-sm prose-slate max-w-none text-slate-600 mb-8">
          <p>{assignment.instructions.text}</p>
          <ul className="list-disc pl-4 space-y-1 mt-2">
            {assignment.instructions.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <h3 className="font-bold text-slate-900 mb-3">Resources</h3>
        {assignment.resources.map((resource) => (
          <a
            key={resource.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/50 transition-colors group mb-8"
            href={resource.href}
          >
            <div className={`size-10 ${resource.iconBg} ${resource.iconColor} rounded-lg flex items-center justify-center shrink-0 shadow-sm`}>
              <span className="material-symbols-outlined text-[20px]">{resource.icon}</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate group-hover:text-primary transition-colors">{resource.title}</p>
              <p className="text-xs text-slate-500">{resource.size}</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 ml-auto">download</span>
          </a>
        ))}
        <h3 className="font-bold text-slate-900 mb-3">Your Work</h3>
        <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-primary transition-all cursor-pointer group">
          <div className="size-12 rounded-full bg-slate-100 text-slate-400 group-hover:text-primary group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-colors">
            <span className="material-symbols-outlined">cloud_upload</span>
          </div>
          <p className="text-sm font-medium text-slate-900">{assignment.uploadInfo.text}</p>
          <p className="text-xs text-slate-500 mt-1">{assignment.uploadInfo.subtext}</p>
        </div>
      </div>
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
        <button className="flex-1 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
          Mark as Done
        </button>
      </div>
    </div>
  );
}

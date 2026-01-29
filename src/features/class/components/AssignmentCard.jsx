export default function AssignmentCard({ assignment }) {
  const dueLabel = assignment.dueLabel || "Due";
  const dueColor = assignment.dueColor || "text-slate-900";
  
  return (
    <div className={`bg-white p-4 rounded-2xl border ${
      assignment.highlighted 
        ? 'border-2 border-primary shadow-lg shadow-primary/5' 
        : 'border-slate-200 hover:border-slate-300'
    } cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group transition-all ${
      assignment.completed ? 'opacity-60 hover:opacity-100' : assignment.locked ? 'opacity-90 hover:opacity-100' : ''
    }`}>
      {assignment.highlighted && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      )}
      <div className={`flex items-center gap-4 ${assignment.highlighted ? 'pl-2' : ''}`}>
        <div className={`size-12 rounded-xl ${assignment.iconBg} ${assignment.iconColor} flex items-center justify-center shrink-0 border ${
          assignment.iconBg.includes('blue') ? 'border-blue-100' :
          assignment.iconBg.includes('purple') ? 'border-purple-100' :
          assignment.iconBg.includes('rose') ? 'border-rose-100' :
          assignment.iconBg.includes('emerald') ? 'border-emerald-100' :
          'border-slate-100'
        }`}>
          <span className="material-symbols-outlined">{assignment.icon}</span>
        </div>
        <div>
          <h4 className={`font-bold text-slate-900 text-lg leading-tight ${
            assignment.completed ? 'line-through decoration-slate-400' : 'group-hover:text-primary'
          } transition-colors`}>
            {assignment.title}
          </h4>
          <p className="text-sm text-slate-500 mt-1">{assignment.metadata}</p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-6 sm:pl-0 pl-2">
        <div className="text-left sm:text-right">
          <span className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wide">{dueLabel}</span>
          <span className={`font-semibold text-sm ${dueColor}`}>{assignment.due}</span>
        </div>
        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg ${assignment.statusBg} ${assignment.statusColor} text-xs font-bold border ${
          assignment.statusBg.includes('amber') ? 'border-amber-200' :
          assignment.statusBg.includes('rose') ? 'border-rose-200' :
          assignment.statusBg.includes('emerald') ? 'border-emerald-200' :
          'border-slate-200'
        }`}>
          {assignment.status}
        </span>
      </div>
    </div>
  );
}

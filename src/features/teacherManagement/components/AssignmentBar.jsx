export default function AssignmentBar({ assignment }) {
  const { name, completionRate, barColor, barColorHover } = assignment;

  return (
    <div className="flex-1 flex flex-col items-center justify-end gap-3 group h-full cursor-pointer">
      <div className="relative w-full max-w-[80px] bg-slate-100 rounded-xl overflow-hidden h-full flex items-end ring-1 ring-inset ring-slate-200">
        <div 
          className={`w-full bg-gradient-to-t ${barColor} group-hover:${barColorHover} transition-all duration-500 relative rounded-b-xl rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]`}
          style={{ height: `${completionRate}%` }}
        >
          <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-2 py-1.5 rounded-lg shadow-lg whitespace-nowrap transition-all transform translate-y-2 group-hover:translate-y-0">
            {completionRate}%
          </div>
        </div>
      </div>
      <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors text-center">
        {name}
      </span>
    </div>
  );
}

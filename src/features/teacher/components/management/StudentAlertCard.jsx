export default function StudentAlertCard({ student }) {
  const { name, avatar, alertMessage, alertBgColor, alertTextColor, hasStatusDot } = student;

  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div 
            className="size-10 rounded-full bg-center bg-cover ring-2 ring-white shadow-sm" 
            style={{ backgroundImage: `url('${avatar}')` }}
          />
          {hasStatusDot && (
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
              <div className="size-2.5 rounded-full bg-rose-500 border border-white"></div>
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{name}</p>
          <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${alertBgColor} ${alertTextColor}`}>
            {alertMessage}
          </span>
        </div>
      </div>
      <button className="size-8 flex items-center justify-center rounded-full text-slate-400 hover:text-primary hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100">
        <span className="material-symbols-outlined text-[20px]">mail</span>
      </button>
    </div>
  );
}

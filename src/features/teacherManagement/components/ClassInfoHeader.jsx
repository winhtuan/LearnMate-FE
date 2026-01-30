export default function ClassInfoHeader({ classInfo }) {
  const { title, period, room, semester } = classInfo;
  
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-[#0d141b] tracking-tight text-3xl font-bold">{title}</h1>
        <p className="text-[#4c739a] text-sm font-medium mt-1">
          {period} • {room} • {semester}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center justify-center rounded-lg h-10 border border-[#e7edf3] bg-white px-4 gap-2 text-sm font-semibold hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-lg">download</span>
          <span>Export Report</span>
        </button>
        <button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white px-4 gap-2 text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-lg">settings</span>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}

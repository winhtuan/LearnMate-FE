export default function ScheduleHeader({ data }) {
  const { title, subtitle, currentRange } = data;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#0d141b] tracking-tight text-2xl lg:text-3xl font-bold leading-tight">{title}</h1>
        <p className="text-[#4c739a] text-sm font-normal">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3 bg-white p-1 rounded-xl shadow-sm border border-[#e7edf3]">
        <button className="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-[#0d141b]">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="flex items-center gap-2 px-2">
          <span className="material-symbols-outlined text-[#4c739a] text-[20px]">calendar_today</span>
          <span className="text-sm font-semibold text-[#0d141b]">{currentRange}</span>
        </div>
        <button className="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-[#0d141b]">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

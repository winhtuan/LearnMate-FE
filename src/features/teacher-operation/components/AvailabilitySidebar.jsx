export default function AvailabilitySidebar({ availability, aiInsight }) {
  const { defaultStart, defaultEnd, days, activeDays, repeatWeekly } = availability;

  return (
    <aside className="w-full lg:w-[360px] flex flex-col gap-6 shrink-0">
      {/* Availability Management Card */}
      <div className="bg-white rounded-2xl border border-[#e7edf3] shadow-sm overflow-hidden">
        <div className="p-5 border-b border-[#e7edf3] flex justify-between items-center bg-slate-50/50">
          <h3 className="text-[#0d141b] text-lg font-bold">Availability</h3>
          <button className="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors">
            <span className="material-symbols-outlined text-[20px]">history</span>
          </button>
        </div>
        <div className="p-5 flex flex-col gap-5">
          {/* Date Inputs */}
          <div className="flex gap-3">
            <label className="flex flex-col flex-1 gap-1.5">
              <span className="text-xs font-semibold text-[#4c739a] uppercase">Start</span>
              <div className="relative">
                <input 
                  className="w-full rounded-lg border border-[#cfdbe7] bg-white px-3 py-2.5 text-sm font-medium text-[#0d141b] focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                  type="text" 
                  defaultValue={defaultStart}
                />
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[#4c739a] text-[18px]">schedule</span>
              </div>
            </label>
            <label className="flex flex-col flex-1 gap-1.5">
              <span className="text-xs font-semibold text-[#4c739a] uppercase">End</span>
              <div className="relative">
                <input 
                  className="w-full rounded-lg border border-[#cfdbe7] bg-white px-3 py-2.5 text-sm font-medium text-[#0d141b] focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                  type="text" 
                  defaultValue={defaultEnd}
                />
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[#4c739a] text-[18px]">schedule</span>
              </div>
            </label>
          </div>
          {/* Day Selector */}
          <div>
            <span className="text-xs font-semibold text-[#4c739a] uppercase mb-2 block">Repeat On</span>
            <div className="flex justify-between gap-1">
              {days.map((day, index) => {
                 const isActive = activeDays.includes(index);
                 return (
                  <button 
                    key={index}
                    className={`size-8 rounded-full ${isActive ? 'bg-primary text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-[#4c739a] transition-colors'} text-xs font-bold flex items-center justify-center`}
                  >
                    {day}
                  </button>
                 )
              })}
            </div>
          </div>
          {/* Toggles */}
          <div className="flex items-center justify-between py-1">
            <span className="text-sm font-medium text-[#0d141b]">Repeat Weekly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked={repeatWeekly} className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          {/* Actions */}
          <div className="flex gap-3 mt-1">
            <button className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 font-bold py-2.5 px-4 rounded-lg text-sm transition-colors border border-red-100">
                Block Time
            </button>
            <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors shadow-sm shadow-blue-200">
                Set Free
            </button>
          </div>
        </div>
      </div>
      
      {/* AI Scheduling Assistant */}
      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl border border-[#e7edf3] shadow-sm overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
          <span className="material-symbols-outlined text-6xl text-primary">auto_awesome</span>
        </div>
        <div className="p-5 border-b border-[#e7edf3]/50 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
              <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            </div>
            <h3 className="text-[#0d141b] text-lg font-bold">AI Assistant</h3>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        <div className="p-5 flex flex-col gap-5">
          <div className="bg-white/80 border border-blue-100 rounded-xl p-3 shadow-sm">
            <p className="text-xs text-[#4c739a] font-medium leading-relaxed">
              <span className="text-primary font-bold">Insight:</span> {aiInsight.text}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#4c739a] uppercase">Voice Command</span>
            <div className="flex items-center gap-2">
              <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark shadow-md shadow-blue-200 transition-all hover:scale-105 active:scale-95">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <div className="flex-1 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center px-4 text-sm text-slate-400 italic">
                {aiInsight.voicePlaceholder}
              </div>
            </div>
          </div>
          <button className="w-full bg-[#101922] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
            <span className="material-symbols-outlined text-[18px] text-yellow-300">bolt</span>
            Suggest Optimal Slots
          </button>
        </div>
      </div>
      
      {/* Legend */}
      <div className="bg-white rounded-2xl border border-[#e7edf3] p-5 shadow-sm">
        <h4 className="text-xs font-bold text-[#4c739a] uppercase mb-3">Legend</h4>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-pastel-blue-text"></div>
            <span className="text-sm text-[#0d141b]">Classes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-pastel-green-text"></div>
            <span className="text-sm text-[#0d141b]">Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-pastel-red-text"></div>
            <span className="text-sm text-[#0d141b]">Exams</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function Calendar({ selectedDate, onDateSelect, month = "October", year = 2023, onMonthChange }) {
    return (
        <div className="px-6 py-2">
            <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Date</p>
                <div className="flex gap-1">
                    <button onClick={() => onMonthChange?.("prev")} className="p-1 hover:bg-slate-100 rounded-md text-slate-600">
                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <span className="text-sm font-semibold flex items-center px-2">{month} {year}</span>
                    <button onClick={() => onMonthChange?.("next")} className="p-1 hover:bg-slate-100 rounded-md text-slate-600">
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center mb-2">
                <span className="text-[10px] font-medium text-slate-400 py-1">S</span>
                <span className="text-[10px] font-medium text-slate-400 py-1">M</span>
                <span className="text-[10px] font-medium text-slate-400 py-1">T</span>
                <span className="text-[10px] font-medium text-slate-400 py-1">W</span>
                <span className="text-[10px] font-medium text-slate-400 py-1">T</span>
                <span className="text-[10px] font-medium text-slate-400 py-1">F</span>
                <span className="text-[10px] font-medium text-slate-400 py-1">S</span>
                <button className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-300 pointer-events-none">29</button>
                <button className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-300 pointer-events-none">30</button>
                <button onClick={() => onDateSelect?.(1)} className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-700 hover:bg-slate-100">1</button>
                <button onClick={() => onDateSelect?.(2)} className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-700 hover:bg-slate-100">2</button>
                <button onClick={() => onDateSelect?.(3)} className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-700 hover:bg-slate-100">3</button>
                <button onClick={() => onDateSelect?.(4)} className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-700 hover:bg-slate-100">4</button>
                <button onClick={() => onDateSelect?.(5)} className={`h-8 w-8 rounded-md flex items-center justify-center text-sm ${selectedDate === 5 ? "font-semibold text-white bg-primary shadow-sm shadow-blue-500/30" : "text-slate-700 hover:bg-slate-100"}`}>5</button>
                <button onClick={() => onDateSelect?.(6)} className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-700 hover:bg-slate-100">6</button>
                <button onClick={() => onDateSelect?.(7)} className="h-8 w-8 rounded-md flex items-center justify-center text-sm text-slate-700 hover:bg-slate-100">7</button>
            </div>
        </div>
    );
}


const WeeklyActivityChart = () => {
    const days = [
        { label: 'M', height: 'h-24', active: false },
        { label: 'T', height: 'h-32', active: false },
        { label: 'W', height: 'h-48', active: false },
        { label: 'T', height: 'h-56', active: true },
        { label: 'F', height: 'h-40', active: false },
        { label: 'S', height: 'h-16', active: false },
        { label: 'S', height: 'h-12', active: false },
    ];

    return (
        <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm">
            <div className="mb-8">
                <h3 className="text-lg font-bold">Weekly System Activity</h3>
                <p className="text-sm text-[#6a7981]">Platform engagement level</p>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
                {days.map((day, index) => (
                    <div key={index} className="flex-1 group relative">
                        <div
                            className={`${day.height} w-full rounded-t-sm transition-colors ${day.active
                                ? 'bg-primary'
                                : 'bg-slate-100 group-hover:bg-primary/50'
                                }`}
                        ></div>
                        <span
                            className={`block text-center text-[10px] font-bold mt-3 ${day.active ? 'text-primary font-extrabold' : 'text-[#6a7981]'
                                }`}
                        >
                            {day.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-8 pt-4 border-t border-border-light">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Engagement</span>
                    <span className="text-sm font-bold">84,201 hits</span>
                </div>
            </div>
        </div>
    );
};

export default WeeklyActivityChart;

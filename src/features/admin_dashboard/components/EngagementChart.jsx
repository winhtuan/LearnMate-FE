
const EngagementChart = ({ data }) => {
    return (
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h4 className="text-lg font-bold text-slate-900">Engagement Trends</h4>
                    <p className="text-sm text-slate-500">Activity comparison over the last 30 days</p>
                </div>
                <select className="text-sm border-slate-200 bg-transparent rounded-lg text-slate-600 focus:ring-primary/20 transition-all">
                    <option>Last 30 Days</option>
                    <option>Last 6 Months</option>
                    <option>Year to Date</option>
                </select>
            </div>
            <div className="p-6 grow flex flex-col justify-end min-h-[350px]">
                <div className="flex items-end justify-between h-48 gap-3">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full rounded-t-lg transition-all cursor-help relative group ${index === data.length - 3 ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/40'
                                }`}
                            style={{ height: `${item.value}%` }}
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {item.value}% Active
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                    <span>Oct 01</span>
                    <span>Oct 10</span>
                    <span>Oct 20</span>
                    <span>Oct 30</span>
                </div>
            </div>
        </div>
    );
};

export default EngagementChart;

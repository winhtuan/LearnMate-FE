export default function PerformanceCharts({ charts }) {
  const { lineChart, barChart } = charts;

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">{lineChart.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{lineChart.subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">Avg {lineChart.average}</p>
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{lineChart.change}</p>
          </div>
        </div>
        <div className="relative w-full h-64">
           {/* SVG Chart Placeolder - Ideally use a chart library like Recharts */}
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 472 150">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#308ce8" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#308ce8" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path d="M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.6 41C90.77 41 90.77 93 108.9 93C127.08 93 127.08 33 145.2 33C163.39 33 163.39 101 181.5 101C199.7 101 199.7 61 217.8 61C236 61 236 45 254.1 45C272.3 45 272.3 121 290.4 121C308.6 121 308.6 149 326.7 149C344.9 149 344.9 1 363 1C381.2 1 381.2 81 399.4 81C417.5 81 417.5 129 435.7 129C453.8 129 453.8 25 472 25V150H0V109Z" fill="url(#gradient)"></path>
            <path d="M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.6 41C90.77 41 90.77 93 108.9 93C127.08 93 127.08 33 145.2 33C163.39 33 163.39 101 181.5 101C199.7 101 199.7 61 217.8 61C236 61 236 45 254.1 45C272.3 45 272.3 121 290.4 121C308.6 121 308.6 149 326.7 149C344.9 149 344.9 1 363 1C381.2 1 381.2 81 399.4 81C417.5 81 417.5 129 435.7 129C453.8 129 453.8 25 472 25" fill="none" stroke="#308ce8" strokeLinecap="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
            <circle cx="217.8" cy="61" fill="#308ce8" r="5" stroke="white" strokeWidth="2"></circle>
          </svg>
        </div>
        <div className="flex justify-between mt-4 px-2 text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider">
          <span>Sept</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">{barChart.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{barChart.subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{barChart.average}</p>
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{barChart.change}</p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between gap-4 h-64 px-2 pb-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                <div key={day} className="flex flex-col items-center gap-2 flex-1 h-full justify-end group cursor-pointer">
                    <div className={`relative w-full max-w-[40px] bg-blue-100 dark:bg-slate-700 rounded-t-sm h-[${[70, 90, 85, 60, 50][i]}%] group-hover:bg-blue-200 dark:group-hover:bg-slate-600 transition-colors`}>
                        <div className={`absolute bottom-0 w-full bg-primary rounded-t-sm h-[${[85, 92, 78, 90, 75][i]}%] group-hover:bg-blue-600 transition-colors`}></div>
                    </div>
                    <span className="text-slate-400 text-xs font-bold">{day}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

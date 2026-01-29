export default function PerformanceKPICards({ cards }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col gap-4 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className={`${card.iconBg} p-2 rounded-lg`}>
              <span className={`material-symbols-outlined ${card.iconColor} text-[24px]`}>{card.icon}</span>
            </div>
            <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${card.trendColor}`}>
              <span className="material-symbols-outlined text-[14px] mr-1">
                  {card.trend === "up" ? "trending_up" : "trending_down"}
              </span>
              {card.change}
            </span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">{card.title}</p>
            <p className="text-slate-900 dark:text-white text-3xl font-bold mt-1">
                {card.value} {card.subValue && <span className="text-lg text-slate-400 font-normal">{card.subValue}</span>}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

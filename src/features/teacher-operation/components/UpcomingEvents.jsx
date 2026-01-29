export default function UpcomingEvents({ data }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">Upcoming</h3>
      <div className="space-y-3">
        {data.map((event) => (
          <div key={event.id} className="flex gap-3 items-start">
            <div className="flex flex-col items-center bg-slate-100 dark:bg-slate-700 rounded p-1 w-10 shrink-0">
              <span className="text-[10px] uppercase text-slate-500 font-bold">{event.month}</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white leading-none">{event.day}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{event.title}</p>
              <p className="text-xs text-slate-500">{event.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CalendarGrid({ data }) {
  const { days, timeSlots, events, blockedSlots, lunchBreaks } = data;

  const getEvent = (dayIndex, timeIndex) => {
    return events.find(e => e.dayIndex === dayIndex && e.timeIndex === timeIndex);
  };

  const isBlocked = (dayIndex, timeIndex) => {
    return blockedSlots.some(b => b.dayIndex === dayIndex && b.timeIndex === timeIndex);
  };

  const isLunchBreak = (timeIndex) => {
      return lunchBreaks.find(l => l.timeIndex === timeIndex);
  };

  const renderEventCell = (event) => {
      if (event.type === 'ai-suggestion') {
          return (
             <div className="w-full p-3 rounded-lg bg-white border-2 border-dashed border-primary/40 flex flex-col items-center justify-center text-center gap-1 cursor-pointer hover:bg-primary/5 transition-all h-[60px]">
                <span className="text-primary text-xs font-bold">{event.title}</span>
                <span className="text-primary/70 text-[10px]">{event.subtitle}</span>
            </div>
          );
      }

    const colorMap = {
      blue: { bg: "bg-pastel-blue", border: "border-pastel-blue-text", text: "text-pastel-blue-text" },
      green: { bg: "bg-pastel-green", border: "border-pastel-green-text", text: "text-pastel-green-text" },
      red: { bg: "bg-pastel-red", border: "border-pastel-red-text", text: "text-pastel-red-text" }
    };
    const styles = colorMap[event.color] || colorMap.blue;

    return (
      <div className={`w-full p-3 rounded-lg ${styles.bg} border-l-4 ${styles.border} cursor-pointer hover:shadow-md transition-all`}>
        <p className={`${styles.text} text-sm font-bold truncate`}>{event.title}</p>
        <p className={`${styles.text}/80 text-xs truncate mt-0.5`}>{event.type} {event.location ? `• ${event.location}` : ''}</p>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-[#e7edf3] shadow-sm overflow-hidden flex flex-col h-full min-h-[600px]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-[#e7edf3]">
              <th className="w-20 px-4 py-4 text-left text-[#4c739a] text-xs font-semibold uppercase tracking-wider sticky left-0 bg-slate-50 z-10 border-r border-[#e7edf3]">Time</th>
              {days.map((day, index) => (
                <th key={index} className={`px-4 py-4 text-left w-1/5 min-w-[140px] ${day.active ? 'bg-blue-50/50' : ''}`}>
                  <div className="flex flex-col">
                    <span className={`${day.active ? 'text-primary' : 'text-[#4c739a]'} text-xs font-medium uppercase`}>{day.day}</span>
                    <span className={`${day.active ? 'text-primary' : 'text-[#0d141b]'} text-lg font-bold`}>{day.date}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e7edf3]">
            {timeSlots.map((time, timeIndex) => {
              const lunch = isLunchBreak(timeIndex);
              if (lunch) {
                  return (
                    <tr key={timeIndex} className="bg-slate-50/50">
                        <td className="px-4 py-3 text-[#4c739a] text-xs font-medium align-top border-r border-[#e7edf3] sticky left-0 z-10 bg-slate-50">{time}</td>
                        <td className="px-2 py-2 align-middle" colSpan={days.length}>
                            <div className="w-full h-8 flex items-center justify-center bg-gray-100 rounded text-gray-400 text-xs font-medium uppercase tracking-widest">
                                {lunch.label}
                            </div>
                        </td>
                    </tr>
                  )
              }

              return (
              <tr key={timeIndex} className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 text-[#4c739a] text-xs font-medium align-top border-r border-[#e7edf3] bg-slate-50/30 sticky left-0 z-10">{time}</td>
                {days.map((day, dayIndex) => {
                   const event = getEvent(dayIndex, timeIndex);
                   const blocked = isBlocked(dayIndex, timeIndex);
                   
                   return (
                    <td key={dayIndex} className={`px-2 py-2 align-top border-r border-dashed border-[#e7edf3] ${day.active ? 'bg-blue-50/20' : ''}`}>
                         {event ? renderEventCell(event) : blocked ? (
                             <div className="w-full p-3 rounded-lg bg-gray-100 border border-gray-200 cursor-not-allowed opacity-60 flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-xs text-gray-500">block</span>
                                <span className="text-xs text-gray-500 font-medium">Blocked</span>
                            </div>
                         ) : null}
                    </td>
                   ) 
                })}
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ScheduleCalendar({ days }) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const eventColorClasses = {
    lecture: {
      bg: "bg-sky-100",
      border: "border-sky-200",
      textLabel: "text-sky-700",
      textTitle: "text-slate-900"
    },
    office: {
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      textLabel: "text-emerald-700",
      textTitle: "text-slate-900"
    },
    deadline: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      textLabel: "text-rose-700",
      textTitle: "text-slate-900"
    },
    exam: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      textLabel: "text-purple-700",
      textTitle: "text-slate-900"
    }
  };

  const eventLabels = {
    lecture: "Lecture",
    office: "Office Hrs",
    deadline: "Deadline",
    exam: "Mid-Term"
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 border border-slate-100 shadow-sm">
      {/* Week day headers */}
      <div className="grid grid-cols-7 mb-4 border-b border-slate-100 pb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 grid-rows-5 gap-2 lg:gap-3 min-h-[650px] auto-rows-fr">
        {days.map((dayData, index) => {
          const isPrevOrNextMonth = dayData.isPrevMonth || dayData.isNextMonth;
          const isToday = dayData.isToday;
          
          return (
            <div
              key={index}
              className={`
                p-2 min-h-[120px] rounded-2xl flex flex-col gap-1
                ${isPrevOrNextMonth 
                  ? "border border-transparent text-slate-300 bg-slate-50/50" 
                  : "border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all bg-white"
                }
                ${isToday ? "ring-2 ring-primary ring-offset-2 relative" : ""}
              `}
            >
              {/* Today pulse indicator */}
              {isToday && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
              )}

              {/* Day number */}
              <span className={`text-sm font-bold p-1 block ${isToday ? "text-primary" : isPrevOrNextMonth ? "font-medium" : "text-slate-700"}`}>
                {dayData.day}
              </span>

              {/* Events */}
              {dayData.events && dayData.events.map((event, eventIndex) => {
                const colors = eventColorClasses[event.type];
                return (
                  <div
                    key={eventIndex}
                    className={`px-2 py-1.5 rounded-lg ${colors.bg} border ${colors.border} ${eventIndex > 0 ? "mt-1" : ""}`}
                  >
                    <p className={`text-[10px] font-bold ${colors.textLabel} uppercase tracking-wide mb-0.5`}>
                      {eventLabels[event.type]}
                    </p>
                    <p className={`text-xs font-semibold ${colors.textTitle} truncate`}>
                      {event.time && `${event.time} - `}{event.title}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

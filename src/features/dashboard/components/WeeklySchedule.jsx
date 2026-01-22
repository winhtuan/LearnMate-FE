function WeeklySchedule({ scheduleData = [] }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-slate-900 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400">calendar_month</span>
          Weekly Schedule
        </h3>
        <button className="text-xs font-medium text-primary hover:text-primary/80">View Full Calendar</button>
      </div>
      <div className="p-6 overflow-x-auto">
        <div className="min-w-[500px] flex gap-4">
          {scheduleData.map((dayData, index) => (
            <DayCard 
              key={index}
              day={dayData.day}
              date={dayData.date}
              isToday={dayData.isToday}
              classes={dayData.classes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DayCard({ day, date, isToday = false, classes = [] }) {
  return (
    <div className={`flex-1 min-w-[140px] ${isToday ? 'bg-slate-50' : ''} rounded-lg p-3 border ${isToday ? 'border-primary/20 ring-1 ring-primary/5' : 'border-transparent hover:bg-slate-50'} transition-colors`}>
      <div className={`text-center mb-4 pb-2 border-b ${isToday ? 'border-slate-200' : 'border-slate-100'}`}>
        <span className={`block text-xs font-semibold ${isToday ? 'text-primary' : 'text-slate-400'} uppercase`}>{day}</span>
        <span className="block text-lg font-bold text-slate-900">{date}</span>
      </div>
      {classes.length > 0 ? (
        <div className="space-y-2">
          {classes.map((cls, index) => (
            <div key={index} className={`${isToday ? 'bg-white' : 'bg-slate-50'} p-2.5 rounded ${isToday ? `border-l-4 border-${cls.color} shadow-sm` : 'border border-slate-200'} text-xs ${!isToday && 'opacity-75'}`}>
              <div className="font-bold text-slate-900">{cls.time}</div>
              <div className="text-slate-600 font-medium">{cls.name}</div>
              {cls.room && <div className="text-slate-400 mt-1">{cls.room}</div>}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-24 text-slate-400 text-xs italic">
          No classes scheduled
        </div>
      )}
    </div>
  );
}

export default WeeklySchedule;

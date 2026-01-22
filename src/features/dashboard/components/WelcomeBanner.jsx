function WelcomeBanner({ greeting, studentName, currentDay, currentDate, currentTerm, stats }) {
  return (
    <div className="mb-8 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">{greeting}, {studentName}</h1>
          <p className="text-slate-500">Here's your overview for {currentDay}, {currentDate}.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
          <span className="material-symbols-outlined text-primary text-xl">event_upcoming</span>
          <span className="text-sm font-semibold text-slate-700">Term: {currentTerm}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-stretch w-full">
        <StatCard icon="school" label="My Classes" value={stats?.activeClasses || "0 Active"} color="blue" />
        <div className="w-px bg-slate-100 hidden md:block" />
        <StatCard icon="checklist" label="Pending Tasks" value={stats?.pendingTasks || "0 Items"} color="orange" />
        <div className="w-px bg-slate-100 hidden md:block" />
        <StatCard icon="event_busy" label="Upcoming" value={stats?.upcomingEvents || "0 Today"} color="red" />
        <div className="w-px bg-slate-100 hidden md:block" />
        <div className="flex-[1.2] p-6 flex flex-col items-center text-center bg-slate-50 hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl mb-3">timer</span>
          <span className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-1">Next Session</span>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-slate-900">{stats?.nextSession?.countdown || "00:00:00"}</h3>
            <p className="text-xs text-slate-500 mt-1">{stats?.nextSession?.className || "No session"} • {stats?.nextSession?.room || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    blue: 'bg-blue-50/50 hover:bg-blue-50 text-blue-600',
    orange: 'bg-orange-50/50 hover:bg-orange-50 text-orange-600',
    red: 'bg-red-50/50 hover:bg-red-50 text-red-600'
  };

  return (
    <div className={`flex-1 p-6 flex flex-col items-center text-center ${colorClasses[color]} transition-colors`}>
      <span className={`material-symbols-outlined text-${color}-600 text-3xl mb-3`}>{icon}</span>
      <span className={`text-xs font-bold text-${color}-600/70 uppercase tracking-widest mb-1`}>{label}</span>
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    </div>
  );
}

export default WelcomeBanner;

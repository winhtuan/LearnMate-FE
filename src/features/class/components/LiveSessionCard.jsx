export default function LiveSessionCard({ session }) {
  const { status, statusType, date, title, description, host, studentsWaiting } = session;

  return (
    <section className="bg-white rounded-[2.5rem] p-1 border border-slate-100 shadow-xl shadow-slate-200/50">
      <div className="rounded-[2.2rem] bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-800 opacity-30 pattern-grid-lg"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row p-8 md:p-10 gap-8 items-start md:items-center">
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                {status}
              </span>
              <span className="text-slate-300 font-medium flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                {date}
              </span>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">{title}</h2>
              <p className="text-slate-400 text-lg max-w-xl">{description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button className="group relative flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-base shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span className="material-symbols-outlined">videocam</span>
                Join Room
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                </span>
              </button>

              <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                <div className="flex -space-x-3">
                  <div className="size-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>
                  <div className="size-8 rounded-full border-2 border-slate-900 bg-slate-600"></div>
                  <div className="size-8 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-[10px] text-white">
                    {studentsWaiting}+
                  </div>
                </div>
                <span>Students waiting</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4 w-full md:w-auto min-w-[240px]">
            <div className="size-12 rounded-full bg-slate-800 overflow-hidden">
              <img className="w-full h-full object-cover" src={host.avatar} alt={host.name} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Hosted By</p>
              <p className="text-white font-bold">{host.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

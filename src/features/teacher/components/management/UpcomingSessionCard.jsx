export default function UpcomingSessionCard({ session }) {
  const { badge, title, time, countdown, buttons } = session;
  
  return (
    <div className="bg-primary text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="px-2 py-1 bg-white/20 rounded text-[10px] font-bold uppercase tracking-widest">
              {badge}
            </span>
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="text-white/80 text-sm mt-1">{time}</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg flex flex-col items-center min-w-[100px]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
              Starts in
            </span>
            <span className="text-lg font-mono font-bold tracking-tighter">{countdown}</span>
          </div>
        </div>
        <div className="flex gap-3">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${
                button.type === 'primary'
                  ? 'bg-white text-primary hover:bg-white/90'
                  : 'bg-transparent border border-white/40 hover:bg-white/10'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -left-10 -top-10 size-32 bg-white/5 rounded-full blur-2xl" />
    </div>
  );
}

export default function HeroBanner({ classCode, classStatus, className, description, backgroundImage }) {
  return (
    <section className="relative w-full h-[280px] md:h-[320px] rounded-[3rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200 group">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay" style={{backgroundImage: `url('${backgroundImage}')`}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-purple-600/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">{classCode}</span>
            <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {classStatus}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2 font-display drop-shadow-sm">
            {className}
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl font-light">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg">
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            Resume
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
    </section>
  );
}

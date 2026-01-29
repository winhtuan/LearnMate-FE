export default function VideoLectureCard({ lecture }) {
  const { title, duration, date, unit, gradientFrom, gradientTo, accentGradient } = lecture;

  return (
    <div className="group bg-white rounded-[2rem] p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
      <div className="relative aspect-video rounded-[1.5rem] overflow-hidden bg-slate-800 mb-4">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}></div>
        <div className={`absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${accentGradient} via-transparent to-transparent`}></div>
        
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md">
          {duration}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
          <button className="size-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <span className="material-symbols-outlined text-[32px] ml-1">play_arrow</span>
          </button>
        </div>
      </div>

      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h4>
          <button className="text-slate-400 hover:text-slate-600">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>

        <p className="text-sm text-slate-500 mb-4">
          {date} • {unit}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors">
            <span className="material-symbols-outlined text-[16px]">visibility</span>
            View Notes
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function LiveClassHeader({ data }) {
  const { title, subtitle, timer } = data;
  const navigate = useNavigate();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#e7edf3] bg-white px-6 z-30 relative shadow-sm">
      {/* Title & Back */}
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-8 rounded-full text-slate-500 hover:text-primary hover:bg-primary/10 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">{title}</h1>
          <p className="text-xs text-slate-500 font-medium">{subtitle}</p>
        </div>
      </div>
      
      {/* Timer */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-3 rounded-full bg-[#f6f7f8] px-5 py-2 border border-[#e7edf3]">
        <span className="material-symbols-outlined text-primary text-[20px] filled">timer</span>
        <span className="text-sm font-bold tracking-widest font-mono text-[#0d141b]">{timer}</span>
      </div>
      
      {/* End Session Button */}
      <button className="flex items-center gap-2 rounded-lg bg-red-500 hover:bg-red-600 text-slate-50 px-5 py-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-sm hover:shadow-red-500/20">
        <span className="material-symbols-outlined text-[18px]">call_end</span>
        <span className="hidden sm:inline">End Session</span>
      </button>
    </header>
  );
}

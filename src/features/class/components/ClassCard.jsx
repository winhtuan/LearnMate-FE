import { Link, useNavigate } from "react-router-dom";

export default function ClassCard({ classData }) {
  const navigate = useNavigate();
  const {
    id,
    code,
    title,
    professor,
    description,
    nextClass,
    image,
    buttonText,
    hasWarning,
    isUpcoming
  } = classData;

  return (
    <article className={`group relative flex flex-col bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 ${isUpcoming ? 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0' : ''}`}>
      <div className="h-48 w-full rounded-[2rem] bg-cover bg-center relative overflow-hidden mb-4" style={{ backgroundImage: `url('${image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm">
          {code}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-sm font-medium opacity-90">{professor}</p>
        </div>
        {hasWarning && (
          <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-rose-500/30 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            <span>Due Tomorrow</span>
          </div>
        )}
        {isUpcoming && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all">
            <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">Upcoming Term</span>
          </div>
        )}
      </div>
      <div className="px-2 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/classes/${id}`}>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors cursor-pointer">{title}</h3>
          </Link>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">{description}</p>
        <div className="mt-auto">
          {nextClass ? (
            <>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
                <div className="text-sm">
                  <span className="text-slate-500 font-medium">Next:</span>
                  <span className="text-slate-900 font-bold ml-1">{nextClass}</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button 
                  onClick={() => navigate(`/classes/${id}`)}
                  className={buttonText === "Submit Task" ? "flex-1 bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white py-3 rounded-2xl font-bold text-sm transition-all" : "flex-1 bg-slate-900 text-white py-3 rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity"}
                >
                  {buttonText}
                </button>
                <button className="size-11 flex items-center justify-center rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors">
                  <span className="material-symbols-outlined">folder_open</span>
                </button>
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-center py-4 text-slate-400 text-sm font-medium bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              Course Starts in 14 days
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

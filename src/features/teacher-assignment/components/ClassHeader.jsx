import { Link } from "react-router-dom";

export default function ClassHeader({ data }) {
  return (
    <header className="flex flex-col gap-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link to={data.breadcrumb[0].href} className="hover:text-primary">
          {data.breadcrumb[0].label}
        </Link>
        <span className="material-symbols-outlined text-[14px]">
          chevron_right
        </span>
        <span className="text-slate-900">{data.breadcrumb[1].label}</span>
      </nav>

      {/* Title & Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[32px] font-variation-settings-'FILL'1">
              functions
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{data.name}</h1>
            <p className="text-slate-500 text-sm mt-1">{data.details}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-lg transition-all cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-lg transition-all cursor-pointer">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
    </header>
  );
}

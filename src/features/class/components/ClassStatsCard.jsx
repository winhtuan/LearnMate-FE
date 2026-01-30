export default function ClassStatsCard({ type, value, label, className = "" }) {
  const renderIcon = () => {
    switch (type) {
      case "courses":
        return (
          <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
        );
      case "tasks":
        return (
          <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
        );
      case "nextClass":
        return null;
      default:
        return null;
    }
  };

  if (type === "nextClass") {
    return (
      <div className={`bg-primary p-6 rounded-[2rem] shadow-lg shadow-primary/20 flex items-center justify-between text-white relative overflow-hidden group cursor-pointer ${className}`}>
        <div className="relative z-10">
          <p className="text-sm text-blue-100">{label}</p>
          <p className="text-xl font-bold mt-1">{value.title}</p>
          <p className="text-sm text-blue-100 mt-1">{value.time}</p>
        </div>
        <div className="relative z-10 size-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
          <span className="material-symbols-outlined">arrow_forward</span>
        </div>
        <div className="absolute -right-4 -bottom-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-4 ${className}`}>
      {renderIcon()}
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

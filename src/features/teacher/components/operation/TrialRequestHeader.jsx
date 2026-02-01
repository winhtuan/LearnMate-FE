export default function TrialRequestHeader({ data }) {
  const { title, subtitle, pendingCount } = data;

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">{title}</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center size-2 rounded-full bg-amber-500 animate-pulse"></span>
        <p className="text-primary font-semibold text-base">{pendingCount} Pending Requests</p>
      </div>
    </div>
  );
}

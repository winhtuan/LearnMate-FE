export default function EventTypeLegend({ eventTypes }) {
  const colorClasses = {
    sky: "bg-sky-100 border-sky-200",
    emerald: "bg-emerald-100 border-emerald-200",
    rose: "bg-rose-100 border-rose-200",
    purple: "bg-purple-100 border-purple-200"
  };

  return (
    <div className="flex flex-wrap gap-8 px-4 justify-center md:justify-start">
      {eventTypes.map((eventType) => (
        <div key={eventType.type} className="flex items-center gap-3">
          <span className={`w-4 h-4 rounded-md ${colorClasses[eventType.color]} border`} />
          <span className="text-sm font-medium text-slate-600">{eventType.label}</span>
        </div>
      ))}
    </div>
  );
}

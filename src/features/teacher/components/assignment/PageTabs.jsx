export default function PageTabs({ tabs }) {
  return (
    <div className="border-b border-slate-200 flex items-center gap-8 overflow-x-auto">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`pb-3 px-1 text-sm relative whitespace-nowrap cursor-pointer ${
            tab.active
              ? "font-bold text-primary"
              : "font-medium text-slate-500 hover:text-slate-700"
          }`}
        >
          {tab.label}
          {tab.active && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  );
}

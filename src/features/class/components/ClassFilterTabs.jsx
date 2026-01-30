export default function ClassFilterTabs({ activeTab = "all", onTabChange }) {
  const tabs = [
    { id: "all", label: "All Classes" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange && onTabChange(tab.id)}
          className={
            activeTab === tab.id
              ? "px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold shadow-lg shadow-slate-200 hover:shadow-xl transition-all whitespace-nowrap"
              : "px-5 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-all whitespace-nowrap"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

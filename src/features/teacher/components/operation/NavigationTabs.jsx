import { Link } from "react-router-dom";

export default function NavigationTabs({ tabs }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 mb-8 sticky top-16 bg-background-light dark:bg-background-dark z-40 pt-2">
      <nav aria-label="Tabs" className="flex space-x-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            to={tab.href}
            aria-current={tab.active ? "page" : undefined}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
              tab.active
                ? "border-primary text-primary font-bold"
                : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-0.5 px-2 rounded-full text-xs">
                {tab.count}
              </span>
            )}
            {tab.icon && (
               <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}

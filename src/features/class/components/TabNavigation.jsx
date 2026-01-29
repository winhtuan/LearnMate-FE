import { Link, useParams } from "react-router-dom";

export default function TabNavigation({ tabs }) {
  const { id } = useParams();
  
  const getTabPath = (tabLabel) => {
    const basePath = `/classes/${id}`;
    switch(tabLabel.toLowerCase()) {
      case 'overview':
        return basePath;
      case 'assignments':
        return `${basePath}/assignments`;
      case 'materials':
        return `${basePath}/materials`;
      case 'schedule':
        return `${basePath}/schedule`;
      case 'video sessions':
        return `${basePath}/videos`;
      default:
        return basePath;
    }
  };

  return (
    <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2 scrollbar-hide border-b border-slate-200">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          to={getTabPath(tab.label)}
          className={`px-5 py-3 text-sm whitespace-nowrap transition-colors ${
            tab.active
              ? 'text-primary border-b-2 border-primary font-bold'
              : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          {tab.label}
          {tab.badge && (
            <span className="ml-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600">
              {tab.badge}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

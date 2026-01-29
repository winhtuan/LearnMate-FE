export default function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          )}
          <span 
            className={`cursor-pointer ${
              index === items.length - 1 
                ? "font-semibold text-slate-900 dark:text-white" 
                : "hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

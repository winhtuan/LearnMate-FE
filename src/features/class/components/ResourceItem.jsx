export default function ResourceItem({ resource }) {
  return (
    <li>
      <a className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group/file" href={resource.href}>
        <div className={`size-10 ${resource.iconBg} ${resource.iconColor} rounded-xl flex items-center justify-center shrink-0`}>
          <span className="material-symbols-outlined text-[20px]">{resource.icon}</span>
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-medium text-slate-900 truncate group-hover/file:text-primary transition-colors">{resource.title}</p>
          <p className="text-xs text-slate-500">{resource.metadata}</p>
        </div>
      </a>
    </li>
  );
}

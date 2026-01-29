export default function MaterialFileRow({ file }) {
  const { name, date, size, icon, iconColor, iconBg } = file;

  return (
    <tr className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
      <td className="py-4 pl-6">
        <div className="flex items-center gap-4">
          <div className={`size-10 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}>
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <span className="font-medium text-slate-900 group-hover:text-primary transition-colors cursor-pointer">{name}</span>
        </div>
      </td>
      <td className="py-4 text-slate-500">{date}</td>
      <td className="py-4 text-slate-500">{size}</td>
      <td className="py-4 pr-6 text-right">
        <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-200">
          <span className="material-symbols-outlined text-[20px]">more_horiz</span>
        </button>
      </td>
    </tr>
  );
}

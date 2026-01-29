export default function MaterialFolderCard({ folder }) {
  const { name, fileCount, size, icon, iconColor, iconBg } = folder;

  return (
    <div className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className={`size-12 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center`}>
          <span className="material-symbols-outlined text-[28px] fill-current">{icon}</span>
        </div>
        <button className="text-slate-400 hover:text-primary transition-colors p-1.5 hover:bg-white rounded-lg" title="Download Folder">
          <span className="material-symbols-outlined text-[20px]">cloud_download</span>
        </button>
      </div>
      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-sm text-slate-500">{fileCount} files • {size}</p>
    </div>
  );
}

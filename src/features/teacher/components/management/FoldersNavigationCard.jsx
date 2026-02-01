export default function FoldersNavigationCard({ folders }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card flex flex-col overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Folders</h3>
                <button className="text-primary hover:text-blue-700 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">create_new_folder</span>
                </button>
            </div>
            <div className="p-2 space-y-1">
                {folders.map((folder) => (
                    <button
                        key={folder.id}
                        className={`flex items-center justify-between w-full p-2.5 rounded-xl group transition-all ${folder.active
                                ? 'bg-blue-50 text-primary'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`material-symbols-outlined text-[20px] ${folder.active ? 'fill-current' : ''}`}>
                                folder
                            </span>
                            <span className={`text-sm ${folder.active ? 'font-bold' : 'font-medium'}`}>
                                {folder.name}
                            </span>
                        </div>
                        <span className={`text-[10px] font-bold ${folder.active ? 'bg-white px-1.5 py-0.5 rounded shadow-sm' : 'text-slate-400'}`}>
                            {folder.count}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

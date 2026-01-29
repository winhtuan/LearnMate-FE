export default function LiveClassSidebar({ sidebar }) {
  const { tabs, activeTab, notes, quickActions } = sidebar;

  return (
    <aside className="hidden lg:flex w-80 xl:w-96 flex-col border-l border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 shadow-xl z-20">
      {/* Tabs Navigation */}
      <div className="flex border-b border-[#e7edf3] dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
        {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
                <button key={tab} className={`group flex-1 pb-3 pt-4 flex flex-col items-center justify-center gap-1 border-b-[3px] transition-colors ${isActive ? 'border-primary text-primary bg-primary/5 dark:bg-primary/10' : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'}`}>
                  <span className={`material-symbols-outlined text-[20px] mb-1 group-hover:-translate-y-0.5 transition-transform`}>
                    {tab === "Chat" ? "chat_bubble" : tab === "People" ? "group" : "edit_note"}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">{tab}</span>
                </button>
            )
        })}
      </div>
      
      {/* Tab Content: Notes (Active) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#0d141b] dark:text-white leading-tight">{notes.title}</h2>
              <p className="text-xs text-slate-500 mt-1">{notes.subtitle}</p>
            </div>
            <div className="flex gap-1">
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors" title="Save">
                <span className="material-symbols-outlined text-[20px]">save</span>
              </button>
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors" title="Share">
                <span className="material-symbols-outlined text-[20px]">ios_share</span>
              </button>
            </div>
          </div>
          
          {/* Editor Area */}
          <div className="bg-yellow-50 dark:bg-slate-800/40 rounded-xl p-5 border border-yellow-100 dark:border-slate-700 shadow-sm flex flex-col gap-2 h-[60%] mb-6">
            <div className="flex items-center gap-2 pb-2 border-b border-yellow-200 dark:border-slate-700 mb-2">
              <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-[18px]">format_bold</span>
              <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-[18px]">format_italic</span>
              <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-[18px]">format_list_bulleted</span>
              <div className="h-4 w-px bg-yellow-300 dark:bg-slate-600 mx-1"></div>
              <span className="text-[10px] font-bold text-yellow-700 dark:text-yellow-500 uppercase tracking-widest">Today</span>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none focus:outline-none flex-1 resize-none bg-transparent overflow-y-auto font-display" contentEditable="true">
              <h3 className="text-slate-800 dark:text-slate-200 mt-0 text-sm font-bold">{notes.content.heading}</h3>
              <ul className="text-slate-600 dark:text-slate-300 list-disc pl-4 space-y-1">
                {notes.content.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
                <li><span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 px-1 rounded font-medium">Homework:</span> {notes.content.homework}</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-4">{notes.content.footer}</p>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              Quick Actions
            </p>
            <div className="grid grid-cols-1 gap-3">
                {quickActions.map((action, index) => (
                    <button key={index} className="group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                        <div className={`size-8 rounded-full ${action.bgClass} flex items-center justify-center ${action.colorClass}`}>
                            <span className="material-symbols-outlined text-[18px]">{action.icon}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{action.label}</span>
                        </div>
                        <span className={`material-symbols-outlined text-slate-300 ${action.arrowColorClass} text-[18px]`}>chevron_right</span>
                    </button>
                ))}
            </div>
          </div>
        </div>
        
        {/* Footer of Sidebar */}
        <div className="p-4 border-t border-[#e7edf3] dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <button className="w-full py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-all shadow-sm">
            Export Notes to PDF
          </button>
        </div>
      </div>
    </aside>
  );
}

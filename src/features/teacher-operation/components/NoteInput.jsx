export default function NoteInput() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">edit_note</span>
          New Internal Note
        </h3>
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-700/50 px-2 py-1 rounded">Teachers Only</span>
      </div>
      <div className="relative">
        <textarea 
          className="w-full bg-transparent border-0 p-0 text-slate-800 dark:text-slate-200 placeholder-slate-400 text-base leading-relaxed focus:ring-0 min-h-[140px] resize-none font-normal" 
          placeholder="Type '/' for commands or start writing... e.g., 'Meeting with parents regarding math performance.'"
        ></textarea>
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-0 md:opacity-100">
          <span className="text-xs text-slate-300 dark:text-slate-600">Markdown supported</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
        <div className="flex gap-1 text-slate-400">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors" title="Bold">
            <span className="material-symbols-outlined text-[20px]">format_bold</span>
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors" title="Italic">
            <span className="material-symbols-outlined text-[20px]">format_italic</span>
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors" title="List">
            <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2 self-center"></div>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors" title="Attach">
            <span className="material-symbols-outlined text-[20px]">attach_file</span>
          </button>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md shadow-blue-500/20 transition-all active:scale-95">
          <span>Add Note</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>
    </div>
  );
}

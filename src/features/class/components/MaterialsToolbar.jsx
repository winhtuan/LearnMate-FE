export default function MaterialsToolbar() {
  return (
    <div className="flex items-center gap-3 w-full md:w-auto">
      <div className="relative flex-1 md:w-64">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
        <input 
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400" 
          placeholder="Search files..." 
          type="text"
        />
      </div>
      <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-600 border border-slate-200 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
        <span className="material-symbols-outlined text-[20px]">filter_list</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 whitespace-nowrap">
        <span className="material-symbols-outlined text-[20px]">upload_file</span>
        <span className="hidden sm:inline">Upload</span>
      </button>
    </div>
  );
}

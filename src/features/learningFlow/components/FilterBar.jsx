export default function FilterBar({ onFilterChange }) {
    return (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-900 text-white px-4 transition-transform active:scale-95">
                <span className="text-sm font-medium">All Subjects</span>
            </button>
            <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 px-4 transition-all active:scale-95">
                <span className="text-slate-700 text-sm font-medium group-hover:text-primary">Mathematics</span>
            </button>
            <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 px-4 transition-all active:scale-95">
                <span className="text-slate-700 text-sm font-medium group-hover:text-primary">English Literature</span>
            </button>
            <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 px-4 transition-all active:scale-95">
                <span className="text-slate-700 text-sm font-medium group-hover:text-primary">Science</span>
            </button>
            <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 px-4 transition-all active:scale-95">
                <span className="text-slate-700 text-sm font-medium group-hover:text-primary">Price</span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-primary">expand_more</span>
            </button>
            <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 px-4 transition-all active:scale-95">
                <span className="text-slate-700 text-sm font-medium group-hover:text-primary">Availability</span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-primary">expand_more</span>
            </button>
            <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 px-4 transition-all active:scale-95">
                <span className="text-slate-700 text-sm font-medium group-hover:text-primary">Trial Lesson</span>
            </button>
        </div>
    );
}

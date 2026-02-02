export default function FeedbackHeader({ breadcrumbs, navigationControls, onPreviousStudent, onNextStudent }) {
    return (
        <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white flex-shrink-0">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 overflow-hidden">
                {/* Mobile Menu Button */}
                <button className="xl:hidden mr-2 text-slate-500 hover:text-primary">
                    <span className="material-symbols-outlined">menu</span>
                </button>

                {/* Breadcrumb Items */}
                {breadcrumbs.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {index > 0 && (
                            <span className="text-slate-300">/</span>
                        )}
                        {item.active ? (
                            <span className="text-slate-900 text-sm font-semibold truncate">
                                {item.label}
                            </span>
                        ) : (
                            <a
                                href={item.href}
                                className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Student Navigation Controls */}
            <div className="flex items-center gap-2">
                <button
                    onClick={onPreviousStudent}
                    aria-label="Previous Student"
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="text-xs font-medium text-slate-500">
                    {navigationControls.currentIndex} of {navigationControls.totalCount}
                </span>
                <button
                    onClick={onNextStudent}
                    aria-label="Next Student"
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </header>
    );
}

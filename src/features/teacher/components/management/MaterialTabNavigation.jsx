export default function MaterialTabNavigation({ tabs }) {
    return (
        <div className="border-b border-slate-200">
            <nav aria-label="Tabs" className="flex space-x-8 overflow-x-auto hide-scrollbar">
                {tabs.map((tab, index) => (
                    <a
                        key={index}
                        className={`group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium transition-all ${tab.active
                                ? 'border-primary text-primary font-bold'
                                : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                            }`}
                        href="#"
                    >
                        {tab.label}
                    </a>
                ))}
            </nav>
        </div>
    );
}

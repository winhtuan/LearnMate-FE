export default function TrialFilterTabs({ tabs, activeTab, onTabChange }) {
    return (
        <div className="">
            <div className="flex gap-8 overflow-x-auto pb-px border-b border-slate-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`flex items-center gap-2 pb-4 border-b-2 font-medium text-sm whitespace-nowrap px-1 transition-all ${activeTab === tab.id
                                ? 'border-primary text-primary font-semibold'
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                            }`}
                    >
                        {tab.label}
                        {tab.count > 0 && tab.id !== 'past' && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeTab === tab.id
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-slate-100 text-slate-600'
                                }`}>
                                {tab.count}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

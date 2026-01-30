import { flashcardsData } from "../data/flashcards.data";

export default function TopicGrid() {
    const { topics } = flashcardsData;

    return (
        <section className="w-full space-y-6 pb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-[#0d141b]">Explore Topics</h2>
                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="flex shrink-0 items-center justify-center h-9 px-4 rounded-full bg-[#0d141b] text-white text-sm font-medium">All Topics</button>
                    <button className="flex shrink-0 items-center justify-center h-9 px-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors">Languages</button>
                    <button className="flex shrink-0 items-center justify-center h-9 px-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors">Science</button>
                    <button className="flex shrink-0 items-center justify-center h-9 px-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors">Travel</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {topics.map((topic) => (
                    <div
                        key={topic.id}
                        className={`group relative flex flex-col bg-surface-light rounded-[2rem] p-6 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${topic.active ? 'ring-2 ring-primary/10' : ''}`}
                    >
                        {topic.active && (
                            <div className="absolute top-4 right-4 px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                                Active
                            </div>
                        )}
                        <div className="flex items-start justify-between mb-4">
                            <div className={`size-14 rounded-2xl ${topic.iconBg} flex items-center justify-center ${topic.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                <span className="material-symbols-outlined text-[28px]">{topic.icon}</span>
                            </div>
                            <div className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold">
                                {topic.mastery}%
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#0d141b] mb-1">{topic.title}</h3>
                        <p className="text-slate-500 text-sm mb-6 line-clamp-2">{topic.description}</p>
                        <div className="mt-auto">
                            <div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
                                <span>Mastery</span>
                                <span>{Math.round((topic.mastery / 100) * topic.totalCards)}/{topic.totalCards} Cards</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${topic.progressColor} rounded-full`} style={{ width: `${topic.mastery}%` }}></div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Topic Card */}
                <div className="group relative flex flex-col items-center justify-center bg-slate-100 rounded-[2rem] p-6 border border-dashed border-slate-300 hover:bg-slate-200 transition-all duration-300 cursor-pointer min-h-[220px]">
                    <div className="size-16 rounded-full bg-white flex items-center justify-center text-slate-400 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[32px]">add</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-600">Create New Deck</h3>
                </div>
            </div>
        </section>
    );
}

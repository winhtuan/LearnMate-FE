import { flashcardsData } from "../data/flashcards.data";

export default function StudyCard() {
    const { currentCard } = flashcardsData;

    return (
        <section className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0d141b]">Current Session Preview</h2>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Viewing: Academic IELTS
                </span>
            </div>

            <div className="w-full max-w-4xl mx-auto perspective-1000">
                <div className="relative w-full bg-surface-light rounded-[2.5rem] shadow-xl border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start min-h-[500px]">
                    {/* Left: Visual & Word */}
                    <div className="flex flex-col gap-6 flex-1 w-full">
                        <div
                            className="w-full aspect-video rounded-2xl bg-slate-100 overflow-hidden relative group cursor-pointer"
                            data-alt={currentCard.alt}
                        >
                            <img
                                alt={currentCard.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={currentCard.image}
                            />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 shadow-sm">
                                <span className="material-symbols-outlined text-slate-700">zoom_out_map</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0d141b] tracking-tight">
                                    {currentCard.word}
                                </h3>
                                <button className="size-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                                    <span className="material-symbols-outlined fill-current">volume_up</span>
                                </button>
                            </div>
                            <p className="text-slate-400 font-mono text-sm">{currentCard.phonetic}</p>
                            <div className="flex gap-2 mt-2">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                                    {currentCard.type}
                                </span>
                                {currentCard.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Definition & Controls */}
                    <div className="flex flex-col flex-1 w-full h-full justify-between gap-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Definition</p>
                                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                                    {currentCard.definition}
                                </p>
                            </div>
                            <div className="space-y-3 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Example</p>
                                <p className="text-lg text-blue-900 italic">
                                    "Fashions are <span className="font-bold underline decoration-wavy decoration-blue-300">{currentCard.example.highlight}</span>, changing with every season."
                                </p>
                            </div>
                        </div>

                        {/* Mastery Controls */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <p className="text-center text-xs font-medium text-slate-400">How well did you know this?</p>
                            <div className="grid grid-cols-3 gap-3">
                                <button className="group flex flex-col items-center justify-center gap-1 h-14 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-100 transition-all">
                                    <span className="text-rose-600 font-bold">Hard</span>
                                    <span className="text-[10px] text-rose-400 font-medium group-hover:text-rose-600">Review soon</span>
                                </button>
                                <button className="group flex flex-col items-center justify-center gap-1 h-14 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-100 transition-all">
                                    <span className="text-amber-600 font-bold">Good</span>
                                    <span className="text-[10px] text-amber-400 font-medium group-hover:text-amber-600">3 days</span>
                                </button>
                                <button className="group flex flex-col items-center justify-center gap-1 h-14 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-all shadow-sm">
                                    <span className="text-emerald-600 font-bold">Easy</span>
                                    <span className="text-[10px] text-emerald-400 font-medium group-hover:text-emerald-600">7 days</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

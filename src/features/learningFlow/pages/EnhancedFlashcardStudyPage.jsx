import { Link, useNavigate } from "react-router-dom";
import { flashcardsData } from "../data/flashcards.data";

export default function EnhancedFlashcardStudyPage() {
    const navigate = useNavigate();
    const { currentCard } = flashcardsData;

    return (
        <div className="bg-background-light font-display text-[#0d141b] antialiased min-h-screen flex flex-col overflow-hidden transition-colors duration-200">
            {/* Top Navigation & Progress */}
            <header className="w-full px-6 py-4 md:px-10 md:py-6 flex flex-col gap-4 bg-background-light/80 backdrop-blur-sm z-10 sticky top-0">
                <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <Link to="/flashcards" className="text-slate-500 hover:text-primary transition-colors font-medium">Daily Review</Link>
                        <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                        <span className="text-[#0d141b] font-semibold">Nature & Environment</span>
                    </div>
                    {/* Exit Button */}
                    <button
                        onClick={() => navigate("/flashcards")}
                        aria-label="Exit Study"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0d141b] hover:bg-gray-100 transition-colors shadow-sm ring-1 ring-black/5"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                {/* Progress Bar */}
                <div className="max-w-5xl mx-auto w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                        <span>Session Progress</span>
                        <span>5 / 20</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: "25%" }}></div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
                {/* Flashcard Container */}
                <div className="perspective-1000 w-full max-w-lg mx-auto">
                    {/* The Card */}
                    <div className="relative w-full bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/50 p-8 md:p-12 flex flex-col items-center text-center gap-8 min-h-[500px] justify-between group/card transition-colors duration-200">
                        {/* Front Content (Word & Audio) */}
                        <div className="w-full flex flex-col items-center gap-4 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-3">
                                <h1 className="text-4xl md:text-5xl font-bold text-[#0d141b] tracking-tight">
                                    Éphémère
                                </h1>
                                <button aria-label="Play Audio" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95">
                                    <span className="material-symbols-outlined text-[24px]">volume_up</span>
                                </button>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-slate-500 uppercase tracking-wider">Adjective</span>
                        </div>

                        {/* Back Content (Revealed Details) */}
                        <div className="w-full flex flex-col gap-6 flex-1 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Definition */}
                            <div className="space-y-2">
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Primary Meaning</p>
                                <p className="text-xl md:text-2xl font-medium text-[#0d141b] leading-relaxed">
                                    Lasting for a very short time.
                                </p>
                            </div>
                            {/* Synonyms */}
                            <div className="space-y-2">
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Synonyms</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">Fleeting</span>
                                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">Transitory</span>
                                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">Short-lived</span>
                                </div>
                            </div>
                            {/* Context */}
                            <div className="w-full p-4 bg-background-light rounded-xl border border-gray-100 text-left">
                                <p className="text-[#0d141b] font-medium text-lg italic mb-1">
                                    "The beauty of the sunset was ephemeral."
                                </p>
                                <p className="text-slate-500 text-sm">
                                    La beauté du coucher de soleil était éphémère.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Keyboard Shortcuts Hint */}
                    <div className="mt-6 text-center opacity-60 hover:opacity-100 transition-opacity">
                        <p className="text-xs text-slate-500 font-medium">
                            <span className="inline-block px-1.5 py-0.5 rounded border border-gray-300 bg-white mx-1">1</span>
                            <span className="inline-block px-1.5 py-0.5 rounded border border-gray-300 bg-white mx-1">2</span>
                            <span className="inline-block px-1.5 py-0.5 rounded border border-gray-300 bg-white mx-1">3</span>
                            to rate
                        </p>
                    </div>
                </div>

                {/* Action Bar (Spaced Repetition) */}
                <div className="fixed bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-background-light via-background-light to-transparent pointer-events-none flex justify-center z-20 h-40 items-end">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-2xl pointer-events-auto items-center justify-center">
                        {/* Still Learning Button */}
                        <button className="group relative flex-1 min-w-[140px] w-full md:w-auto h-14 rounded-full bg-white border-2 border-transparent hover:border-red-500/30 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 overflow-hidden">
                            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="material-symbols-outlined text-red-500 group-hover:scale-110 transition-transform filled">replay</span>
                            <span className="font-bold text-[#0d141b] text-sm">Still learning</span>
                        </button>
                        {/* Almost There Button */}
                        <button className="group relative flex-1 min-w-[140px] w-full md:w-auto h-14 rounded-full bg-white border-2 border-transparent hover:border-amber-500/30 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 overflow-hidden">
                            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="material-symbols-outlined text-amber-500 group-hover:scale-110 transition-transform">hourglass_top</span>
                            <span className="font-bold text-[#0d141b] text-sm">Almost there</span>
                        </button>
                        {/* Mastered Button */}
                        <button className="group relative flex-1 min-w-[140px] w-full md:w-auto h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">check_circle</span>
                            <span className="font-bold text-sm">Mastered</span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Decorative Background Elements */}
            <div className="fixed top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="fixed bottom-20 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none z-0"></div>
        </div>
    );
}

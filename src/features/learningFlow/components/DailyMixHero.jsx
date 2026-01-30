import { Link } from "react-router-dom";
import { flashcardsData } from "../data/flashcards.data";

export default function DailyMixHero() {
    const { dailyMixStats } = flashcardsData;

    return (
        <section className="w-full">
            <div className="w-full bg-surface-light rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-10 items-center relative overflow-hidden group">
                {/* Decorative Background Blob */}
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex-1 z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Daily Review
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#0d141b] leading-tight tracking-tight">
                        Ready for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Daily Mix?</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-lg">
                        You have <span className="font-bold text-[#0d141b]">{dailyMixStats.dueCount} cards</span> due for review today. Keep your momentum going and master your vocabulary!
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link to="/flashcards/study" className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5">
                            <span className="material-symbols-outlined">play_circle</span>
                            Start Daily Review
                        </Link>
                        <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white border border-slate-200 text-[#0d141b] font-bold hover:bg-slate-50 transition-colors">
                            View Stats
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
                    <div
                        className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                        data-alt="Abstract 3D illustration of floating learning cards and icons"
                        style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)" }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                alt="Open book with colorful creative elements flying out"
                                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW6rJG-SAYXjD-eJnHcY7UBV1UGzdclAWEG1Dvr3HYp6kV8ArdI_vYez92OsJ8ZsC571kmOK4_0_soqJFr7dWsZoE8pG-TKGf-yJm6oqMFMY2W2PU2RSbD3vVU4aojP-Ydanwg9r3XLuZn3OiB0D1TZ3GG65F1b3MFiuQZ0BNp8_dQGzoYQ6iUVoyX32oMpceIC0hcgwRK9nreDRrGVANaJ3pYNNImF16EC2e7Z6SMmEWYSm2TzqhRp2o5l0h6Jc9MVTYLWzr1-is"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

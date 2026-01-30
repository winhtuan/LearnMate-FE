import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../shared/components/Header"; // Assuming shared Header is available/compatible or we build a local header as per HTML
import { trialsData, trialTabs } from "../data/trials.data";
import TrialCard from "../components/TrialCard";
import TrialFilterTabs from "../components/TrialFilterTabs";
import RateTeacherModal from "../components/RateTeacherModal";
import CancelLessonModal from "../components/CancelLessonModal";

// Creating a local CustomHeader to match the specific design in base.html if needed, 
// or I can try to use the shared Header if it fits. 
// Looking at base.html, the header is quite specific with "My Trial Lessons" title in the body, 
// but there is a main nav header too. 
// I'll implement the main content structure here.

export default function TrialManagementPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [rateModalOpen, setRateModalOpen] = useState(false);
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [selectedTrial, setSelectedTrial] = useState(null);

    // Filter logic (mock implementation for visual purposes)
    const filteredTrials = trialsData.filter(trial => {
        if (activeTab === 'all') return true;
        if (activeTab === 'upcoming') return trial.status === 'confirmed';
        if (activeTab === 'pending') return trial.status === 'pending';
        if (activeTab === 'past') return trial.status === 'completed' || trial.status === 'cancelled';
        return true;
    });

    const handleRateClick = (trial) => {
        setSelectedTrial(trial);
        setRateModalOpen(true);
    };

    const handleCancelClick = (trial) => {
        setSelectedTrial(trial);
        setCancelModalOpen(true);
    };

    const handleCancelConfirm = () => {
        console.log("Cancelled trial:", selectedTrial);
        // Implement actual cancellation logic here (e.g., API call)
    };

    return (
        <div className="bg-background-light font-display text-slate-900 antialiased overflow-hidden h-screen selection:bg-primary/20 selection:text-primary flex flex-col">
            {/* We use the shared Header but might need to adjust for the layout flexibility. 
                The base.html has a specific header. For now, I'll use a simplified version inline 
                or the shared Header component if it supports the clean style.
                Let's stick to the visual provided in base.html which seems to allow a standard header.
            */}
            {/* 
                NOTE: The base.html has a simplified header compared to typical "Learning Flow".
                For consistency with the user request "html-to-react", I will try to render the structure as close as possible.
                However, usually we reuse a Header component. I will assume the standard Header is fine, 
                and focus on the Main Content Area which is the core request.
            */}
            <div className="h-16 px-6 md:px-8 lg:px-10 flex items-center justify-between border-b border-slate-200 bg-card-light/90 backdrop-blur-sm z-30 relative shrink-0">
                <div className="flex items-center gap-3 w-48">
                    <div className="bg-primary/10 flex items-center justify-center rounded-xl size-9 text-primary">
                        <span className="material-symbols-outlined text-[22px]">school</span>
                    </div>
                    <h1 className="text-slate-900 text-lg font-bold tracking-tight hidden sm:block">LearnMate</h1>
                </div>
                <nav className="hidden md:flex items-center justify-center gap-2 flex-1">
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group">
                        <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">dashboard</span>
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>
                    <Link to="/schedule" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-[20px] fill-1">calendar_month</span>
                        <span className="text-sm font-semibold">Schedule</span>
                    </Link>
                    <Link to="/messages" className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group relative">
                        <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">chat_bubble</span>
                        <span className="text-sm font-medium">Messages</span>
                        <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </Link>
                    <Link to="/settings" className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group">
                        <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </nav>
                <div className="flex items-center justify-end gap-3 md:gap-5 w-48">
                    <div className="hidden lg:flex items-center h-9 px-3 bg-slate-100 border border-transparent focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/10 rounded-full transition-all w-48 shadow-inner">
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">search</span>
                        <input className="w-full bg-transparent border-none text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0 px-2 h-full" placeholder="Search..." type="text" />
                    </div>
                    <button className="lg:hidden text-slate-500 hover:text-slate-700">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <div className="h-5 w-px bg-slate-200 hidden md:block"></div>
                    <button className="relative text-slate-500 hover:text-primary transition-colors p-1.5 rounded-full hover:bg-slate-100">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <Link to="/student-profile">
                        <div
                            className="size-9 rounded-full bg-center bg-cover border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDR3d-y89fSv-PwmvY3lzn0NVPtjLdAtyWhzqXR6VGKead7vWHnqhc5eStl2wwrWMKc53OrrwDipdjjxnjgp--BHa31rhNxVg0IohhDhA2yByZOtPeSy-LbFHUvoDY_lD_0P9qcyfEXLt1fXt2udr1rujDV-Zck2zdlbUMrugyeqNulKucdAKAqVr3vzukdQMV9O0DPk6OUXp22LNsmvCDRSrd97ErZK7-xwiVszTXkGmT3zWvK3HUFXrEdv1ZXY7o-7XzGNDLUSQ')" }}
                            title="Alex Morgan"
                        ></div>
                    </Link>
                    <button className="md:hidden text-slate-500 ml-1">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            <main className="flex-1 overflow-hidden relative w-full">
                <div className="h-full overflow-y-auto w-full">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-8 flex flex-col gap-8">
                        {/* Page Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-500">
                                    <Link to="/dashboard" className="hover:text-slate-800 cursor-pointer">Home</Link>
                                    <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                                    <span className="text-slate-900">Trial Lessons</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">My Trial Lessons</h1>
                                <p className="text-slate-500 mt-2 text-lg font-normal">Manage your upcoming and past trial sessions with tutors.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors bg-white">
                                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                                    Filter
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    Book New Trial
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <TrialFilterTabs
                            tabs={trialTabs}
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                        />

                        {/* List */}
                        <div className="flex flex-col gap-4 pb-10">
                            {filteredTrials.map(trial => (
                                <TrialCard
                                    key={trial.id}
                                    trial={trial}
                                    onRate={() => handleRateClick(trial)}
                                    onCancel={() => handleCancelClick(trial)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Modals */}
            <RateTeacherModal
                isOpen={rateModalOpen}
                onClose={() => setRateModalOpen(false)}
                tutor={selectedTrial?.tutor}
            />

            <CancelLessonModal
                isOpen={cancelModalOpen}
                onClose={() => setCancelModalOpen(false)}
                onConfirm={handleCancelConfirm}
                tutor={selectedTrial?.tutor}
            />
        </div>
    );
}

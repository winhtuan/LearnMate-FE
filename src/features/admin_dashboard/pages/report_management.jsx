import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ReportStats from '../components/ReportStats';
import EngagementChart from '../components/EngagementChart';
import TopCourses from '../components/TopCourses';
import UserProgressTable from '../components/UserProgressTable';
import { adminDashboardData } from '../data/admin_dashboard.data';
import '../styles/admin.css';

const ReportManagementPage = () => {
    const { reportMetrics, engagementData, topCourses, userProgress } = adminDashboardData;

    return (
        <div className="bg-background-light text-slate-800 antialiased h-screen flex flex-col overflow-hidden leading-relaxed">
            <Header />
            <div className="flex flex-1 overflow-hidden pt-16">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto bg-background-light">
                    <div className="p-8 max-w-[1440px] mx-auto w-full space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="flex flex-col gap-1">
                                <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                    <a className="hover:text-primary transition-colors" href="#">Admin</a>
                                    <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                                    <span className="text-slate-900">Reports & Analytics</span>
                                </nav>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">System Insights</h2>
                                <p className="text-slate-500 text-sm mt-1 max-w-xl">LMS performance, user growth, and engagement metrics for decision support.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-50 shadow-sm transition-all active:scale-[0.98]">
                                    <span className="material-symbols-outlined text-lg">description</span>
                                    Export CSV
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                                    <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                                    Export PDF
                                </button>
                            </div>
                        </div>

                        <div className="border-b border-slate-200 overflow-x-auto no-scrollbar">
                            <div className="flex gap-8 min-w-max">
                                <button className="pb-4 border-b-2 border-primary text-primary text-xs font-bold tracking-widest uppercase">Student Analytics</button>
                                <button className="pb-4 border-b-2 border-transparent text-slate-400 text-xs font-bold tracking-widest uppercase hover:text-slate-600 transition-colors">Activity Reports</button>
                                <button className="pb-4 border-b-2 border-transparent text-slate-400 text-xs font-bold tracking-widest uppercase hover:text-slate-600 transition-colors">Revenue Tracking</button>
                                <button className="pb-4 border-b-2 border-transparent text-slate-400 text-xs font-bold tracking-widest uppercase hover:text-slate-600 transition-colors">Course ROI</button>
                            </div>
                        </div>

                        <ReportStats metrics={reportMetrics} />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <EngagementChart data={engagementData} />
                            <TopCourses courses={topCourses} />
                        </div>

                        <UserProgressTable users={userProgress} />

                        <div className="p-6 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-200">
                            <div className="flex items-center gap-5">
                                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                    <span className="material-symbols-outlined text-3xl">auto_graph</span>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-base font-bold text-white tracking-wide">Predictive Analytics Ready</p>
                                    <p className="text-slate-400 text-xs">AI has detected a potential 15% increase in enrollment for next quarter.</p>
                                </div>
                            </div>
                            <button className="px-5 py-2.5 bg-white text-slate-900 text-xs font-black rounded-xl hover:bg-slate-100 transition-all shadow-lg active:scale-95 uppercase tracking-wider">
                                View Full Forecast
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReportManagementPage;

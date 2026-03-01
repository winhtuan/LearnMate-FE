import AdminHeader from '@/shared/layout/AdminHeader';
import Sidebar from '../components/Sidebar';
import ViolationStats from '../components/ViolationStats';
import ViolationTable from '../components/ViolationTable';
import { adminDashboardData } from '../data/admin_dashboard.data';
import '../styles/admin.css';

const ViolationManagementPage = () => {
    const { violations, violationStats } = adminDashboardData;

    return (
        <div className="bg-background-light text-slate-800 antialiased h-screen flex flex-col overflow-hidden">
            <AdminHeader />
            <div className="flex flex-1 overflow-hidden pt-16">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto p-8 bg-background-light">
                    <div className="max-w-[1440px] mx-auto space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                                    <a className="hover:text-primary transition-colors" href="#">Admin</a>
                                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                    <span className="text-slate-900">Content Moderation</span>
                                </nav>
                                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Active Class Flags</h3>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-shadow table-shadow">
                                    <span className="material-symbols-outlined text-lg">filter_list</span>
                                    Filter Results
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Export CSV
                                </button>
                            </div>
                        </div>

                        <ViolationStats stats={violationStats} />

                        <ViolationTable violations={violations} />

                        <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                <span className="material-symbols-outlined">info</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-primary">Content Moderation Policy Updated</p>
                                <p className="text-xs text-slate-600">
                                    Copyright claims are now automatically prioritized based on publisher API matches.
                                    Manual review is still required for final deletion.
                                </p>
                            </div>
                            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-md hover:shadow-lg transition-all">
                                View Policy
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ViolationManagementPage;

import React, { useState } from 'react';
import Header from '@/features/admin_dashboard/components/Header';
import Sidebar from '@/features/admin_dashboard/components/Sidebar';
import CVTable from '@/features/admin_dashboard/components/CVTable';
import { adminDashboardData } from '@/features/admin_dashboard/data/admin_dashboard.data';
import '@/features/admin_dashboard/styles/admin.css';

const ApprovalPage = () => {
    const { teacherCVs } = adminDashboardData;
    const [filter, setFilter] = useState('All');

    const filteredCVs = filter === 'All'
        ? teacherCVs
        : teacherCVs.filter(cv => cv.status === filter);

    const tabs = ['All', 'Pending', 'Approved', 'Rejected'];

    return (
        <div className="bg-white text-slate-800 antialiased h-screen flex flex-col overflow-hidden leading-relaxed">
            <Header />
            <div className="flex flex-1 overflow-hidden pt-16">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto bg-white">
                    <div className="max-w-[1440px] mx-auto p-8 space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Teacher Approval</h1>
                                <p className="text-slate-500 font-medium">Review credentials and verify educator applications for the platform.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                                    <input
                                        type="text"
                                        placeholder="Search applications..."
                                        className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-64"
                                    />
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                                    <span className="material-symbols-outlined text-lg">filter_list</span>
                                    Filters
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-2xl w-fit border border-slate-100">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === tab
                                            ? 'bg-white text-primary shadow-sm border border-slate-200'
                                            : 'text-slate-500 hover:text-primary hover:bg-white/50'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <CVTable cvs={filteredCVs} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ApprovalPage;

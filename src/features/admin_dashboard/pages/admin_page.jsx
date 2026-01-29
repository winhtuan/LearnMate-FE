import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import UserGrowthChart from '../components/UserGrowthChart';
import WeeklyActivityChart from '../components/WeeklyActivityChart';
import AuditTable from '../components/AuditTable';
import { adminDashboardData } from '../data/admin_dashboard.data';
import '../styles/admin.css';

const AdminPage = () => {
    const { metrics } = adminDashboardData;

    return (
        <div className="bg-background-light text-[#121516] antialiased h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex flex-1 pt-16 overflow-hidden">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto p-8 bg-background-light">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="flex items-end justify-between">
                            <div>
                                <h3 className="text-2xl font-extrabold tracking-tight">System Overview</h3>
                                <p className="text-[#6a7981] font-medium">Real-time performance and management metrics</p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    className="flex items-center gap-2 bg-white border border-border-light px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    <span>Last 30 Days</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    <span>Export Data</span>
                                </button>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {metrics.map((metric, index) => (
                                <StatCard key={index} metric={metric} />
                            ))}
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <UserGrowthChart />
                            <WeeklyActivityChart />
                        </div>

                        {/* Audit Table */}
                        <AuditTable />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPage;

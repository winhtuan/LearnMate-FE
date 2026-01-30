import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AdminProfileSettings from '../components/AdminProfileSettings';
import SystemConfigSettings from '../components/SystemConfigSettings';
import SMTPConfigSettings from '../components/SMTPConfigSettings';
import { adminDashboardData } from '../data/admin_dashboard.data';
import '../styles/admin.css';

const SettingPage = () => {
    const { adminProfile, systemConfig } = adminDashboardData;

    return (
        <div className="bg-white text-slate-800 antialiased h-screen flex flex-col overflow-hidden leading-relaxed">
            <Header />
            <div className="flex flex-1 overflow-hidden pt-16">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto bg-white">
                    <div className="max-w-5xl mx-auto p-8 space-y-8">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Settings</h1>
                            <p className="text-slate-500">Manage your organization's global configuration and administrator credentials.</p>
                        </div>

                        <AdminProfileSettings profile={adminProfile} />

                        <SystemConfigSettings config={systemConfig} />

                        <SMTPConfigSettings smtp={systemConfig.smtp} lastSync={systemConfig.lastSync} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SettingPage;

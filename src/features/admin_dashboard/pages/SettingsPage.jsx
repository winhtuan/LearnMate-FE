import AdminHeader from '@/shared/layout/AdminHeader';
import Sidebar from '@/features/admin_dashboard/components/Sidebar';
import AdminProfileSettings from '@/features/admin_dashboard/components/AdminProfileSettings';
import SystemConfigSettings from '@/features/admin_dashboard/components/SystemConfigSettings';
import SMTPConfigSettings from '@/features/admin_dashboard/components/SMTPConfigSettings';
import { adminDashboardData } from '@/features/admin_dashboard/data/adminDashboard.data';
import '@/features/admin_dashboard/styles/admin.css';

const SettingsPage = () => {
    const { adminProfile, systemConfig } = adminDashboardData;

    return (
        <div className="bg-white text-slate-800 antialiased h-screen flex flex-col overflow-hidden leading-relaxed">
            <AdminHeader />
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

export default SettingsPage;

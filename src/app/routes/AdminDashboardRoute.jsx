import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from '@/features/admin_dashboard/pages/admin_page';
import UserManagementPage from '@/features/admin_dashboard/pages/user_management';
import ViolationManagementPage from '@/features/admin_dashboard/pages/violation_management';
import AuditLogPage from '@/features/admin_dashboard/pages/audit_log';
import ReportManagementPage from '@/features/admin_dashboard/pages/report_management';
import SettingPage from '@/features/admin_dashboard/pages/setting';
import ApprovePage from '@/features/admin_dashboard/pages/approve';

const AdminDashboardRoute = () => {
    return (
        <Routes>
            <Route index element={<AdminPage />} />
            <Route path="approve" element={<ApprovePage />} />
            <Route path="users" element={<UserManagementPage />} />
            <Route path="violations" element={<ViolationManagementPage />} />
            <Route path="logs" element={<AuditLogPage />} />
            <Route path="reports" element={<ReportManagementPage />} />
            <Route path="settings" element={<SettingPage />} />
            {/* Add more admin routes here as needed */}
        </Routes>
    );
};

export default AdminDashboardRoute;

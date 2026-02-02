import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboardPage from '@/features/admin_dashboard/pages/AdminDashboardPage';
import UserManagementPage from '@/features/admin_dashboard/pages/UserManagementPage';
import ViolationManagementPage from '@/features/admin_dashboard/pages/ViolationManagementPage';
import AuditLogPage from '@/features/admin_dashboard/pages/AuditLogPage';
import ReportManagementPage from '@/features/admin_dashboard/pages/ReportManagementPage';
import SettingsPage from '@/features/admin_dashboard/pages/SettingsPage';
import ApprovalPage from '@/features/admin_dashboard/pages/ApprovalPage';

const AdminDashboardRoute = () => {
    return (
        <Routes>
            <Route index element={<AdminDashboardPage />} />
            <Route path="approve" element={<ApprovalPage />} />
            <Route path="users" element={<UserManagementPage />} />
            <Route path="violations" element={<ViolationManagementPage />} />
            <Route path="logs" element={<AuditLogPage />} />
            <Route path="reports" element={<ReportManagementPage />} />
            <Route path="settings" element={<SettingsPage />} />
            {/* Add more admin routes here as needed */}
        </Routes>
    );
};

export default AdminDashboardRoute;

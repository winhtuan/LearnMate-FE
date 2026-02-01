import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserTable from '../components/UserTable';
import UserStats from '../components/UserStats';
import UserModal from '../components/UserModal';
import ConfirmModal from '../components/ConfirmModal';
import { adminDashboardData } from '../data/admin_dashboard.data';
import '../styles/admin.css';

const UserManagementPage = () => {
    const { users, userStats } = adminDashboardData;
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('create'); // 'create', 'edit', 'delete', 'block'
    const [selectedUser, setSelectedUser] = useState(null);

    const handleAction = (type, user = null) => {
        setModalMode(type);
        setSelectedUser(user);
        if (type === 'create' || type === 'edit') {
            setIsUserModalOpen(true);
        } else {
            setIsConfirmModalOpen(true);
        }
    };

    const handleSave = (data) => {
        console.log('Saving user:', data);
        setIsUserModalOpen(false);
    };

    const handleConfirm = () => {
        console.log(`Confirmed action: ${modalMode} for user:`, selectedUser);
        setIsConfirmModalOpen(false);
    };

    return (
        <div className="bg-background-light text-[#121516] antialiased h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex flex-1 pt-16 overflow-hidden">
                <Sidebar />
                <main className="flex-1 ml-64 overflow-y-auto bg-background-light">
                    <div className="p-8 max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">User Management</h2>
                                <p className="text-slate-500 text-sm mt-1">Manage all administrative, teaching, and student accounts.</p>
                            </div>
                            <button
                                onClick={() => handleAction('create')}
                                className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined text-xl">person_add</span>
                                Create New User
                            </button>
                        </div>

                        <UserStats stats={userStats} />
                        <div className="mt-8">
                            <UserTable users={users} onAction={handleAction} />
                        </div>
                    </div>
                </main>
            </div>

            <UserModal
                isOpen={isUserModalOpen}
                onClose={() => setIsUserModalOpen(false)}
                onSave={handleSave}
                user={selectedUser}
                mode={modalMode}
            />

            <ConfirmModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={handleConfirm}
                title={
                    modalMode === 'delete' ? 'Delete User?' :
                        modalMode === 'block' ? 'Block User?' : 'Confirm Action'
                }
                message={
                    modalMode === 'delete' ? `Are you sure you want to delete ${selectedUser?.name}? This action cannot be undone.` :
                        modalMode === 'block' ? `Are you sure you want to block ${selectedUser?.name}? They will lose access to the platform.` : ''
                }
                confirmText={modalMode.charAt(0).toUpperCase() + modalMode.slice(1)}
                type={modalMode === 'delete' ? 'danger' : 'warning'}
            />
        </div>
    );
};

export default UserManagementPage;

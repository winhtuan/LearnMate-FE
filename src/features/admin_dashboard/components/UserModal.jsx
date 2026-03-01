import { useState, useEffect } from 'react';

const UserModal = ({ isOpen, onClose, onSave, user, mode = 'create' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Student',
        status: 'Active',
    });

    useEffect(() => {
        if (user && mode === 'edit') {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                role: user.role || 'Student',
                status: user.status || 'Active',
            });
        } else {
            setFormData({
                name: '',
                email: '',
                role: 'Student',
                status: 'Active',
            });
        }
    }, [user, mode, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                        {mode === 'create' ? 'Create New User' : 'Edit User Details'}
                    </h3>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Full Name</label>
                            <input
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                                placeholder="e.g. John Doe"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700">User Role</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                                >
                                    <option>Student</option>
                                    <option>Teacher</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700">Account Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                                >
                                    <option>Active</option>
                                    <option>Blocked</option>
                                    <option>Pending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 px-6 py-4 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                        >
                            {mode === 'create' ? 'Create User' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;

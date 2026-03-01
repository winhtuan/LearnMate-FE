
const UserTable = ({ users, onAction }) => {
    const statusClasses = {
        success: 'bg-green-100 text-green-700',
        warning: 'bg-orange-100 text-orange-700',
    };

    return (
        <>
            <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex flex-wrap items-center gap-4 shadow-sm">
                <div className="flex-1 min-w-[300px]">
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </span>
                        <input
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/40 text-sm text-slate-900 placeholder:text-slate-500"
                            placeholder="Search by name, email or ID..."
                            type="text"
                        />
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex h-9 items-center gap-x-2 rounded-lg bg-white px-4 text-slate-700 border border-slate-200">
                        <span className="text-sm font-semibold">Role: All</span>
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-9 items-center gap-x-2 rounded-lg bg-white px-4 text-slate-700 border border-slate-200">
                        <span className="text-sm font-semibold">Status: Active</span>
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-9 items-center gap-x-2 rounded-lg text-slate-400 hover:text-slate-600 px-2 transition-colors" title="Reset Filters">
                        <span className="material-symbols-outlined text-xl">filter_list_off</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User Details</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Created Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map((user, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500">{user.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm bg-cover bg-center"
                                                style={{ backgroundImage: `url('${user.avatar}')` }}
                                            ></div>
                                            <div className="flex flex-col">
                                                <p className="text-sm font-bold text-slate-900">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-medium text-slate-700">{user.role}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusClasses[user.statusType]}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{user.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                onClick={() => onAction('view', user)}
                                                className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                                                title="View"
                                            >
                                                <span className="material-symbols-outlined text-lg">visibility</span>
                                            </button>
                                            <button
                                                onClick={() => onAction('edit', user)}
                                                className="p-1.5 text-slate-400 hover:text-blue-500 transition-colors"
                                                title="Edit"
                                            >
                                                <span className="material-symbols-outlined text-lg">edit_note</span>
                                            </button>
                                            <button
                                                onClick={() => onAction('block', user)}
                                                className="p-1.5 text-slate-400 hover:text-orange-500 transition-colors"
                                                title="Block"
                                            >
                                                <span className="material-symbols-outlined text-lg">lock_open</span>
                                            </button>
                                            <button
                                                onClick={() => onAction('delete', user)}
                                                className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                                                title="Delete"
                                            >
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                    <p className="text-sm text-slate-500 font-medium">Showing 1 to 4 of 1,240 users</p>
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-slate-100 text-slate-400 disabled:opacity-50" disabled>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
                        <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-sm font-semibold">2</button>
                        <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-sm font-semibold">3</button>
                        <span className="px-1 text-slate-400">...</span>
                        <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-sm font-semibold">124</button>
                        <button className="p-2 rounded hover:bg-slate-100 text-slate-600">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserTable;

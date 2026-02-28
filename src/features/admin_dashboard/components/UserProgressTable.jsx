
const UserProgressTable = ({ users }) => {
    return (
        <div className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-900">Detailed Student Progress</h4>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filter
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50/50">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Course</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Score</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-slate-50/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="h-9 w-9 rounded-full bg-slate-200 bg-cover bg-center border border-slate-200 shadow-sm"
                                            style={{ backgroundImage: `url('${user.avatar}')` }}
                                        ></div>
                                        <div className="text-sm">
                                            <p className="font-bold text-slate-800 leading-none">{user.name}</p>
                                            <p className="text-slate-400 text-[11px] mt-1.5">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-slate-700">{user.course}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${user.progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`}
                                                style={{ width: `${user.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-600">{user.progress}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-black text-slate-800">{user.score}%</p>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`px-2 py-1 text-[10px] font-bold rounded-md uppercase tracking-wide border ${user.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                            'bg-blue-50 text-blue-600 border-blue-100'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
                <button className="text-xs font-bold text-primary hover:underline">View All Students</button>
            </div>
        </div>
    );
};

export default UserProgressTable;

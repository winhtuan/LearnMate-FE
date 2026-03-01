import { useState } from 'react';
import CVDetailsModal from './CVDetailsModal';

const CVTable = ({ cvs }) => {
    const [selectedCV, setSelectedCV] = useState(null);

    const getStatusStyles = (type) => {
        switch (type) {
            case 'pending':
                return 'bg-amber-50 text-amber-700 border-amber-100';
            case 'approved':
                return 'bg-emerald-50 text-emerald-700 border-emerald-100';
            case 'rejected':
                return 'bg-rose-50 text-rose-700 border-rose-100';
            default:
                return 'bg-slate-50 text-slate-700 border-slate-100';
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Applicant</th>
                            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Subject Area</th>
                            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Experience</th>
                            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Date Applied</th>
                            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {cvs.map((cv) => (
                            <tr key={cv.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                                            <img src={cv.avatar} alt={cv.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{cv.name}</p>
                                            <p className="text-xs text-slate-500">{cv.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-slate-700">{cv.subject}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">{cv.experience}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{cv.appliedDate}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusStyles(cv.statusType)}`}>
                                        {cv.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => setSelectedCV(cv)}
                                        className="text-primary hover:text-primary/80 font-bold text-sm"
                                    >
                                        Review CV
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedCV && (
                <CVDetailsModal
                    cv={selectedCV}
                    onClose={() => setSelectedCV(null)}
                />
            )}
        </div>
    );
};

export default CVTable;

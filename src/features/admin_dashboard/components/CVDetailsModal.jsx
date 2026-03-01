
const CVDetailsModal = ({ cv, onClose }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-pop">
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-slate-900">Review Application</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                    <div className="flex items-center gap-6">
                        <div className="size-20 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-sm">
                            <img src={cv.avatar} alt={cv.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900">{cv.name}</p>
                            <p className="text-slate-500 font-medium">{cv.email}</p>
                        </div>
                        <div className="ml-auto flex flex-col items-end gap-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</span>
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${cv.statusType === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-slate-50 text-slate-700 border-slate-100'}`}>
                                {cv.status}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject Area</p>
                            <p className="text-base font-bold text-slate-800">{cv.subject}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Experience</p>
                            <p className="text-base font-bold text-slate-800">{cv.experience}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Credentials & Background</p>
                        <div className="space-y-3">
                            {cv.credentials.map((content, idx) => (
                                <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-sm">verified</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 flex items-center gap-6">
                        <div className="size-14 rounded-2xl bg-white flex items-center justify-center text-sky-600 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-sky-900">Professional_CV_{cv.name.replace(' ', '_')}.pdf</p>
                            <p className="text-xs text-sky-600 font-medium">Verified Attachment • 2.4 MB</p>
                        </div>
                        <button className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-colors shadow-sm">
                            View Document
                        </button>
                    </div>
                </div>

                <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex gap-4">
                    <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
                        Request More Info
                    </button>
                    <button className="flex-1 py-3 bg-rose-600 text-white rounded-2xl font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-200">
                        Reject Application
                    </button>
                    <button className="flex-1 py-3 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                        Approve Teacher
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CVDetailsModal;

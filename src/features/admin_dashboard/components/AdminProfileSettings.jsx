
const AdminProfileSettings = ({ profile }) => {
    return (
        <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Admin Profile
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex flex-col items-center gap-4 shrink-0">
                            <div className="size-24 rounded-full border-4 border-slate-100 shadow-sm overflow-hidden bg-white relative group">
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                    <span className="material-symbols-outlined text-white">photo_camera</span>
                                </div>
                                <img alt="Admin Profile" className="w-full h-full object-cover" src={profile.avatar} />
                            </div>
                            <button className="text-primary text-xs font-bold hover:underline">Change Avatar</button>
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                <input
                                    className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white"
                                    type="text"
                                    defaultValue={profile.name}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <input
                                    className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none bg-white"
                                    type="email"
                                    defaultValue={profile.email}
                                />
                            </div>
                            <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-lg border border-dashed border-slate-200 mt-2">
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Account Password</p>
                                    <p className="text-xs text-slate-500">Last changed {profile.lastPasswordChange}</p>
                                </div>
                                <button className="mt-3 md:mt-0 flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                                    <span className="material-symbols-outlined text-lg">lock_reset</span>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50/50 px-6 py-4 flex justify-end border-t border-slate-100">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">Save Profile Changes</button>
                </div>
            </div>
        </section>
    );
};

export default AdminProfileSettings;

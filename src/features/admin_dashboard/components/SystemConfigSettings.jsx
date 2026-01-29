import React from 'react';

const SystemConfigSettings = ({ config }) => {
    return (
        <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">settings_suggest</span>
                System Configuration
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Application Name</label>
                            <input
                                className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                                type="text"
                                defaultValue={config.appName}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Organization Logo</label>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-40 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 p-2 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-contain bg-no-repeat bg-center"
                                        style={{ backgroundImage: `url('${config.logo}')` }}
                                    ></div>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">
                                    <span className="material-symbols-outlined text-sm">upload</span>
                                    Upload New
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex-1 max-w-md">
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-bold text-slate-900">Maintenance Mode</label>
                                <button
                                    aria-checked={config.maintenanceMode}
                                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${config.maintenanceMode ? 'bg-primary' : 'bg-slate-200'}`}
                                    role="switch"
                                >
                                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${config.maintenanceMode ? 'translate-x-5' : 'translate-x-0'}`}></span>
                                </button>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">When active, only administrators can access the portal. Users will see a "System Update" screen.</p>
                        </div>
                        <div className="flex-1 max-w-md">
                            <label className="text-sm font-bold text-slate-900 block mb-2">Default User Language</label>
                            <select
                                className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                                defaultValue={config.defaultLanguage}
                            >
                                <option>English (US)</option>
                                <option>Spanish (ES)</option>
                                <option>French (FR)</option>
                                <option>German (DE)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemConfigSettings;

import { useState } from 'react';

export default function MaterialSettingsSidebar({ settings }) {
    const [targetClass, setTargetClass] = useState(settings.defaultClass);
    const [visibility, setVisibility] = useState('published');
    const [notifyStudents, setNotifyStudents] = useState(settings.notifyStudents.defaultValue);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold dark:text-white">Material Settings</h3>
            </div>
            <div className="p-5 flex flex-col gap-6">
                {/* Target Class */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#4e7397] uppercase tracking-wider">
                        Target Class
                    </label>
                    <select
                        value={targetClass}
                        onChange={(e) => setTargetClass(e.target.value)}
                        className="w-full text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-2 focus:ring-primary"
                    >
                        {settings.targetClasses.map((className, index) => (
                            <option key={index} value={className}>{className}</option>
                        ))}
                    </select>
                </div>

                {/* Visibility Status */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#4e7397] uppercase tracking-wider">
                        Visibility Status
                    </label>
                    <div className="flex flex-col gap-2">
                        {settings.visibilityOptions.map((option, index) => (
                            <label
                                key={index}
                                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${visibility === option.value
                                        ? 'border border-primary/20 bg-primary/5 dark:bg-primary/10'
                                        : 'border border-slate-200 dark:border-slate-700'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="visibility"
                                    value={option.value}
                                    checked={visibility === option.value}
                                    onChange={(e) => setVisibility(e.target.value)}
                                    className="text-primary focus:ring-primary"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold dark:text-white">
                                        {option.label}
                                    </span>
                                    <span className="text-[10px] text-[#4e7397]">
                                        {option.description}
                                    </span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Notification Toggle */}
                <div className="flex items-center justify-between py-2">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold dark:text-white">
                            {settings.notifyStudents.label}
                        </span>
                        <span className="text-xs text-[#4e7397]">
                            {settings.notifyStudents.description}
                        </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={notifyStudents}
                            onChange={(e) => setNotifyStudents(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                    </label>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Help / Guidelines */}
                <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-lg">info</span>
                    <p className="text-[11px] text-[#4e7397]">{settings.helpText}</p>
                </div>
            </div>
        </div>
    );
}

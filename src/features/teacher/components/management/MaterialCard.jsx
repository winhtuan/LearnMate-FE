import React, { useState } from 'react';

export default function MaterialCard({ data }) {
    const {
        name,
        icon,
        iconBgColor,
        iconTextColor,
        iconRingColor,
        uploadDate,
        size,
        visibility,
        isPublic: initialIsPublic
    } = data;

    const [isPublic, setIsPublic] = useState(initialIsPublic);

    const handleToggle = () => {
        setIsPublic(!isPublic);
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className={`size-12 rounded-xl ${iconBgColor} ${iconTextColor} flex items-center justify-center ring-1 ${iconRingColor}`}>
                    <span className="material-symbols-outlined text-[28px]">{icon}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-1 truncate" title={name}>
                {name}
            </h4>
            <p className="text-xs text-slate-500 mb-4">
                Uploaded {uploadDate} • {size}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[16px] ${isPublic ? 'text-emerald-500' : 'text-slate-400'}`}>
                        {isPublic ? 'public' : 'lock'}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isPublic ? 'text-emerald-600' : 'text-slate-500'}`}>
                        {isPublic ? 'Public' : 'Private'}
                    </span>
                </div>
                <div className="relative inline-block w-8 align-middle select-none">
                    <input
                        checked={isPublic}
                        className={`toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ${isPublic ? 'right-0' : 'right-4'}`}
                        id={`toggle-${data.id}`}
                        name="toggle"
                        type="checkbox"
                        onChange={handleToggle}
                    />
                    <label
                        className={`toggle-label block overflow-hidden h-4 rounded-full cursor-pointer transition-colors duration-300 ${isPublic ? 'bg-primary' : 'bg-slate-300'}`}
                        htmlFor={`toggle-${data.id}`}
                    />
                </div>
            </div>
        </div>
    );
}

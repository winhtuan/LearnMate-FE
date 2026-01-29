import { useState } from 'react';

export default function PendingUploadItem({ upload, categories, onRemove }) {
    const [selectedCategory, setSelectedCategory] = useState(upload.category);

    const getProgressBarColor = () => {
        if (upload.isComplete) return 'bg-green-500';
        if (upload.isProcessing) return 'bg-primary animate-pulse';
        return 'bg-primary';
    };

    return (
        <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`size-10 flex items-center justify-center ${upload.iconBg} ${upload.iconText} rounded-lg shrink-0`}>
                        <span className="material-symbols-outlined">{upload.icon}</span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-semibold truncate dark:text-white">
                            {upload.filename}
                        </p>
                        <p className="text-xs text-[#4e7397]">
                            {upload.size} • {upload.status}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-md focus:ring-primary"
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    <button
                        onClick={() => onRemove && onRemove(upload.id)}
                        className="size-8 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors"
                    >
                        <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                </div>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                    className={`${getProgressBarColor()} h-full rounded-full transition-all duration-300`}
                    style={{ width: `${upload.progress}%` }}
                />
            </div>
        </div>
    );
}

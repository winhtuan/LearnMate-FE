export default function UploadActionBar({ actionBar, onCancel, onPublish }) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-10 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-[#4e7397]">
                    <span className={`material-symbols-outlined ${actionBar.statusIconColor}`}>
                        {actionBar.statusIcon}
                    </span>
                    {actionBar.statusMessage}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={onCancel}
                        className="px-6 h-11 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        {actionBar.cancelButtonText}
                    </button>
                    <button
                        onClick={onPublish}
                        className="flex items-center gap-2 px-8 h-11 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        <span className="material-symbols-outlined">{actionBar.publishButtonIcon}</span>
                        {actionBar.publishButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

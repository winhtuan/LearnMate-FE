export default function TrialCard({ trial, onRate, onCancel }) {
    const { tutor, subject, date, status, isNew } = trial;

    const StatusBadge = () => {
        switch (status) {
            case 'confirmed':
                return (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">Confirmed</span>
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">
                        <span className="material-symbols-outlined text-[18px]">hourglass_empty</span>
                        <span className="text-xs font-bold uppercase tracking-wide">Pending</span>
                    </div>
                );
            case 'completed':
                return (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="material-symbols-outlined text-[18px]">check</span>
                        <span className="text-xs font-bold uppercase tracking-wide">Completed</span>
                    </div>
                );
            case 'cancelled':
                return (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-600 border border-slate-300">
                        <span className="material-symbols-outlined text-[18px]">block</span>
                        <span className="text-xs font-bold uppercase tracking-wide">Cancelled</span>
                    </div>
                );
            default:
                return null;
        }
    };

    const Actions = () => {
        switch (status) {
            case 'confirmed':
                return (
                    <div className="flex gap-3">
                        <button
                            className="hidden sm:flex items-center justify-center p-2.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                            title="Message Tutor"
                        >
                            <span className="material-symbols-outlined text-[20px]">chat</span>
                        </button>
                        <button className="bg-primary hover:bg-blue-600 text-white text-sm font-semibold py-2.5 px-6 rounded-lg shadow-sm shadow-blue-500/20 transition-all active:scale-[0.98]">
                            Join Session
                        </button>
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex gap-3">
                        <button
                            onClick={onCancel}
                            className="text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 text-sm font-medium py-2.5 px-5 rounded-lg transition-all active:scale-[0.98]"
                        >
                            Cancel Request
                        </button>
                    </div>
                );
            case 'completed':
                return (
                    <div className="flex gap-3">
                        <button
                            onClick={onRate}
                            className="bg-white border border-slate-300 hover:border-primary text-slate-700 hover:text-primary text-sm font-semibold py-2.5 px-5 rounded-lg transition-all active:scale-[0.98] flex items-center gap-2 group/btn"
                        >
                            <span className="material-symbols-outlined text-[18px] group-hover/btn:fill-1 transition-all">star</span>
                            Rate Teacher
                        </button>
                    </div>
                );
            case 'cancelled':
                return (
                    <div className="flex gap-3">
                        <button className="text-primary hover:text-blue-700 hover:underline text-sm font-medium py-2.5 px-3 transition-all">
                            View Details
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    const cardOpacity = status === 'cancelled' ? 'opacity-75 hover:opacity-100' : status === 'completed' ? 'opacity-90 hover:opacity-100' : '';

    return (
        <div className={`group bg-card-light rounded-xl border ${status === 'cancelled' ? 'border-dashed border-slate-300' : 'border-slate-200'} p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${cardOpacity}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 ${status === 'completed' || status === 'cancelled' ? 'grayscale group-hover:grayscale-0' : ''} transition-all duration-300`}>
                        <div className="relative">
                            <div
                                className="size-16 rounded-full bg-cover bg-center border border-slate-200"
                                style={{ backgroundImage: `url('${tutor.avatar}')` }}
                                role="img"
                                aria-label={`Tutor ${tutor.name}`}
                            ></div>
                            {tutor.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                                    <span className="material-symbols-outlined text-green-500 text-[20px] bg-green-50 rounded-full">check_circle</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-0.5">
                        <div className="flex items-center gap-3">
                            <h3 className={`text-lg font-bold ${status === 'cancelled' ? 'text-slate-700' : 'text-slate-900'} group-hover:text-primary transition-colors`}>
                                {tutor.name}
                            </h3>
                            {tutor.rating && (
                                <div className="flex items-center text-xs font-medium text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                                    <span className="material-symbols-outlined text-[14px] mr-0.5 fill-1">star</span>
                                    {tutor.rating}
                                </div>
                            )}
                            {isNew && (
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium hidden sm:inline-block">
                                    New Tutor
                                </span>
                            )}
                            {status === 'completed' && (
                                <div className="flex items-center text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                    <span className="material-symbols-outlined text-[14px] mr-1">history</span>
                                    Past
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                            <span className={`px-2.5 py-0.5 rounded-md ${status === 'cancelled' ? 'bg-slate-200 text-slate-600' : 'bg-slate-100 text-slate-600'} text-xs font-semibold`}>
                                {subject}
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className={`flex items-center gap-1.5 ${status === 'cancelled' ? 'line-through decoration-slate-400' : ''}`}>
                                {!status.includes('completed') && !status.includes('cancelled') && (
                                    <span className="material-symbols-outlined text-[18px] text-slate-400">schedule</span>
                                )}
                                {date}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-5 w-full md:w-auto pl-20 md:pl-0">
                    <StatusBadge />
                    <Actions />
                </div>
            </div>
        </div>
    );
}

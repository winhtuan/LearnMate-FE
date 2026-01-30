export default function SuccessModal({ bookingDetails, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="relative w-full max-w-[400px]">
            <div className="absolute -top-8 left-0 text-white/80 text-sm font-medium uppercase tracking-widest">Success State Preview</div>
            <div className="w-full bg-white rounded-xl shadow-2xl border border-slate-200 p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 ring-1 ring-green-100">
                    <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 mb-6">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="text-xs font-semibold text-yellow-700 uppercase tracking-wide">Pending Confirmation</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-[280px]">
                    We've sent your request to <span className="font-semibold text-slate-900">{bookingDetails.teacher}</span> for <span className="whitespace-nowrap font-medium text-slate-700">{bookingDetails.date} at {bookingDetails.time}</span>. You'll be notified once accepted.
                </p>
                <button onClick={onClose} className="w-full py-2.5 rounded-md text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                    Back to Teachers
                </button>
            </div>
        </div>
    );
}

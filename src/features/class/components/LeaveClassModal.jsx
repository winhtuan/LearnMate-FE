export default function LeaveClassModal({ isOpen, onClose, className, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-[480px] bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col items-center text-center transform transition-all">
        <div className="mb-6 p-5 rounded-full bg-rose-50 text-rose-500 shadow-sm border border-rose-100">
          <span className="material-symbols-outlined text-4xl">logout</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">Leave Class</h3>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
          Are you sure you want to leave <span className="text-slate-900 font-bold">{className}</span>?
        </p>
        <div className="flex items-center gap-4 w-full">
          <button 
            onClick={onClose}
            className="flex-1 py-3.5 px-6 rounded-2xl text-slate-500 font-bold hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 py-3.5 px-6 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold shadow-lg shadow-rose-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Confirm Leave
          </button>
        </div>
      </div>
    </div>
  );
}

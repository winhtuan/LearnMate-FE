import React from 'react';

export default function CancelLessonModal({ isOpen, onClose, tutor, onConfirm }) {
    if (!isOpen || !tutor) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Modal Card */}
            <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl transform transition-all flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Top Decoration / Visual Anchor */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-500"></div>

                <div className="p-8 flex flex-col items-center text-center">
                    {/* Icon/Avatar */}
                    <div className="relative mb-6">
                        <div
                            className="size-20 rounded-full border-4 border-white shadow-lg bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: `url('${tutor.avatar}')` }}
                            role="img"
                            aria-label={`Tutor ${tutor.name}`}
                        ></div>
                        <div className="absolute -bottom-1 -right-1 bg-rose-500 text-white rounded-full p-1.5 flex items-center justify-center border-2 border-white">
                            <span className="material-symbols-outlined text-sm font-bold">close</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    {/* Text Content */}
                    <h3 className="text-2xl font-bold text-[#0d141b] mb-3">
                        Cancel trial with {tutor.name.split(' ')[0]}?
                    </h3>
                    <p className="text-[#4c739a] text-base font-normal leading-relaxed mb-8">
                        Are you sure? Since this is more than 24 hours in advance, your trial credit will be <span className="text-[#0d141b] font-medium">fully refunded</span> to your LearnMate wallet.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col-reverse w-full gap-3">
                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-rose-50 hover:bg-rose-100 text-rose-600 text-sm font-bold leading-normal transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                        >
                            <span className="truncate">Yes, Cancel Lesson</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary hover:bg-[#0f6bcc] shadow-lg shadow-blue-500/20 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <span className="truncate">Keep Booking</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

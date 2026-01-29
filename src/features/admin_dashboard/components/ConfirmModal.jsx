import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText, type = 'danger' }) => {
    if (!isOpen) return null;

    const typeClasses = {
        danger: 'bg-red-600 hover:bg-red-700 shadow-red-200',
        warning: 'bg-orange-500 hover:bg-orange-600 shadow-orange-200',
        primary: 'bg-primary hover:bg-primary/90 shadow-primary/20',
    };

    const iconClasses = {
        danger: 'text-red-600 bg-red-50',
        warning: 'text-orange-600 bg-orange-50',
        primary: 'text-primary bg-primary/10',
    };

    const icons = {
        danger: 'delete_forever',
        warning: 'block',
        primary: 'info',
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`size-12 rounded-full flex items-center justify-center ${iconClasses[type]}`}>
                            <span className="material-symbols-outlined text-2xl">{icons[type]}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                            <p className="text-sm text-slate-500 mt-1">{message}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 px-6 py-4 flex items-center justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-6 py-2 text-sm font-bold text-white rounded-lg shadow-lg transition-all active:scale-95 ${typeClasses[type]}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;

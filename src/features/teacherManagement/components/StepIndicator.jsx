export default function StepIndicator({ steps }) {
    return (
        <div className="pill-dock mb-4 bg-white border border-slate-200 p-1.5 rounded-full shadow-sm flex items-center gap-1">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className={`step-pill px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 
                        ${step.status === 'active' ? 'bg-primary text-white shadow-md shadow-primary/20' : ''}
                        ${step.status === 'completed' ? 'text-emerald-600 bg-emerald-50' : ''}
                        ${step.status === 'pending' ? 'text-slate-400' : ''}
                    `}
                >
                    <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                    {step.label}
                </div>
            ))}
        </div>
    );
}

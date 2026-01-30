export default function TimeSlotSelector({ availableSlots, selectedSlot, onSlotSelect }) {
    return (
        <div className="px-6 py-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Available Times</p>
            <div className="flex flex-wrap gap-2">
                {availableSlots.map((slot, index) => (
                    <button
                        key={index}
                        onClick={() => slot.available && onSlotSelect?.(slot.time)}
                        disabled={!slot.available}
                        className={`px-3 py-1.5 rounded-md border text-sm font-medium transition-colors ${!slot.available
                                ? "border-slate-200 text-slate-400 cursor-not-allowed line-through decoration-slate-400"
                                : selectedSlot === slot.time
                                    ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm"
                                    : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                            }`}
                    >
                        {slot.time}
                    </button>
                ))}
            </div>
        </div>
    );
}

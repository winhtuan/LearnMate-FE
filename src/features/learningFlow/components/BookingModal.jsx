import { useState } from "react";
import Calendar from "./Calendar";
import TimeSlotSelector from "./TimeSlotSelector";

export default function BookingModal({ teacher, availableSlots, isOpen, onClose, onBookingSuccess }) {
    const [selectedDate, setSelectedDate] = useState(5);
    const [selectedSlot, setSelectedSlot] = useState("10:30 AM");
    const [note, setNote] = useState("");

    const handleConfirm = () => {
        const bookingDetails = {
            teacher: teacher.name,
            date: `Oct ${selectedDate}`,
            time: selectedSlot,
            note
        };
        onBookingSuccess?.(bookingDetails);
    };

    if (!isOpen) return null;

    return (
        <div className="w-full max-w-[480px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900">Book Trial Lesson</h2>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
            </div>
            <div className="overflow-y-auto no-scrollbar flex-1">
                <div className="px-6 pt-6 pb-2">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="bg-center bg-no-repeat bg-cover rounded-md h-12 w-12 shrink-0 shadow-sm" data-alt="Teacher portrait" style={{ backgroundImage: `url("${teacher.image}")` }}></div>
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-900 text-sm font-semibold">{teacher.name}</p>
                            <p className="text-slate-500 text-xs font-medium">{teacher.subject} • {teacher.rate}</p>
                        </div>
                    </div>
                </div>
                <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                <TimeSlotSelector availableSlots={availableSlots} selectedSlot={selectedSlot} onSlotSelect={setSelectedSlot} />
                <div className="px-6 py-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" htmlFor="note">Note (Optional)</label>
                    <textarea
                        className="w-full rounded-lg border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary p-3 resize-none"
                        id="note"
                        placeholder="Introduce yourself or share your learning goals..."
                        rows="3"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="px-6 py-4 bg-white border-t border-slate-100 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">Cancel</button>
                <button onClick={handleConfirm} className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-primary hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]">Confirm Booking</button>
            </div>
        </div>
    );
}

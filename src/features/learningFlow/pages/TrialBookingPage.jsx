import { useState } from "react";
import BookingModal from "../components/BookingModal";
import SuccessModal from "../components/SuccessModal";
import { bookingData } from "../data/booking.data";

export default function TrialBookingPage() {
    const [bookingDetails, setBookingDetails] = useState({
        teacher: "Sarah",
        date: "Oct 5",
        time: "10:30 AM"
    });

    const handleBookingSuccess = (details) => {
        setBookingDetails(details);
    };

    return (
        <div className="relative h-screen w-full flex flex-col">
            <div className="absolute inset-0 z-0 flex flex-col p-8 opacity-40 blur-[2px] pointer-events-none select-none overflow-hidden bg-white">
                <header className="flex justify-between items-center mb-10 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                        <span className="text-xl font-bold tracking-tight">LearnMate</span>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 h-10 bg-slate-100 rounded-lg"></div>
                        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-64 rounded-xl bg-slate-50 border border-slate-200"></div>
                    <div className="h-64 rounded-xl bg-slate-50 border border-slate-200"></div>
                    <div className="h-64 rounded-xl bg-slate-50 border border-slate-200"></div>
                </main>
            </div>
            <div className="absolute inset-0 z-10 bg-slate-900/40 backdrop-blur-sm"></div>
            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full w-full gap-8 p-4 overflow-y-auto">
                <BookingModal
                    teacher={bookingData.teacher}
                    availableSlots={bookingData.availableTimeSlots}
                    isOpen={true}
                    onClose={() => { }}
                    onBookingSuccess={handleBookingSuccess}
                />
                <SuccessModal
                    bookingDetails={bookingDetails}
                    isOpen={true}
                    onClose={() => { }}
                />
            </div>
        </div>
    );
}

import { useState } from "react";
import Header from "../../../shared/components/Header";
import FilterBar from "../components/FilterBar";
import TeacherCard from "../components/TeacherCard";
import TeacherDetailPanel from "../components/TeacherDetailPanel";
import BookingModal from "../components/BookingModal";
import SuccessModal from "../components/SuccessModal";
import ChatDrawer from "../components/ChatDrawer";
import { teachersData } from "../data/teachers.data";
import { bookingData } from "../data/booking.data";

export default function ConnectTeacherPage() {
    const [selectedTeacher, setSelectedTeacher] = useState(teachersData[0]);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

    const tutorsAvailable = "1,240 Tutors available";

    const handleBookClick = () => {
        setIsBookingOpen(true);
    };

    const handleMessageClick = () => {
        setIsChatOpen(true);
    };

    const handleBookingSuccess = (details) => {
        setBookingDetails(details);
        setIsBookingOpen(false);
        setIsSuccessOpen(true);
    };

    const handleClose = () => {
        setIsBookingOpen(false);
        setIsSuccessOpen(false);
        setIsChatOpen(false);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header activeTab="tutors" />
            <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 lg:px-10 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-slate-900">Find your perfect tutor</h1>
                            <span className="text-sm text-slate-500 font-medium">{tutorsAvailable}</span>
                        </div>
                        <FilterBar />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {teachersData.map((teacher) => (
                            <TeacherCard
                                key={teacher.id}
                                teacher={teacher}
                                isSelected={selectedTeacher?.id === teacher.id}
                                onClick={() => setSelectedTeacher(teacher)}
                            />
                        ))}
                    </div>
                </div>
                <TeacherDetailPanel
                    teacher={selectedTeacher}
                    onBookClick={handleBookClick}
                    onMessageClick={handleMessageClick}
                />
            </main>

            {/* Modals Overlay */}
            {(isBookingOpen || isSuccessOpen || isChatOpen) && (
                <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
                    {/* Backdrop for booking/success modals (centered) */}
                    {(isBookingOpen || isSuccessOpen) && (
                        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm pointer-events-auto" onClick={handleClose}></div>
                    )}

                    {/* Container for Centered Modals */}
                    {(isBookingOpen || isSuccessOpen) && (
                        <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
                            <div className="pointer-events-auto">
                                <BookingModal
                                    teacher={selectedTeacher || bookingData.teacher}
                                    availableSlots={bookingData.availableTimeSlots}
                                    isOpen={isBookingOpen}
                                    onClose={handleClose}
                                    onBookingSuccess={handleBookingSuccess}
                                />
                                <SuccessModal
                                    bookingDetails={bookingDetails}
                                    isOpen={isSuccessOpen}
                                    onClose={handleClose}
                                />
                            </div>
                        </div>
                    )}

                    {/* Side Drawer (Has its own internal backdrop and positioning) */}
                    <ChatDrawer
                        isOpen={isChatOpen}
                        onClose={handleClose}
                        teacher={selectedTeacher}
                    />
                </div>
            )}
        </div>
    );
}

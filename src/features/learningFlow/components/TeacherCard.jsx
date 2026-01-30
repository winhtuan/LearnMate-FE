import { useNavigate } from "react-router-dom";

export default function TeacherCard({ teacher, isSelected = false, onClick }) {
    const navigate = useNavigate();

    const handleViewProfile = (e) => {
        e.stopPropagation();
        navigate(`/tutors/${teacher.id}`);
    };

    return (
        <div onClick={onClick} className={`relative flex flex-col md:flex-row p-5 gap-5 rounded-xl bg-white ${isSelected ? "border-2 border-primary" : "border border-slate-200 hover:border-slate-300 hover:shadow-md"} shadow-sm transition-all cursor-pointer group ${teacher.fullyBooked ? "opacity-80" : ""}`}>
            {teacher.superTutor && (
                <div className="md:hidden absolute top-4 right-4 bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">bolt</span> Super Tutor
                </div>
            )}
            <div className="shrink-0">
                <div className={`size-20 rounded-full bg-slate-200 bg-cover bg-center ${isSelected ? "border-2 border-white shadow-sm" : "group-hover:ring-2 ring-primary/20 transition-all"} ${teacher.fullyBooked ? "grayscale" : ""}`} data-alt={`Portrait of ${teacher.name}`} style={{ backgroundImage: `url('${teacher.image}')` }}></div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        {teacher.name}
                        {teacher.verified && <span className="material-symbols-outlined text-primary text-[18px]" title="Verified">verified</span>}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mt-1">
                        <div className="flex items-center text-yellow-500 gap-1">
                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                            <span className="font-bold text-slate-900">{teacher.rating}</span>
                        </div>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500">{teacher.reviews}</span>
                        {teacher.students && (
                            <>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-500">{teacher.students}</span>
                            </>
                        )}
                    </div>
                </div>
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                    {teacher.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {teacher.subjects.map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{subject}</span>
                    ))}
                </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-end md:items-end border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-5 min-w-[140px]">
                {teacher.superTutor && (
                    <div className="hidden md:flex bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full items-center gap-1 mb-2">
                        <span className="material-symbols-outlined text-[14px]">bolt</span> Super Tutor
                    </div>
                )}
                <div className="text-left md:text-right">
                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Rate</p>
                    <p className="text-lg font-bold text-slate-900">{teacher.rate}<span className="text-sm font-normal text-slate-500">/hr</span></p>
                </div>
                <div className="text-right">
                    {teacher.available && (
                        <>
                            <p className="text-xs text-green-600 font-medium mb-1 flex items-center justify-end gap-1">
                                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span> {teacher.available}
                            </p>
                            {isSelected && (
                                <button onClick={handleViewProfile} className="hidden md:flex bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-colors">
                                    View Profile
                                </button>
                            )}
                        </>
                    )}
                    {teacher.nextSlot && (
                        <p className="text-xs text-slate-500 font-medium mb-1">
                            Next: {teacher.nextSlot}
                        </p>
                    )}
                    {teacher.fullyBooked && (
                        <p className="text-xs text-red-400 font-medium mb-1">
                            Fully Booked
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

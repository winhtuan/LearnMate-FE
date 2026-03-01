export default function WeeklyAttendanceCard({ attendance }) {
    return (
        <div className="bg-white border border-[#e7edf3] rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider">
                    Weekly Attendance Trend
                </h3>
                <span className="text-primary text-xs font-semibold">{attendance.average} Average</span>
            </div>
            <div className="flex items-end gap-2 h-16 w-full">
                {attendance.weekData.map((day, index) => (
                    <div
                        key={index}
                        className={`flex-1 ${day.percentage > 0 ? 'bg-primary/20' : 'bg-slate-100'} rounded-t h-[80%] relative group`}
                        title={day.label}
                    >
                        {day.percentage > 0 && (
                            <div
                                className="absolute inset-x-0 bottom-0 bg-primary rounded-t transition-all"
                                style={{ height: `${day.percentage}%` }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[#4c739a] font-medium uppercase">
                {attendance.weekData.map((day, index) => (
                    <span key={index}>{day.day}</span>
                ))}
            </div>
        </div>
    );
}

export default function ScheduleList({ classes }) {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Up Next</p>
            {classes.map((classItem) => (
                <div
                    key={classItem.id}
                    className="group flex items-center justify-between bg-white border border-slate-200 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
                            <span className="text-xs font-bold uppercase">{classItem.time}</span>
                            <span className="text-xs">{classItem.period}</span>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900">{classItem.title}</h5>
                            <p className="text-sm text-slate-500">
                                {classItem.location && `${classItem.location} • `}
                                {classItem.type && `${classItem.type} • `}
                                {classItem.studentCount && `${classItem.studentCount} Students`}
                                {classItem.studentName && `Student: ${classItem.studentName}`}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ActivityFeed({ activities }) {
    return (
        <div className="bg-white border border-slate-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
                <button className="text-xs font-semibold text-slate-500 hover:text-primary">View All</button>
            </div>
            <div className="flex flex-col gap-4 relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100"></div>
                {activities.map((activity) => (
                    <div key={activity.id} className="flex gap-3 relative">
                        {activity.avatar ? (
                            <div
                                className="relative z-10 shrink-0 size-8 rounded-full border-2 border-white bg-cover bg-center shadow-sm"
                                style={{ backgroundImage: `url('${activity.avatar}')` }}
                            />
                        ) : (
                            <div className={`relative z-10 shrink-0 size-8 rounded-full ${activity.iconBg === 'blue' ? 'bg-blue-100 text-blue-600' :
                                    activity.iconBg === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                                        'bg-slate-100 text-slate-600'
                                } border-2 border-white flex items-center justify-center shadow-sm`}>
                                <span className="material-symbols-outlined text-[16px]">{activity.icon}</span>
                            </div>
                        )}
                        <div className="flex-1 pt-1">
                            {activity.type === 'submission' && (
                                <p className="text-sm text-slate-800 leading-tight">
                                    <span className="font-bold">{activity.studentName}</span> {activity.action} <span className="font-medium text-primary">{activity.item}</span>
                                </p>
                            )}
                            {activity.type === 'message' && (
                                <p className="text-sm text-slate-800 leading-tight">
                                    Message from <span className="font-bold">{activity.from}</span> {activity.description}
                                </p>
                            )}
                            {activity.type === 'review' && (
                                <p className="text-sm text-slate-800 leading-tight">{activity.description}</p>
                            )}
                            {activity.type === 'request' && (
                                <>
                                    <p className="text-sm text-slate-800 leading-tight">
                                        <span className="font-bold">{activity.studentName}</span> {activity.action}
                                    </p>
                                    {activity.hasActions && (
                                        <div className="flex gap-2 mt-2">
                                            <button className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors">Accept</button>
                                            <button className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded hover:bg-slate-200 transition-colors">Decline</button>
                                        </div>
                                    )}
                                </>
                            )}
                            <span className="text-xs text-slate-400 mt-1 block">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

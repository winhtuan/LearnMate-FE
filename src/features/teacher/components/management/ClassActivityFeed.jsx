export default function ClassActivityFeed({ activities }) {
  return (
    <div className="bg-white border border-[#e7edf3] rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-[#e7edf3] flex justify-between items-center">
        <h3 className="text-sm font-bold text-[#0d141b] uppercase tracking-wider">
          Class Activity Feed
        </h3>
        <button className="text-primary text-xs font-bold hover:underline">View All</button>
      </div>
      <div className="divide-y divide-slate-100">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-5 flex gap-4 hover:bg-slate-50 transition-colors"
          >
            <div
              className="size-10 rounded-full bg-cover shrink-0"
              style={{ backgroundImage: `url("${activity.avatar}")` }}
            />
            <div className="flex-1">
              {activity.type === 'submission' && (
                <>
                  <p className="text-sm">
                    <span className="font-bold text-[#0d141b]">{activity.studentName}</span>
                    <span className="text-[#4c739a]"> {activity.action} </span>
                    <span className="font-semibold text-primary">{activity.item}</span>
                  </p>
                  <p className="text-xs text-[#4c739a] mt-1">{activity.time}</p>
                </>
              )}
              {activity.type === 'question' && (
                <>
                  <p className="text-sm">
                    <span className="font-bold text-[#0d141b]">{activity.studentName}</span>
                    <span className="text-[#4c739a]"> {activity.action} </span>
                    <span className="font-semibold text-primary">{activity.item}</span>
                  </p>
                  <p className="text-xs italic text-[#4c739a] mt-1">"{activity.question}"</p>
                  <p className="text-xs text-[#4c739a] mt-1">{activity.time}</p>
                </>
              )}
              {activity.type === 'extension' && (
                <>
                  <p className="text-sm">
                    <span className="font-bold text-[#0d141b]">{activity.studentName}</span>
                    <span className="text-[#4c739a]"> {activity.action} </span>
                    <span className="font-semibold text-primary">{activity.item}</span>
                  </p>
                  <p className="text-xs text-[#4c739a] mt-1">{activity.time}</p>
                </>
              )}
              {activity.type === 'device' && (
                <>
                  <p className="text-sm">
                    <span className="font-bold text-[#0d141b]">{activity.studentName}</span>
                    <span className="text-[#4c739a]"> {activity.action}</span>
                  </p>
                  <p className="text-xs text-[#4c739a] mt-1">{activity.time}</p>
                </>
              )}
            </div>
            {activity.type === 'submission' && activity.score && (
              <div className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded self-start">
                {activity.score}
              </div>
            )}
            {activity.type === 'question' && (
              <button className="text-xs font-bold text-primary hover:underline self-center">
                Reply
              </button>
            )}
            {activity.type === 'extension' && activity.hasActions && (
              <div className="flex gap-2 self-center">
                <button className="size-7 flex items-center justify-center rounded bg-green-500 text-white hover:bg-green-600 transition-colors">
                  <span className="material-symbols-outlined text-sm">check</span>
                </button>
                <button className="size-7 flex items-center justify-center rounded bg-red-500 text-white hover:bg-red-600 transition-colors">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

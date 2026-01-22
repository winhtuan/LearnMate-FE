function RecentNotifications({ notifications = [] }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200">
      <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400">notifications</span>
          Recent
        </h3>
        <button className="text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
        </button>
      </div>
      <div className="divide-y divide-slate-100">
        {notifications.map(notification => (
          <div key={notification.id} className="p-4 flex gap-3 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className={`mt-1 size-2 rounded-full ${notification.color} shrink-0`} />
            <div>
              <p className="text-sm font-medium text-slate-900 leading-tight">{notification.text}</p>
              <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 text-center border-t border-slate-200">
        <a className="text-xs font-semibold text-primary block py-1 hover:underline" href="#">View all notifications</a>
      </div>
    </div>
  );
}

export default RecentNotifications;

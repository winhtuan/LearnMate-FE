import RecentNotifications from '../RecentNotifications';

export default function NotificationsWidget({ notifications, loading }) {

  // Notifications usually don't block the UI as hard, but nice to have a small skeleton or just pass loading
  if (loading) {
      return (
        <div className="space-y-4 animate-pulse">
            <div className="h-6 w-32 bg-slate-200 rounded"></div>
            <div className="h-16 bg-white border border-slate-200 rounded-lg"></div>
            <div className="h-16 bg-white border border-slate-200 rounded-lg"></div>
        </div>
      );
  }

  return <RecentNotifications notifications={notifications} />;
}

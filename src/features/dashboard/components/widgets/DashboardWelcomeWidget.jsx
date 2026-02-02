import { useDashboardData } from '../../hooks/useDashboardData';
import WelcomeBanner from '../WelcomeBanner';

export default function DashboardWelcomeWidget() {
  const { data, loading } = useDashboardData();

  if (loading) {
     return (
        <div className="mb-8 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm animate-pulse h-48">
            <div className="p-6 border-b border-slate-100 flex justify-between">
                <div className="h-8 w-64 bg-slate-200 rounded"></div>
                <div className="h-8 w-32 bg-slate-200 rounded"></div>
            </div>
            <div className="p-6 flex gap-4">
                <div className="flex-1 h-24 bg-slate-100 rounded"></div>
                <div className="flex-1 h-24 bg-slate-100 rounded"></div>
                <div className="flex-1 h-24 bg-slate-100 rounded"></div>
            </div>
        </div>
     );
  }

  const user = data?.user || {};
  const stats = data?.stats || {};

  return (
    <WelcomeBanner 
      greeting={user.greeting}
      studentName={user.studentName}
      currentDay={user.currentDay}
      currentDate={user.currentDate}
      currentTerm={user.currentTerm}
      stats={stats}
    />
  );
}

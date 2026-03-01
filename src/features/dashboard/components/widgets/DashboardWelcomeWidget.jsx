import WelcomeBanner from '../WelcomeBanner';
import { useAuth } from '@/app/context/AuthContext';

export default function DashboardWelcomeWidget({ data, loading }) {
  const { user } = useAuth();

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

  const display = data?.display || {};
  const stats = data?.stats || {};

  return (
    <WelcomeBanner
      greeting={display.greeting}
      studentName={user?.firstName}
      currentDay={display.currentDay}
      currentDate={display.currentDate}
      currentTerm={display.currentTerm}
      stats={stats}
    />
  );
}

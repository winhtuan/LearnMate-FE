import { useEffect } from 'react';
import StudentHeader from '@/shared/layout/StudentHeader';
import QuickActions from '@/features/dashboard/components/QuickActions';
import StudyStreak from '@/features/dashboard/components/StudyStreak';
import DashboardWelcomeWidget from '@/features/dashboard/components/widgets/DashboardWelcomeWidget';
import WeeklyScheduleWidget from '@/features/dashboard/components/widgets/WeeklyScheduleWidget';
import CurrentCoursesWidget from '@/features/dashboard/components/widgets/CurrentCoursesWidget';
import NotificationsWidget from '@/features/dashboard/components/widgets/NotificationsWidget';
import { quickActionsData } from '@/features/dashboard/data/quickActions.data';
import { useDashboardBundle } from '@/features/dashboard/hooks/useDashboardBundle';
import { useAuth } from '@/app/context/AuthContext';

function DashboardPage() {
  const { user } = useAuth();
  const { data, loading } = useDashboardBundle();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col">
      <StudentHeader activeTab="dashboard" />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300">

        <DashboardWelcomeWidget data={data} loading={loading} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">
            <WeeklyScheduleWidget schedule={data?.schedule} loading={loading} />
            <CurrentCoursesWidget courses={data?.courses} loading={loading} />
          </div>

          <div className="space-y-8">
            <QuickActions actions={quickActionsData} />
            <NotificationsWidget notifications={data?.notifications} loading={loading} />
            <StudyStreak streak={user?.studyStreak} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;

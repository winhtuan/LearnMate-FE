import { useEffect } from 'react';
import Header from '@/shared/components/layout/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import WeeklySchedule from '../components/WeeklySchedule';
import CurrentCourses from '../components/CurrentCourses';
import QuickActions from '../components/QuickActions';
import RecentNotifications from '../components/RecentNotifications';
import StudyStreak from '../components/StudyStreak';

// Import custom hooks
import { useDashboardData } from '../hooks/useDashboardData';
import { useCourses } from '../hooks/useCourses';
import { useSchedule } from '../hooks/useSchedule';
import { useNotifications } from '../hooks/useNotifications';

// Import static data
import { quickActionsData } from '../data/quickActions.data';

function DashboardPage() {
  // Fetch data using custom hooks
  const { data: dashboardData, loading: dashboardLoading } = useDashboardData();
  const { courses, loading: coursesLoading } = useCourses();
  const { schedule, loading: scheduleLoading } = useSchedule();
  const { notifications, loading: notificationsLoading } = useNotifications();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  // Show loading state while data is being fetched
  const isLoading = dashboardLoading || coursesLoading || scheduleLoading || notificationsLoading;

  if (isLoading) {
    return (
      <div className="bg-background-light font-display text-slate-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Extract user data and stats from dashboardData
  const user = dashboardData?.user || {};
  const stats = dashboardData?.stats || {};

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col">
      <Header profileImageUrl={user.profileImageUrl} />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeBanner 
          greeting={user.greeting}
          studentName={user.studentName}
          currentDay={user.currentDay}
          currentDate={user.currentDate}
          currentTerm={user.currentTerm}
          stats={stats}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WeeklySchedule scheduleData={schedule} />
            <CurrentCourses courses={courses} />
          </div>
          <div className="space-y-8">
            <QuickActions actions={quickActionsData} />
            <RecentNotifications notifications={notifications} />
            <StudyStreak streak={user.studyStreak} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;


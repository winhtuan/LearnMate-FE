import { useEffect } from 'react';
import Header from '@/shared/components/layout/Header';
import QuickActions from '@/features/dashboard/components/QuickActions';
import StudyStreak from '@/features/dashboard/components/StudyStreak';

// Import Widgets (Containers)
import DashboardWelcomeWidget from '@/features/dashboard/components/widgets/DashboardWelcomeWidget';
import WeeklyScheduleWidget from '@/features/dashboard/components/widgets/WeeklyScheduleWidget';
import CurrentCoursesWidget from '@/features/dashboard/components/widgets/CurrentCoursesWidget';
import NotificationsWidget from '@/features/dashboard/components/widgets/NotificationsWidget';

// Import static data for components that don't need async fetching yet
import { quickActionsData } from '@/features/dashboard/data/quickActions.data';
import { useDashboardData } from "@/features/dashboard/hooks/useDashboardData"; // Still needed for Streak if not widgetized

function DashboardPage() {
  // UseDashboardData might still be needed for StudyStreak if we didn't widgetize it.
  // For this refactor, let's assume StudyStreak takes simple props or we reuse the hook just for it.
  // Ideally, StudyStreak should also be a widget.
  const { data: dashboardData } = useDashboardData();
  const user = dashboardData?.user || {};

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col">
      {/* 
        Ideally Header should also be context-aware or take minimal props. 
        For now we pass the avatar URL if available, but Header likely handles its own state too.
      */}
      <Header profileImageUrl={user.profileImageUrl} />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300">
        
        {/* Top Section: Welcome Banner (Self-loading) */}
        <DashboardWelcomeWidget />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <WeeklyScheduleWidget />
            <CurrentCoursesWidget />
          </div>
          
          {/* Sidebar Area */}
          <div className="space-y-8">
            <QuickActions actions={quickActionsData} />
            
            <NotificationsWidget />
            
            {/* 
               If StudyStreak is simple, we keep it here. 
               Or we could make a StudyStreakWidget. 
               For now, we pass the data we managed to get (or undefined if loading).
               Since WelcomeWidget loads the same hook, it might cache, or we accept prop drilling for small things.
            */}
            <StudyStreak streak={user.studyStreak} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;

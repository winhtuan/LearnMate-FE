import { useParams } from 'react-router-dom';
import { useClassDetail } from '@/features/class/hooks/useClassDetail';
import Sidebar from '@/features/class/components/Sidebar';
import Breadcrumb from '@/components/ui/breadcrumb';
import SearchBar from '@/features/class/components/SearchBar';
import HeroBanner from '@/features/class/components/HeroBanner';
import TabNavigation from '@/features/class/components/TabNavigation';
import NextUpSection from '@/features/class/components/NextUpSection';
import ActiveAssignmentsSection from '@/features/class/components/ActiveAssignmentsSection';
import InstructorCard from '@/features/class/components/InstructorCard';
import ResourcesList from '@/features/class/components/ResourcesList';

export default function ClassDetailPage() {
  const { id } = useParams();
  const {
    user,
    classInfo,
    breadcrumbs,
    tabs,
    tasks,
    assignments,
    filters,
    instructor,
    resources,
    navigation
  } = useClassDetail(id);

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <Sidebar user={user} navigation={navigation} />
      
      <main className="flex-1 flex flex-col pl-32 pr-6 md:pr-10 py-6 min-w-0 transition-all duration-300">
        <header className="flex items-center justify-between mb-8 gap-4">
          <Breadcrumb items={breadcrumbs} />
          <SearchBar placeholder="Search in this class..." />
          <button className="md:hidden p-2 text-slate-600">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <HeroBanner
          classCode={classInfo.code}
          classStatus={classInfo.status}
          className={classInfo.name}
          description={classInfo.description}
          backgroundImage={classInfo.backgroundImage}
        />

        <TabNavigation tabs={tabs} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <NextUpSection tasks={tasks} />
            <ActiveAssignmentsSection assignments={assignments} filters={filters} />
          </div>
          
          <div className="flex flex-col gap-8">
            <InstructorCard instructor={instructor} />
            <ResourcesList resources={resources} />
          </div>
        </div>
      </main>
    </div>
  );
}

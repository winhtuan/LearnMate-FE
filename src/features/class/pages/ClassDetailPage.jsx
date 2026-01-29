import { useParams } from 'react-router-dom';
import { useClassDetail } from '../hooks/useClassDetail';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import HeroBanner from '../components/HeroBanner';
import TabNavigation from '../components/TabNavigation';
import NextUpSection from '../components/NextUpSection';
import ActiveAssignmentsSection from '../components/ActiveAssignmentsSection';
import InstructorCard from '../components/InstructorCard';
import ResourcesList from '../components/ResourcesList';

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

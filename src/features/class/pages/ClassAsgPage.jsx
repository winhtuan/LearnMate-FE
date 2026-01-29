import { useParams } from 'react-router-dom';
import { useClassDetail } from '../hooks/useClassDetail';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import HeroBanner from '../components/HeroBanner';
import TabNavigation from '../components/TabNavigation';
import AssignmentCard from '../components/AssignmentCard';
import AssignmentDetailPanel from '../components/AssignmentDetailPanel';
import { assignmentsData, assignmentDetailData, tabItems, breadcrumbItems } from '../data/classAssignment.data';

export default function ClassAsgPage() {
  const { id } = useParams();
  const { user, classInfo, navigation } = useClassDetail(id);

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <Sidebar user={user} navigation={navigation} />
      
      <main className="flex-1 flex flex-col pl-32 pr-6 md:pr-10 py-6 min-w-0 transition-all duration-300">
        <header className="flex items-center justify-between mb-8 gap-4">
          <Breadcrumb items={breadcrumbItems} />
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

        <TabNavigation tabs={tabItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Upcoming</h3>
              <div className="space-y-3">
                {assignmentsData.upcoming.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2 mt-2">Missing</h3>
              <div className="space-y-3">
                {assignmentsData.missing.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2 mt-2">Completed</h3>
              <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                {assignmentsData.completed.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AssignmentDetailPanel assignment={assignmentDetailData} />
          </div>
        </div>
      </main>
    </div>
  );
}

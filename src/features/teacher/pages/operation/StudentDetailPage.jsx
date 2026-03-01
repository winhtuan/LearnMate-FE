import StudentProfileHeader from '@/features/teacher/components/operation/StudentProfileHeader';
import NavigationTabs from '@/features/teacher/components/operation/NavigationTabs';
import NoteInput from '@/features/teacher/components/operation/NoteInput';
import NoteHistoryItem from '@/features/teacher/components/operation/NoteHistoryItem';
import QualitativeInsights from '@/features/teacher/components/operation/QualitativeInsights';
import FocusAreas from '@/features/teacher/components/operation/FocusAreas';
import UpcomingEvents from '@/features/teacher/components/operation/UpcomingEvents';
import Breadcrumb from '@/features/teacher/components/operation/Breadcrumb';
import { detailStudentData } from '@/features/teacher/data/operation/detailStudent.data';

export default function StudentDetailPage() {
  // In a real app, you might fetch data based on an ID from useParams()
  // const { id } = useParams();
  const { 
    student, 
    navigation, 
    noteHistory, 
    qualitativeInsights, 
    focusAreas, 
    upcomingEvents 
  } = detailStudentData;

  const breadcrumbItems = [
    { label: "Dashboard" },
    { label: "Grade 10" },
    { label: "Alex Rivera" }
  ];

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <StudentProfileHeader student={student} />
      
      <NavigationTabs tabs={navigation} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <NoteInput />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Note History</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Filter by:</span>
                <select className="text-xs border-none bg-transparent font-medium text-primary focus:ring-0 cursor-pointer p-0 pr-4">
                  <option>All Teachers</option>
                  <option>Math Dept</option>
                  <option>Counseling</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-0 relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-700 z-0"></div>
              {noteHistory.map((note) => (
                <NoteHistoryItem key={note.id} data={note} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <QualitativeInsights data={qualitativeInsights} />
          <FocusAreas data={focusAreas} />
          <UpcomingEvents data={upcomingEvents} />
        </div>
      </div>
    </main>
  );
}

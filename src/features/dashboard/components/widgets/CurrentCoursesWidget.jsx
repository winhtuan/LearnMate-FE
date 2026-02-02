import { useCourses } from '../../hooks/useCourses';
import CurrentCourses from '../CurrentCourses';

export default function CurrentCoursesWidget() {
  const { courses, loading } = useCourses();

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg border border-slate-200 animate-pulse h-48">
        <div className="h-6 w-32 bg-slate-200 rounded mb-4"></div>
        <div className="space-y-3">
            <div className="h-20 bg-slate-100 rounded"></div>
            <div className="h-20 bg-slate-100 rounded"></div>
        </div>
      </div>
    );
  }

  return <CurrentCourses courses={courses} />;
}

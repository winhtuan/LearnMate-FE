import { useSchedule } from '../../hooks/useSchedule';
import WeeklySchedule from '../WeeklySchedule';

export default function WeeklyScheduleWidget() {
  const { schedule, loading } = useSchedule();

  if (loading) {
     return (
      <div className="bg-white p-6 rounded-xl border border-slate-200 animate-pulse h-64">
        <div className="h-6 w-40 bg-slate-200 rounded mb-6"></div>
        <div className="grid grid-cols-7 gap-4">
             {[...Array(7)].map((_, i) => (
                <div key={i} className="h-32 bg-slate-100 rounded"></div>
             ))}
        </div>
      </div>
    );
  }

  return <WeeklySchedule scheduleData={schedule} />;
}

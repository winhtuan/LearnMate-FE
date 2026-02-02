import { scheduleData } from "@/features/teacher/data/operation/scheduleAvailability.data";
import TeacherLayout from "@/features/teacher/components/operation/TeacherLayout";
import ScheduleHeader from "@/features/teacher/components/operation/ScheduleHeader";
import AvailabilitySidebar from "@/features/teacher/components/operation/AvailabilitySidebar";
import CalendarGrid from "@/features/teacher/components/operation/CalendarGrid";

export default function ScheduleAvailability() {
  const { header, calendar, availability, aiInsight } = scheduleData;

  return (
        <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col min-w-0">
            <ScheduleHeader data={header} />
            <CalendarGrid data={calendar} />
          </div>
          
          <AvailabilitySidebar availability={availability} aiInsight={aiInsight} />
        </main>
  );
}

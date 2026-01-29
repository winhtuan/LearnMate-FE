import { scheduleData } from "../data/scheduleAvailability.data";
import ScheduleHeader from "../components/ScheduleHeader";
import CalendarGrid from "../components/CalendarGrid";
import AvailabilitySidebar from "../components/AvailabilitySidebar";

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

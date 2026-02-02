
import Sidebar from "../components/Sidebar";
import Breadcrumb from '../../../shared/components/ui/Breadcrumb';
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import TabNavigation from "../components/TabNavigation";
import ScheduleHeader from "../components/ScheduleHeader";
import ScheduleCalendar from "../components/ScheduleCalendar";
import EventTypeLegend from "../components/EventTypeLegend";
import { classScheduleData } from "../data/classSchedule.data";

export default function ClassSchedule() {
  const { user, navigation, breadcrumbItems, classInfo, tabs, calendar, eventTypes } = classScheduleData;

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <Sidebar user={user} navigation={navigation} />

      <main className="flex-1 flex flex-col pl-32 pr-6 md:pr-10 py-6 min-w-0 transition-all duration-300">
        <header className="flex items-center justify-between mb-8 gap-4">
          <Breadcrumb items={breadcrumbItems} />
          <SearchBar placeholder="Search in this class..." />
        </header>

        <HeroBanner 
          classCode={classInfo.code}
          classStatus={classInfo.status}
          className={classInfo.title}
          description={classInfo.description}
          backgroundImage={classInfo.backgroundImage}
        />

        <TabNavigation tabs={tabs} />

        <div className="flex flex-col gap-6 pb-10">
          <ScheduleHeader month={calendar.month} year={calendar.year} />
          
          <ScheduleCalendar days={calendar.days} />
          
          <EventTypeLegend eventTypes={eventTypes} />
        </div>
      </main>
    </div>
  );
}

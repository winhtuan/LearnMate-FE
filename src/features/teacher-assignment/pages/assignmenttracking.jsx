import TopHeader from "../components/TopHeader";
import ClassHeader from "../components/ClassHeader";
import PageTabs from "../components/PageTabs";
import StatsCards from "../components/StatsCards";
import TrackingFilters from "../components/TrackingFilters";
import AssignmentTrackingTable from "../components/AssignmentTrackingTable";
import ActionSidebar from "../components/ActionSidebar";
import { assignmentTrackingData } from "../data/assignment-tracking.data";

export default function AssignmentTracking() {
  const {
    user,
    navigation,
    classInfo,
    tabs,
    stats,
    assignments,
    needsAttention,
  } = assignmentTrackingData;

  return (
    <div className="min-h-screen flex flex-col bg-background-light font-display">
      {/* Top Header */}
      <TopHeader user={user} navigation={navigation} />

      {/* Main Content */}
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-6 flex flex-col gap-6">
        {/* Class Header */}
        <ClassHeader data={classInfo} />

        {/* Page Tabs */}
        <PageTabs tabs={tabs} />

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Column */}
          <div className="flex-1 flex flex-col gap-6">
            <StatsCards stats={stats} />
            <TrackingFilters />
            <AssignmentTrackingTable assignments={assignments} />
          </div>

          {/* Right Sidebar */}
          <ActionSidebar needsAttention={needsAttention} />
        </div>
      </main>
    </div>
  );
}

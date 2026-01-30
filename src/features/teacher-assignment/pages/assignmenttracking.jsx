import ClassDetailLayout from "../../teacherManagement/components/ClassDetailLayout";
import StatsCards from "../components/StatsCards";
import TrackingFilters from "../components/TrackingFilters";
import AssignmentTrackingTable from "../components/AssignmentTrackingTable";
import ActionSidebar from "../components/ActionSidebar";
import { assignmentTrackingData } from "../data/assignment-tracking.data";

export default function AssignmentTracking() {
  const {
    stats,
    assignments,
    needsAttention,
  } = assignmentTrackingData;

  return (
    <ClassDetailLayout activeTab="assignments">
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
    </ClassDetailLayout>
  );
}

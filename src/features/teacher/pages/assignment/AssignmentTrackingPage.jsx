import ClassDetailLayout from "@/features/teacher/components/management/ClassDetailLayout";
import StatsCards from "@/features/teacher/components/assignment/StatsCards";
import TrackingFilters from "@/features/teacher/components/assignment/TrackingFilters";
import AssignmentTrackingTable from "@/features/teacher/components/assignment/AssignmentTrackingTable";
import ActionSidebar from "@/features/teacher/components/assignment/ActionSidebar";
import { assignmentTrackingData } from "@/features/teacher/data/assignment/assignmentTracking.data";

export default function AssignmentTrackingPage() {
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

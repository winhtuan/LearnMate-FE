import ClassDetailLayout from "@/features/teacher/components/management/ClassDetailLayout";
import StatsCards from "@/features/teacher/components/assignment/StatsCards";
import TrackingFilters from "@/features/teacher/components/assignment/TrackingFilters";
import AssignmentTrackingTable from "@/features/teacher/components/assignment/AssignmentTrackingTable";
import ActionSidebar from "@/features/teacher/components/assignment/ActionSidebar";
import { assignmentTrackingData } from "@/features/teacher/data/assignment/assignment-tracking.data";

export default function AllAssignmentsTrackingPage() {
  const { user, navigation, filters, assignments } = assignmentTrackingData;

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col transition-colors duration-300">
      {/* Top Header */}
      <TopHeader user={user} navigation={navigation} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header Section */}
        <AssignmentHeader />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-background-light">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
            {/* Filters and Search */}
            <AssignmentFilters filters={filters} />

            {/* Table Card */}
            <div>
              <AssignmentTable assignments={assignments} />
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

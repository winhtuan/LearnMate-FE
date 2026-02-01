import ClassDetailLayout from "@/features/teacher/components/management/ClassDetailLayout";
import CreateAssignmentHeader from "@/features/teacher/components/assignment/CreateAssignmentHeader";
import AssignmentEditor from "@/features/teacher/components/assignment/AssignmentEditor";
import SettingsSidebar from "@/features/teacher/components/assignment/SettingsSidebar";
import { assignmentTrackingAllData } from "@/features/teacher/data/assignment/assignment-tracking-all.data";

export default function CreateAssignmentPage() {
  const { user, navigation } = assignmentTrackingAllData;

  return (
    <div className="bg-background-light font-display text-slate-900 antialiased min-h-screen flex flex-col transition-colors duration-300">
      {/* Top Main Navigation */}
      <TopHeader user={user} navigation={navigation} />

      {/* Header */}
      <CreateAssignmentHeader />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Assignment Editor (70%) */}
          <AssignmentEditor />

          {/* Right Column: Settings Panel (30%) - Sticky */}
          <SettingsSidebar />
        </div>
      </main>
    </div>
  );
}

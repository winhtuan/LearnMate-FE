import React from "react";
import ClassDetailLayout from "@/features/teacher/components/management/ClassDetailLayout";
import ClassStatCard from "@/features/teacher/components/management/ClassStatCard";
import UpcomingSessionCard from "@/features/teacher/components/management/UpcomingSessionCard";
import ClassActivityFeed from "@/features/teacher/components/management/ClassActivityFeed";
import NeedsAttentionCard from "@/features/teacher/components/management/NeedsAttentionCard";
import MaterialCard from "@/features/teacher/components/management/MaterialCard";
import PerformanceSummaryCard from "@/features/teacher/components/management/PerformanceSummaryCard";
import { classOverviewData } from "@/features/teacher/data/management/classOverview.data";

export default function ClassOverviewPage() {
  const {
    statistics,
    upcomingSession,
    activityFeed,
    needsAttention,
    performance
  } = classOverviewData;

  return (
    <ClassDetailLayout activeTab="overview">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statistics.map((stat) => (
          <ClassStatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-10 gap-8">
        {/* Left Column */}
        <div className="col-span-10 lg:col-span-6 flex flex-col gap-6">
          {/* Upcoming Session */}
          <UpcomingSessionCard session={upcomingSession} />

          {/* Activity Feed */}
          <ClassActivityFeed activities={activityFeed} />
        </div>

        {/* Right Column */}
        <div className="col-span-10 lg:col-span-4 flex flex-col gap-6">
          {/* Needs Attention */}
          <NeedsAttentionCard alerts={needsAttention} />

          {/* Performance Summary */}
          <PerformanceSummaryCard performance={performance} />
        </div>
      </div>
    </ClassDetailLayout>
  );
}

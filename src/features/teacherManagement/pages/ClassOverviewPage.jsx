import ClassDetailLayout from "../components/ClassDetailLayout";
import ClassStatCard from "../components/ClassStatCard";
import UpcomingSessionCard from "../components/UpcomingSessionCard";
import ClassActivityFeed from "../components/ClassActivityFeed";
import NeedsAttentionCard from "../components/NeedsAttentionCard";
import PerformanceSummaryCard from "../components/PerformanceSummaryCard";
import { classOverviewData } from "../data/classOverview.data";

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

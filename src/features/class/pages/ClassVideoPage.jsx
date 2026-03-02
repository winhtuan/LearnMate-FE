import Sidebar from "../components/Sidebar";
import Breadcrumb from '@/components/ui/breadcrumb';
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import TabNavigation from "../components/TabNavigation";
import LiveSessionCard from "../components/LiveSessionCard";
import VideoLectureCard from "../components/VideoLectureCard";
import { classVideoData } from "../data/classVideo.data";

export default function ClassVideoPage() {
  const { user, navigation, breadcrumbItems, classInfo, tabs, liveSession, recordedLectures } = classVideoData;

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
          backgroundImage={classInfo.bannerImage}
        />

        <TabNavigation tabs={tabs} />

        <div className="flex flex-col gap-10 pb-10">
          <LiveSessionCard session={liveSession} />

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">Recorded Lectures</h3>
              <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                <button className="p-2 rounded-lg hover:bg-slate-100 text-primary transition-colors">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="material-symbols-outlined">list</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recordedLectures.map((lecture) => (
                <VideoLectureCard key={lecture.id} lecture={lecture} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

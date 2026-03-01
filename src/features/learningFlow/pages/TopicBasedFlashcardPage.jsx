import StudentHeader from '@/shared/layout/StudentHeader';
import DailyMixHero from "../components/DailyMixHero";
import StudyCard from "../components/StudyCard";
import TopicGrid from "../components/TopicGrid";

export default function TopicBasedFlashcardPage() {
    return (
        <div className="bg-background-light text-[#0d141b] font-display transition-colors duration-200">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <StudentHeader activeTab="resources" />

                <main className="flex flex-col items-center w-full px-4 md:px-10 py-8 gap-12 max-w-[1280px] mx-auto">
                    <DailyMixHero />
                    <StudyCard />
                    <TopicGrid />
                </main>
            </div>
        </div>
    );
}

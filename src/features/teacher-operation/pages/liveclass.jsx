import { liveClassData } from "../data/liveClass.data";
import LiveClassHeader from "../components/LiveClassHeader";
import LiveClassVideoStage from "../components/LiveClassVideoStage";
import LiveClassSidebar from "../components/LiveClassSidebar";

export default function LiveClass() {
  const { header, teacher, participants, sidebar } = liveClassData;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden h-screen w-screen flex flex-col group/design-root">
      <LiveClassHeader data={header} />
      
      <main className="flex flex-1 overflow-hidden relative">
        <LiveClassVideoStage teacher={teacher} participants={participants} />
        <LiveClassSidebar sidebar={sidebar} />
      </main>
    </div>
  );
}

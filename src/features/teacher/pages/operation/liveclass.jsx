import TeacherLayout from "@/features/teacher/components/operation/TeacherLayout";
import LiveClassHeader from "@/features/teacher/components/operation/LiveClassHeader";
import LiveClassVideoStage from "@/features/teacher/components/operation/LiveClassVideoStage";
import LiveClassSidebar from "@/features/teacher/components/operation/LiveClassSidebar";
import { liveClassData } from "@/features/teacher/data/operation/liveClass.data";

export default function LiveClass() {
  const { header, teacher, participants, sidebar } = liveClassData;

  return (
    <div className="bg-background-light text-slate-900 font-display overflow-hidden h-screen w-screen flex flex-col group/design-root">
      <LiveClassHeader data={header} />
      
      <main className="flex flex-1 overflow-hidden relative">
        <LiveClassVideoStage teacher={teacher} participants={participants} />
        <LiveClassSidebar sidebar={sidebar} />
      </main>
    </div>
  );
}

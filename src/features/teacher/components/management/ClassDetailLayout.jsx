import { useParams } from "react-router-dom";
import TeacherHeader from "@/shared/components/layout/TeacherHeader";
import Breadcrumb from "./Breadcrumb";
import ClassInfoHeader from "./ClassInfoHeader";
import ClassTabNavigation from "./ClassTabNavigation";
import { classOverviewData } from "../../data/management/classOverview.data";

export default function ClassDetailLayout({ children, activeTab }) {
  const { classId } = useParams();
  
  // In a real app, fetch class data based on classId
  // For now, using static data
  const {
    class: classInfo,
    breadcrumb,
    tabs,
    user
  } = classOverviewData;

  return (
    <div className="bg-background-light text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          {/* Shared Teacher Header */}
          <TeacherHeader activeNav="classes" user={user} />
          
          <main className="flex flex-1 justify-center py-6 px-10">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              {/* Breadcrumb */}
              <Breadcrumb items={breadcrumb} />

              {/* Class Info Header */}
              <ClassInfoHeader classInfo={classInfo} />

              {/* Tab Navigation */}
              <ClassTabNavigation tabs={tabs.map(tab => ({
                ...tab,
                active: tab.label.toLowerCase() === activeTab
              }))} />

              {/* Page Content */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

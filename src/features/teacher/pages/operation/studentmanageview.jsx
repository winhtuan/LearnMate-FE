import TeacherLayout from "@/features/teacher/components/operation/TeacherLayout";
import StudentManageHeader from "@/features/teacher/components/operation/StudentManageHeader";
import StudentManageFilters from "@/features/teacher/components/operation/StudentManageFilters";
import StudentTable from "@/features/teacher/components/operation/StudentTable";
import { studentManageViewData } from "@/features/teacher/data/operation/studentManageView.data";

export default function StudentManageView() {
  const { header, filters, table } = studentManageViewData;

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div>
        <StudentManageHeader title={header.title} description={header.description} />
        
        <StudentManageFilters data={filters} />
        
        <StudentTable data={table} />
      </div>
    </main>
  );
}

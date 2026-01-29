import { studentManageViewData } from "../data/studentManageView.data";
import StudentManageHeader from "../components/StudentManageHeader";
import StudentManageFilters from "../components/StudentManageFilters";
import StudentTable from "../components/StudentTable";

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

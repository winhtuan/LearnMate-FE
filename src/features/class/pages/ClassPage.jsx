import Sidebar from "../components/Sidebar";
import Breadcrumb from '../../../shared/components/ui/Breadcrumb';
import SearchBar from "../components/SearchBar";
import ClassFilterTabs from "../components/ClassFilterTabs";
import ClassStatsCard from "../components/ClassStatsCard";
import ClassCard from "../components/ClassCard";
import { classListData } from "../data/classList.data";

export default function ClassPage() {
  const { user, navigation, stats, classes } = classListData;

  const breadcrumbItems = [
    { label: "Current Term", href: "#", active: false },
    { label: "Classes", href: "#", active: true }
  ];

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <Sidebar user={user} navigation={navigation} />
      
      <main className="flex-1 flex flex-col pl-32 pr-6 md:pr-10 py-6 min-w-0 transition-all duration-300">
        <header className="flex items-center justify-between mb-8 gap-4">
          <Breadcrumb items={breadcrumbItems} />
          <SearchBar placeholder="Search courses, assignments..." />
          <button className="md:hidden p-2 text-slate-600">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <section className="flex items-center justify-between gap-6 mb-8">
          <ClassFilterTabs activeTab="all" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ClassStatsCard 
            type="courses" 
            value={stats.coursesInProgress} 
            label="Courses in Progress" 
          />
          <ClassStatsCard 
            type="tasks" 
            value={stats.tasksCompleted} 
            label="Tasks Completed" 
          />
          <ClassStatsCard 
            type="nextClass" 
            value={stats.nextClass} 
            label="Next Class" 
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
          {classes.map((classItem) => (
            <ClassCard key={classItem.id} classData={classItem} />
          ))}
        </section>
      </main>
    </div>
  );
}

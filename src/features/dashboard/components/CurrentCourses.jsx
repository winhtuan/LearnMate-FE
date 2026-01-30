import { Link } from "react-router-dom";

function CurrentCourses({ courses = [] }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-4 px-1">
        <h3 className="text-xl font-bold text-slate-900">Current Courses</h3>
        <Link className="text-sm font-medium text-slate-500 hover:text-primary" to="/classes">View All</Link>
      </div>
      <div className="space-y-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="group bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className={`size-12 rounded-lg ${course.iconBg} flex items-center justify-center shrink-0`}>
        <span className={`material-symbols-outlined ${course.iconColor}`}>{course.icon}</span>
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex justify-between mb-1">
          <h4 className="font-semibold text-slate-900 truncate">{course.title}</h4>
          <span className="text-xs font-bold text-slate-500">{course.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5">
          <div className={`${course.progressColor} h-1.5 rounded-full`} style={{ width: `${course.progress}%` }} />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          {course.nextTask}
          {course.dueDate && <> • <span className="text-orange-500">{course.dueDate}</span></>}
        </p>
      </div>
      <button className="shrink-0 p-2 rounded hover:bg-slate-50 text-slate-400 hover:text-primary">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}

export default CurrentCourses;

import { Link, useParams } from "react-router-dom";

export default function ClassTabNavigation({ tabs }) {
  const { classId } = useParams();

  const getTabPath = (route) => {
    // Handle assignments route which goes to teacher-assignment feature
    if (route === "assignments") {
      return "/teacher-assignment/tracking";
    }
    // Handle statistics route (using 'statics' path as per existing route)
    if (route === "statistics") {
      return `/tutorDashboard/statics`;
    }
    // All other routes follow the pattern: /tutorDashboard/class/:classId/:route
    return `/tutorDashboard/class/${classId}/${route}`;
  };

  return (
    <div className="border-b border-[#cfdbe7] mb-8">
      <div className="flex gap-8">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 transition-colors ${
              tab.active
                ? 'border-primary text-primary'
                : 'border-transparent text-[#4c739a] hover:text-[#0d141b]'
            }`}
            to={getTabPath(tab.route)}
          >
            <p className="text-sm font-bold tracking-[0.015em]">{tab.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

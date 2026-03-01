import { Outlet } from "react-router-dom";
import TeacherHeader from "@/shared/layout/TeacherHeader";

export default function TeacherLayout() {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300">
      <TeacherHeader activeNav="students" />
      <Outlet />
    </div>
  );
}

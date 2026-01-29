import { Route, Routes } from "react-router-dom";
import ClassPage from "@/features/class/pages/ClassPage";
import ClassDetailPage from "@/features/class/pages/ClassDetailPage";
import ClassMaterialPage from "@/features/class/pages/ClassMaterialPage";
import ClassSchedule from "@/features/class/pages/ClassSchedule";

const ClassRoute = () => {
    return (
        <Routes>
            <Route index element={<ClassPage />} />
            <Route path=":id" element={<ClassDetailPage />} />
            <Route path=":id/materials" element={<ClassMaterialPage />} />
            <Route path=":id/schedule" element={<ClassSchedule />} />
        </Routes>
    );
};

export default ClassRoute;

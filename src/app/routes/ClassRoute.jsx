import { Route, Routes } from "react-router-dom";
import ClassPage from "@/features/class/pages/ClassPage";
import ClassDetailPage from "@/features/class/pages/ClassDetailPage";
import ClassAsgPage from "@/features/class/pages/ClassAsgPage";
import ClassMaterialPage from "@/features/class/pages/ClassMaterialPage";
import ClassSchedule from "@/features/class/pages/ClassSchedule";
import ClassVideoPage from "@/features/class/pages/ClassVideoPage";

const ClassRoute = () => {
    return (
        <Routes>
            <Route index element={<ClassPage />} />
            <Route path=":id" element={<ClassDetailPage />} />
            <Route path=":id/assignments" element={<ClassAsgPage />} />
            <Route path=":id/materials" element={<ClassMaterialPage />} />
            <Route path=":id/schedule" element={<ClassSchedule />} />
            <Route path=":id/videos" element={<ClassVideoPage />} />
        </Routes>
    );
};

export default ClassRoute;

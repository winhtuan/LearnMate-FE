import { Route, Routes } from "react-router-dom";
import ClassPage from "@/features/class/pages/ClassPage";
import ClassDetailPage from "@/features/class/pages/ClassDetailPage";
import ClassMaterialPage from "@/features/class/pages/ClassMaterialPage";

const ClassRoute = () => {
    return (
        <Routes>
            <Route index element={<ClassPage />} />
            <Route path=":id" element={<ClassDetailPage />} />
            <Route path=":id/materials" element={<ClassMaterialPage />} />
        </Routes>
    );
};

export default ClassRoute;

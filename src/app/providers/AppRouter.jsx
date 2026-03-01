// src/app/providers/AppRouter.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppRouter;

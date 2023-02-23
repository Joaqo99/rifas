import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HomePage } from "../rifas/pages/HomePage";
import { RifasRoutes } from "../rifas/routes/RifasRoutes";

export const AppRouter = () => {

    const authStatus = 'not-authenticated';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                ? <Route path="/auth/*" element={<AuthRoutes />}/>
                :<Route path="/*" element={<RifasRoutes />}/>
            }
            
            <Route path="/*" element={<Navigate to="/auth/login"/> }/>
        </Routes>
    );
}
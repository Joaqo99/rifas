import { Navigate, Route, Routes} from "react-router-dom"
import { AuthNav } from "../components/AuthNav"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

import './AuthRoutesStyles.css'

export const AuthRoutes = () =>{
    return (
        <div className="container contenedor">
            <AuthNav />

            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
            
                <Route path="/*" element={<Navigate to="login" />}/>
            </Routes>
        </div>
    )
}
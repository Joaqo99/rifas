import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { AjustesPage } from "../pages/AjustesPage"
import { HomePage } from "../pages/HomePage"
import { MensajesPage } from "../pages/MensajesPage"
import { MisSorteosPage } from "../pages/MisSorteosPage"
import { SearchPage } from "../pages/SearchPage"

export const RifasRoutes = () =>{
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <Routes>
                <Route path="home" element={<HomePage />}/>
                <Route path="exploracion" element={<SearchPage />}/>
                <Route path="missorteos" element={<MisSorteosPage />}/>
                <Route path="ajustes" element={<AjustesPage />}/>

                <Route path="/*" element={<Navigate to="home" />}/>
            </Routes>
        </div>  
    )
}
import { Navigate, Route, Routes } from "react-router-dom"
import { AjustesPage } from "../pages/AjustesPage"
import { HomePage } from "../pages/HomePage"
import { MensajesPage } from "../pages/MensajesPage"
import { MisSorteosPage } from "../pages/MisSorteosPage"
import { SearchPage } from "../pages/SearchPage"

export const RifasRoutes = () =>{
    return (
        <Routes>
            <Route path="home" element={<HomePage />}/>
            <Route path="exploracion" element={<SearchPage />}/>
            <Route path="missorteos" element={<MisSorteosPage />}/>
            <Route path="ajustes" element={<AjustesPage />}/>
            <Route path="mensajes" element={<MensajesPage />}/>
        
            <Route path="/*" element={<Navigate to="home" />}/>
        </Routes>
    )
}
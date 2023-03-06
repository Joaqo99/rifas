import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { RifasRoutes } from "../rifas/routes/RifasRoutes";
import { Spinner } from "../ui/components/Spinner";

export const AppRouter = () => {

    const {status} = useCheckAuth()

    if(status === 'checking'){
        return (<Spinner />)
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                ? <Route path="/auth/*" element={<AuthRoutes />}/>
                :<Route path="/*" element={<RifasRoutes />}/>
            }
            
            <Route path="/*" element={<Navigate to="/auth/login"/> }/>
        </Routes>
    );
}
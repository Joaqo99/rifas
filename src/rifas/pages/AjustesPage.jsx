import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const AjustesPage = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    };

    return (
        <div className="container">
            <h1 className="display-5">Ajustes</h1>
            <button onClick={onLogout} type="button" className="btn btn-danger">Cerrar sesión</button>
        </div>
    );
}
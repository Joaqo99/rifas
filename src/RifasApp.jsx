import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const RifasApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    );
}
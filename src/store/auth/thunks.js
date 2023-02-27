import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch)=> {
        dispatch(checkingCredentials())
    };
};

export const startGoogleLogin = (email, password) => {
    return async (dispatch)=> {
        dispatch(checkingCredentials())
    };
};

export const startFacebookLogin = (email, password) => {
    return async (dispatch)=> {
        dispatch(checkingCredentials())
    };
};
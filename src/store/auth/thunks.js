import { async } from "@firebase/util";
import { registerUserWithEmailPassword, signInWithFacebook, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch)=> {
        dispatch(checkingCredentials())
    };
};

export const startGoogleLogin = () => {
    return async (dispatch)=> {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout());

        dispatch(login(result))
    };
};

export const startFacebookLogin = () => {
    return async (dispatch)=> {
        dispatch(checkingCredentials())

        const result = await signInWithFacebook();
        if(!result.ok) return dispatch(logout());

        dispatch(login(result));
    };
};

export const startCreatingUserWithEmailPassword = ({email, password, displayName, fullName}) => {
    return async (dispatch)=> {
        dispatch(checkingCredentials());

        const {ok, uid, errorMessage} = await registerUserWithEmailPassword({email, password, displayName, fullName});
    
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, fullName, email}));
    }
}
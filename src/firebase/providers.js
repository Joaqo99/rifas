import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { FacebookAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async ()=>{
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, uid} = result.user;

        return {
            ok: true,
            displayName,
            email, 
            uid
        }
        
    } catch (err){
        const errorMessage = err.message

        return {
            ok: false,
            errorMessage
        }
    }
}

export const signInWithFacebook = async ()=>{
    try{
        const result = await signInWithPopup(FirebaseAuth, facebookProvider);
        const {displayName, email, uid} = result.user;

        return {
            ok: true,
            displayName,
            email, 
            uid
        }
        
    } catch (err){
        const errorMessage = err.message

        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName, fullName, condicionesAceptadas}) =>{
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid} = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName, fullName})

        return {
            ok: true, uid, email, displayName, fullName
        }

    } catch(err){
        return {
            ok: false, 
            errorMessage: err.message
        }
    }
};
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
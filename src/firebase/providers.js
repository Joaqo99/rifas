import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

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
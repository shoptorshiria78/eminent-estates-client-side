import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    

    const registration = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword( auth, email, password);

    };
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    };

    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { user, registration, signIn, logOut, googleLogIn, loading}
    // console.log("authprovider", user?.email)

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};



export default AuthProvider;
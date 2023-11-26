import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import useAxiosPublic from "../AxiosInterfaces/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider();


    const registration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const user = {email: currentUser.email};
                console.log(user)
                    axiosPublic.post('/jwt', user)
                    .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token)
                        }
                    })
            }
            else{
                localStorage.removeItem('access-token')
            }
            
            setLoading(false)
            
        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = { user, registration, signIn, logOut, googleLogIn, loading, updateUser }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};



export default AuthProvider;
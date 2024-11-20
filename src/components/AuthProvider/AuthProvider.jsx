import { createUserWithEmailAndPassword, GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../../Firebase/firebase.config'

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const handleRegister = (email,password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut = () => {
        return signOut(auth)
    }
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const manageProfile = (manageData) => {
        return updateProfile(auth.currentUser, manageData)
    }
    // const resetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //         alert("A password link has been sent to your email")
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })
    // }
    const authInfo = {
        handleGoogleLogin,
        handleLogin,
        handleRegister,
        handleSignOut,
        user, 
        setUser,
        manageProfile,
        loading,
        // resetPassword
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if(currentUser){
                    setUser(currentUser)
                }else{
                    setUser(null)
                }
                setLoading(false)
            return() => {
                unsubscribe()
            }
        })
    }, [])
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
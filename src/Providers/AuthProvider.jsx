import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    console.log(dataLoading)

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setDataLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
            setDataLoading(false)
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(() => {
        setDataLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setDataLoading(false);
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        dataLoading,
        createUser,
        signIn,
        logOut,
        setDataLoading,
        setUser
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
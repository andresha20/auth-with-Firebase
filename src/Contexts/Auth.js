import { useEffect } from 'react';
import React, { useContext, useState } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const changeEmail = (email) => {
        return user.updateEmail(email);
    }
    const changePassword = (password) => {
        return user.updatePassword(password);
    }
    
    const values = {
        user, signup, login, logout, changeEmail, changePassword, isUpdating, setIsUpdating
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AuthContext);
}

export { AuthContext }
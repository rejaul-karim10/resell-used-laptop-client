import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin =(provider)=>{
    return signInWithPopup(auth, provider)
  }

  // create a user by email and password
  const createUser = (email, password) => {
    setLoading();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update
  const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    // localStorage.removeItem('resell-used-laptop')
    return signOut(auth);
  };

  // set an observer to track the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    createUser,
    loginUser,
    updateUser,
    logoutUser,
    providerLogin,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

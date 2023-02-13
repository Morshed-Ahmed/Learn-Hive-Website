import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const EmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const updateUser = (displayName) => {
    return updateProfile(auth.currentUser, displayName);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if (currentUser?.emailVerified) {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
      // }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    signUp,
    signIn,
    EmailVerification,
    updateUser,
    forgotPassword,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
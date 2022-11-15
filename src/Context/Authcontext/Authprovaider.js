import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import app from "../.././FirebaseConfig/Firebaseconfig.js";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovaider = ({ children }) => {
  const [user, setUser] = useState(false);
  const creatuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentuser) => {
      setUser(curentuser);
    });

    return () => unsubscribe();
  }, [user]);

  const upgradeuser = (userinfo) => {
    return updateProfile(user, userinfo);
  };

  const authinfo = {
    creatuser,
    user,
    login,
    logout,
    upgradeuser
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovaider;

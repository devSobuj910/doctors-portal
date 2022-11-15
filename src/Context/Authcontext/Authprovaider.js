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


  const [loding, setLoding] = useState(true);

  const [user, setUser] = useState(false);
  const creatuser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    setLoding(false);
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
    upgradeuser,
    loding
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovaider;

import { Children, createContext, useContext, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth'
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = () => {

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged()
  });
  return <AuthContextProvider>{children}</AuthContextProvider>
}
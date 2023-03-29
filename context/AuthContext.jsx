import { createContext, useContext, useEffect, useState } from 'react';
import 
{ 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth }  from '../firebase.config';


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser({
          uid: user.uid,
          email: user.email,
        })
      }else{
        setUser(null);
      }
      setLoading(false)
    })
    return () => unsubscribe() 
  }, []);



  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () =>{
    setUser(null)
    await signOut(auth)
  };

  const forgetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

  return ( 
  <AuthContext.Provider value={{ user, login, signup, logout, forgetPassword }}>{loading ? null : children}</AuthContext.Provider> 
  )
};
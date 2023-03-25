
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDMWy35N9sycY8CoqevlGb2pYpyuhf9hrM",
  authDomain: "bumpertalk.firebaseapp.com",
  projectId: "bumpertalk",
  storageBucket: "bumpertalk.appspot.com",
  messagingSenderId: "7830809961",
  appId: "1:7830809961:web:441f3e92df34ba205121f8",
  measurementId: "G-G1BZ81638J"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {app, db, storage, analytics}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl2GQwOXJ6mHkeZrKS5e5gmBPtF9oApmo",
  authDomain: "ai-zypher.firebaseapp.com",
  projectId: "ai-zypher",
  storageBucket: "ai-zypher.appspot.com",
  messagingSenderId: "743728314146",
  appId: "1:743728314146:web:189d3c08f75b8caef2177b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db};
export { auth, provider, signInWithPopup, signOut };
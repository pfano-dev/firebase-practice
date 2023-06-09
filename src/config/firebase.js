import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8p0kC1-k2gTxYghVO25mM5zeIaue5m8c",
  authDomain: "fir-e94b9.firebaseapp.com",
  projectId: "fir-e94b9",
  storageBucket: "fir-e94b9.appspot.com",
  messagingSenderId: "25276090844",
  appId: "1:25276090844:web:b682f25c645da711966719",
  measurementId: "G-FJV6LD0QKN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shifra-4e8bd.firebaseapp.com",
  projectId: "shifra-4e8bd",
  storageBucket: "shifra-4e8bd.firebasestorage.app",
  messagingSenderId: "82424425119",
  appId: "1:82424425119:web:dd1496e04367fff20dd0aa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};


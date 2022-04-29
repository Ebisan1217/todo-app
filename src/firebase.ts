import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm3mzkGKZToRHLf_TmlIJHaVETFtZL3fg",
  authDomain: "todoapp04-6b94c.firebaseapp.com",
  projectId: "todoapp04-6b94c",
  storageBucket: "todoapp04-6b94c.appspot.com",
  messagingSenderId: "427844086198",
  appId: "1:427844086198:web:acead97323311b161cf917",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth;

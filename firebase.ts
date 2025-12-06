// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfRG_M71WjJcab90NOb63OZ9aYV9eXC1c",
  authDomain: "med103-87e38.firebaseapp.com",
  projectId: "med103-87e38",
  storageBucket: "med103-87e38.firebasestorage.app",
  messagingSenderId: "848135057090",
  appId: "1:848135057090:web:57c18368d9fdaf2de8155b",
  measurementId: "G-C255NFS974"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
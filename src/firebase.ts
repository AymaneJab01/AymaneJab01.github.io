import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "YOUR_REAL_AUTH_DOMAIN",
  projectId: "YOUR_REAL_PROJECT_ID",
  storageBucket: "YOUR_REAL_STORAGE_BUCKET",
  messagingSenderId: "YOUR_REAL_MESSAGING_SENDER_ID",
  appId: "YOUR_REAL_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
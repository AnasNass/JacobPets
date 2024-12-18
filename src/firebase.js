
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE9cnjtv-ib7p22q576teNXPSW7SbpVqo",
    authDomain: "jacobpets-c00c9.firebaseapp.com",
    projectId: "jacobpets-c00c9",
    storageBucket: "jacobpets-c00c9.firebasestorage.app",
    messagingSenderId: "475124609658",
    appId: "1:475124609658:web:9a94dcd404419fc30441c3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
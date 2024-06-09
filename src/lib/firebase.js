import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVIKwFe3h0ipSV2vBNHiAziTJVC1OkaFA",
  authDomain: "pokedex-76817.firebaseapp.com",
  projectId: "pokedex-76817",
  storageBucket: "pokedex-76817.appspot.com",
  messagingSenderId: "447615733492",
  appId: "1:447615733492:web:d2f4aab102ec5e09f418a1",
  measurementId: "G-PNB6RWPB3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth, storage };

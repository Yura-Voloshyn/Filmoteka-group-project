import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OkrpM246-n_c0FxZ1wcPolSAEgZe7pI",
  authDomain: "filmoteka-71560.firebaseapp.com",
  projectId: "filmoteka-71560",
  storageBucket: "filmoteka-71560.appspot.com",
  messagingSenderId: "722832228567",
  appId: "1:722832228567:web:ad0899ecef787ada393092"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
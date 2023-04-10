import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCmAzjxzkAX_df85gmYvpjQkOlVHSeykLo",
    authDomain: "ovlet-0830.firebaseapp.com",
    projectId: "ovlet-0830",
    storageBucket: "ovlet-0830.appspot.com",
    messagingSenderId: "522038421081",
    appId: "1:522038421081:web:80a00a72d67f4599d57348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, app }


//Storage

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmAl-BmPFhcslS34G5PyrGou39G0cgmnM",
  authDomain: "fir-test-e630f.firebaseapp.com",
  projectId: "fir-test-e630f",
  storageBucket: "fir-test-e630f.appspot.com",
  messagingSenderId: "457310456615",
  appId: "1:457310456615:web:bb0f67a59855e2ec043702",
  measurementId: "G-Z73YKW7674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
export const db = getFirestore(app);
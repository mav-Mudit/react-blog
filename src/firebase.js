import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import { initializeApp } from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbpLaMTAatTW9MM1GCOoyDBDDAWb19inU",
  authDomain: "react-hooks-blog-ebcbc.firebaseapp.com",
  projectId: "react-hooks-blog-ebcbc",
  storageBucket: "react-hooks-blog-ebcbc.appspot.com",
  messagingSenderId: "788600818354",
  appId: "1:788600818354:web:177ba056fd95bb0a6b17ab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore()
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMGS-0OWgmSesRlGMRRBklO8fDlmI-FfY",
  authDomain: "chat-react-720c3.firebaseapp.com",
  projectId: "chat-react-720c3",
  storageBucket: "chat-react-720c3.appspot.com",
  messagingSenderId: "61261599029",
  appId: "1:61261599029:web:84b7db8c0ea9a85201fc7c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

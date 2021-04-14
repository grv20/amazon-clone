import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcFMdMrBd6EAUwBppGOhdBTRwOEQtGJQc",
  authDomain: "clone-1408c.firebaseapp.com",
  projectId: "clone-1408c",
  storageBucket: "clone-1408c.appspot.com",
  messagingSenderId: "101869794702",
  appId: "1:101869794702:web:72e7095d0c51e3e64120df",
  measurementId: "G-4B5NX04GR4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADvEE8LYtFbjc9rKIXi6Io3yOOXA0T7uQ",
  authDomain: "react-notes-app-2b049.firebaseapp.com",
  projectId: "react-notes-app-2b049",
  storageBucket: "react-notes-app-2b049.appspot.com",
  messagingSenderId: "598946004544",
  appId: "1:598946004544:web:63879a9b02545d8a4529a5",
  measurementId: "G-3DGWEC6R35",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, storage };

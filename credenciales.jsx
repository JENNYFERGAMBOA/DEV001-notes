// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdlx7OTbCQ19nKtR4ROOddQCptzBT9qdA",
  authDomain: "quick-notes-4662a.firebaseapp.com",
  projectId: "quick-notes-4662a",
  storageBucket: "quick-notes-4662a.appspot.com",
  messagingSenderId: "185713224876",
  appId: "1:185713224876:web:7dd0950357e83810da8309"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
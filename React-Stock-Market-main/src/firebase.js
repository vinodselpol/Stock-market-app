import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC368zyTJJeGOdx_xS7109w_DrVHg-9D70",
  authDomain: "stock-market-app-31442.firebaseapp.com",
  projectId: "stock-market-app-31442",
  storageBucket: "stock-market-app-31442.appspot.com",
  messagingSenderId: "199491264547",
  appId: "1:199491264547:web:69608e85442d84e20a9196",
  measurementId: "G-QWHXWBNC1S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };

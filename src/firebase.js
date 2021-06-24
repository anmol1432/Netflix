import firebase from 'firebase';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";
// Add the Firebase products that you want to use
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore
import 'firebase/functions';
import 'firebase/database';    // for realtime database


const firebaseConfig = {
    apiKey: "AIzaSyCA8y5JwPbm8fagGySkPP9sQjQgu1GT8Fk",
    authDomain: "netflix-84cff.firebaseapp.com",
    projectId: "netflix-84cff",
    storageBucket: "netflix-84cff.appspot.com",
    messagingSenderId: "380776847135",
    appId: "1:380776847135:web:5194ee7f8bfaa27b37822a",
    measurementId: "G-7XZKD3LSZ1"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;
export const auth = firebaseApp.auth();
export const functions = firebaseApp.functions();


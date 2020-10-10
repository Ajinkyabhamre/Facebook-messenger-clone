import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBbUhTW9bKMdByiWsqP8jddifPgKRFyEaM",
        authDomain: "facebook-messenger-app-4125f.firebaseapp.com",
        databaseURL: "https://facebook-messenger-app-4125f.firebaseio.com",
        projectId: "facebook-messenger-app-4125f",
        storageBucket: "facebook-messenger-app-4125f.appspot.com",
        messagingSenderId: "749621846937",
        appId: "1:749621846937:web:f6b1b0978e20e078546908",
        measurementId: "G-Z2QCRED63X"
      
});
const db = firebaseApp.firestore();
export default db;

import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCyRXE9AMVzrI67J4ROz1LOTk26MMIDARY",
  authDomain: "messenger-react-firebase-171dc.firebaseapp.com",
  databaseURL: "https://messenger-react-firebase-171dc.firebaseio.com",
  projectId: "messenger-react-firebase-171dc",
  storageBucket: "messenger-react-firebase-171dc.appspot.com",
  messagingSenderId: "353575667099",
  appId: "1:353575667099:web:4225341e3ed97f724d8d3e",
  measurementId: "G-68M4ZMKKJH",
});

const db = firebaseConfig.firestore();

export default db;

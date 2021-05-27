import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9_fiPnd036yDlfN8AYt_DPQyre-ws8gI",
  authDomain: "todo-app-cfb13.firebaseapp.com",
  projectId: "todo-app-cfb13",
  storageBucket: "todo-app-cfb13.appspot.com",
  messagingSenderId: "284464426458",
  appId: "1:284464426458:web:0620630cd3c9200838e4e3",
  measurementId: "G-RXV06YGZ1H",
});

const db = firebaseApp.firestore();

export default db;

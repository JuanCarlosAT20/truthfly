import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Agregar configuración firebase:
var firebaseConfig = {
  apiKey: "AIzaSyDuBIvcXEo17miQMm4e0AqmA8Ovyi0fW9g",
  authDomain: "truthfly-47463.firebaseapp.com",
  databaseURL: "https://truthfly-47463-default-rtdb.firebaseio.com",
  projectId: "truthfly-47463",
  storageBucket: "truthfly-47463.appspot.com",
  messagingSenderId: "715243485659",
  appId: "1:715243485659:web:172d1aed60c2f227d90ffe",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };

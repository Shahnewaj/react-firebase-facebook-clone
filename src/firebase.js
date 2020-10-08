import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAv-7fs3WH_0b-3tPCjfUpY0d6fXCY9Aag",
  authDomain: "minefb.firebaseapp.com",
  databaseURL: "https://minefb.firebaseio.com",
  projectId: "minefb",
  storageBucket: "minefb.appspot.com",
  messagingSenderId: "475636110666",
  appId: "1:475636110666:web:814ed2a3eee315be65ddb3",
  measurementId: "G-Z43WKHXDX0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

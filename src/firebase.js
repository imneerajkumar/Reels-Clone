import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDMR7-06BRtumTSylx9AvAGxbnhRdoKUXs",
    authDomain: "ig-reels-b94c5.firebaseapp.com",
    databaseURL: "https://ig-reels-b94c5-default-rtdb.firebaseio.com",
    projectId: "ig-reels-b94c5",
    storageBucket: "ig-reels-b94c5.appspot.com",
    messagingSenderId: "646484063737",
    appId: "1:646484063737:web:94bf676880db2267cfb928",
    measurementId: "G-DMW6GB1B1G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
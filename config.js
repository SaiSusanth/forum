import firebase from 'firebase'
require("@firebase/firestore")

  const firebaseConfig = {
    apiKey: "AIzaSyAx8eaxZPng7UTyLBXPIpiwazNEVwa8pTM",
    authDomain: "prjname-60cf8.firebaseapp.com",
    projectId: "prjname-60cf8",
    storageBucket: "prjname-60cf8.appspot.com",
    messagingSenderId: "488206869224",
    appId: "1:488206869224:web:5488230f5f62065c00df5d"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


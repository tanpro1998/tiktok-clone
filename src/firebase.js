import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCVIilbYIbRyWjgeoUNA8tJZMTa8x2SOKw",
    authDomain: "tiktok-clone-c213e.firebaseapp.com",
    projectId: "tiktok-clone-c213e",
    storageBucket: "tiktok-clone-c213e.appspot.com",
    messagingSenderId: "64709017733",
    appId: "1:64709017733:web:2a7c47d50d3c4710e3e9ec",
    measurementId: "G-BFSEHZJ0JF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;
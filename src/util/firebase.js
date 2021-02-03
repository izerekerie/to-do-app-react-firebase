import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyDIauCaTGne6bLJ7sEY_YTitFaHyyQmSLo",
    authDomain: "to-do-daily-fd680.firebaseapp.com",
    databaseURL: "https://to-do-daily-fd680.firebaseio.com",
    projectId: "to-do-daily-fd680",
    storageBucket: "to-do-daily-fd680.appspot.com",
    messagingSenderId: "284451931620",
    appId: "1:284451931620:web:24d6e92de4ece09ea3b3f1",
    measurementId: "G-R2W91J0V2P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase
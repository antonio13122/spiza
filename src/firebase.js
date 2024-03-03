import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';


var firebaseConfig = {
    apiKey: "AIzaSyAoNy99JaqZT52BqeDr4TIkbpcinMllbf4",
    authDomain: "spiza-a7f76.firebaseapp.com",
    projectId: "spiza-a7f76",
    storageBucket: "spiza-a7f76.appspot.com",
    messagingSenderId: "589422815748",
    appId: "1:589422815748:web:3a9f94f293d62c61592351"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
let db = firebase.firestore();
let storage = firebase.storage();
let functions = firebase.functions();
  export {
    firebase,
    db,
    storage,
    functions
  };
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALB7jr3VvVGvF7uWMqbJtkQKVKxCB6ixI",
    authDomain: "photos-4ce26.firebaseapp.com",
    databaseURL: "https://photos-4ce26.firebaseio.com",
    projectId: "photos-4ce26",
    storageBucket: "photos-4ce26.appspot.com",
    messagingSenderId: "571749408831",
    appId: "1:571749408831:web:8b4f5ed935eff0112a588a",
    measurementId: "G-7RRP9E35JH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
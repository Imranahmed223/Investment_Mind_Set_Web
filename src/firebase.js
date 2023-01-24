// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoKkpfyf5gXhU-QztqckIY80gPD8UF5kI",
  authDomain: "pushnotification-a253e.firebaseapp.com",
  projectId: "pushnotification-a253e",
  storageBucket: "pushnotification-a253e.appspot.com",
  messagingSenderId: "996772390180",
  appId: "1:996772390180:web:411819d171b6ab60703fb1",
  measurementId: "G-037C1EL534"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, GoogleAuthProvider)
  .then((response) => {
    console.log('Response', response);
  })
  .catch((err) => {
    console.log('Error', err);
  })
}

export const signInWithFacebook = () => {
  signInWithPopup(auth, FacebookAuthProvider)
  .then((response) => {
    console.log('Response', response);
  })
  .catch((err) => {
    console.log('Error', err);
  })
}
var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyClT9Q0DJlGI1vw4Z1T6fRk_wKbviCkhJQ",
  authDomain: "spot-222d8.firebaseapp.com",
  databaseURL: "https://spot-222d8.firebaseio.com",
  projectId: "spot-222d8",
  storageBucket: "spot-222d8.appspot.com",
  messagingSenderId: "854687884456"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
export const storage = firebase.storage();
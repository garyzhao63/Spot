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


    // Get a reference to the database service
const database = firebase.database();

export function test() {
    //console.log("hello");
    //console.log(database.ref().push({location: "123"}));
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
 
 
export default database;
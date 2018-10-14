import {db, auth, provider} from './Firebase';

const listingRef = db.collection("Listing");
const userRef = db.collection("Users");

export function isUserLoggedIn() {
    return !!auth.user;
}

export function login() {
    auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        //console.log("current user: " + auth.currentUser.displayName);

        createUser(user, user.email);

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(errorMessage);
    });
}

export function logout() {
    auth.signOut();
}

/************** User Utils ************/
function createUser(user, email, callback) {
    var userData = cleanData(user);
    userRef.doc(email.toLowerCase()).set(userData);
}

function cleanData(user) {
    // Return json object contain
    var data = {
        name: user.displayName,
        phone_number: user.phoneNumber,
    }
    return data;
}

/************** Listing Utils ************/

export function addListing(name, data, callback) {
    listingRef.doc(name).set(data)
        .then(() => callback(null))
        .catch((error) => callback(error));
}

export function removeListing(name, data, callback) {
    listingRef.doc(name).delete()
        .then(() => callback(null))
        .catch((error) => callback(error));
}

export function sortListingByPrice(name, data) {
    listingRef.orderBy('price', 'asc');
}

/************** Listing Setters **********/

export function setPrice(name, data, callback) {
    listingRef.doc(name).set({price: data})
        .then(() => callback(null))
        .catch((error) => callback(error));
}

export function setLocation(name, data, callback) {
    listingRef.doc(name).set({location: data})
        .then(() => callback(null))
        .catch((error) => callback(error));
}

export function setPicture(name, data, callback) {
    listingRef.doc(name).set({picture: data})
        .then(() => callback(null))
        .catch((error) => callback(error));
}

export function setOwnerID(name, data, callback) {
    listingRef.doc(name).set({ownerID: data})
        .then(() => callback(null))
        .catch((error) => callback(error));
}

/*************** Listing Getters **********/

export function getAllListings(callback) {
    listingRef.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(listing) {
                callback(listing.data(), null);
            })
        })
        .catch((error) => callback(null, error));
}

export function getListing(name, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data(), null))
        .catch((error) => callback(null, error));
}

export function getPrice(name, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data().price, null))
        .catch((error) => callback(null, error));
}

export function getLocation(name, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data().location, null))
        .catch((error) => callback(null, error));
}

export function getOwnerIDname(name, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data().ownerID, null))
        .catch((error) => callback(null, error));
}

export function getPicture(name, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data().picture, null))
        .catch((error) => callback(null, error));
}

/************** User Functions ****************/

export function getHistory(name, callback) {
    userRef.doc(name).get()
        .then((listing) => callback(userRef.data().history, null))
        .catch((error) => callback(null, error));
}

export function getEmail(name, callback) {
    userRef.doc(name).get()
        .then((listing) => callback(userRef.data().email, null))
        .catch((error) => callback(null, error));
}
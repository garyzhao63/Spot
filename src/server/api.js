import {db} from './Firebase';

const listingRef = db.collection("Listing");
const userRef = db.collection("User");

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

export function getAllListing(callback) {
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

export function getOwnerIDname, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data().ownerID, null))
        .catch((error) => callback(null, error));
}

export function getPicture, callback) {
    listingRef.doc(name).get()
        .then((listing) => callback(listing.data().picture, null))
        .catch((error) => callback(null, error));
}

/************** User Functions ****************/

export function getHistory(name, callback) {
    userRef.doc(name).get()
        .then((listing) => callback(user.data().history, null))
        .catch((error) => callback(null, error));
}

export function getEmail(name, callback) {
    userRef.doc(name).get()
        .then((listing) => callback(user.data().email, null))
        .catch((error) => callback(null, error));
}
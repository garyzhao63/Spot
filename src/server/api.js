import {db} from './Firebase';

const listingCollectionRef = db.collection("Listing");
// const userRef = db.ref("/user");

export function addListing(name, data, callback) {
    listingCollectionRef.doc(name).set(data)
        .then(() => callback(null))
        .catch((error) => callback(error));
}

export function getListing(name, callback) {
    listingCollectionRef.doc(name).get()
        .then((listing) => callback(listing.data(), null))
        .catch((error) => callback(null, error));
}

// export function setPrice(listingID, price) {
//     db.ref("/listing").push()
// }

export function setLocation(listingID, price) {}

export function setOwnerID(listingID, ownerID) {}

export function getPrice(listingID) {}

export function getLocation(listingID) {}

export function getOwnerID(listingID) {}
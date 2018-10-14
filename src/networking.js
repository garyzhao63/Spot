import axios from 'axios';

export function requestDocuSign(email, userName, listingTitle, callback) {
  axios.post('http://spotbackend.herokuapp.com/sendDocuSign/' + userName + '/' + email + '/' + listingTitle)
    .then((response) => response.json())
    .then((responseJson) => {
      callback(responseJson, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

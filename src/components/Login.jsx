import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import {firebase} from '../server/Firebase';
import { Button } from 'semantic-ui-react'

export class LoginButton extends Component {

    //chesterBad = () => {
    //    console.log(provider);
    //    auth.signInWithPopup(provider).then((result) => {
    //        console.log(result);
    //    });
    //}

    testFunction() {
        const provider = new firebase.auth.GoogleAuthProvider();

        console.log('provider');      
        console.log(provider);   
   
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
        });   
    }

    render() {
        return(
            <React.Fragment>
                <Button onClick={this.testFunction}>
                Chester bad
                </Button>
            </React.Fragment>
        );
    }
}
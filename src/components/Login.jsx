import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import {login} from '../server/api';

export class LoginButton extends Component {

    //chesterBad = () => {
    //    console.log(provider);
    //    auth.signInWithPopup(provider).then((result) => {
    //        console.log(result);
    //    });
    //}

    // testFunction() {
    //     const provider = new firebase.auth.GoogleAuthProvider();

    //     console.log('provider');
    //     console.log(provider);

    //     auth.signInWithPopup(provider).then((result) => {
    //         console.log(result);
    //     });
    // }

    render() {
        return(
            <React.Fragment>
                <Button onClick={login}>
                <Icon name='google' />
                Log In with Google
                </Button>
            </React.Fragment>
        );
    }
}
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD3G5qi9sMQFWLwg1Rftv8ocQ-TO7K9ybE',
            databaseURL: 'https://auth-d7d20.firebaseio.com',
            projectId: 'auth-d7d20',
            storageBucket: 'auth-d7d20.appspot.com',
            messagingSenderId: '615650312257'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            }
            else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD3G5qi9sMQFWLwg1Rftv8ocQ-TO7K9ybE',
            databaseURL: 'https://auth-d7d20.firebaseio.com',
            projectId: 'auth-d7d20',
            storageBucket: 'auth-d7d20.appspot.com',
            messagingSenderId: '615650312257'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentiation" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBIAKz19d9AOfIc1BPibScOEoXj7ojRvFE',
            authDomain: 'manager-2323f.firebaseapp.com',
            databaseURL: 'https://manager-2323f.firebaseio.com',
            projectId: 'manager-2323f',
            storageBucket: 'manager-2323f.appspot.com',
            messagingSenderId: '116857254503'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
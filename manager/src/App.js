import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDGJ_Uv98mLGAXDK4ExTMqxZ4y6XlNUZAI',
      authDomain: 'manager-5f309.firebaseapp.com',
      databaseURL: 'https://manager-5f309.firebaseio.com',
      storageBucket: 'manager-5f309.appspot.com',
      messagingSenderId: '455742174479'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
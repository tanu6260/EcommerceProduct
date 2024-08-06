import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Root from './root';
import store from './redux';


const App = () => {
  return (
    <Provider store={store}>
     <Root/>
    </Provider>
  );
};

export default App;

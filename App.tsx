import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Search from './src/screens/search';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import initialStates from './src/redux/store/initialStates';

const App = () => {
  const {store} = configureStore(initialStates);
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

export default App;

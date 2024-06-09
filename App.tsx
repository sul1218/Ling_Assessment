import React from 'react';
import Search from './src/screens/search/SearchScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

export default App;

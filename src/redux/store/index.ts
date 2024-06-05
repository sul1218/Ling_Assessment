import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga';
import rootReducer from '../reducers';

export default function configureStore({initialState}: any) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // Remove redux-flipper debugger
  // if (__DEV__) {
  //   const createDebugger = require('redux-flipper').default;
  //   middlewares.push(createDebugger());
  // }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);
  return {store};
}

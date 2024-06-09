import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import initialStates from './initialStates';

const store = createStore(rootReducer, initialStates);

export default store;
